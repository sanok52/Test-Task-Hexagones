using System;
using UnityEngine;

[CreateAssetMenu(fileName = "SoundEffectsData", menuName = "HexGame/SoundEffectsData")]
public class HexSoundEffectsData : ScriptableObject
{
    internal static HexSoundEffectsData data;
    public AudioPlayData DestroySFX;
    public AudioPlayData StuckSFX;
    public AudioPlayData ByOneSFX;
    public AudioPlayData DeliteHexSFX;
}


[Serializable]
public struct AudioPlayData
{
    public string ID;
    public AudioClip clip;
    public float volume;
    public float pitch;
}


public static class AudioSourceExtention
{
    public static void ApplyDataAndPlay(this AudioSource source, AudioPlayData data)
    {
        source.pitch = data.pitch;
        source.PlayOneShot(data.clip, data.volume);
    }
}