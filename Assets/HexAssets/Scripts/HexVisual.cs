using System;
using UnityEngine;

public class HexVisual : MonoBehaviour
{
    [SerializeField] private new Renderer renderer;

    public void SetColor (HexColor hexColor)
    {
        renderer.material.color = GetColorForHex(hexColor);
    }

    public static Color GetColorForHex(HexColor hexColor)
    {
        ///Добавить подгрузку данных из конфига
        switch (hexColor)
        {
            case HexColor.Red:
                return Color.red;
            case HexColor.Blue:
                return Color.blue;
            case HexColor.Yellow:
                return Color.yellow;
            case HexColor.Purple:
                return Color.magenta;
            case HexColor.White:
                return Color.white;
            case HexColor.WhiteBlue:
                return Color.cyan;
            case HexColor.Green:
                return Color.green;
            case HexColor.None:
            default:
                return Color.black;
        }
    }
}