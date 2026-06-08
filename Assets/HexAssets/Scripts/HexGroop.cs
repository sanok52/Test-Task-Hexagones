using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEditor.AnimatedValues;
using UnityEngine;

public class HexGroop : MonoBehaviour, IGrabObject
{
    [SerializeField] private float delayHexMove = 0.2f;
    [SerializeField] private float durationMoveOnPlace = 0.5f;

    [Space]
    [SerializeField] private float hexOffset = 0.2f;
    [SerializeField] private float hexesOffsetGrab = 1f;

    private List<HexObject> hexObjects = new List<HexObject>();

    private HexGroopPlace place;

    private bool isPlayAnimations;
    private bool isGrab;

    public event Action<HexGroop> OnCountChange;
    public event Action<HexGroop> OnGroopReturn;

    public int Count => hexObjects.Count;
    public float DelayHexMove => delayHexMove;

    public HexGroopPlace Place => place;
    public HexColor HexColor => (hexObjects.Count == 0 ? HexColor.None : hexObjects[hexObjects.Count - 1].HexColor);

    public bool IsPlayAnimations => hexObjects.Any(x => x.IsPlayAnimation);
    public bool IsBlock { get; private set; }
    public bool IsCanGrab => !IsPlayAnimations && !IsBlock;

    public HexObject[] HexObjects => hexObjects.ToArray();

    public void Init (HexGroopPlace place)
    {
        for (int i = 0; i < transform.childCount; i++)
        {
            if (transform.GetChild(i).TryGetComponent(out HexObject hexObject))
                AddHexWithoutAnimation(hexObject);
        }

        this.place = place; 

        foreach (var hex in hexObjects)
        {
            hex.SetGroop(this);
        }
    }

    public HexObject CreateHex()
    {
        var hex = HexGameFabric.CreateHex(GetHexPosition(hexObjects.Count - 1), transform.rotation, transform);
        AddHexWithoutAnimation(hex);
        return hex;
    }

    public void SetColors(params HexColor[] hexColors)
    {
        if (hexColors == null || hexColors.Length == 0) return;

        int total = hexObjects.Count;
        // Берём только первые total цветов (если цветов больше, лишние отбрасываем)
        int colorCount = Mathf.Min(hexColors.Length, total);

        // Генерируем colorCount-1 случайных разделителей (индексы окончания групп, от 1 до total-1)
        List<int> separators = new List<int>();
        for (int i = 0; i < colorCount - 1; i++)
        {
            int sep;
            do { sep = UnityEngine.Random.Range(1, total); } while (separators.Contains(sep));
            separators.Add(sep);
        }
        separators.Sort();

        int prev = 0;
        for (int i = 0; i < colorCount; i++)
        {
            int next = (i < separators.Count) ? separators[i] : total;
            int groupSize = next - prev;
            HexColor color = hexColors[i]; // используем цвет по порядку
            for (int j = 0; j < groupSize; j++)
            {
                hexObjects[prev + j].SetColor(color);
            }
            prev = next;
        }
    }

    public void Drop(Vector3 position)
    {
    }

    public void Grab()
    {
        isGrab = true;

        foreach (var hex in hexObjects)        
            hex.ActiveCollider(false);
    }

    public void MoveTo(Vector3 position)
    {
        transform.position = position;
    }

    public void ReturnOnPlace()
    {
        ReturnOnPlaceTweener();
    }

    public Tweener ReturnOnPlaceTweener()
    {
        Tweener tweener = transform.DOMove(place.transform.position, durationMoveOnPlace);
        isGrab = false;

        hexObjects.RemoveAll(x => x == null);
        foreach (var hex in hexObjects)        
            hex.ActiveCollider(true);

        tweener.OnComplete(() => OnGroopReturn?.Invoke(this));

        return tweener;
    }

    public void MoveDownHexAnimation(Vector3 point)
    {
        if (hexObjects.Count == 0)
            return;

        StartCoroutine(hexObjects[0].MoveStackRoutine(point));
    }

    public void MoveUpperHexAnimation(Vector3 point, float coefSpeed)
    {
        if (hexObjects.Count == 0)
            return;

        StartCoroutine(hexObjects[hexObjects.Count - 1].MoveByOneRoutine(point, coefSpeed));
    }

    public Vector3 GetHexPosition(int index)
    {
        return transform.position + (Vector3.up * index * hexOffset) + (isGrab ? (Vector3.up * hexesOffsetGrab) : Vector3.zero);
    }

    public HexObject GetHex(int index)
    {
        return hexObjects[index];
    }

    public void AddHexWithoutAnimation(HexObject hexObject)
    {
        if(hexObject == null) 
            return;

        hexObjects.Add(hexObject);
        hexObject.transform.parent = transform;
        hexObject.ActiveCollider(!isGrab);
        OnCountChange?.Invoke(this);
    }

    public void RemoveHexWithoutAnimation(int index)
    {
        if (hexObjects.Count <= index || index < 0)
            return;

        hexObjects.RemoveAt(index);
        OnCountChange?.Invoke(this);
    }

    public void Delite()
    {
        ReturnOnPlace();
    }

    private void Update()
    {
        for (int i = 0; i < hexObjects.Count; i++)
        {
            if (hexObjects[i].IsPlayAnimation || hexObjects[i] == null)
                continue;

            hexObjects[i].transform.position = GetHexPosition(i);
        }
    }

    public IEnumerator OverfulHexPlaceRoutine()
    {
        yield return transform.DOPunchScale(Vector3.one * 0.1f, 0.5f).WaitForCompletion();
        int n = 0;
        while (Count > 0)
        {
            n++;
            var hex = GetHex(Count - 1);
            
            yield return hex.transform.DOScale(0.1f, Mathf.Clamp(1f / n, 0.02f, 0.1f)).WaitForCompletion();
            RemoveHexWithoutAnimation(Count - 1);

            if (hex != null)
            {
                HexSoundManager.PlayDeliteHexSFX();
                hex.Delite();
            }
        }
        HexGameFabric.CreateDestoryFX(transform.position);
    }

    public void SetBlock(bool isBlock)
    {
        IsBlock = isBlock;
    }

    public void UpdateHexCount(int count)
    {
        foreach (var item in hexObjects)
        {
            item.Delite();
        }

        hexObjects.Clear();

        for (int i = 0; i < count; i++)
        {
            CreateHex();
        }
    }

    public IEnumerator CreateAinmtionRoutine()
    {
        isPlayAnimations = true;

        for (int i = 0; i < hexObjects.Count; i++)
        {
            HexObject hexObject = hexObjects[i];
            StartCoroutine(hexObjects[i].CreateAnimtionRoutine(GetHexPosition(i), i, hexOffset, 0.4f));
        }

        yield return new WaitForSeconds(0.4f);

        isPlayAnimations = false;
    }
}
