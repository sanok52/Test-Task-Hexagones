var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointSpring' )
  var i721 = data
  i720.spring = i721[0]
  i720.damper = i721[1]
  i720.targetPosition = i721[2]
  return i720
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointMotor' )
  var i723 = data
  i722.m_TargetVelocity = i723[0]
  i722.m_Force = i723[1]
  i722.m_FreeSpin = i723[2]
  return i722
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointLimits' )
  var i725 = data
  i724.m_Min = i725[0]
  i724.m_Max = i725[1]
  i724.m_Bounciness = i725[2]
  i724.m_BounceMinVelocity = i725[3]
  i724.m_ContactDistance = i725[4]
  i724.minBounce = i725[5]
  i724.maxBounce = i725[6]
  return i724
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointDrive' )
  var i727 = data
  i726.m_PositionSpring = i727[0]
  i726.m_PositionDamper = i727[1]
  i726.m_MaximumForce = i727[2]
  i726.m_UseAcceleration = i727[3]
  return i726
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i729 = data
  i728.m_Spring = i729[0]
  i728.m_Damper = i729[1]
  return i728
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i731 = data
  i730.m_Limit = i731[0]
  i730.m_Bounciness = i731[1]
  i730.m_ContactDistance = i731[2]
  return i730
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i733 = data
  i732.m_ExtremumSlip = i733[0]
  i732.m_ExtremumValue = i733[1]
  i732.m_AsymptoteSlip = i733[2]
  i732.m_AsymptoteValue = i733[3]
  i732.m_Stiffness = i733[4]
  return i732
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i735 = data
  i734.m_LowerAngle = i735[0]
  i734.m_UpperAngle = i735[1]
  return i734
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i737 = data
  i736.m_MotorSpeed = i737[0]
  i736.m_MaximumMotorTorque = i737[1]
  return i736
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i739 = data
  i738.m_DampingRatio = i739[0]
  i738.m_Frequency = i739[1]
  i738.m_Angle = i739[2]
  return i738
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i741 = data
  i740.m_LowerTranslation = i741[0]
  i740.m_UpperTranslation = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i743 = data
  i742.name = i743[0]
  i742.halfPrecision = !!i743[1]
  i742.useSimplification = !!i743[2]
  i742.useUInt32IndexFormat = !!i743[3]
  i742.vertexCount = i743[4]
  i742.aabb = i743[5]
  var i745 = i743[6]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( !!i745[i + 0] );
  }
  i742.streams = i744
  i742.vertices = i743[7]
  var i747 = i743[8]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i747[i + 0]) );
  }
  i742.subMeshes = i746
  var i749 = i743[9]
  var i748 = []
  for(var i = 0; i < i749.length; i += 16) {
    i748.push( new pc.Mat4().setData(i749[i + 0], i749[i + 1], i749[i + 2], i749[i + 3],  i749[i + 4], i749[i + 5], i749[i + 6], i749[i + 7],  i749[i + 8], i749[i + 9], i749[i + 10], i749[i + 11],  i749[i + 12], i749[i + 13], i749[i + 14], i749[i + 15]) );
  }
  i742.bindposes = i748
  var i751 = i743[10]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i751[i + 0]) );
  }
  i742.blendShapes = i750
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i757 = data
  i756.triangles = i757[0]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i763 = data
  i762.name = i763[0]
  var i765 = i763[1]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i765[i + 0]) );
  }
  i762.frames = i764
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i766 = root || new pc.UnityMaterial()
  var i767 = data
  i766.name = i767[0]
  request.r(i767[1], i767[2], 0, i766, 'shader')
  i766.renderQueue = i767[3]
  i766.enableInstancing = !!i767[4]
  var i769 = i767[5]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i769[i + 0]) );
  }
  i766.floatParameters = i768
  var i771 = i767[6]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i771[i + 0]) );
  }
  i766.colorParameters = i770
  var i773 = i767[7]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i773[i + 0]) );
  }
  i766.vectorParameters = i772
  var i775 = i767[8]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i775[i + 0]) );
  }
  i766.textureParameters = i774
  var i777 = i767[9]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i777[i + 0]) );
  }
  i766.materialFlags = i776
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i781 = data
  i780.name = i781[0]
  i780.value = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i785 = data
  i784.name = i785[0]
  i784.value = new pc.Color(i785[1], i785[2], i785[3], i785[4])
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i789 = data
  i788.name = i789[0]
  i788.value = new pc.Vec4( i789[1], i789[2], i789[3], i789[4] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i793 = data
  i792.name = i793[0]
  request.r(i793[1], i793[2], 0, i792, 'value')
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i797 = data
  i796.name = i797[0]
  i796.enabled = !!i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i799 = data
  i798.name = i799[0]
  i798.width = i799[1]
  i798.height = i799[2]
  i798.mipmapCount = i799[3]
  i798.anisoLevel = i799[4]
  i798.filterMode = i799[5]
  i798.hdr = !!i799[6]
  i798.format = i799[7]
  i798.wrapMode = i799[8]
  i798.alphaIsTransparency = !!i799[9]
  i798.alphaSource = i799[10]
  i798.graphicsFormat = i799[11]
  i798.sRGBTexture = !!i799[12]
  i798.desiredColorSpace = i799[13]
  i798.wrapU = i799[14]
  i798.wrapV = i799[15]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i801 = data
  i800.position = new pc.Vec3( i801[0], i801[1], i801[2] )
  i800.scale = new pc.Vec3( i801[3], i801[4], i801[5] )
  i800.rotation = new pc.Quat(i801[6], i801[7], i801[8], i801[9])
  return i800
}

Deserializers["HexGroopPlace"] = function (request, data, root) {
  var i802 = root || request.c( 'HexGroopPlace' )
  var i803 = data
  i802.IsStartPlace = !!i803[0]
  return i802
}

Deserializers["HexPlacePositor"] = function (request, data, root) {
  var i804 = root || request.c( 'HexPlacePositor' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'MainGrid')
  i804.Position = new pc.Vec2( i805[2], i805[3] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'sharedMesh')
  i806.convex = !!i807[2]
  i806.enabled = !!i807[3]
  i806.isTrigger = !!i807[4]
  request.r(i807[5], i807[6], 0, i806, 'material')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i809 = data
  i808.mass = i809[0]
  i808.drag = i809[1]
  i808.angularDrag = i809[2]
  i808.useGravity = !!i809[3]
  i808.isKinematic = !!i809[4]
  i808.constraints = i809[5]
  i808.maxAngularVelocity = i809[6]
  i808.collisionDetectionMode = i809[7]
  i808.interpolation = i809[8]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'sharedMesh')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'additionalVertexStreams')
  i812.enabled = !!i813[2]
  request.r(i813[3], i813[4], 0, i812, 'sharedMaterial')
  var i815 = i813[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.sharedMaterials = i814
  i812.receiveShadows = !!i813[6]
  i812.shadowCastingMode = i813[7]
  i812.sortingLayerID = i813[8]
  i812.sortingOrder = i813[9]
  i812.lightmapIndex = i813[10]
  i812.lightmapSceneIndex = i813[11]
  i812.lightmapScaleOffset = new pc.Vec4( i813[12], i813[13], i813[14], i813[15] )
  i812.lightProbeUsage = i813[16]
  i812.reflectionProbeUsage = i813[17]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i819 = data
  i818.name = i819[0]
  i818.tagId = i819[1]
  i818.enabled = !!i819[2]
  i818.isStatic = !!i819[3]
  i818.layer = i819[4]
  return i818
}

Deserializers["HexGroop"] = function (request, data, root) {
  var i820 = root || request.c( 'HexGroop' )
  var i821 = data
  i820.delayHexMove = i821[0]
  i820.durationMoveOnPlace = i821[1]
  i820.hexOffset = i821[2]
  i820.startHexOffset = i821[3]
  i820.hexesOffsetGrab = i821[4]
  return i820
}

Deserializers["HexObject"] = function (request, data, root) {
  var i822 = root || request.c( 'HexObject' )
  var i823 = data
  i822.hexColor = i823[0]
  i822.stackDuration = i823[1]
  i822.byOneDuration = i823[2]
  i822.byOneUpDist = i823[3]
  i822.ease = i823[4]
  request.r(i823[5], i823[6], 0, i822, 'hexVisual')
  return i822
}

