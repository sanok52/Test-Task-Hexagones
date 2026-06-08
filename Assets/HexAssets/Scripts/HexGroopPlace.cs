using DG.Tweening;
using System;
using System.Collections;
using UnityEngine;
using static UnityEngine.GraphicsBuffer;

public class HexGroopPlace : MonoBehaviour
{
    private HexGroop mainHexGroop;
    private HexPlacePositor positor;

    public bool IsStartPlace;

    public event Action<HexGroopPlace> OnDropAnMeEnd;
    public event Action<HexGroopPlace> OnOneDropAnMeEnd;
    public event Action<HexGroopPlace> OnCountChange;
    public event Action<HexGroopPlace> OnMainGroopReturn;

    public HexPlacePositor Positor
    {
        get
        {
            if (positor == null)
                positor = GetComponent<HexPlacePositor>();
            return positor;
        }
    }

    public HexColor UpperHexColor => mainHexGroop.HexColor;

    public bool IsPlayAnimations => mainHexGroop.IsPlayAnimations;
    public int CountHexObjects => mainHexGroop.Count;
    public HexGroop MainHexGroop => mainHexGroop;
    public bool IsBlock => mainHexGroop.IsBlock;
    public bool IsCanBrabMainGroop => mainHexGroop.IsCanGrab;

    public void Init()
    {
        for (int i = 0; i < transform.childCount; i++)
        {
            if (transform.GetChild(i).TryGetComponent(out HexGroop hexGroop))
            {
                mainHexGroop = hexGroop;
                break;
            }
        }

        if (mainHexGroop == null)
            mainHexGroop = HexGameFabric.CreateEmptyHexGroop("MainHexGroop");
        mainHexGroop.Init(this);

        mainHexGroop.transform.parent = transform;
        mainHexGroop.transform.localPosition = Vector3.zero;

        mainHexGroop.OnCountChange += (groop) => OnCountChange?.Invoke(this);
        mainHexGroop.OnGroopReturn += (groop) => OnMainGroopReturn?.Invoke(this);

        UpdateHexCount();
    }

    public bool CanDrop(IGrabObject currentGrab, bool dropIfCan = false)
    {
        HexGroop groop = currentGrab as HexGroop;
        if (groop == null)
            return false;

        return CanDrop(groop, dropIfCan);
    }

    public bool CanDrop(HexGroop groop, bool dropIfCan = false)
    {
        bool result = true; //hexColor == Color.None || hexColor == groop.Color;
        if (result && dropIfCan)
            DropOnMe(groop);
        return result;
    }

    public void DropOnMe(IGrabObject currentGrab)
    {
        HexGroop groop = currentGrab as HexGroop;
        if (groop == null)
            return;

        DropOnMe(currentGrab);
    }

    public void DropOnMe(HexGroop groop)
    {
        if (groop == null || mainHexGroop == null)
            return;

        if (groop == mainHexGroop) {
            StartCoroutine(MainGroopReturn());
            return;
        }

        StartCoroutine(MixedTwoGroopInMy(groop, false));
    }

    private IEnumerator MainGroopReturn()
    {
        yield return mainHexGroop.ReturnOnPlaceTweener().WaitForCompletion();
    }

    public IEnumerator MixedTwoGroopInMy(HexGroop groopOut, bool byOne, float coef = 1f)
    {
        if (byOne)
            yield return ByOneMixTwoGroop(groopOut, coef);
        else
            yield return StuckTwoGroopsRoutine(groopOut);

        if (!byOne)
        {
            yield return new WaitWhile(() => groopOut.IsPlayAnimations);
            yield return new WaitWhile(() => mainHexGroop.IsPlayAnimations);
        }

        groopOut.Delite();

        if (byOne)
            OnOneDropAnMeEnd?.Invoke(this);
        else
            OnDropAnMeEnd?.Invoke(this);
    }

    private IEnumerator ByOneMixTwoGroop(HexGroop groopOut, float coefSpeed)
    {
        groopOut.MoveUpperHexAnimation(mainHexGroop.GetHexPosition(mainHexGroop.Count), coefSpeed);
        mainHexGroop.AddHexWithoutAnimation(groopOut.GetHex(groopOut.Count - 1));
        groopOut.RemoveHexWithoutAnimation(groopOut.Count - 1);

        yield return new WaitForSeconds(mainHexGroop.DelayHexMove / coefSpeed);

        HexSoundManager.PlayByOneSFX();
    }

    private IEnumerator StuckTwoGroopsRoutine(HexGroop groopOut)
    {
        while (groopOut.Count > 0)
        {
            groopOut.MoveDownHexAnimation(mainHexGroop.GetHexPosition(mainHexGroop.Count));
            mainHexGroop.AddHexWithoutAnimation(groopOut.GetHex(0));
            groopOut.RemoveHexWithoutAnimation(0);
            yield return null;
        }
        HexSoundManager.PlayStuckSFX();

        yield break;
    }

    public IEnumerator OverfulHexPlaceRoutine()
    {
        yield return mainHexGroop.OverfulHexPlaceRoutine();
    }

    public void SetHexCount(int middleCount, bool isUpdate = true)
    {
        MainHexGroop.SetHexCount(middleCount);
        if(isUpdate)
            UpdateHexCount();
    }

    public void UpdateHexCount()
    {
        StartCoroutine(MainHexGroop.CreateAinmtionRoutine());
    }

    public void InitPreset(HexGroopPreset preset)
    {
        SetHexCount(preset.colors.Length);
        MainHexGroop.SetColorsByOne(preset.colors);
    }
}