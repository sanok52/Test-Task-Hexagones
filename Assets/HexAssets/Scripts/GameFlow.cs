using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Unity.VisualScripting;
using UnityEngine;
using static UnityEngine.GraphicsBuffer;

public class GameFlow : MonoBehaviour
{
    private List<HexGroopPlace> hexGroopPlaces = new List<HexGroopPlace>();
    private List<HexGroopPlace> startHexGroopPlaces = new List<HexGroopPlace>();
    private List<HexGroopPlace> simpleHexGroopPlaces = new List<HexGroopPlace>();

    private List<HexGroopPlace> hexNeedRections = new List<HexGroopPlace>();

    private List<(HexGroopPlace, HexGroopPlace)> hexReactions = new List<(HexGroopPlace, HexGroopPlace)>();
    private List<HexGroopPreset> startPresets = new List<HexGroopPreset>();

    private HexColorRandomizer randomizer;

    private int countHexMove;
    private float accelerationHexFlip => 30f;
    private float coefHexByOneMax = 3f;
    private float coefHexByOne => 1f + (accelerationHexFlip / 100f);

    public bool IsReaction => hexReactions.Count > 0;

    public void Init(HexGroopPlace[] places)
    {
        foreach (var place in places)
        {
            hexGroopPlaces.Add(place);
            if (place.IsStartPlace)
            {
                startHexGroopPlaces.Add(place);
                place.OnMainGroopReturn += PlaceStartGroopReturnWork;
            }
            else
                simpleHexGroopPlaces.Add(place);
            place.OnDropAnMeEnd += HexPlaceReaction;
        }

        randomizer = new HexColorRandomizer(2);
        startPresets = new List<HexGroopPreset>(G.GameRuleData.startHexes);
    }

    private void Start()
    {
        //InitHexes(150, hexGroopPlaces.Count / 4);
        //InitColors();
        InitHexSelf();
    }

    private void InitHexSelf()
    {
        foreach (var hexPlace in hexGroopPlaces)
        {
            hexPlace.UpdateHexCount();
        }
    }

    private void PlaceStartGroopReturnWork(HexGroopPlace place)
    {
        if (startHexGroopPlaces.Any(x => x.CountHexObjects != 0))
            return;

        StartPlacesUpdate();
    }

    private void StartPlacesUpdate()
    {
        foreach (var splace in startHexGroopPlaces)
        {
            if (startPresets.Count > 0)
            {
                splace.InitPreset(startPresets[0]);
                startPresets.RemoveAt(0);
                continue;
            }
            splace.SetHexCount(5);
            splace.MainHexGroop.SetColors(randomizer.GetRandomColor());
        }
    }

