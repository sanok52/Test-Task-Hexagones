using System;
using System.Collections.Generic;

public class HexColorRandomizer
{
    private List<HexColor> availableColors = new List<HexColor>();
    private System.Random rng = new System.Random();
    private int colorCount;    // сколько цветов используется (начиная с индекса 1)
    private int repeatCount;   // сколько копий каждого цвета в одном полном цикле

    // Использовать все цвета, кроме первого (обычно None), каждый по count раз
    public HexColorRandomizer(int count) : this(Enum.GetValues(typeof(HexColor)).Length - 1, count)
    {
    }

    // Использовать первые 'imgColors' цветов (начиная с индекса 1), каждый по count раз
    public HexColorRandomizer(int colors, int count)
    {
        colorCount = colors;
        repeatCount = count;
        FillList();
        Shuffle();
    }

    // Заполнить список исходным набором (цвета + повторы)
    private void FillList()
    {
        availableColors.Clear();
        var allColors = Enum.GetValues(typeof(HexColor));
        int maxIndex = Math.Min(colorCount, allColors.Length - 1);
        for (int i = 1; i <= maxIndex; i++)
        {
            HexColor hexColor = (HexColor)i;
            for (int j = 0; j < repeatCount; j++)
            {
                availableColors.Add(hexColor);
            }
        }
    }

    // Перемешать список
    private void Shuffle()
    {
        int n = availableColors.Count;
        while (n > 1)
        {
            n--;
            int k = rng.Next(n + 1);
            (availableColors[k], availableColors[n]) = (availableColors[n], availableColors[k]);
        }
    }

    // Получить случайный цвет. Если список опустел – пересоздаём его и перемешиваем.
    public HexColor GetRandomColor()
    {
        if (availableColors.Count == 0)
        {
            FillList();
            Shuffle();
        }
        int index = rng.Next(availableColors.Count);
        HexColor color = availableColors[index];
        availableColors.RemoveAt(index);
        return color;
    }
}