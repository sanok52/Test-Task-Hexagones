using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.UI;

public class TimeBar : MonoBehaviour
{
    [SerializeField] private Image imageBar;
    [SerializeField] private RectTransform rectArrow;

    [SerializeField] private RectTransform rectPunch;
    [SerializeField] private float durationPunch = 0.5f;
    [SerializeField] private Image[] imgColors;

    private bool isAnimate;

    private List<Color> colors = new List<Color>();

    private void Start()
    {
        foreach (var img in imgColors)
        {
            colors.Add(img.color);
        }
        StartCoroutine(AnimateRoutine());
    }

    public void UpdateTimeProgerss(float progress)
    {
        if (isEnd)
            return;

        progress = Mathf.Clamp01(progress);

        imageBar.fillAmount = progress;
        rectArrow.transform.rotation = Quaternion.Euler(Vector3.Lerp(
            new Vector3(-90, -90, 90),
            new Vector3(-360, -90, 90),
            progress));

        if (progress <= 0.3f)
            isAnimate = true;

        if (progress <= 0.05f)
        {
            StopAllCoroutines();
            EndAnimation();
        }
    }

    private IEnumerator AnimateRoutine()
    {
        while (true)
        {
            yield return new WaitForSeconds(1f);

            while (!isAnimate)
                yield return new WaitForEndOfFrame();

            rectPunch.DOPunchScale(Vector3.one, durationPunch);
            rectPunch.DOPunchRotation(new Vector3(0, 0, 45), durationPunch);

            foreach (var img in imgColors)            
                img.color = Color.red;

            yield return new WaitForSeconds(durationPunch);

            for (int i = 0; i < imgColors.Length; i++)
            {
                Image img = imgColors[i];
                img.color = colors[i];
            }
        }
    }

    bool isEnd;
    private void EndAnimation()
    {
        isEnd = true;

        rectPunch.DOPunchScale(Vector3.one, durationPunch).SetLoops(-1, LoopType.Yoyo);
        rectPunch.DOPunchRotation(new Vector3(0, 0, 45), durationPunch).SetLoops(-1);

        foreach (var img in imgColors)
            img.color = new Color(1f, 0.3f, 0.3f, 1f);
    }

}
