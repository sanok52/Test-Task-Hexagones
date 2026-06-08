using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LunaTest : MonoBehaviour
{
    public void EndGame()
    {
        Luna.Unity.LifeCycle.GameEnded();
    }

    public void RedirectToStor()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
