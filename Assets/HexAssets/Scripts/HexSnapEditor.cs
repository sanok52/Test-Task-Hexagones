using UnityEditor;
using UnityEngine;
using System.Collections.Generic;
using System.Linq;

[CustomEditor(typeof(HexPlacePositor))]
public class HexSnapEditor : Editor
{
    // Словарь для хранения последних позиций всех объектов под редактором
    private Dictionary<HexPlacePositor, Vector3> lastPositions = new Dictionary<HexPlacePositor, Vector3>();
    private HashSet<HexPlacePositor> draggingObjects = new HashSet<HexPlacePositor>();

    private void OnEnable()
    {
        SceneView.duringSceneGui += OnSceneGUI;
    }

    private void OnDisable()
    {
        SceneView.duringSceneGui -= OnSceneGUI;
    }

    private void OnSceneGUI(SceneView sceneView)
    {
        // Получаем все выделенные объекты, у которых есть компонент HexPlacePositor
        var selectedPositors = Selection.gameObjects
            .Select(go => go.GetComponent<HexPlacePositor>())
            .Where(p => p != null)
            .ToList();

        if (selectedPositors.Count == 0) return;

        // Обновляем словарь последних позиций (добавляем новые, удаляем неактивные)
        foreach (var positor in selectedPositors)
        {
            if (!lastPositions.ContainsKey(positor))
                lastPositions[positor] = positor.transform.position;
        }
        var toRemove = lastPositions.Keys.Where(k => !selectedPositors.Contains(k)).ToList();
        foreach (var k in toRemove)
        {
            lastPositions.Remove(k);
            draggingObjects.Remove(k);
        }

        // Проверяем, изменилась ли позиция у каждого объекта
        foreach (var positor in selectedPositors)
        {
            Vector3 currentPos = positor.transform.position;
            if (currentPos != lastPositions[positor])
            {
                draggingObjects.Add(positor);
                lastPositions[positor] = currentPos;
            }
        }

        // Отслеживаем отпускание левой кнопки мыши
        Event e = Event.current;
        if (e.type == EventType.MouseUp && e.button == 0 && draggingObjects.Count > 0)
        {
            foreach (var positor in draggingObjects)
            {
                if (positor != null)
                {
                    positor.SnapToGrid();
                    EditorUtility.SetDirty(positor.transform);
                    EditorUtility.SetDirty(positor);
                }
            }
            draggingObjects.Clear();
            sceneView.Repaint();
        }
    }
}