    private void InitHexes(int allCount, int emptyPlaces = 0)
    {
        int totalPlaces = hexGroopPlaces.Count;
        var startPlaces = hexGroopPlaces.Where(x => x.IsStartPlace).ToList();
        var simplePlaces = hexGroopPlaces.Where(x => !x.IsStartPlace).ToList();
        int startCount = startPlaces.Count;
        int simpleCount = simplePlaces.Count;

        // Пустые места могут быть только среди простых (стартовые всегда заняты)
        emptyPlaces = Mathf.Min(emptyPlaces, simpleCount);
        int occupiedSimpleCount = simpleCount - emptyPlaces;
        int totalOccupied = startCount + occupiedSimpleCount;
        if (totalOccupied <= 0) return;

        // Среднее количество на одно занятое место
        int avgPerPlace = allCount / totalOccupied;
        int startTotal = startCount * avgPerPlace;
        int remainingForSimple = allCount - startTotal;
        if (remainingForSimple < 0) remainingForSimple = 0;

        // Распределение для простых мест (только для занятых)
        List<int> simpleAmounts = new List<int>();
        if (occupiedSimpleCount > 0 && remainingForSimple > 0)
        {
            int smallValue = Mathf.Max(1, avgPerPlace / 2);
            int bigValue = Mathf.Max(smallValue + 1, (int)(smallValue * 1.5f));

            int pairCount = occupiedSimpleCount / 2;
            bool hasOdd = (occupiedSimpleCount % 2) == 1;

            for (int i = 0; i < pairCount; i++)
            {
                simpleAmounts.Add(smallValue);
                simpleAmounts.Add(bigValue);
            }
            if (hasOdd)
                simpleAmounts.Add(avgPerPlace);

            // Масштабирование до remainingForSimple
            int currentSum = simpleAmounts.Sum();
            if (currentSum != remainingForSimple && currentSum > 0)
            {
                float scale = (float)remainingForSimple / currentSum;
                for (int i = 0; i < simpleAmounts.Count; i++)
                {
                    simpleAmounts[i] = Mathf.Max(1, Mathf.RoundToInt(simpleAmounts[i] * scale));
                }
                int sumAfterScale = simpleAmounts.Sum();
                int diff = remainingForSimple - sumAfterScale;
                if (diff != 0 && simpleAmounts.Count > 0)
                    simpleAmounts[simpleAmounts.Count - 1] += diff;
            }

            // Перемешиваем, чтобы small и big не шли строго парами
            for (int i = 0; i < simpleAmounts.Count; i++)
            {
                int rand = UnityEngine.Random.Range(i, simpleAmounts.Count);
                (simpleAmounts[i], simpleAmounts[rand]) = (simpleAmounts[rand], simpleAmounts[i]);
            }
        }

        // Назначение стартовым местам
        foreach (var place in startPlaces)
        {
            place.SetHexCount(avgPerPlace);
        }

        // Перемешиваем простые места, чтобы пустые распределились случайно
        List<HexGroopPlace> shuffledSimple = new List<HexGroopPlace>(simplePlaces);
        for (int i = 0; i < shuffledSimple.Count; i++)
        {
            int rand = UnityEngine.Random.Range(i, shuffledSimple.Count);
            (shuffledSimple[i], shuffledSimple[rand]) = (shuffledSimple[rand], shuffledSimple[i]);
        }

        // Назначаем: первые emptyPlaces получают 0, остальные – из simpleAmounts по порядку
        for (int i = 0; i < shuffledSimple.Count; i++)
        {
            if (i < emptyPlaces)
                shuffledSimple[i].SetHexCount(0);
            else
            {
                int amountIndex = i - emptyPlaces;
                if (amountIndex < simpleAmounts.Count)
                    shuffledSimple[i].SetHexCount(simpleAmounts[amountIndex]);
                else
                    shuffledSimple[i].SetHexCount(0);
            }
        }
    }

    private void InitColors()
    {
        randomizer = new HexColorRandomizer(2);

        foreach (var place in hexGroopPlaces)
        {
            HexColor colorA = randomizer.GetRandomColor();
            HexColor colorB = randomizer.GetRandomColor();
            place.MainHexGroop.SetColors(colorA, colorB);
        }
    }

    public void HexPlaceReaction(HexGroopPlace hexPlace)
    {
        if (hexPlace.MainHexGroop.IsBlock) return;
        UpdateBoard(hexPlace);
    }

    private bool UpdateBoard(HexGroopPlace hexPlace)
    {
        if (hexPlace.CountHexObjects == 0)
            return false;

        if (hexReactions.Any(p => p.Item1 == hexPlace || p.Item2 == hexPlace))
            return false;

        if (hexPlace.IsPlayAnimations)
            return false;

        HexGroopPlace[] neighs = GetNeighbors(hexPlace);
        var validNeighs = neighs.Where(x =>
        {
            return
                x.CountHexObjects > 0 &&
                hexPlace.UpperHexColor == x.UpperHexColor &&
                !hexReactions.Any(n => n.Item1 == x || n.Item2 == x) &&
                !x.IsPlayAnimations;
        }).ToArray();

        if (validNeighs.Length != 0)
            StartCoroutine(HexReactionRoutine(hexPlace, validNeighs));
        else
            return false;        

        return true;
    }

