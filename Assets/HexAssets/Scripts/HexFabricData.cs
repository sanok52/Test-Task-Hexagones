using System;
using UnityEngine;

[CreateAssetMenu(fileName = "HexFabricData", menuName = "HexGame/HexFabricData")]
public class HexFabricData : ScriptableObject
{
    public HexObject HexObjectPref;
    public GameObject FxDestroy;
    public Vector3 ScaleCameraShake = Vector3.one;
}
