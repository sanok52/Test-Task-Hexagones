using UnityEngine;

public interface IGrabObject
{
    public void Grab();
    public void Drop(Vector3 position);
    public void MoveTo(Vector3 position);
    public void ReturnOnPlace();

    public Transform transform { get; }
    bool IsCanGrab { get; }
}