Deserializers["HexVisual"] = function (request, data, root) {
  var i824 = root || request.c( 'HexVisual' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'renderer')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i827 = data
  i826.name = i827[0]
  i826.atlasId = i827[1]
  i826.mipmapCount = i827[2]
  i826.hdr = !!i827[3]
  i826.size = i827[4]
  i826.anisoLevel = i827[5]
  i826.filterMode = i827[6]
  var i829 = i827[7]
  var i828 = []
  for(var i = 0; i < i829.length; i += 4) {
    i828.push( UnityEngine.Rect.MinMaxRect(i829[i + 0], i829[i + 1], i829[i + 2], i829[i + 3]) );
  }
  i826.rects = i828
  i826.wrapU = i827[8]
  i826.wrapV = i827[9]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i833 = data
  i832.name = i833[0]
  i832.index = i833[1]
  i832.startup = !!i833[2]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i835 = data
  i834.aspect = i835[0]
  i834.orthographic = !!i835[1]
  i834.orthographicSize = i835[2]
  i834.backgroundColor = new pc.Color(i835[3], i835[4], i835[5], i835[6])
  i834.nearClipPlane = i835[7]
  i834.farClipPlane = i835[8]
  i834.fieldOfView = i835[9]
  i834.depth = i835[10]
  i834.clearFlags = i835[11]
  i834.cullingMask = i835[12]
  i834.rect = i835[13]
  request.r(i835[14], i835[15], 0, i834, 'targetTexture')
  i834.usePhysicalProperties = !!i835[16]
  i834.focalLength = i835[17]
  i834.sensorSize = new pc.Vec2( i835[18], i835[19] )
  i834.lensShift = new pc.Vec2( i835[20], i835[21] )
  i834.gateFit = i835[22]
  i834.commandBufferCount = i835[23]
  i834.cameraType = i835[24]
  i834.enabled = !!i835[25]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i837 = data
  i836.type = i837[0]
  i836.color = new pc.Color(i837[1], i837[2], i837[3], i837[4])
  i836.cullingMask = i837[5]
  i836.intensity = i837[6]
  i836.range = i837[7]
  i836.spotAngle = i837[8]
  i836.shadows = i837[9]
  i836.shadowNormalBias = i837[10]
  i836.shadowBias = i837[11]
  i836.shadowStrength = i837[12]
  i836.shadowResolution = i837[13]
  i836.lightmapBakeType = i837[14]
  i836.renderMode = i837[15]
  request.r(i837[16], i837[17], 0, i836, 'cookie')
  i836.cookieSize = i837[18]
  i836.shadowNearPlane = i837[19]
  i836.occlusionMaskChannel = i837[20]
  i836.isBaked = !!i837[21]
  i836.mixedLightingMode = i837[22]
  i836.enabled = !!i837[23]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i839 = data
  i838.center = new pc.Vec3( i839[0], i839[1], i839[2] )
  i838.size = new pc.Vec3( i839[3], i839[4], i839[5] )
  i838.enabled = !!i839[6]
  i838.isTrigger = !!i839[7]
  request.r(i839[8], i839[9], 0, i838, 'material')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i841 = data
  i840.pivot = new pc.Vec2( i841[0], i841[1] )
  i840.anchorMin = new pc.Vec2( i841[2], i841[3] )
  i840.anchorMax = new pc.Vec2( i841[4], i841[5] )
  i840.sizeDelta = new pc.Vec2( i841[6], i841[7] )
  i840.anchoredPosition3D = new pc.Vec3( i841[8], i841[9], i841[10] )
  i840.rotation = new pc.Quat(i841[11], i841[12], i841[13], i841[14])
  i840.scale = new pc.Vec3( i841[15], i841[16], i841[17] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i843 = data
  i842.planeDistance = i843[0]
  i842.referencePixelsPerUnit = i843[1]
  i842.isFallbackOverlay = !!i843[2]
  i842.renderMode = i843[3]
  i842.renderOrder = i843[4]
  i842.sortingLayerName = i843[5]
  i842.sortingOrder = i843[6]
  i842.scaleFactor = i843[7]
  request.r(i843[8], i843[9], 0, i842, 'worldCamera')
  i842.overrideSorting = !!i843[10]
  i842.pixelPerfect = !!i843[11]
  i842.targetDisplay = i843[12]
  i842.overridePixelPerfect = !!i843[13]
  i842.enabled = !!i843[14]
  return i842
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i845 = data
  i844.m_UiScaleMode = i845[0]
  i844.m_ReferencePixelsPerUnit = i845[1]
  i844.m_ScaleFactor = i845[2]
  i844.m_ReferenceResolution = new pc.Vec2( i845[3], i845[4] )
  i844.m_ScreenMatchMode = i845[5]
  i844.m_MatchWidthOrHeight = i845[6]
  i844.m_PhysicalUnit = i845[7]
  i844.m_FallbackScreenDPI = i845[8]
  i844.m_DefaultSpriteDPI = i845[9]
  i844.m_DynamicPixelsPerUnit = i845[10]
  i844.m_PresetInfoIsWorld = !!i845[11]
  return i844
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i847 = data
  i846.m_IgnoreReversedGraphics = !!i847[0]
  i846.m_BlockingObjects = i847[1]
  i846.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i847[2] )
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i849 = data
  i848.m_Alpha = i849[0]
  i848.m_Interactable = !!i849[1]
  i848.m_BlocksRaycasts = !!i849[2]
  i848.m_IgnoreParentGroups = !!i849[3]
  i848.enabled = !!i849[4]
  return i848
}

Deserializers["TutorialAnimation"] = function (request, data, root) {
  var i850 = root || request.c( 'TutorialAnimation' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'canvasGroup')
  i850.durationFadeIn = i851[2]
  request.r(i851[3], i851[4], 0, i850, 'handRect')
  i850.durationMove = i851[5]
  i850.durationPause = i851[6]
  request.r(i851[7], i851[8], 0, i850, 'firstStart')
  request.r(i851[9], i851[10], 0, i850, 'firstEnd')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i853 = data
  i852.cullTransparentMesh = !!i853[0]
  return i852
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Image' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'm_Sprite')
  i854.m_Type = i855[2]
  i854.m_PreserveAspect = !!i855[3]
  i854.m_FillCenter = !!i855[4]
  i854.m_FillMethod = i855[5]
  i854.m_FillAmount = i855[6]
  i854.m_FillClockwise = !!i855[7]
  i854.m_FillOrigin = i855[8]
  i854.m_UseSpriteMesh = !!i855[9]
  i854.m_PixelsPerUnitMultiplier = i855[10]
  request.r(i855[11], i855[12], 0, i854, 'm_Material')
  i854.m_Maskable = !!i855[13]
  i854.m_Color = new pc.Color(i855[14], i855[15], i855[16], i855[17])
  i854.m_RaycastTarget = !!i855[18]
  i854.m_RaycastPadding = new pc.Vec4( i855[19], i855[20], i855[21], i855[22] )
  return i854
}

Deserializers["TimeBar"] = function (request, data, root) {
  var i856 = root || request.c( 'TimeBar' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'imageBar')
  request.r(i857[2], i857[3], 0, i856, 'rectArrow')
  request.r(i857[4], i857[5], 0, i856, 'rectPunch')
  i856.durationPunch = i857[6]
  var i859 = i857[7]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.imgColors = i858
  return i856
}

