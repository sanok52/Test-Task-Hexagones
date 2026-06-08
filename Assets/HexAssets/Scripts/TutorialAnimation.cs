using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TutorialAnimation : MonoBehaviour
{
    [SerializeField] private CanvasGroup canvasGroup;
    [SerializeField] private float durationFadeIn = 3f;

    [Space]
    [SerializeField] private RectTransform handRect;
    [SerializeField] private float durationMove = 2f;
    [SerializeField] private float durationPause = 1f;

    [Space]
    [SerializeField] private Transform firstStart;
    [SerializeField] private Transform firstEnd;

    private List<HexGroopPlace> simplePlaces = new List<HexGroopPlace>();
    private List<HexGroopPlace> startPlaces = new List<HexGroopPlace>();

    private Sequence sequence;
    bool isPlayerHold = false;
    float timerHold = 0f;
    private bool isVisible;
    private Canvas parentCanvas;

    private void Awake()
    {
        parentCanvas = canvasGroup.GetComponentInParent<Canvas>();
        if (parentCanvas == null)
            Debug.LogError("TutorialAnimation: Canvas не найден!");
    }

    private void Start()
    {
       DOVirtual.DelayedCall(Time.deltaTime, () =>  RestartAnimationHand());
    }

    public void Init(HexGroopPlace[] places, IPlayerInput playerInput)
    {
        simplePlaces.Clear();
        startPlaces.Clear();
        foreach (HexGroopPlace place in places)
        {
            if (place.IsStartPlace)
                startPlaces.Add(place);
            else
                simplePlaces.Add(place);
        }

        playerInput.OnPointEnter += PlayerTap;
        playerInput.OnPointExit += PlayerTapEnd;
    }

    private void PlayerTap(Vector2 vector)
    {
        SetVisible(false);
        isPlayerHold = true;
        timerHold = 0f;
    }

    private void PlayerTapEnd(Vector2 vector)
    {
        isPlayerHold = false;
    }

    private void Update()
    {
        if (isPlayerHold || G.GameFlow.IsReaction)
            return;

        timerHold += Time.deltaTime;
        if (timerHold > 5f && !isVisible)
        {
            SetVisible(true);
            RestartAnimationHand();
        }
    }

    private void RestartAnimationLine()
    {

    }

    private void RestartAnimationHand()
    {
        sequence?.Kill();

        HexGroopPlace placeStart = startPlaces.FirstOrDefault(x => x.CountHexObjects > 0);
        HexGroopPlace placeTarget = simplePlaces.FirstOrDefault(x => x.CountHexObjects == 0);

        if (placeStart == null || placeTarget == null)
        {
            SetVisible(false);
            return;
        }

        Transform start = firstStart != null ? firstStart : placeStart.transform;
        Transform end = firstEnd != null ? firstEnd : placeTarget.transform;

        if(firstStart != null)
        {
            firstStart = null;
            firstEnd = null;
        }

        //Debug.Log($"{placeTarget.gameObject.name} {placeTarget.CountHexObjects}", placeTarget.gameObject);

        if (start == null || end == null)
        {
            SetVisible(false);
            return;
        }

        if (Camera.main == null || parentCanvas == null)
            return;

        Vector2 screenStart = Camera.main.WorldToScreenPoint(start.position);
        Vector2 screenTarget = Camera.main.WorldToScreenPoint(end.position);// + (Vector3.forward * 0.5f));

        Vector2 realStart = GetLocalPositionInCanvas(screenStart);
        Vector2 realTarget = GetLocalPositionInCanvas(screenTarget);

        handRect.anchoredPosition = realStart;

        sequence = DOTween.Sequence();
        sequence.Append(handRect.DOAnchorPos(realTarget, durationMove).SetEase(Ease.InOutQuad));
        sequence.AppendInterval(durationPause);
        sequence.Append(handRect.DOAnchorPos(realStart, durationMove).SetEase(Ease.InOutQuad));
        sequence.AppendInterval(durationPause);
        sequence.SetLoops(-1);
        sequence.Play();

        SetVisible(true);
    }

    private Vector2 GetLocalPositionInCanvas(Vector2 screenPosition)
    {
        RectTransform canvasRect = parentCanvas.GetComponent<RectTransform>();
        RectTransformUtility.ScreenPointToLocalPointInRectangle(canvasRect, screenPosition, parentCanvas.worldCamera, out Vector2 localPoint);
        return localPoint;
    }

    private void SetVisible(bool isVisible)
    {
        if (canvasGroup == null || this.isVisible == isVisible) return;
        this.isVisible = isVisible;
        canvasGroup.DOKill(false);
        canvasGroup.DOFade(isVisible ? 1f : 0f, isVisible ? durationFadeIn : 0.2f);
    }

    private void OnDestroy()
    {
        sequence?.Kill();
        canvasGroup?.DOKill();
    }
}