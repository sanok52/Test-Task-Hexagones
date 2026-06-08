using System;
using System.Collections.Generic;
using UnityEngine;

public class PlayerTouchInput : MonoBehaviour, IPlayerInput
{
    public event Action<Vector2> OnPointEnter;
    public event Action<Vector2> OnPointExit;
    public event Action<Vector2> OnPointHold;

    private readonly HashSet<int> _activeTouchIds = new HashSet<int>();

    private void Update()
    {
        for (int i = 0; i < Input.touchCount; i++)
        {
            Touch touch = Input.GetTouch(i);
            Vector2 position = touch.position;

            switch (touch.phase)
            {
                case TouchPhase.Began:
                    if (_activeTouchIds.Add(touch.fingerId))
                        OnPointEnter?.Invoke(position);
                    break;

                case TouchPhase.Moved:
                case TouchPhase.Stationary:
                    OnPointHold?.Invoke(position);
                    break;

                case TouchPhase.Ended:
                case TouchPhase.Canceled:
                    if (_activeTouchIds.Remove(touch.fingerId))
                        OnPointExit?.Invoke(position);
                    break;
            }
        }
    }
}