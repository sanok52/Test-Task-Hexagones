using UnityEngine;

public class HexPlacePositor : MonoBehaviour
{
    public Grid MainGrid; // Можно оставить для ручного назначения, но будет автопоиск
    public Vector2Int Position; // Для информации, не обязательно

    private void Awake()
    {
        MainGrid = FindObjectOfType<Grid>();
        Position = (Vector2Int)MainGrid.WorldToCell(transform.position);
        gameObject.name = $"[{Position}]{gameObject.name}";
    }

    public void SnapToGrid()
    {
        // Автопоиск сетки, если не назначена
        if (MainGrid == null)
        {
            MainGrid = FindObjectOfType<Grid>();
            if (MainGrid == null)
            {
                Debug.LogWarning("No Grid found in scene!", this);
                return;
            }
        }

        Vector3 snapped = MainGrid.CellToWorld(MainGrid.WorldToCell(transform.position));
        transform.position = new Vector3(snapped.x, transform.position.y, snapped.z);
        transform.rotation = Quaternion.identity;
        Position = (Vector2Int)MainGrid.WorldToCell(transform.position);
    }
}