Deserializers["FailAnimation"] = function (request, data, root) {
  var i862 = root || request.c( 'FailAnimation' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'canvasGroup')
  request.r(i863[2], i863[3], 0, i862, 'targetScale')
  return i862
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i864 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i865 = data
  i864.m_hasFontAssetChanged = !!i865[0]
  request.r(i865[1], i865[2], 0, i864, 'm_baseMaterial')
  i864.m_maskOffset = new pc.Vec4( i865[3], i865[4], i865[5], i865[6] )
  i864.m_text = i865[7]
  i864.m_isRightToLeft = !!i865[8]
  request.r(i865[9], i865[10], 0, i864, 'm_fontAsset')
  request.r(i865[11], i865[12], 0, i864, 'm_sharedMaterial')
  var i867 = i865[13]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.m_fontSharedMaterials = i866
  request.r(i865[14], i865[15], 0, i864, 'm_fontMaterial')
  var i869 = i865[16]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i864.m_fontMaterials = i868
  i864.m_fontColor32 = UnityEngine.Color32.ConstructColor(i865[17], i865[18], i865[19], i865[20])
  i864.m_fontColor = new pc.Color(i865[21], i865[22], i865[23], i865[24])
  i864.m_enableVertexGradient = !!i865[25]
  i864.m_colorMode = i865[26]
  i864.m_fontColorGradient = request.d('TMPro.VertexGradient', i865[27], i864.m_fontColorGradient)
  request.r(i865[28], i865[29], 0, i864, 'm_fontColorGradientPreset')
  request.r(i865[30], i865[31], 0, i864, 'm_spriteAsset')
  i864.m_tintAllSprites = !!i865[32]
  request.r(i865[33], i865[34], 0, i864, 'm_StyleSheet')
  i864.m_TextStyleHashCode = i865[35]
  i864.m_overrideHtmlColors = !!i865[36]
  i864.m_faceColor = UnityEngine.Color32.ConstructColor(i865[37], i865[38], i865[39], i865[40])
  i864.m_fontSize = i865[41]
  i864.m_fontSizeBase = i865[42]
  i864.m_fontWeight = i865[43]
  i864.m_enableAutoSizing = !!i865[44]
  i864.m_fontSizeMin = i865[45]
  i864.m_fontSizeMax = i865[46]
  i864.m_fontStyle = i865[47]
  i864.m_HorizontalAlignment = i865[48]
  i864.m_VerticalAlignment = i865[49]
  i864.m_textAlignment = i865[50]
  i864.m_characterSpacing = i865[51]
  i864.m_wordSpacing = i865[52]
  i864.m_lineSpacing = i865[53]
  i864.m_lineSpacingMax = i865[54]
  i864.m_paragraphSpacing = i865[55]
  i864.m_charWidthMaxAdj = i865[56]
  i864.m_enableWordWrapping = !!i865[57]
  i864.m_wordWrappingRatios = i865[58]
  i864.m_overflowMode = i865[59]
  request.r(i865[60], i865[61], 0, i864, 'm_linkedTextComponent')
  request.r(i865[62], i865[63], 0, i864, 'parentLinkedComponent')
  i864.m_enableKerning = !!i865[64]
  i864.m_enableExtraPadding = !!i865[65]
  i864.checkPaddingRequired = !!i865[66]
  i864.m_isRichText = !!i865[67]
  i864.m_parseCtrlCharacters = !!i865[68]
  i864.m_isOrthographic = !!i865[69]
  i864.m_isCullingEnabled = !!i865[70]
  i864.m_horizontalMapping = i865[71]
  i864.m_verticalMapping = i865[72]
  i864.m_uvLineOffset = i865[73]
  i864.m_geometrySortingOrder = i865[74]
  i864.m_IsTextObjectScaleStatic = !!i865[75]
  i864.m_VertexBufferAutoSizeReduction = !!i865[76]
  i864.m_useMaxVisibleDescender = !!i865[77]
  i864.m_pageToDisplay = i865[78]
  i864.m_margin = new pc.Vec4( i865[79], i865[80], i865[81], i865[82] )
  i864.m_isUsingLegacyAnimationComponent = !!i865[83]
  i864.m_isVolumetricText = !!i865[84]
  request.r(i865[85], i865[86], 0, i864, 'm_Material')
  i864.m_Maskable = !!i865[87]
  i864.m_Color = new pc.Color(i865[88], i865[89], i865[90], i865[91])
  i864.m_RaycastTarget = !!i865[92]
  i864.m_RaycastPadding = new pc.Vec4( i865[93], i865[94], i865[95], i865[96] )
  return i864
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.VertexGradient' )
  var i871 = data
  i870.topLeft = new pc.Color(i871[0], i871[1], i871[2], i871[3])
  i870.topRight = new pc.Color(i871[4], i871[5], i871[6], i871[7])
  i870.bottomLeft = new pc.Color(i871[8], i871[9], i871[10], i871[11])
  i870.bottomRight = new pc.Color(i871[12], i871[13], i871[14], i871[15])
  return i870
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'm_FirstSelected')
  i872.m_sendNavigationEvents = !!i873[2]
  i872.m_DragThreshold = i873[3]
  return i872
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i875 = data
  i874.m_HorizontalAxis = i875[0]
  i874.m_VerticalAxis = i875[1]
  i874.m_SubmitButton = i875[2]
  i874.m_CancelButton = i875[3]
  i874.m_InputActionsPerSecond = i875[4]
  i874.m_RepeatDelay = i875[5]
  i874.m_ForceModuleActive = !!i875[6]
  i874.m_SendPointerHoverToParent = !!i875[7]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'clip')
  request.r(i877[2], i877[3], 0, i876, 'outputAudioMixerGroup')
  i876.playOnAwake = !!i877[4]
  i876.loop = !!i877[5]
  i876.time = i877[6]
  i876.volume = i877[7]
  i876.pitch = i877[8]
  i876.enabled = !!i877[9]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i879 = data
  i878.ambientIntensity = i879[0]
  i878.reflectionIntensity = i879[1]
  i878.ambientMode = i879[2]
  i878.ambientLight = new pc.Color(i879[3], i879[4], i879[5], i879[6])
  i878.ambientSkyColor = new pc.Color(i879[7], i879[8], i879[9], i879[10])
  i878.ambientGroundColor = new pc.Color(i879[11], i879[12], i879[13], i879[14])
  i878.ambientEquatorColor = new pc.Color(i879[15], i879[16], i879[17], i879[18])
  i878.fogColor = new pc.Color(i879[19], i879[20], i879[21], i879[22])
  i878.fogEndDistance = i879[23]
  i878.fogStartDistance = i879[24]
  i878.fogDensity = i879[25]
  i878.fog = !!i879[26]
  request.r(i879[27], i879[28], 0, i878, 'skybox')
  i878.fogMode = i879[29]
  var i881 = i879[30]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i881[i + 0]) );
  }
  i878.lightmaps = i880
  i878.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i879[31], i878.lightProbes)
  i878.lightmapsMode = i879[32]
  i878.mixedBakeMode = i879[33]
  i878.environmentLightingMode = i879[34]
  i878.ambientProbe = new pc.SphericalHarmonicsL2(i879[35])
  request.r(i879[36], i879[37], 0, i878, 'customReflection')
  request.r(i879[38], i879[39], 0, i878, 'defaultReflection')
  i878.defaultReflectionMode = i879[40]
  i878.defaultReflectionResolution = i879[41]
  i878.sunLightObjectId = i879[42]
  i878.pixelLightCount = i879[43]
  i878.defaultReflectionHDR = !!i879[44]
  i878.hasLightDataAsset = !!i879[45]
  i878.hasManualGenerate = !!i879[46]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'lightmapColor')
  request.r(i885[2], i885[3], 0, i884, 'lightmapDirection')
  request.r(i885[4], i885[5], 0, i884, 'shadowMask')
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i886 = root || new UnityEngine.LightProbes()
  var i887 = data
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i895 = data
  i894.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i895[0], i894.main)
  i894.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i895[1], i894.colorBySpeed)
  i894.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i895[2], i894.colorOverLifetime)
  i894.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i895[3], i894.emission)
  i894.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i895[4], i894.rotationBySpeed)
  i894.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i895[5], i894.rotationOverLifetime)
  i894.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i895[6], i894.shape)
  i894.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i895[7], i894.sizeBySpeed)
  i894.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i895[8], i894.sizeOverLifetime)
  i894.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i895[9], i894.textureSheetAnimation)
  i894.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i895[10], i894.velocityOverLifetime)
  i894.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i895[11], i894.noise)
  i894.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i895[12], i894.inheritVelocity)
  i894.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i895[13], i894.forceOverLifetime)
  i894.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i895[14], i894.limitVelocityOverLifetime)
  i894.useAutoRandomSeed = !!i895[15]
  i894.randomSeed = i895[16]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemMain()
  var i897 = data
  i896.duration = i897[0]
  i896.loop = !!i897[1]
  i896.prewarm = !!i897[2]
  i896.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[3], i896.startDelay)
  i896.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[4], i896.startLifetime)
  i896.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[5], i896.startSpeed)
  i896.startSize3D = !!i897[6]
  i896.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[7], i896.startSizeX)
  i896.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[8], i896.startSizeY)
  i896.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[9], i896.startSizeZ)
  i896.startRotation3D = !!i897[10]
  i896.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[11], i896.startRotationX)
  i896.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[12], i896.startRotationY)
  i896.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[13], i896.startRotationZ)
  i896.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i897[14], i896.startColor)
  i896.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[15], i896.gravityModifier)
  i896.simulationSpace = i897[16]
  request.r(i897[17], i897[18], 0, i896, 'customSimulationSpace')
  i896.simulationSpeed = i897[19]
  i896.useUnscaledTime = !!i897[20]
  i896.scalingMode = i897[21]
  i896.playOnAwake = !!i897[22]
  i896.maxParticles = i897[23]
  i896.emitterVelocityMode = i897[24]
  i896.stopAction = i897[25]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i898 = root || new pc.MinMaxCurve()
  var i899 = data
  i898.mode = i899[0]
  i898.curveMin = new pc.AnimationCurve( { keys_flow: i899[1] } )
  i898.curveMax = new pc.AnimationCurve( { keys_flow: i899[2] } )
  i898.curveMultiplier = i899[3]
  i898.constantMin = i899[4]
  i898.constantMax = i899[5]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i900 = root || new pc.MinMaxGradient()
  var i901 = data
  i900.mode = i901[0]
  i900.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i901[1], i900.gradientMin)
  i900.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i901[2], i900.gradientMax)
  i900.colorMin = new pc.Color(i901[3], i901[4], i901[5], i901[6])
  i900.colorMax = new pc.Color(i901[7], i901[8], i901[9], i901[10])
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i903 = data
  i902.mode = i903[0]
  var i905 = i903[1]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i905[i + 0]) );
  }
  i902.colorKeys = i904
  var i907 = i903[2]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i907[i + 0]) );
  }
  i902.alphaKeys = i906
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemColorBySpeed()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i909[1], i908.color)
  i908.range = new pc.Vec2( i909[2], i909[3] )
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i913 = data
  i912.color = new pc.Color(i913[0], i913[1], i913[2], i913[3])
  i912.time = i913[4]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i917 = data
  i916.alpha = i917[0]
  i916.time = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i918 = root || new pc.ParticleSystemColorOverLifetime()
  var i919 = data
  i918.enabled = !!i919[0]
  i918.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i919[1], i918.color)
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i920 = root || new pc.ParticleSystemEmitter()
  var i921 = data
  i920.enabled = !!i921[0]
  i920.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[1], i920.rateOverTime)
  i920.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[2], i920.rateOverDistance)
  var i923 = i921[3]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i923[i + 0]) );
  }
  i920.bursts = i922
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i926 = root || new pc.ParticleSystemBurst()
  var i927 = data
  i926.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[0], i926.count)
  i926.cycleCount = i927[1]
  i926.minCount = i927[2]
  i926.maxCount = i927[3]
  i926.repeatInterval = i927[4]
  i926.time = i927[5]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i928 = root || new pc.ParticleSystemRotationBySpeed()
  var i929 = data
  i928.enabled = !!i929[0]
  i928.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[1], i928.x)
  i928.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[2], i928.y)
  i928.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[3], i928.z)
  i928.separateAxes = !!i929[4]
  i928.range = new pc.Vec2( i929[5], i929[6] )
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i930 = root || new pc.ParticleSystemRotationOverLifetime()
  var i931 = data
  i930.enabled = !!i931[0]
  i930.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[1], i930.x)
  i930.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[2], i930.y)
  i930.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[3], i930.z)
  i930.separateAxes = !!i931[4]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i932 = root || new pc.ParticleSystemShape()
  var i933 = data
  i932.enabled = !!i933[0]
  i932.shapeType = i933[1]
  i932.randomDirectionAmount = i933[2]
  i932.sphericalDirectionAmount = i933[3]
  i932.randomPositionAmount = i933[4]
  i932.alignToDirection = !!i933[5]
  i932.radius = i933[6]
  i932.radiusMode = i933[7]
  i932.radiusSpread = i933[8]
  i932.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[9], i932.radiusSpeed)
  i932.radiusThickness = i933[10]
  i932.angle = i933[11]
  i932.length = i933[12]
  i932.boxThickness = new pc.Vec3( i933[13], i933[14], i933[15] )
  i932.meshShapeType = i933[16]
  request.r(i933[17], i933[18], 0, i932, 'mesh')
  request.r(i933[19], i933[20], 0, i932, 'meshRenderer')
  request.r(i933[21], i933[22], 0, i932, 'skinnedMeshRenderer')
  i932.useMeshMaterialIndex = !!i933[23]
  i932.meshMaterialIndex = i933[24]
  i932.useMeshColors = !!i933[25]
  i932.normalOffset = i933[26]
  i932.arc = i933[27]
  i932.arcMode = i933[28]
  i932.arcSpread = i933[29]
  i932.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[30], i932.arcSpeed)
  i932.donutRadius = i933[31]
  i932.position = new pc.Vec3( i933[32], i933[33], i933[34] )
  i932.rotation = new pc.Vec3( i933[35], i933[36], i933[37] )
  i932.scale = new pc.Vec3( i933[38], i933[39], i933[40] )
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i934 = root || new pc.ParticleSystemSizeBySpeed()
  var i935 = data
  i934.enabled = !!i935[0]
  i934.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[1], i934.x)
  i934.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[2], i934.y)
  i934.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[3], i934.z)
  i934.separateAxes = !!i935[4]
  i934.range = new pc.Vec2( i935[5], i935[6] )
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i936 = root || new pc.ParticleSystemSizeOverLifetime()
  var i937 = data
  i936.enabled = !!i937[0]
  i936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[1], i936.x)
  i936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[2], i936.y)
  i936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[3], i936.z)
  i936.separateAxes = !!i937[4]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i938 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i939 = data
  i938.enabled = !!i939[0]
  i938.mode = i939[1]
  i938.animation = i939[2]
  i938.numTilesX = i939[3]
  i938.numTilesY = i939[4]
  i938.useRandomRow = !!i939[5]
  i938.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[6], i938.frameOverTime)
  i938.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[7], i938.startFrame)
  i938.cycleCount = i939[8]
  i938.rowIndex = i939[9]
  i938.flipU = i939[10]
  i938.flipV = i939[11]
  i938.spriteCount = i939[12]
  var i941 = i939[13]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i938.sprites = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i944 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i945 = data
  i944.enabled = !!i945[0]
  i944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[1], i944.x)
  i944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[2], i944.y)
  i944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[3], i944.z)
  i944.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[4], i944.radial)
  i944.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[5], i944.speedModifier)
  i944.space = i945[6]
  i944.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[7], i944.orbitalX)
  i944.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[8], i944.orbitalY)
  i944.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[9], i944.orbitalZ)
  i944.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[10], i944.orbitalOffsetX)
  i944.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[11], i944.orbitalOffsetY)
  i944.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[12], i944.orbitalOffsetZ)
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i946 = root || new pc.ParticleSystemNoise()
  var i947 = data
  i946.enabled = !!i947[0]
  i946.separateAxes = !!i947[1]
  i946.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[2], i946.strengthX)
  i946.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[3], i946.strengthY)
  i946.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[4], i946.strengthZ)
  i946.frequency = i947[5]
  i946.damping = !!i947[6]
  i946.octaveCount = i947[7]
  i946.octaveMultiplier = i947[8]
  i946.octaveScale = i947[9]
  i946.quality = i947[10]
  i946.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[11], i946.scrollSpeed)
  i946.scrollSpeedMultiplier = i947[12]
  i946.remapEnabled = !!i947[13]
  i946.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[14], i946.remapX)
  i946.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[15], i946.remapY)
  i946.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[16], i946.remapZ)
  i946.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[17], i946.positionAmount)
  i946.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[18], i946.rotationAmount)
  i946.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[19], i946.sizeAmount)
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i948 = root || new pc.ParticleSystemInheritVelocity()
  var i949 = data
  i948.enabled = !!i949[0]
  i948.mode = i949[1]
  i948.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[2], i948.curve)
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemForceOverLifetime()
  var i951 = data
  i950.enabled = !!i951[0]
  i950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[1], i950.x)
  i950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[2], i950.y)
  i950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[3], i950.z)
  i950.space = i951[4]
  i950.randomized = !!i951[5]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i953 = data
  i952.enabled = !!i953[0]
  i952.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[1], i952.limit)
  i952.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[2], i952.limitX)
  i952.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[3], i952.limitY)
  i952.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[4], i952.limitZ)
  i952.dampen = i953[5]
  i952.separateAxes = !!i953[6]
  i952.space = i953[7]
  i952.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[8], i952.drag)
  i952.multiplyDragByParticleSize = !!i953[9]
  i952.multiplyDragByParticleVelocity = !!i953[10]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'mesh')
  i954.meshCount = i955[2]
  i954.activeVertexStreamsCount = i955[3]
  i954.alignment = i955[4]
  i954.renderMode = i955[5]
  i954.sortMode = i955[6]
  i954.lengthScale = i955[7]
  i954.velocityScale = i955[8]
  i954.cameraVelocityScale = i955[9]
  i954.normalDirection = i955[10]
  i954.sortingFudge = i955[11]
  i954.minParticleSize = i955[12]
  i954.maxParticleSize = i955[13]
  i954.pivot = new pc.Vec3( i955[14], i955[15], i955[16] )
  request.r(i955[17], i955[18], 0, i954, 'trailMaterial')
  i954.applyActiveColorSpace = !!i955[19]
  i954.enabled = !!i955[20]
  request.r(i955[21], i955[22], 0, i954, 'sharedMaterial')
  var i957 = i955[23]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i954.sharedMaterials = i956
  i954.receiveShadows = !!i955[24]
  i954.shadowCastingMode = i955[25]
  i954.sortingLayerID = i955[26]
  i954.sortingOrder = i955[27]
  i954.lightmapIndex = i955[28]
  i954.lightmapSceneIndex = i955[29]
  i954.lightmapScaleOffset = new pc.Vec4( i955[30], i955[31], i955[32], i955[33] )
  i954.lightProbeUsage = i955[34]
  i954.reflectionProbeUsage = i955[35]
  return i954
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.UI.Button' )
  var i959 = data
  i958.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i959[0], i958.m_OnClick)
  i958.m_Navigation = request.d('UnityEngine.UI.Navigation', i959[1], i958.m_Navigation)
  i958.m_Transition = i959[2]
  i958.m_Colors = request.d('UnityEngine.UI.ColorBlock', i959[3], i958.m_Colors)
  i958.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i959[4], i958.m_SpriteState)
  i958.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i959[5], i958.m_AnimationTriggers)
  i958.m_Interactable = !!i959[6]
  request.r(i959[7], i959[8], 0, i958, 'm_TargetGraphic')
  return i958
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i961 = data
  i960.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i961[0], i960.m_PersistentCalls)
  return i960
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i963 = data
  var i965 = i963[0]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i965.length; i += 1) {
    i964.add(request.d('UnityEngine.Events.PersistentCall', i965[i + 0]));
  }
  i962.m_Calls = i964
  return i962
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'm_Target')
  i968.m_TargetAssemblyTypeName = i969[2]
  i968.m_MethodName = i969[3]
  i968.m_Mode = i969[4]
  i968.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i969[5], i968.m_Arguments)
  i968.m_CallState = i969[6]
  return i968
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i971 = data
  i970.m_Mode = i971[0]
  i970.m_WrapAround = !!i971[1]
  request.r(i971[2], i971[3], 0, i970, 'm_SelectOnUp')
  request.r(i971[4], i971[5], 0, i970, 'm_SelectOnDown')
  request.r(i971[6], i971[7], 0, i970, 'm_SelectOnLeft')
  request.r(i971[8], i971[9], 0, i970, 'm_SelectOnRight')
  return i970
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i973 = data
  i972.m_NormalColor = new pc.Color(i973[0], i973[1], i973[2], i973[3])
  i972.m_HighlightedColor = new pc.Color(i973[4], i973[5], i973[6], i973[7])
  i972.m_PressedColor = new pc.Color(i973[8], i973[9], i973[10], i973[11])
  i972.m_SelectedColor = new pc.Color(i973[12], i973[13], i973[14], i973[15])
  i972.m_DisabledColor = new pc.Color(i973[16], i973[17], i973[18], i973[19])
  i972.m_ColorMultiplier = i973[20]
  i972.m_FadeDuration = i973[21]
  return i972
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'm_HighlightedSprite')
  request.r(i975[2], i975[3], 0, i974, 'm_PressedSprite')
  request.r(i975[4], i975[5], 0, i974, 'm_SelectedSprite')
  request.r(i975[6], i975[7], 0, i974, 'm_DisabledSprite')
  return i974
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i977 = data
  i976.m_NormalTrigger = i977[0]
  i976.m_HighlightedTrigger = i977[1]
  i976.m_PressedTrigger = i977[2]
  i976.m_SelectedTrigger = i977[3]
  i976.m_DisabledTrigger = i977[4]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'animatorController')
  request.r(i979[2], i979[3], 0, i978, 'avatar')
  i978.updateMode = i979[4]
  i978.hasTransformHierarchy = !!i979[5]
  i978.applyRootMotion = !!i979[6]
  var i981 = i979[7]
  var i980 = []
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 2, i980, '')
  }
  i978.humanBones = i980
  i978.enabled = !!i979[8]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i985 = data
  i984.playAutomatically = !!i985[0]
  request.r(i985[1], i985[2], 0, i984, 'clip')
  var i987 = i985[3]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 2, i986, '')
  }
  i984.clips = i986
  i984.wrapMode = i985[4]
  i984.enabled = !!i985[5]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i991 = data
  var i993 = i991[0]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i993[i + 0]));
  }
  i990.ShaderCompilationErrors = i992
  i990.name = i991[1]
  i990.guid = i991[2]
  var i995 = i991[3]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i990.shaderDefinedKeywords = i994
  var i997 = i991[4]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i997[i + 0]) );
  }
  i990.passes = i996
  var i999 = i991[5]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i999[i + 0]) );
  }
  i990.usePasses = i998
  var i1001 = i991[6]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1001[i + 0]) );
  }
  i990.defaultParameterValues = i1000
  request.r(i991[7], i991[8], 0, i990, 'unityFallbackShader')
  i990.readDepth = !!i991[9]
  i990.hasDepthOnlyPass = !!i991[10]
  i990.isCreatedByShaderGraph = !!i991[11]
  i990.disableBatching = !!i991[12]
  i990.compiled = !!i991[13]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1005 = data
  i1004.shaderName = i1005[0]
  i1004.errorMessage = i1005[1]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1010 = root || new pc.UnityShaderPass()
  var i1011 = data
  i1010.id = i1011[0]
  i1010.subShaderIndex = i1011[1]
  i1010.name = i1011[2]
  i1010.passType = i1011[3]
  i1010.grabPassTextureName = i1011[4]
  i1010.usePass = !!i1011[5]
  i1010.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[6], i1010.zTest)
  i1010.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[7], i1010.zWrite)
  i1010.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[8], i1010.culling)
  i1010.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1011[9], i1010.blending)
  i1010.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1011[10], i1010.alphaBlending)
  i1010.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[11], i1010.colorWriteMask)
  i1010.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[12], i1010.offsetUnits)
  i1010.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[13], i1010.offsetFactor)
  i1010.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[14], i1010.stencilRef)
  i1010.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[15], i1010.stencilReadMask)
  i1010.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[16], i1010.stencilWriteMask)
  i1010.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1011[17], i1010.stencilOp)
  i1010.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1011[18], i1010.stencilOpFront)
  i1010.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1011[19], i1010.stencilOpBack)
  var i1013 = i1011[20]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1013[i + 0]) );
  }
  i1010.tags = i1012
  var i1015 = i1011[21]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( i1015[i + 0] );
  }
  i1010.passDefinedKeywords = i1014
  var i1017 = i1011[22]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1017[i + 0]) );
  }
  i1010.passDefinedKeywordGroups = i1016
  var i1019 = i1011[23]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1019[i + 0]) );
  }
  i1010.variants = i1018
  var i1021 = i1011[24]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1021[i + 0]) );
  }
  i1010.excludedVariants = i1020
  i1010.hasDepthReader = !!i1011[25]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1023 = data
  i1022.val = i1023[0]
  i1022.name = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1025 = data
  i1024.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[0], i1024.src)
  i1024.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[1], i1024.dst)
  i1024.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[2], i1024.op)
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1027 = data
  i1026.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1027[0], i1026.pass)
  i1026.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1027[1], i1026.fail)
  i1026.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1027[2], i1026.zFail)
  i1026.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1027[3], i1026.comp)
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.value = i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( i1037[i + 0] );
  }
  i1034.keywords = i1036
  i1034.hasDiscard = !!i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1041 = data
  i1040.passId = i1041[0]
  i1040.subShaderIndex = i1041[1]
  var i1043 = i1041[2]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1040.keywords = i1042
  i1040.vertexProgram = i1041[3]
  i1040.fragmentProgram = i1041[4]
  i1040.exportedForWebGl2 = !!i1041[5]
  i1040.readDepth = !!i1041[6]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'shader')
  i1046.pass = i1047[2]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1051 = data
  i1050.name = i1051[0]
  i1050.type = i1051[1]
  i1050.value = new pc.Vec4( i1051[2], i1051[3], i1051[4], i1051[5] )
  i1050.textureValue = i1051[6]
  i1050.shaderPropertyFlag = i1051[7]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1053 = data
  i1052.name = i1053[0]
  request.r(i1053[1], i1053[2], 0, i1052, 'texture')
  i1052.aabb = i1053[3]
  i1052.vertices = i1053[4]
  i1052.triangles = i1053[5]
  i1052.textureRect = UnityEngine.Rect.MinMaxRect(i1053[6], i1053[7], i1053[8], i1053[9])
  i1052.packedRect = UnityEngine.Rect.MinMaxRect(i1053[10], i1053[11], i1053[12], i1053[13])
  i1052.border = new pc.Vec4( i1053[14], i1053[15], i1053[16], i1053[17] )
  i1052.transparency = i1053[18]
  i1052.bounds = i1053[19]
  i1052.pixelsPerUnit = i1053[20]
  i1052.textureWidth = i1053[21]
  i1052.textureHeight = i1053[22]
  i1052.nativeSize = new pc.Vec2( i1053[23], i1053[24] )
  i1052.pivot = new pc.Vec2( i1053[25], i1053[26] )
  i1052.textureRectOffset = new pc.Vec2( i1053[27], i1053[28] )
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1055 = data
  i1054.name = i1055[0]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1057 = data
  i1056.name = i1057[0]
  i1056.wrapMode = i1057[1]
  i1056.isLooping = !!i1057[2]
  i1056.length = i1057[3]
  var i1059 = i1057[4]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1059[i + 0]) );
  }
  i1056.curves = i1058
  var i1061 = i1057[5]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1061[i + 0]) );
  }
  i1056.events = i1060
  i1056.halfPrecision = !!i1057[6]
  i1056._frameRate = i1057[7]
  i1056.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1057[8], i1056.localBounds)
  i1056.hasMuscleCurves = !!i1057[9]
  var i1063 = i1057[10]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1056.clipMuscleConstant = i1062
  i1056.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1057[11], i1056.clipBindingConstant)
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1067 = data
  i1066.path = i1067[0]
  i1066.hash = i1067[1]
  i1066.componentType = i1067[2]
  i1066.property = i1067[3]
  i1066.keys = i1067[4]
  var i1069 = i1067[5]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1069[i + 0]) );
  }
  i1066.objectReferenceKeys = i1068
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1073 = data
  i1072.functionName = i1073[0]
  i1072.floatParameter = i1073[1]
  i1072.intParameter = i1073[2]
  i1072.stringParameter = i1073[3]
  request.r(i1073[4], i1073[5], 0, i1072, 'objectReferenceParameter')
  i1072.time = i1073[6]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1075 = data
  i1074.center = new pc.Vec3( i1075[0], i1075[1], i1075[2] )
  i1074.extends = new pc.Vec3( i1075[3], i1075[4], i1075[5] )
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1078.genericBindings = i1080
  var i1083 = i1079[1]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1078.pptrCurveMapping = i1082
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1087 = data
  i1086.time = i1087[0]
  request.r(i1087[1], i1087[2], 0, i1086, 'value')
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1089 = data
  i1088.name = i1089[0]
  i1088.ascent = i1089[1]
  i1088.originalLineHeight = i1089[2]
  i1088.fontSize = i1089[3]
  var i1091 = i1089[4]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1091[i + 0]) );
  }
  i1088.characterInfo = i1090
  request.r(i1089[5], i1089[6], 0, i1088, 'texture')
  i1088.originalFontSize = i1089[7]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1095 = data
  i1094.index = i1095[0]
  i1094.advance = i1095[1]
  i1094.bearing = i1095[2]
  i1094.glyphWidth = i1095[3]
  i1094.glyphHeight = i1095[4]
  i1094.minX = i1095[5]
  i1094.maxX = i1095[6]
  i1094.minY = i1095[7]
  i1094.maxY = i1095[8]
  i1094.uvBottomLeftX = i1095[9]
  i1094.uvBottomLeftY = i1095[10]
  i1094.uvBottomRightX = i1095[11]
  i1094.uvBottomRightY = i1095[12]
  i1094.uvTopLeftX = i1095[13]
  i1094.uvTopLeftY = i1095[14]
  i1094.uvTopRightX = i1095[15]
  i1094.uvTopRightY = i1095[16]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1097 = data
  i1096.name = i1097[0]
  var i1099 = i1097[1]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1099[i + 0]) );
  }
  i1096.layers = i1098
  var i1101 = i1097[2]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1101[i + 0]) );
  }
  i1096.parameters = i1100
  i1096.animationClips = i1097[3]
  i1096.avatarUnsupported = i1097[4]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1105 = data
  i1104.name = i1105[0]
  i1104.defaultWeight = i1105[1]
  i1104.blendingMode = i1105[2]
  i1104.avatarMask = i1105[3]
  i1104.syncedLayerIndex = i1105[4]
  i1104.syncedLayerAffectsTiming = !!i1105[5]
  i1104.syncedLayers = i1105[6]
  i1104.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1105[7], i1104.stateMachine)
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1107 = data
  i1106.id = i1107[0]
  i1106.name = i1107[1]
  i1106.path = i1107[2]
  var i1109 = i1107[3]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1109[i + 0]) );
  }
  i1106.states = i1108
  var i1111 = i1107[4]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1111[i + 0]) );
  }
  i1106.machines = i1110
  var i1113 = i1107[5]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1113[i + 0]) );
  }
  i1106.entryStateTransitions = i1112
  var i1115 = i1107[6]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1115[i + 0]) );
  }
  i1106.exitStateTransitions = i1114
  var i1117 = i1107[7]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1117[i + 0]) );
  }
  i1106.anyStateTransitions = i1116
  i1106.defaultStateId = i1107[8]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1121 = data
  i1120.id = i1121[0]
  i1120.name = i1121[1]
  i1120.cycleOffset = i1121[2]
  i1120.cycleOffsetParameter = i1121[3]
  i1120.cycleOffsetParameterActive = !!i1121[4]
  i1120.mirror = !!i1121[5]
  i1120.mirrorParameter = i1121[6]
  i1120.mirrorParameterActive = !!i1121[7]
  i1120.motionId = i1121[8]
  i1120.nameHash = i1121[9]
  i1120.fullPathHash = i1121[10]
  i1120.speed = i1121[11]
  i1120.speedParameter = i1121[12]
  i1120.speedParameterActive = !!i1121[13]
  i1120.tag = i1121[14]
  i1120.tagHash = i1121[15]
  i1120.writeDefaultValues = !!i1121[16]
  var i1123 = i1121[17]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 2, i1122, '')
  }
  i1120.behaviours = i1122
  var i1125 = i1121[18]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1125[i + 0]) );
  }
  i1120.transitions = i1124
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1131 = data
  i1130.fullPath = i1131[0]
  i1130.canTransitionToSelf = !!i1131[1]
  i1130.duration = i1131[2]
  i1130.exitTime = i1131[3]
  i1130.hasExitTime = !!i1131[4]
  i1130.hasFixedDuration = !!i1131[5]
  i1130.interruptionSource = i1131[6]
  i1130.offset = i1131[7]
  i1130.orderedInterruption = !!i1131[8]
  i1130.destinationStateId = i1131[9]
  i1130.isExit = !!i1131[10]
  i1130.mute = !!i1131[11]
  i1130.solo = !!i1131[12]
  var i1133 = i1131[13]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1133[i + 0]) );
  }
  i1130.conditions = i1132
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1137 = data
  i1136.mode = i1137[0]
  i1136.parameter = i1137[1]
  i1136.threshold = i1137[2]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1143 = data
  i1142.destinationStateId = i1143[0]
  i1142.isExit = !!i1143[1]
  i1142.mute = !!i1143[2]
  i1142.solo = !!i1143[3]
  var i1145 = i1143[4]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1145[i + 0]) );
  }
  i1142.conditions = i1144
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1149 = data
  i1148.defaultBool = !!i1149[0]
  i1148.defaultFloat = i1149[1]
  i1148.defaultInt = i1149[2]
  i1148.name = i1149[3]
  i1148.nameHash = i1149[4]
  i1148.type = i1149[5]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.bytes64 = i1151[1]
  i1150.data = i1151[2]
  return i1150
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'atlas')
  i1152.normalStyle = i1153[2]
  i1152.normalSpacingOffset = i1153[3]
  i1152.boldStyle = i1153[4]
  i1152.boldSpacing = i1153[5]
  i1152.italicStyle = i1153[6]
  i1152.tabSize = i1153[7]
  i1152.hashCode = i1153[8]
  request.r(i1153[9], i1153[10], 0, i1152, 'material')
  i1152.materialHashCode = i1153[11]
  i1152.m_Version = i1153[12]
  i1152.m_SourceFontFileGUID = i1153[13]
  request.r(i1153[14], i1153[15], 0, i1152, 'm_SourceFontFile_EditorRef')
  request.r(i1153[16], i1153[17], 0, i1152, 'm_SourceFontFile')
  i1152.m_AtlasPopulationMode = i1153[18]
  i1152.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1153[19], i1152.m_FaceInfo)
  var i1155 = i1153[20]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.add(request.d('UnityEngine.TextCore.Glyph', i1155[i + 0]));
  }
  i1152.m_GlyphTable = i1154
  var i1157 = i1153[21]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.add(request.d('TMPro.TMP_Character', i1157[i + 0]));
  }
  i1152.m_CharacterTable = i1156
  var i1159 = i1153[22]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 2) {
  request.r(i1159[i + 0], i1159[i + 1], 2, i1158, '')
  }
  i1152.m_AtlasTextures = i1158
  i1152.m_AtlasTextureIndex = i1153[23]
  i1152.m_IsMultiAtlasTexturesEnabled = !!i1153[24]
  i1152.m_ClearDynamicDataOnBuild = !!i1153[25]
  var i1161 = i1153[26]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('UnityEngine.TextCore.GlyphRect', i1161[i + 0]));
  }
  i1152.m_UsedGlyphRects = i1160
  var i1163 = i1153[27]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.add(request.d('UnityEngine.TextCore.GlyphRect', i1163[i + 0]));
  }
  i1152.m_FreeGlyphRects = i1162
  i1152.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1153[28], i1152.m_fontInfo)
  i1152.m_AtlasWidth = i1153[29]
  i1152.m_AtlasHeight = i1153[30]
  i1152.m_AtlasPadding = i1153[31]
  i1152.m_AtlasRenderMode = i1153[32]
  var i1165 = i1153[33]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('TMPro.TMP_Glyph', i1165[i + 0]));
  }
  i1152.m_glyphInfoList = i1164
  i1152.m_KerningTable = request.d('TMPro.KerningTable', i1153[34], i1152.m_KerningTable)
  i1152.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1153[35], i1152.m_FontFeatureTable)
  var i1167 = i1153[36]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 1, i1166, '')
  }
  i1152.fallbackFontAssets = i1166
  var i1169 = i1153[37]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1169.length; i += 2) {
  request.r(i1169[i + 0], i1169[i + 1], 1, i1168, '')
  }
  i1152.m_FallbackFontAssetTable = i1168
  i1152.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1153[38], i1152.m_CreationSettings)
  var i1171 = i1153[39]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('TMPro.TMP_FontWeightPair', i1171[i + 0]) );
  }
  i1152.m_FontWeightTable = i1170
  var i1173 = i1153[40]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('TMPro.TMP_FontWeightPair', i1173[i + 0]) );
  }
  i1152.fontWeights = i1172
  return i1152
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1175 = data
  i1174.m_FaceIndex = i1175[0]
  i1174.m_FamilyName = i1175[1]
  i1174.m_StyleName = i1175[2]
  i1174.m_PointSize = i1175[3]
  i1174.m_Scale = i1175[4]
  i1174.m_UnitsPerEM = i1175[5]
  i1174.m_LineHeight = i1175[6]
  i1174.m_AscentLine = i1175[7]
  i1174.m_CapLine = i1175[8]
  i1174.m_MeanLine = i1175[9]
  i1174.m_Baseline = i1175[10]
  i1174.m_DescentLine = i1175[11]
  i1174.m_SuperscriptOffset = i1175[12]
  i1174.m_SuperscriptSize = i1175[13]
  i1174.m_SubscriptOffset = i1175[14]
  i1174.m_SubscriptSize = i1175[15]
  i1174.m_UnderlineOffset = i1175[16]
  i1174.m_UnderlineThickness = i1175[17]
  i1174.m_StrikethroughOffset = i1175[18]
  i1174.m_StrikethroughThickness = i1175[19]
  i1174.m_TabWidth = i1175[20]
  return i1174
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1179 = data
  i1178.m_Index = i1179[0]
  i1178.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1179[1], i1178.m_Metrics)
  i1178.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1179[2], i1178.m_GlyphRect)
  i1178.m_Scale = i1179[3]
  i1178.m_AtlasIndex = i1179[4]
  i1178.m_ClassDefinitionType = i1179[5]
  return i1178
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1181 = data
  i1180.m_Width = i1181[0]
  i1180.m_Height = i1181[1]
  i1180.m_HorizontalBearingX = i1181[2]
  i1180.m_HorizontalBearingY = i1181[3]
  i1180.m_HorizontalAdvance = i1181[4]
  return i1180
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1183 = data
  i1182.m_X = i1183[0]
  i1182.m_Y = i1183[1]
  i1182.m_Width = i1183[2]
  i1182.m_Height = i1183[3]
  return i1182
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_Character' )
  var i1187 = data
  i1186.m_ElementType = i1187[0]
  i1186.m_Unicode = i1187[1]
  i1186.m_GlyphIndex = i1187[2]
  i1186.m_Scale = i1187[3]
  return i1186
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1193 = data
  i1192.Name = i1193[0]
  i1192.PointSize = i1193[1]
  i1192.Scale = i1193[2]
  i1192.CharacterCount = i1193[3]
  i1192.LineHeight = i1193[4]
  i1192.Baseline = i1193[5]
  i1192.Ascender = i1193[6]
  i1192.CapHeight = i1193[7]
  i1192.Descender = i1193[8]
  i1192.CenterLine = i1193[9]
  i1192.SuperscriptOffset = i1193[10]
  i1192.SubscriptOffset = i1193[11]
  i1192.SubSize = i1193[12]
  i1192.Underline = i1193[13]
  i1192.UnderlineThickness = i1193[14]
  i1192.strikethrough = i1193[15]
  i1192.strikethroughThickness = i1193[16]
  i1192.TabWidth = i1193[17]
  i1192.Padding = i1193[18]
  i1192.AtlasWidth = i1193[19]
  i1192.AtlasHeight = i1193[20]
  return i1192
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1197 = data
  i1196.id = i1197[0]
  i1196.x = i1197[1]
  i1196.y = i1197[2]
  i1196.width = i1197[3]
  i1196.height = i1197[4]
  i1196.xOffset = i1197[5]
  i1196.yOffset = i1197[6]
  i1196.xAdvance = i1197[7]
  i1196.scale = i1197[8]
  return i1196
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.KerningTable' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('TMPro.KerningPair', i1201[i + 0]));
  }
  i1198.kerningPairs = i1200
  return i1198
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.KerningPair' )
  var i1205 = data
  i1204.xOffset = i1205[0]
  i1204.m_FirstGlyph = i1205[1]
  i1204.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1205[2], i1204.m_FirstGlyphAdjustments)
  i1204.m_SecondGlyph = i1205[3]
  i1204.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1205[4], i1204.m_SecondGlyphAdjustments)
  i1204.m_IgnoreSpacingAdjustments = !!i1205[5]
  return i1204
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1207 = data
  var i1209 = i1207[0]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1209[i + 0]));
  }
  i1206.m_GlyphPairAdjustmentRecords = i1208
  return i1206
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1213 = data
  i1212.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1213[0], i1212.m_FirstAdjustmentRecord)
  i1212.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1213[1], i1212.m_SecondAdjustmentRecord)
  i1212.m_FeatureLookupFlags = i1213[2]
  return i1212
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1215 = data
  i1214.m_GlyphIndex = i1215[0]
  i1214.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1215[1], i1214.m_GlyphValueRecord)
  return i1214
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1217 = data
  i1216.m_XPlacement = i1217[0]
  i1216.m_YPlacement = i1217[1]
  i1216.m_XAdvance = i1217[2]
  i1216.m_YAdvance = i1217[3]
  return i1216
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1221 = data
  i1220.sourceFontFileName = i1221[0]
  i1220.sourceFontFileGUID = i1221[1]
  i1220.pointSizeSamplingMode = i1221[2]
  i1220.pointSize = i1221[3]
  i1220.padding = i1221[4]
  i1220.packingMode = i1221[5]
  i1220.atlasWidth = i1221[6]
  i1220.atlasHeight = i1221[7]
  i1220.characterSetSelectionMode = i1221[8]
  i1220.characterSequence = i1221[9]
  i1220.referencedFontAssetGUID = i1221[10]
  i1220.referencedTextAssetGUID = i1221[11]
  i1220.fontStyle = i1221[12]
  i1220.fontStyleModifier = i1221[13]
  i1220.renderMode = i1221[14]
  i1220.includeFontFeatures = !!i1221[15]
  return i1220
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1225 = data
  request.r(i1225[0], i1225[1], 0, i1224, 'regularTypeface')
  request.r(i1225[2], i1225[3], 0, i1224, 'italicTypeface')
  return i1224
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1226 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1227 = data
  i1226.useSafeMode = !!i1227[0]
  i1226.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1227[1], i1226.safeModeOptions)
  i1226.timeScale = i1227[2]
  i1226.unscaledTimeScale = i1227[3]
  i1226.useSmoothDeltaTime = !!i1227[4]
  i1226.maxSmoothUnscaledTime = i1227[5]
  i1226.rewindCallbackMode = i1227[6]
  i1226.showUnityEditorReport = !!i1227[7]
  i1226.logBehaviour = i1227[8]
  i1226.drawGizmos = !!i1227[9]
  i1226.defaultRecyclable = !!i1227[10]
  i1226.defaultAutoPlay = i1227[11]
  i1226.defaultUpdateType = i1227[12]
  i1226.defaultTimeScaleIndependent = !!i1227[13]
  i1226.defaultEaseType = i1227[14]
  i1226.defaultEaseOvershootOrAmplitude = i1227[15]
  i1226.defaultEasePeriod = i1227[16]
  i1226.defaultAutoKill = !!i1227[17]
  i1226.defaultLoopType = i1227[18]
  i1226.debugMode = !!i1227[19]
  i1226.debugStoreTargetId = !!i1227[20]
  i1226.showPreviewPanel = !!i1227[21]
  i1226.storeSettingsLocation = i1227[22]
  i1226.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1227[23], i1226.modules)
  i1226.createASMDEF = !!i1227[24]
  i1226.showPlayingTweens = !!i1227[25]
  i1226.showPausedTweens = !!i1227[26]
  return i1226
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1228 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1229 = data
  i1228.logBehaviour = i1229[0]
  i1228.nestedTweenFailureBehaviour = i1229[1]
  return i1228
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1230 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1231 = data
  i1230.showPanel = !!i1231[0]
  i1230.audioEnabled = !!i1231[1]
  i1230.physicsEnabled = !!i1231[2]
  i1230.physics2DEnabled = !!i1231[3]
  i1230.spriteEnabled = !!i1231[4]
  i1230.uiEnabled = !!i1231[5]
  i1230.uiToolkitEnabled = !!i1231[6]
  i1230.textMeshProEnabled = !!i1231[7]
  i1230.tk2DEnabled = !!i1231[8]
  i1230.deAudioEnabled = !!i1231[9]
  i1230.deUnityExtendedEnabled = !!i1231[10]
  i1230.epoOutlineEnabled = !!i1231[11]
  return i1230
}