    private IEnumerator HexReactionRoutine(HexGroopPlace hexPlace, HexGroopPlace[] validNeighs)
    {
        HexGroopPlace target = validNeighs
            .OrderBy(x => -x.CountHexObjects)
            .First();       

        countHexMove++;

        hexPlace.MainHexGroop.SetBlock(true);
        target.MainHexGroop.SetBlock(true);

        while (target.IsPlayAnimations)
            yield return null;

        hexReactions.Add((hexPlace, target));
        yield return PlaceMixedHexRoutine(hexPlace, target);
        hexReactions.Remove((hexPlace, target));

        hexPlace.MainHexGroop.SetBlock(false);
        target.MainHexGroop.SetBlock(false);

        bool testAgain = UpdateBoard(hexPlace);
        bool testNext = UpdateBoard(target);

        Debug.Log($"{hexReactions.Count == 0} && {!testAgain} && {!testNext}");

        if (hexReactions.Count == 0 && !testAgain && !testNext)
            EndAllReactionsWork();
    }

    private static bool TestOverfull(HexGroopPlace hexPlace)
    {
        return hexPlace.CountHexObjects >= 10 &&
                    hexPlace.MainHexGroop.HexObjects.All(x => x.Color == hexPlace.UpperHexColor);
    }

    private void EndAllReactionsWork()
    {
        if (isEndGame)
            return;

        countHexMove = 0;

        bool isWin = true;
        foreach (var place in simpleHexGroopPlaces)
        {
            if (TestOverfull(place))
            {
                StartCoroutine(OverfulHexPlaceRoutine(place));
            }

            if (place.CountHexObjects != 0)// && !place.MainHexGroop.HexObjects.All(x => x.Color == place.UpperHexColor))
                isWin = false;
        }

        if (!isWin)
            return;

        StartCoroutine(WinGameRountine());
    }

    private IEnumerator WinGameRountine()
    {
        isEndGame = true;

        foreach (var place in hexGroopPlaces)
        {
            StartCoroutine(place.OverfulHexPlaceRoutine());
        }

        yield return new WaitForSeconds(1f);

        EntryPoint.EndGame();
    }

    private IEnumerator LoseGameRountine()
    {
        isEndGame = true;
        G.PlayerInput.SetActive(false);

        Debug.Log("Fail");
        yield return FindFirstObjectByType<FailAnimation>().Play();
        EntryPoint.EndGame();
    }

    bool isEndGame = false;
    float timeInGame = 0f;

    private void Update()
    {
        if (isEndGame)
            return;

        if (!isEndGame && TestLose())
        {
            StartCoroutine(LoseGameRountine());
        }

        timeInGame += Time.deltaTime;
        G.TimeBar.UpdateTimeProgerss(1f - (timeInGame / G.GameRuleData.GameTimer));

        if (timeInGame >= G.GameRuleData.GameTimer)
            StartCoroutine(LoseGameRountine());
    }

    private bool TestLose()
    {
        if (hexReactions.Count > 0)
            return false;

        foreach (var place in simpleHexGroopPlaces)
        {
            if (place.CountHexObjects == 0)
                return false;
        }

        return true;
    }

    private IEnumerator PlaceMixedHexRoutine(HexGroopPlace place, HexGroopPlace target)
    {
        if (place.CountHexObjects > target.CountHexObjects)
            yield return HexMoveByOneWhileColor(place, target, place.UpperHexColor);
        else
            yield return HexMoveByOneWhileColor(target, place, target.UpperHexColor);

        yield return new WaitForSeconds(1f / GetCoefSpeed());

        if (place.CountHexObjects == 0 || target.CountHexObjects == 0)
            yield break;
    }

