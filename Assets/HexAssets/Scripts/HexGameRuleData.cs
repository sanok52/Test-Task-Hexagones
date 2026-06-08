using System;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "HexGameRuleData", menuName = "HexGame/HexGameRule")]
public class HexGameRuleData : ScriptableObject
{
    public List<HexGroopPreset> startHexes = new List<HexGroopPreset>();
    public float GameTimer = 10f;
}

[Serializable]
public struct HexGroopPreset
{
    public HexColor[] colors;
} 