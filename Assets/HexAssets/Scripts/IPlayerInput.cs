using System;
using UnityEngine;

public interface IPlayerInput
{
    public event Action<Vector2> OnPointEnter;
    public event Action<Vector2> OnPointExit;
    public event Action<Vector2> OnPointHold;
}