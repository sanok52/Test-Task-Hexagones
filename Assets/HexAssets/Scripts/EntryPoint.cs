using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Object = UnityEngine.Object;

public static class EntryPoint
{
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
    public static void Init()
    {
        G.Init();

        InitFabric();
        InitSFXMaanger();
        InitHandController(G.HandController, G.PlayerInput);
        InitGameFlow();
        InitPlaces();
        InitTutorial();
    }

    private static void InitFabric()
    {
        HexGameFabric.SetData(G.FabricData);
    }

    private static void InitSFXMaanger()
    {
        HexSoundManager.SetData(G.SoundEffectsData);
    }

    private static void InitHandController(PlayerHandController handController, IPlayerInput input)
    {
        handController.Init(input);
    }

    private static void InitGameFlow()
    {
        G.GameFlow.Init(G.AllPlaces);
    }

    private static void InitPlaces()
    {
        foreach (var place in G.AllPlaces)
        {
            place.Init();
        }
    }

    private static void InitTutorial()
    {
        G.TutorialHand.Init(G.AllPlaces, G.PlayerInput);
    }

    public static void EndGame()
    {
        Debug.Log("EndGame");
        Luna.Unity.LifeCycle.GameEnded();
    }

    public static void InStore()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}

public static class G
{
    public static PlayerHandController HandController;
    public static IPlayerInput PlayerInput;
    public static GameFlow GameFlow;
    public static AudioSource SourceSFX;
    public static TutorialAnimation TutorialHand;

    public static HexGroopPlace[] AllPlaces;

    public static HexFabricData FabricData;
    public static HexSoundEffectsData SoundEffectsData;

    public static void Init()
    {
        HandController = new PlayerHandController();
        PlayerInput = new GameObject("TouchInput").AddComponent<PlayerTouchInput>();
        GameFlow = new GameObject("GameFlow").AddComponent<GameFlow>();
        SourceSFX = new GameObject("AudioSourceSFX").AddComponent<AudioSource>();

        TutorialHand = Object.FindFirstObjectByType<TutorialAnimation>();
        AllPlaces = Object.FindObjectsByType<HexGroopPlace>(FindObjectsInactive.Exclude, FindObjectsSortMode.None);

        FabricData = Resources.Load<HexFabricData>("HexFabricData");
        SoundEffectsData = Resources.Load<HexSoundEffectsData>("SoundEffectsData");
    }

}