Deserializers["HexFabricData"] = function (request, data, root) {
  var i1232 = root || request.c( 'HexFabricData' )
  var i1233 = data
  request.r(i1233[0], i1233[1], 0, i1232, 'HexObjectPref')
  request.r(i1233[2], i1233[3], 0, i1232, 'FxDestroy')
  i1232.ScaleCameraShake = new pc.Vec3( i1233[4], i1233[5], i1233[6] )
  return i1232
}

Deserializers["HexGameRuleData"] = function (request, data, root) {
  var i1234 = root || request.c( 'HexGameRuleData' )
  var i1235 = data
  var i1237 = i1235[0]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroopPreset')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('HexGroopPreset', i1237[i + 0]));
  }
  i1234.startHexes = i1236
  i1234.GameTimer = i1235[1]
  return i1234
}

Deserializers["HexGroopPreset"] = function (request, data, root) {
  var i1240 = root || request.c( 'HexGroopPreset' )
  var i1241 = data
  var i1243 = i1241[0]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( i1243[i + 0] );
  }
  i1240.colors = i1242
  return i1240
}

Deserializers["HexSoundEffectsData"] = function (request, data, root) {
  var i1246 = root || request.c( 'HexSoundEffectsData' )
  var i1247 = data
  i1246.DestroySFX = request.d('AudioPlayData', i1247[0], i1246.DestroySFX)
  i1246.StuckSFX = request.d('AudioPlayData', i1247[1], i1246.StuckSFX)
  i1246.ByOneSFX = request.d('AudioPlayData', i1247[2], i1246.ByOneSFX)
  i1246.DeliteHexSFX = request.d('AudioPlayData', i1247[3], i1246.DeliteHexSFX)
  return i1246
}

