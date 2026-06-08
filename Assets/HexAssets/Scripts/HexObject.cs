using DG.Tweening;
using System;
using System.Collections;
using System.Xml.Linq;
using UnityEngine;

public class HexObject : MonoBehaviour
{
    private HexColor hexColor = HexColor.Red;
    private HexGroop myGroop;

    [Space]
    [Header("Animations")]
    [SerializeField] private float stackDuration = 0.5f;
    [SerializeField] private float byOneDuration = 0.5f;
    [SerializeField] private float byOneUpDist = 1f;
    [SerializeField] private Ease ease;

    [Space]
    [SerializeField] private HexVisual hexVisual;

    private Sequence sequenceMove;
    private bool isAnimation;

    public HexColor HexColor => hexColor;
    public HexGroop MyGroop => myGroop;
    public bool IsPlayAnimation => isAnimation;

    private void Awake()
    {
        //SetColor((HexColor)UnityEngine.Random.Range(1, 4));
    }

    public void SetGroop(HexGroop groop)
    {
        myGroop = groop;
    }

    public void SetColor(HexColor color)
    {
        hexColor = color;
        hexVisual.SetColor(color);
    }

    public IEnumerator MoveStackRoutine(Vector3 position)
    {
        isAnimation = true;
        KillAllTweens();

        yield return transform.DOMove(position, stackDuration).SetEase(ease).SetAutoKill(true).WaitForCompletion();

        isAnimation = false;
    }

    public IEnumerator MoveByOneRoutine(Vector3 targetPos, float coefSpeed)
    {
        isAnimation = true;
        KillAllTweens();

        Vector3 startPos = transform.position;
        Vector3 direction = Vector3.ProjectOnPlane(targetPos - startPos, Vector3.up).normalized;
        Vector3 middlePos = startPos + (targetPos - startPos) / 2f + Vector3.up * byOneUpDist;

        float duration = byOneDuration / coefSpeed;

        // Сохраняем исходный поворот
        Quaternion originalRotation = transform.rotation;

        // Поворачиваем объект лицом в направлении движения (ось Z вперёд)
        if (direction != Vector3.zero)
            transform.rotation = Quaternion.LookRotation(direction, Vector3.up);

        // Создаём последовательность
        sequenceMove = DOTween.Sequence();

        // Движение по дуге
        sequenceMove.Append(transform.DOPath(new[] { startPos, middlePos, targetPos }, duration, PathType.CatmullRom).SetEase(ease));

        // Кувырок вокруг локальной оси X (колесо вперёд) – добавляем 360 градусов
        sequenceMove.Join(transform.DORotate(new Vector3(360f, 0f, 0f), duration, RotateMode.LocalAxisAdd).SetEase(ease));

        yield return sequenceMove.WaitForCompletion();

        if (this == null)
            yield break;

        // Восстанавливаем исходный поворот (уберите эту строку, если объект должен остаться смотреть по направлению движения)
        transform.rotation = originalRotation;

        // Фиксация позиции на всякий случай
        transform.position = targetPos;

        sequenceMove = null;
        isAnimation = false;
    }

    private void KillAllTweens()
    {
        transform.DOKill(false);
        transform.rotation = Quaternion.identity;
        if (sequenceMove != null && sequenceMove.IsPlaying())
            sequenceMove.Kill(false);
    }

    public void ActiveCollider(bool isActive)
    {
        Collider[] colliders = GetComponentsInChildren<Collider>();
        foreach (Collider collider in colliders)
            collider.enabled = isActive;
    }

    public void Delite()
    {
        if (this == null)
            return;

        StopAllCoroutines();
        transform.DOKill(true);
        gameObject.SetActive(false);//Потом сделать пул
    }

    public IEnumerator CreateAnimtionRoutine(Vector3 endPoint, int index, float hexOffset, float duration = 1f)
    {
        isAnimation = true;

        transform.position = endPoint + (Vector3.up * 10) + (Vector3.up * hexOffset * 2.5f * index);

        yield return transform.DOMove(endPoint, duration).SetEase(Ease.InSine).WaitForCompletion();

        isAnimation = false;
    }
}
