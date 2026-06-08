using DG.Tweening;
using System;
using UnityEngine;

public static class HexGameFabric
{
    private static HexFabricData data;

    public static void SetData (HexFabricData data)
    {
        HexGameFabric.data = data;
    }

    public static HexGroop CreateEmptyHexGroop (string name = "HexGroop")
    {
        var groop = new GameObject(name).AddComponent<HexGroop>();

        var rb = groop.gameObject.AddComponent<Rigidbody>();
        rb.useGravity = false;
        rb.isKinematic = true;

        return groop;
    }

    public static HexObject CreateHex(Vector3 position, Quaternion rotation, Transform parent = null)
    {
        return UnityEngine.Object.Instantiate(data.HexObjectPref, position, rotation, parent);
    }

    public static GameObject CreateDestoryFX(Vector3 position)
    {
        GameObject ngo = UnityEngine.Object.Instantiate(data.FxDestroy, position, Quaternion.identity);
        Camera.main.transform.DOKill(true);
        Camera.main.transform.DOShakePosition(0.2f, data.ScaleCameraShake);
        HexSoundManager.PlayDestroySFX();
        return ngo;
    }

    public static void PlayStuckSFX()
    {
        
    }
}
