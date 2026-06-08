using UnityEngine;

public static class HexSoundManager
{
    private static HexSoundEffectsData data;

    private static float prevDestroySFXTime;
    private static float prevHexSFXTime;

    public static void SetData(HexSoundEffectsData soundEffectsData)
    {
        data = soundEffectsData;

        prevDestroySFXTime = Time.time;
        prevHexSFXTime = Time.time;
    }

    public static void PlayDestroySFX()
    {
        if (Time.time - prevDestroySFXTime < 0.5f)
            return;

        G.SourceSFX.ApplyDataAndPlay(data.DestroySFX);
        prevDestroySFXTime = Time.time;
    }

    public static void PlayStuckSFX()
    {
        G.SourceSFX.ApplyDataAndPlay(data.StuckSFX);
    }

    public static void PlayDeliteHexSFX()
    {
        if (Time.time - prevHexSFXTime < 0.15f)
            return;

        G.SourceSFX.ApplyDataAndPlay(data.DeliteHexSFX);
        prevHexSFXTime = Time.time;
    }

    public static void PlayByOneSFX()
    {
        G.SourceSFX.ApplyDataAndPlay(data.ByOneSFX);
    }
}