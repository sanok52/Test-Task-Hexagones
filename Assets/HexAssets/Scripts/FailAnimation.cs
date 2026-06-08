using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FailAnimation : MonoBehaviour
{
    [SerializeField] private CanvasGroup canvasGroup;
    [SerializeField] private Transform targetScale;

    public IEnumerator Play()
    {
        targetScale.localScale = Vector3.zero;
        yield return canvasGroup.DOFade(1f, 0.5f).WaitForCompletion();
        yield return targetScale.DOScale(1f, 0.25f).WaitForCompletion();
        yield return new WaitForSeconds(0.5f);
    }
}