    private IEnumerator HexMoveByOneWhileColor(HexGroopPlace hexOut, HexGroopPlace hexIn, HexColor hexColor)
    {
        while (hexOut.UpperHexColor == hexColor)
        {
            yield return HexMoveByOneRoutine(hexOut, hexIn);
            /*if (hexIn.MainHexGroop.HexObjects.All(x => x.Color == hexColor) &&
                hexIn.MainHexGroop.HexObjects.Count(x => x.Color == hexColor) >= 10)
            {
                yield return OverfulHexPlaceRoutine(hexIn);
                yield break;
            }*/
        }
    }

    private IEnumerator HexMoveByOneRoutine(HexGroopPlace hexOut, HexGroopPlace hexIn)
    {
        yield return hexIn.MixedTwoGroopInMy(hexOut.MainHexGroop, true, GetCoefSpeed());
    }

    private float GetCoefSpeed()
    {
        return Mathf.Clamp(1f * Mathf.Pow(coefHexByOne, countHexMove), 1f, coefHexByOneMax);
    }

    private IEnumerator OverfulHexPlaceRoutine(HexGroopPlace hexPlace)
    {
        hexReactions.Add((hexPlace, hexPlace));
        yield return hexPlace.OverfulHexPlaceRoutine();
        hexReactions.Remove((hexPlace, hexPlace));

        if (hexNeedRections.Count == 0)
            EndAllReactionsWork();
    }

    private HexGroopPlace[] GetNeighbors(HexGroopPlace place)
    {
        Vector2Int pos = place.Positor.Position;
        int x = pos.x;
        int y = pos.y;

        // Шесть направлений для flat-top (чётная строка)
        Vector2Int[] evenRowNeighbors = new Vector2Int[]
        {
        new Vector2Int(1, 0), new Vector2Int(0, 1), new Vector2Int(-1, 1),
        new Vector2Int(-1, 0), new Vector2Int(-1, -1), new Vector2Int(0, -1)
        };

        // Для нечётной строки соседи сдвинуты иначе
        Vector2Int[] oddRowNeighbors = new Vector2Int[]
        {
        new Vector2Int(1, 0), new Vector2Int(1, 1), new Vector2Int(0, 1),
        new Vector2Int(-1, 0), new Vector2Int(0, -1), new Vector2Int(1, -1)
        };

        Vector2Int[] directions = (y % 2 == 0) ? evenRowNeighbors : oddRowNeighbors;

        return hexGroopPlaces.Where(x =>
        {
            Vector2Int delta = x.Positor.Position - pos;
            return x != place && directions.Any(d => delta.x == d.x && delta.y == d.y);
        }).ToArray();
    }

    public bool IsNeighors(HexGroopPlace placeA, HexGroopPlace placeB)
    {
        Vector2Int pos = placeA.Positor.Position;
        int x = pos.x;
        int y = pos.y;

        // Шесть направлений для flat-top (чётная строка)
        Vector2Int[] evenRowNeighbors = new Vector2Int[]
        {
        new Vector2Int(1, 0), new Vector2Int(0, 1), new Vector2Int(-1, 1),
        new Vector2Int(-1, 0), new Vector2Int(-1, -1), new Vector2Int(0, -1)
        };

        // Для нечётной строки соседи сдвинуты иначе
        Vector2Int[] oddRowNeighbors = new Vector2Int[]
        {
        new Vector2Int(1, 0), new Vector2Int(1, 1), new Vector2Int(0, 1),
        new Vector2Int(-1, 0), new Vector2Int(0, -1), new Vector2Int(1, -1)
        };

        Vector2Int[] directions = (y % 2 == 0) ? evenRowNeighbors : oddRowNeighbors;

        Vector2Int delta = placeB.Positor.Position - pos;
        return placeA != placeB && directions.Any(d => delta.x == d.x && delta.y == d.y);
    }

}