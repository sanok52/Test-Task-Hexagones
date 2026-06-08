using System.Drawing;
using System.Xml.Linq;
using UnityEngine;

public class PlayerHandController
{
    private IPlayerInput playerInput;
    private Camera camera;

    private IGrabObject currentGrab;
    public bool IsHoldObject => currentGrab != null;

    public void Init(IPlayerInput playerInput, Camera camera = null)
    {
        this.playerInput = playerInput;

        playerInput.OnPointEnter += PointEnterWork;
        playerInput.OnPointHold += PointHoldWork;
        playerInput.OnPointExit += PointExitWork;

        this.camera = camera == null ? Camera.main : camera;
    }

    private void PointEnterWork(Vector2 point)
    {
        if (IsHoldObject)        
            return;        

        if (Physics.Raycast(camera.ScreenPointToRay(point), out RaycastHit hitInfo))
        {
            if (hitInfo.transform.TryGetComponent(out IGrabObject grabObject))
                TryGrabThisObject(grabObject);
        }
    }

    private void PointHoldWork(Vector2 point)
    {
        if (!IsHoldObject)
            return;

        if (Physics.Raycast(camera.ScreenPointToRay(point), out RaycastHit hitInfo))
        {
            currentGrab.MoveTo(hitInfo.point);
        }
    }

    private void PointExitWork(Vector2 point)
    {
        if (!IsHoldObject)
            return;

        DropCurrentObject();
    }

    private bool TryGrabThisObject(IGrabObject grabObject)
    {
        if (!grabObject.IsCanGrab)
            return false;

        GrabThisObject(grabObject);
        return true;
    }

    private void GrabThisObject(IGrabObject grabObject)
    {
        currentGrab = grabObject;
        currentGrab.Grab();
    }

    private void DropCurrentObject()
    {
        TryDropObjectDown(currentGrab);
        currentGrab = null;
    }

    private void TryDropObjectDown(IGrabObject grabObject)
    {
        RaycastHit[] hits = Physics.RaycastAll(new Ray(grabObject.transform.position + Vector3.up + (Vector3.forward * 0.5f), Vector3.down));

        foreach (RaycastHit hitInfo in hits)
        {
            HexGroopPlace place = null;

            //Debug.Log($"{hitInfo.transform.name}", hitInfo.transform.gameObject);

            //if (hitInfo.transform.TryGetComponent(out HexGroop hexGroop))            
            //    place = hexGroop.Place;            
            /*else*/
            if (hitInfo.transform.TryGetComponent(out HexGroopPlace hexPlace) && hexPlace.MainHexGroop.Count == 0)
                place = hexPlace;

            if (place != null)
            {
                TryDropObjectOnPlace(grabObject, place);
                return;
            }
        }

        ReturnObject(grabObject);
    }

    private void ReturnObject(IGrabObject grabObject)
    {
        grabObject.ReturnOnPlace();
    }

    private void TryDropObjectOnPlace(IGrabObject currentGrab, HexGroopPlace place)
    {
        if (place.CanDrop(currentGrab, true))
        {
            return;
        }

        currentGrab.ReturnOnPlace();
    }
}