Deserializers["AudioPlayData"] = function (request, data, root) {
  var i1248 = root || request.c( 'AudioPlayData' )
  var i1249 = data
  i1248.ID = i1249[0]
  request.r(i1249[1], i1249[2], 0, i1248, 'clip')
  i1248.volume = i1249[3]
  i1248.pitch = i1249[4]
  return i1248
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1251 = data
  request.r(i1251[0], i1251[1], 0, i1250, 'spriteSheet')
  var i1253 = i1251[2]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('TMPro.TMP_Sprite', i1253[i + 0]));
  }
  i1250.spriteInfoList = i1252
  var i1255 = i1251[3]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1255.length; i += 2) {
  request.r(i1255[i + 0], i1255[i + 1], 1, i1254, '')
  }
  i1250.fallbackSpriteAssets = i1254
  i1250.hashCode = i1251[4]
  request.r(i1251[5], i1251[6], 0, i1250, 'material')
  i1250.materialHashCode = i1251[7]
  i1250.m_Version = i1251[8]
  i1250.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1251[9], i1250.m_FaceInfo)
  var i1257 = i1251[10]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('TMPro.TMP_SpriteCharacter', i1257[i + 0]));
  }
  i1250.m_SpriteCharacterTable = i1256
  var i1259 = i1251[11]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('TMPro.TMP_SpriteGlyph', i1259[i + 0]));
  }
  i1250.m_SpriteGlyphTable = i1258
  return i1250
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1263 = data
  i1262.name = i1263[0]
  i1262.hashCode = i1263[1]
  i1262.unicode = i1263[2]
  i1262.pivot = new pc.Vec2( i1263[3], i1263[4] )
  request.r(i1263[5], i1263[6], 0, i1262, 'sprite')
  i1262.id = i1263[7]
  i1262.x = i1263[8]
  i1262.y = i1263[9]
  i1262.width = i1263[10]
  i1262.height = i1263[11]
  i1262.xOffset = i1263[12]
  i1262.yOffset = i1263[13]
  i1262.xAdvance = i1263[14]
  i1262.scale = i1263[15]
  return i1262
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1269 = data
  i1268.m_Name = i1269[0]
  i1268.m_HashCode = i1269[1]
  i1268.m_ElementType = i1269[2]
  i1268.m_Unicode = i1269[3]
  i1268.m_GlyphIndex = i1269[4]
  i1268.m_Scale = i1269[5]
  return i1268
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1273 = data
  request.r(i1273[0], i1273[1], 0, i1272, 'sprite')
  i1272.m_Index = i1273[2]
  i1272.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1273[3], i1272.m_Metrics)
  i1272.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1273[4], i1272.m_GlyphRect)
  i1272.m_Scale = i1273[5]
  i1272.m_AtlasIndex = i1273[6]
  i1272.m_ClassDefinitionType = i1273[7]
  return i1272
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.TMP_Style', i1277[i + 0]));
  }
  i1274.m_StyleList = i1276
  return i1274
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_Style' )
  var i1281 = data
  i1280.m_Name = i1281[0]
  i1280.m_HashCode = i1281[1]
  i1280.m_OpeningDefinition = i1281[2]
  i1280.m_ClosingDefinition = i1281[3]
  i1280.m_OpeningTagArray = i1281[4]
  i1280.m_ClosingTagArray = i1281[5]
  i1280.m_OpeningTagUnicodeArray = i1281[6]
  i1280.m_ClosingTagUnicodeArray = i1281[7]
  return i1280
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_Settings' )
  var i1283 = data
  i1282.m_enableWordWrapping = !!i1283[0]
  i1282.m_enableKerning = !!i1283[1]
  i1282.m_enableExtraPadding = !!i1283[2]
  i1282.m_enableTintAllSprites = !!i1283[3]
  i1282.m_enableParseEscapeCharacters = !!i1283[4]
  i1282.m_EnableRaycastTarget = !!i1283[5]
  i1282.m_GetFontFeaturesAtRuntime = !!i1283[6]
  i1282.m_missingGlyphCharacter = i1283[7]
  i1282.m_warningsDisabled = !!i1283[8]
  request.r(i1283[9], i1283[10], 0, i1282, 'm_defaultFontAsset')
  i1282.m_defaultFontAssetPath = i1283[11]
  i1282.m_defaultFontSize = i1283[12]
  i1282.m_defaultAutoSizeMinRatio = i1283[13]
  i1282.m_defaultAutoSizeMaxRatio = i1283[14]
  i1282.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1283[15], i1283[16] )
  i1282.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1283[17], i1283[18] )
  i1282.m_autoSizeTextContainer = !!i1283[19]
  i1282.m_IsTextObjectScaleStatic = !!i1283[20]
  var i1285 = i1283[21]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1285.length; i += 2) {
  request.r(i1285[i + 0], i1285[i + 1], 1, i1284, '')
  }
  i1282.m_fallbackFontAssets = i1284
  i1282.m_matchMaterialPreset = !!i1283[22]
  request.r(i1283[23], i1283[24], 0, i1282, 'm_defaultSpriteAsset')
  i1282.m_defaultSpriteAssetPath = i1283[25]
  i1282.m_enableEmojiSupport = !!i1283[26]
  i1282.m_MissingCharacterSpriteUnicode = i1283[27]
  i1282.m_defaultColorGradientPresetsPath = i1283[28]
  request.r(i1283[29], i1283[30], 0, i1282, 'm_defaultStyleSheet')
  i1282.m_StyleSheetsResourcePath = i1283[31]
  request.r(i1283[32], i1283[33], 0, i1282, 'm_leadingCharacters')
  request.r(i1283[34], i1283[35], 0, i1282, 'm_followingCharacters')
  i1282.m_UseModernHangulLineBreakingRules = !!i1283[36]
  return i1282
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i1287 = data
  i1286._svcLunaVersion = i1287[0]
  var i1289 = i1287[1]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d(' . ⁊', i1289[i + 0]));
  }
  i1286._shaderVariants = i1288
  var i1291 = i1287[2]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d(' . ⁊', i1291[i + 0]));
  }
  i1286._usedByLunaBuild = i1290
  var i1293 = i1287[3]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d(' . ⁊', i1293[i + 0]));
  }
  i1286._includedShaderVariants = i1292
  var i1295 = i1287[4]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d(' . ⁊', i1295[i + 0]));
  }
  i1286._excludedShaderVariants = i1294
  i1286.version = System.Int64(i1287[5])
  var i1297 = i1287[6]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i1297[i + 0]));
  }
  i1286._shaderParsedShaders = i1296
  var i1299 = i1287[7]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(i1299[i + 0]);
  }
  i1286._modifiedShaders = i1298
  i1286.invalidShaders = !!i1287[8]
  return i1286
}

Deserializers[" . ⁊"] = function (request, data, root) {
  var i1302 = root || request.c( ' . ⁊' )
  var i1303 = data
  i1302.shaderCompilerPlatform = i1303[0]
  request.r(i1303[1], i1303[2], 0, i1302, 'shader')
  i1302.passType = i1303[3]
  i1302.passId = i1303[4]
  i1302.subShaderIndex = i1303[5]
  i1302.upToDate = !!i1303[6]
  i1302.keywords = request.d(' . ⁮', i1303[7], i1302.keywords)
  return i1302
}

Deserializers[" . ⁮"] = function (request, data, root) {
  var i1304 = root || request.c( ' . ⁮' )
  var i1305 = data
  var i1307 = i1305[0]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( i1307[i + 0] );
  }
  i1304. ‥ = i1306
  return i1304
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i1311 = data
  var i1313 = i1311[0]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i1313[i + 0]));
  }
  i1310.ParsedSubShaders = i1312
  request.r(i1311[1], i1311[2], 0, i1310, 'Shader')
  i1310.ShaderPath = i1311[3]
  var i1315 = i1311[4]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( i1315[i + 0] );
  }
  i1310.ShaderDefinedKeywords = i1314
  request.r(i1311[5], i1311[6], 0, i1310, 'fallbackShader')
  var i1317 = i1311[7]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i1317[i + 0]));
  }
  i1310.CompilationErrors = i1316
  var i1319 = i1311[8]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.add(request.d(' . ⁊', i1319[i + 0]));
  }
  i1310.Variants = i1318
  return i1310
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i1323 = data
  i1322.Index = i1323[0]
  var i1325 = i1323[1]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i1325[i + 0]));
  }
  i1322.Passes = i1324
  request.r(i1323[2], i1323[3], 0, i1322, 'Shader')
  var i1327 = i1323[4]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1327[i + 0]));
  }
  i1322.Tags = i1326
  return i1322
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i1331 = data
  request.r(i1331[0], i1331[1], 0, i1330, 'Shader')
  var i1333 = i1331[2]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i1333[i + 0]));
  }
  i1330.ShaderVariants = i1332
  i1330.DefinedKeywords = request.d(' . ⁮', i1331[3], i1330.DefinedKeywords)
  var i1335 = i1331[4]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i1335[i + 0]));
  }
  i1330.KeywordGroups = i1334
  i1330.KeywordsMinimalCardinality = i1331[5]
  i1330.ContainsInvalidVariant = !!i1331[6]
  var i1337 = i1331[7]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d(' . ⁊', i1337[i + 0]));
  }
  i1330.VariantStructures = i1336
  var i1339 = i1331[8]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i1339[i + 0]));
  }
  i1330.CompilationErrors = i1338
  i1330.HasDepthReader = !!i1331[9]
  i1330.Id = i1331[10]
  i1330.SubShaderIndex = i1331[11]
  i1330.SerializedObjectId = i1331[12]
  var i1341 = i1331[13]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1341[i + 0]));
  }
  i1330.Tags = i1340
  i1330.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i1331[14], i1330.UsePass)
  i1330.GrabPassTextureName = i1331[15]
  i1330.PlatformMask = i1331[16]
  return i1330
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i1345 = data
  i1344.ShaderCompilerPlatform = i1345[0]
  i1344.NoShaderVariant = !!i1345[1]
  i1344.VertexProgram = i1345[2]
  i1344.FragmentProgram = i1345[3]
  i1344.LOD = i1345[4]
  i1344.readDepth = !!i1345[5]
  i1344.PassId = i1345[6]
  i1344.SubShaderIndex = i1345[7]
  i1344.Keywords = request.d(' . ⁮', i1345[8], i1344.Keywords)
  var i1347 = i1345[9]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1347[i + 0]));
  }
  i1344.Tags = i1346
  return i1344
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i1351 = data
  var i1353 = i1351[0]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.add(i1353[i + 0]);
  }
  i1350.Keywords = i1352
  i1350.hasDiscard = !!i1351[1]
  return i1350
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i1357 = data
  i1356.Variant = !!i1357[0]
  i1356.ShaderName = i1357[1]
  var i1359 = i1357[2]
  var i1358 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i1359[i + 0]));
  }
  i1356.Details = i1358
  return i1356
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i1363 = data
  i1362.Key = i1363[0]
  i1362.Value = i1363[1]
  return i1362
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i1365 = data
  i1364.shader = i1365[0]
  i1364.pass = i1365[1]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1369 = data
  var i1371 = i1369[0]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1371[i + 0]) );
  }
  i1368.files = i1370
  i1368.componentToPrefabIds = i1369[1]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1375 = data
  i1374.path = i1375[0]
  request.r(i1375[1], i1375[2], 0, i1374, 'unityObject')
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1377 = data
  var i1379 = i1377[0]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1379[i + 0]) );
  }
  i1376.scriptsExecutionOrder = i1378
  var i1381 = i1377[1]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1381[i + 0]) );
  }
  i1376.sortingLayers = i1380
  var i1383 = i1377[2]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1383[i + 0]) );
  }
  i1376.cullingLayers = i1382
  i1376.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1377[3], i1376.timeSettings)
  i1376.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1377[4], i1376.physicsSettings)
  i1376.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1377[5], i1376.physics2DSettings)
  i1376.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1377[6], i1376.qualitySettings)
  i1376.enableRealtimeShadows = !!i1377[7]
  i1376.enableAutoInstancing = !!i1377[8]
  i1376.enableStaticBatching = !!i1377[9]
  i1376.enableDynamicBatching = !!i1377[10]
  i1376.usePreservativeDynamicBatching = !!i1377[11]
  i1376.lightmapEncodingQuality = i1377[12]
  i1376.desiredColorSpace = i1377[13]
  var i1385 = i1377[14]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( i1385[i + 0] );
  }
  i1376.allTags = i1384
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1389 = data
  i1388.name = i1389[0]
  i1388.value = i1389[1]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1393 = data
  i1392.id = i1393[0]
  i1392.name = i1393[1]
  i1392.value = i1393[2]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1397 = data
  i1396.id = i1397[0]
  i1396.name = i1397[1]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1399 = data
  i1398.fixedDeltaTime = i1399[0]
  i1398.maximumDeltaTime = i1399[1]
  i1398.timeScale = i1399[2]
  i1398.maximumParticleTimestep = i1399[3]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1401 = data
  i1400.gravity = new pc.Vec3( i1401[0], i1401[1], i1401[2] )
  i1400.defaultSolverIterations = i1401[3]
  i1400.bounceThreshold = i1401[4]
  i1400.autoSyncTransforms = !!i1401[5]
  i1400.autoSimulation = !!i1401[6]
  var i1403 = i1401[7]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1403[i + 0]) );
  }
  i1400.collisionMatrix = i1402
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1407 = data
  i1406.enabled = !!i1407[0]
  i1406.layerId = i1407[1]
  i1406.otherLayerId = i1407[2]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1409 = data
  request.r(i1409[0], i1409[1], 0, i1408, 'material')
  i1408.gravity = new pc.Vec2( i1409[2], i1409[3] )
  i1408.positionIterations = i1409[4]
  i1408.velocityIterations = i1409[5]
  i1408.velocityThreshold = i1409[6]
  i1408.maxLinearCorrection = i1409[7]
  i1408.maxAngularCorrection = i1409[8]
  i1408.maxTranslationSpeed = i1409[9]
  i1408.maxRotationSpeed = i1409[10]
  i1408.baumgarteScale = i1409[11]
  i1408.baumgarteTOIScale = i1409[12]
  i1408.timeToSleep = i1409[13]
  i1408.linearSleepTolerance = i1409[14]
  i1408.angularSleepTolerance = i1409[15]
  i1408.defaultContactOffset = i1409[16]
  i1408.autoSimulation = !!i1409[17]
  i1408.queriesHitTriggers = !!i1409[18]
  i1408.queriesStartInColliders = !!i1409[19]
  i1408.callbacksOnDisable = !!i1409[20]
  i1408.reuseCollisionCallbacks = !!i1409[21]
  i1408.autoSyncTransforms = !!i1409[22]
  var i1411 = i1409[23]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1411[i + 0]) );
  }
  i1408.collisionMatrix = i1410
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1415 = data
  i1414.enabled = !!i1415[0]
  i1414.layerId = i1415[1]
  i1414.otherLayerId = i1415[2]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1417 = data
  var i1419 = i1417[0]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1419[i + 0]) );
  }
  i1416.qualityLevels = i1418
  var i1421 = i1417[1]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( i1421[i + 0] );
  }
  i1416.names = i1420
  i1416.shadows = i1417[2]
  i1416.anisotropicFiltering = i1417[3]
  i1416.antiAliasing = i1417[4]
  i1416.lodBias = i1417[5]
  i1416.shadowCascades = i1417[6]
  i1416.shadowDistance = i1417[7]
  i1416.shadowmaskMode = i1417[8]
  i1416.shadowProjection = i1417[9]
  i1416.shadowResolution = i1417[10]
  i1416.softParticles = !!i1417[11]
  i1416.softVegetation = !!i1417[12]
  i1416.activeColorSpace = i1417[13]
  i1416.desiredColorSpace = i1417[14]
  i1416.masterTextureLimit = i1417[15]
  i1416.maxQueuedFrames = i1417[16]
  i1416.particleRaycastBudget = i1417[17]
  i1416.pixelLightCount = i1417[18]
  i1416.realtimeReflectionProbes = !!i1417[19]
  i1416.shadowCascade2Split = i1417[20]
  i1416.shadowCascade4Split = new pc.Vec3( i1417[21], i1417[22], i1417[23] )
  i1416.streamingMipmapsActive = !!i1417[24]
  i1416.vSyncCount = i1417[25]
  i1416.asyncUploadBufferSize = i1417[26]
  i1416.asyncUploadTimeSlice = i1417[27]
  i1416.billboardsFaceCameraPosition = !!i1417[28]
  i1416.shadowNearPlaneOffset = i1417[29]
  i1416.streamingMipmapsMemoryBudget = i1417[30]
  i1416.maximumLODLevel = i1417[31]
  i1416.streamingMipmapsAddAllCameras = !!i1417[32]
  i1416.streamingMipmapsMaxLevelReduction = i1417[33]
  i1416.streamingMipmapsRenderersPerFrame = i1417[34]
  i1416.resolutionScalingFixedDPIFactor = i1417[35]
  i1416.streamingMipmapsMaxFileIORequests = i1417[36]
  i1416.currentQualityLevel = i1417[37]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1427 = data
  i1426.weight = i1427[0]
  i1426.vertices = i1427[1]
  i1426.normals = i1427[2]
  i1426.tangents = i1427[3]
  return i1426
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1429 = data
  request.r(i1429[0], i1429[1], 0, i1428, 'm_ObjectArgument')
  i1428.m_ObjectArgumentAssemblyTypeName = i1429[2]
  i1428.m_IntArgument = i1429[3]
  i1428.m_FloatArgument = i1429[4]
  i1428.m_StringArgument = i1429[5]
  i1428.m_BoolArgument = !!i1429[6]
  return i1428
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1430 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1431 = data
  i1430.xPlacement = i1431[0]
  i1430.yPlacement = i1431[1]
  i1430.xAdvance = i1431[2]
  i1430.yAdvance = i1431[3]
  return i1430
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i1435 = data
  i1434.SubShaderIndex = i1435[0]
  i1434.PassId = i1435[1]
  var i1437 = i1435[2]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( i1437[i + 0] );
  }
  i1434.ShaderVariantKeywords = i1436
  var i1439 = i1435[3]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( i1439[i + 0] );
  }
  i1434.Messages = i1438
  return i1434
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[65],"66":[16],"67":[9],"68":[9],"69":[9],"70":[9],"71":[9],"72":[9],"73":[9],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[16],"89":[11],"90":[91],"92":[91],"21":[20],"93":[94],"95":[94],"96":[20],"97":[20],"24":[21],"28":[27,20],"98":[20],"23":[21],"99":[20],"100":[20],"101":[20],"102":[20],"103":[20],"104":[20],"105":[20],"106":[20],"107":[20],"108":[27,20],"109":[20],"110":[20],"111":[20],"112":[20],"113":[27,20],"114":[20],"115":[34],"116":[34],"35":[34],"117":[34],"118":[16],"119":[16],"120":[20],"121":[11,20],"32":[20,27],"122":[20],"123":[27,20],"124":[11],"125":[27,20],"126":[20],"127":[94]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HexGroopPlace","HexPlacePositor","UnityEngine.Grid","UnityEngine.MeshCollider","UnityEngine.Mesh","UnityEngine.Rigidbody","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Material","HexGroop","HexObject","HexVisual","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","TutorialAnimation","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TimeBar","FailAnimation","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","HexFabricData","UnityEngine.GameObject","HexGameRuleData","HexSoundEffectsData","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Test-Task-Hexagones";

Deserializers.lunaInitializationTime = "06/07/2026 14:46:17";

Deserializers.lunaDaysRunning = "1.4";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "TestTask";

Deserializers.lunaAppID = "40419";

Deserializers.projectId = "be8204523f239d64fbb32ae89fe30d62";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Test-Task-Hexagones";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "686e2e9a-1a85-45e0-897b-bfea0479594d";

Deserializers.runtimeInitializeOnLoadInfos = [[["EntryPoint","Init"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

