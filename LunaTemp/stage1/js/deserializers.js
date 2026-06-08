var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointSpring' )
  var i577 = data
  i576.spring = i577[0]
  i576.damper = i577[1]
  i576.targetPosition = i577[2]
  return i576
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointMotor' )
  var i579 = data
  i578.m_TargetVelocity = i579[0]
  i578.m_Force = i579[1]
  i578.m_FreeSpin = i579[2]
  return i578
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointLimits' )
  var i581 = data
  i580.m_Min = i581[0]
  i580.m_Max = i581[1]
  i580.m_Bounciness = i581[2]
  i580.m_BounceMinVelocity = i581[3]
  i580.m_ContactDistance = i581[4]
  i580.minBounce = i581[5]
  i580.maxBounce = i581[6]
  return i580
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointDrive' )
  var i583 = data
  i582.m_PositionSpring = i583[0]
  i582.m_PositionDamper = i583[1]
  i582.m_MaximumForce = i583[2]
  i582.m_UseAcceleration = i583[3]
  return i582
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i585 = data
  i584.m_Spring = i585[0]
  i584.m_Damper = i585[1]
  return i584
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i587 = data
  i586.m_Limit = i587[0]
  i586.m_Bounciness = i587[1]
  i586.m_ContactDistance = i587[2]
  return i586
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i589 = data
  i588.m_ExtremumSlip = i589[0]
  i588.m_ExtremumValue = i589[1]
  i588.m_AsymptoteSlip = i589[2]
  i588.m_AsymptoteValue = i589[3]
  i588.m_Stiffness = i589[4]
  return i588
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i591 = data
  i590.m_LowerAngle = i591[0]
  i590.m_UpperAngle = i591[1]
  return i590
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i593 = data
  i592.m_MotorSpeed = i593[0]
  i592.m_MaximumMotorTorque = i593[1]
  return i592
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i595 = data
  i594.m_DampingRatio = i595[0]
  i594.m_Frequency = i595[1]
  i594.m_Angle = i595[2]
  return i594
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i597 = data
  i596.m_LowerTranslation = i597[0]
  i596.m_UpperTranslation = i597[1]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i599 = data
  i598.name = i599[0]
  i598.halfPrecision = !!i599[1]
  i598.useSimplification = !!i599[2]
  i598.useUInt32IndexFormat = !!i599[3]
  i598.vertexCount = i599[4]
  i598.aabb = i599[5]
  var i601 = i599[6]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( !!i601[i + 0] );
  }
  i598.streams = i600
  i598.vertices = i599[7]
  var i603 = i599[8]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i603[i + 0]) );
  }
  i598.subMeshes = i602
  var i605 = i599[9]
  var i604 = []
  for(var i = 0; i < i605.length; i += 16) {
    i604.push( new pc.Mat4().setData(i605[i + 0], i605[i + 1], i605[i + 2], i605[i + 3],  i605[i + 4], i605[i + 5], i605[i + 6], i605[i + 7],  i605[i + 8], i605[i + 9], i605[i + 10], i605[i + 11],  i605[i + 12], i605[i + 13], i605[i + 14], i605[i + 15]) );
  }
  i598.bindposes = i604
  var i607 = i599[10]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i607[i + 0]) );
  }
  i598.blendShapes = i606
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i613 = data
  i612.triangles = i613[0]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i619 = data
  i618.name = i619[0]
  var i621 = i619[1]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i621[i + 0]) );
  }
  i618.frames = i620
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i622 = root || new pc.UnityMaterial()
  var i623 = data
  i622.name = i623[0]
  request.r(i623[1], i623[2], 0, i622, 'shader')
  i622.renderQueue = i623[3]
  i622.enableInstancing = !!i623[4]
  var i625 = i623[5]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i625[i + 0]) );
  }
  i622.floatParameters = i624
  var i627 = i623[6]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i627[i + 0]) );
  }
  i622.colorParameters = i626
  var i629 = i623[7]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i629[i + 0]) );
  }
  i622.vectorParameters = i628
  var i631 = i623[8]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i631[i + 0]) );
  }
  i622.textureParameters = i630
  var i633 = i623[9]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i633[i + 0]) );
  }
  i622.materialFlags = i632
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i637 = data
  i636.name = i637[0]
  i636.value = i637[1]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i641 = data
  i640.name = i641[0]
  i640.value = new pc.Color(i641[1], i641[2], i641[3], i641[4])
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i645 = data
  i644.name = i645[0]
  i644.value = new pc.Vec4( i645[1], i645[2], i645[3], i645[4] )
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i649 = data
  i648.name = i649[0]
  request.r(i649[1], i649[2], 0, i648, 'value')
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i653 = data
  i652.name = i653[0]
  i652.enabled = !!i653[1]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i655 = data
  i654.name = i655[0]
  i654.width = i655[1]
  i654.height = i655[2]
  i654.mipmapCount = i655[3]
  i654.anisoLevel = i655[4]
  i654.filterMode = i655[5]
  i654.hdr = !!i655[6]
  i654.format = i655[7]
  i654.wrapMode = i655[8]
  i654.alphaIsTransparency = !!i655[9]
  i654.alphaSource = i655[10]
  i654.graphicsFormat = i655[11]
  i654.sRGBTexture = !!i655[12]
  i654.desiredColorSpace = i655[13]
  i654.wrapU = i655[14]
  i654.wrapV = i655[15]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i657 = data
  i656.position = new pc.Vec3( i657[0], i657[1], i657[2] )
  i656.scale = new pc.Vec3( i657[3], i657[4], i657[5] )
  i656.rotation = new pc.Quat(i657[6], i657[7], i657[8], i657[9])
  return i656
}

Deserializers["HexGroopPlace"] = function (request, data, root) {
  var i658 = root || request.c( 'HexGroopPlace' )
  var i659 = data
  i658.IsStartPlace = !!i659[0]
  return i658
}

Deserializers["HexPlacePositor"] = function (request, data, root) {
  var i660 = root || request.c( 'HexPlacePositor' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'MainGrid')
  i660.Position = new pc.Vec2( i661[2], i661[3] )
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'sharedMesh')
  i662.convex = !!i663[2]
  i662.enabled = !!i663[3]
  i662.isTrigger = !!i663[4]
  request.r(i663[5], i663[6], 0, i662, 'material')
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i665 = data
  i664.mass = i665[0]
  i664.drag = i665[1]
  i664.angularDrag = i665[2]
  i664.useGravity = !!i665[3]
  i664.isKinematic = !!i665[4]
  i664.constraints = i665[5]
  i664.maxAngularVelocity = i665[6]
  i664.collisionDetectionMode = i665[7]
  i664.interpolation = i665[8]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i667 = data
  i666.color = new pc.Color(i667[0], i667[1], i667[2], i667[3])
  request.r(i667[4], i667[5], 0, i666, 'sprite')
  i666.flipX = !!i667[6]
  i666.flipY = !!i667[7]
  i666.drawMode = i667[8]
  i666.size = new pc.Vec2( i667[9], i667[10] )
  i666.tileMode = i667[11]
  i666.adaptiveModeThreshold = i667[12]
  i666.maskInteraction = i667[13]
  i666.spriteSortPoint = i667[14]
  i666.enabled = !!i667[15]
  request.r(i667[16], i667[17], 0, i666, 'sharedMaterial')
  var i669 = i667[18]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.sharedMaterials = i668
  i666.receiveShadows = !!i667[19]
  i666.shadowCastingMode = i667[20]
  i666.sortingLayerID = i667[21]
  i666.sortingOrder = i667[22]
  i666.lightmapIndex = i667[23]
  i666.lightmapSceneIndex = i667[24]
  i666.lightmapScaleOffset = new pc.Vec4( i667[25], i667[26], i667[27], i667[28] )
  i666.lightProbeUsage = i667[29]
  i666.reflectionProbeUsage = i667[30]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i673 = data
  i672.name = i673[0]
  i672.tagId = i673[1]
  i672.enabled = !!i673[2]
  i672.isStatic = !!i673[3]
  i672.layer = i673[4]
  return i672
}

Deserializers["HexGroop"] = function (request, data, root) {
  var i674 = root || request.c( 'HexGroop' )
  var i675 = data
  i674.delayHexMove = i675[0]
  i674.durationMoveOnPlace = i675[1]
  i674.hexOffset = i675[2]
  i674.hexesOffsetGrab = i675[3]
  return i674
}

Deserializers["HexObject"] = function (request, data, root) {
  var i676 = root || request.c( 'HexObject' )
  var i677 = data
  i676.stackDuration = i677[0]
  i676.byOneDuration = i677[1]
  i676.byOneUpDist = i677[2]
  i676.ease = i677[3]
  request.r(i677[4], i677[5], 0, i676, 'hexVisual')
  return i676
}

Deserializers["HexVisual"] = function (request, data, root) {
  var i678 = root || request.c( 'HexVisual' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'renderer')
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'sharedMesh')
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'additionalVertexStreams')
  i682.enabled = !!i683[2]
  request.r(i683[3], i683[4], 0, i682, 'sharedMaterial')
  var i685 = i683[5]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i682.sharedMaterials = i684
  i682.receiveShadows = !!i683[6]
  i682.shadowCastingMode = i683[7]
  i682.sortingLayerID = i683[8]
  i682.sortingOrder = i683[9]
  i682.lightmapIndex = i683[10]
  i682.lightmapSceneIndex = i683[11]
  i682.lightmapScaleOffset = new pc.Vec4( i683[12], i683[13], i683[14], i683[15] )
  i682.lightProbeUsage = i683[16]
  i682.reflectionProbeUsage = i683[17]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i687 = data
  i686.name = i687[0]
  i686.atlasId = i687[1]
  i686.mipmapCount = i687[2]
  i686.hdr = !!i687[3]
  i686.size = i687[4]
  i686.anisoLevel = i687[5]
  i686.filterMode = i687[6]
  var i689 = i687[7]
  var i688 = []
  for(var i = 0; i < i689.length; i += 4) {
    i688.push( UnityEngine.Rect.MinMaxRect(i689[i + 0], i689[i + 1], i689[i + 2], i689[i + 3]) );
  }
  i686.rects = i688
  i686.wrapU = i687[8]
  i686.wrapV = i687[9]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i693 = data
  i692.name = i693[0]
  i692.index = i693[1]
  i692.startup = !!i693[2]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i695 = data
  i694.aspect = i695[0]
  i694.orthographic = !!i695[1]
  i694.orthographicSize = i695[2]
  i694.backgroundColor = new pc.Color(i695[3], i695[4], i695[5], i695[6])
  i694.nearClipPlane = i695[7]
  i694.farClipPlane = i695[8]
  i694.fieldOfView = i695[9]
  i694.depth = i695[10]
  i694.clearFlags = i695[11]
  i694.cullingMask = i695[12]
  i694.rect = i695[13]
  request.r(i695[14], i695[15], 0, i694, 'targetTexture')
  i694.usePhysicalProperties = !!i695[16]
  i694.focalLength = i695[17]
  i694.sensorSize = new pc.Vec2( i695[18], i695[19] )
  i694.lensShift = new pc.Vec2( i695[20], i695[21] )
  i694.gateFit = i695[22]
  i694.commandBufferCount = i695[23]
  i694.cameraType = i695[24]
  i694.enabled = !!i695[25]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i697 = data
  i696.type = i697[0]
  i696.color = new pc.Color(i697[1], i697[2], i697[3], i697[4])
  i696.cullingMask = i697[5]
  i696.intensity = i697[6]
  i696.range = i697[7]
  i696.spotAngle = i697[8]
  i696.shadows = i697[9]
  i696.shadowNormalBias = i697[10]
  i696.shadowBias = i697[11]
  i696.shadowStrength = i697[12]
  i696.shadowResolution = i697[13]
  i696.lightmapBakeType = i697[14]
  i696.renderMode = i697[15]
  request.r(i697[16], i697[17], 0, i696, 'cookie')
  i696.cookieSize = i697[18]
  i696.shadowNearPlane = i697[19]
  i696.occlusionMaskChannel = i697[20]
  i696.isBaked = !!i697[21]
  i696.mixedLightingMode = i697[22]
  i696.enabled = !!i697[23]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i699 = data
  i698.center = new pc.Vec3( i699[0], i699[1], i699[2] )
  i698.size = new pc.Vec3( i699[3], i699[4], i699[5] )
  i698.enabled = !!i699[6]
  i698.isTrigger = !!i699[7]
  request.r(i699[8], i699[9], 0, i698, 'material')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i701 = data
  i700.pivot = new pc.Vec2( i701[0], i701[1] )
  i700.anchorMin = new pc.Vec2( i701[2], i701[3] )
  i700.anchorMax = new pc.Vec2( i701[4], i701[5] )
  i700.sizeDelta = new pc.Vec2( i701[6], i701[7] )
  i700.anchoredPosition3D = new pc.Vec3( i701[8], i701[9], i701[10] )
  i700.rotation = new pc.Quat(i701[11], i701[12], i701[13], i701[14])
  i700.scale = new pc.Vec3( i701[15], i701[16], i701[17] )
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i703 = data
  i702.planeDistance = i703[0]
  i702.referencePixelsPerUnit = i703[1]
  i702.isFallbackOverlay = !!i703[2]
  i702.renderMode = i703[3]
  i702.renderOrder = i703[4]
  i702.sortingLayerName = i703[5]
  i702.sortingOrder = i703[6]
  i702.scaleFactor = i703[7]
  request.r(i703[8], i703[9], 0, i702, 'worldCamera')
  i702.overrideSorting = !!i703[10]
  i702.pixelPerfect = !!i703[11]
  i702.targetDisplay = i703[12]
  i702.overridePixelPerfect = !!i703[13]
  i702.enabled = !!i703[14]
  return i702
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i705 = data
  i704.m_UiScaleMode = i705[0]
  i704.m_ReferencePixelsPerUnit = i705[1]
  i704.m_ScaleFactor = i705[2]
  i704.m_ReferenceResolution = new pc.Vec2( i705[3], i705[4] )
  i704.m_ScreenMatchMode = i705[5]
  i704.m_MatchWidthOrHeight = i705[6]
  i704.m_PhysicalUnit = i705[7]
  i704.m_FallbackScreenDPI = i705[8]
  i704.m_DefaultSpriteDPI = i705[9]
  i704.m_DynamicPixelsPerUnit = i705[10]
  i704.m_PresetInfoIsWorld = !!i705[11]
  return i704
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i707 = data
  i706.m_IgnoreReversedGraphics = !!i707[0]
  i706.m_BlockingObjects = i707[1]
  i706.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i707[2] )
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i709 = data
  i708.m_Alpha = i709[0]
  i708.m_Interactable = !!i709[1]
  i708.m_BlocksRaycasts = !!i709[2]
  i708.m_IgnoreParentGroups = !!i709[3]
  i708.enabled = !!i709[4]
  return i708
}

Deserializers["TutorialAnimation"] = function (request, data, root) {
  var i710 = root || request.c( 'TutorialAnimation' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'canvasGroup')
  i710.durationFadeIn = i711[2]
  request.r(i711[3], i711[4], 0, i710, 'handRect')
  i710.durationMove = i711[5]
  i710.durationPause = i711[6]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i713 = data
  i712.cullTransparentMesh = !!i713[0]
  return i712
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.Image' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'm_Sprite')
  i714.m_Type = i715[2]
  i714.m_PreserveAspect = !!i715[3]
  i714.m_FillCenter = !!i715[4]
  i714.m_FillMethod = i715[5]
  i714.m_FillAmount = i715[6]
  i714.m_FillClockwise = !!i715[7]
  i714.m_FillOrigin = i715[8]
  i714.m_UseSpriteMesh = !!i715[9]
  i714.m_PixelsPerUnitMultiplier = i715[10]
  request.r(i715[11], i715[12], 0, i714, 'm_Material')
  i714.m_Maskable = !!i715[13]
  i714.m_Color = new pc.Color(i715[14], i715[15], i715[16], i715[17])
  i714.m_RaycastTarget = !!i715[18]
  i714.m_RaycastPadding = new pc.Vec4( i715[19], i715[20], i715[21], i715[22] )
  return i714
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'm_FirstSelected')
  i716.m_sendNavigationEvents = !!i717[2]
  i716.m_DragThreshold = i717[3]
  return i716
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i719 = data
  i718.m_HorizontalAxis = i719[0]
  i718.m_VerticalAxis = i719[1]
  i718.m_SubmitButton = i719[2]
  i718.m_CancelButton = i719[3]
  i718.m_InputActionsPerSecond = i719[4]
  i718.m_RepeatDelay = i719[5]
  i718.m_ForceModuleActive = !!i719[6]
  i718.m_SendPointerHoverToParent = !!i719[7]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'clip')
  request.r(i721[2], i721[3], 0, i720, 'outputAudioMixerGroup')
  i720.playOnAwake = !!i721[4]
  i720.loop = !!i721[5]
  i720.time = i721[6]
  i720.volume = i721[7]
  i720.pitch = i721[8]
  i720.enabled = !!i721[9]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i723 = data
  i722.ambientIntensity = i723[0]
  i722.reflectionIntensity = i723[1]
  i722.ambientMode = i723[2]
  i722.ambientLight = new pc.Color(i723[3], i723[4], i723[5], i723[6])
  i722.ambientSkyColor = new pc.Color(i723[7], i723[8], i723[9], i723[10])
  i722.ambientGroundColor = new pc.Color(i723[11], i723[12], i723[13], i723[14])
  i722.ambientEquatorColor = new pc.Color(i723[15], i723[16], i723[17], i723[18])
  i722.fogColor = new pc.Color(i723[19], i723[20], i723[21], i723[22])
  i722.fogEndDistance = i723[23]
  i722.fogStartDistance = i723[24]
  i722.fogDensity = i723[25]
  i722.fog = !!i723[26]
  request.r(i723[27], i723[28], 0, i722, 'skybox')
  i722.fogMode = i723[29]
  var i725 = i723[30]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i725[i + 0]) );
  }
  i722.lightmaps = i724
  i722.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i723[31], i722.lightProbes)
  i722.lightmapsMode = i723[32]
  i722.mixedBakeMode = i723[33]
  i722.environmentLightingMode = i723[34]
  i722.ambientProbe = new pc.SphericalHarmonicsL2(i723[35])
  request.r(i723[36], i723[37], 0, i722, 'customReflection')
  request.r(i723[38], i723[39], 0, i722, 'defaultReflection')
  i722.defaultReflectionMode = i723[40]
  i722.defaultReflectionResolution = i723[41]
  i722.sunLightObjectId = i723[42]
  i722.pixelLightCount = i723[43]
  i722.defaultReflectionHDR = !!i723[44]
  i722.hasLightDataAsset = !!i723[45]
  i722.hasManualGenerate = !!i723[46]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'lightmapColor')
  request.r(i729[2], i729[3], 0, i728, 'lightmapDirection')
  request.r(i729[4], i729[5], 0, i728, 'shadowMask')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i730 = root || new UnityEngine.LightProbes()
  var i731 = data
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i739 = data
  i738.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i739[0], i738.main)
  i738.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i739[1], i738.colorBySpeed)
  i738.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i739[2], i738.colorOverLifetime)
  i738.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i739[3], i738.emission)
  i738.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i739[4], i738.rotationBySpeed)
  i738.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i739[5], i738.rotationOverLifetime)
  i738.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i739[6], i738.shape)
  i738.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i739[7], i738.sizeBySpeed)
  i738.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i739[8], i738.sizeOverLifetime)
  i738.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i739[9], i738.textureSheetAnimation)
  i738.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i739[10], i738.velocityOverLifetime)
  i738.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i739[11], i738.noise)
  i738.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i739[12], i738.inheritVelocity)
  i738.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i739[13], i738.forceOverLifetime)
  i738.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i739[14], i738.limitVelocityOverLifetime)
  i738.useAutoRandomSeed = !!i739[15]
  i738.randomSeed = i739[16]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemMain()
  var i741 = data
  i740.duration = i741[0]
  i740.loop = !!i741[1]
  i740.prewarm = !!i741[2]
  i740.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[3], i740.startDelay)
  i740.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[4], i740.startLifetime)
  i740.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[5], i740.startSpeed)
  i740.startSize3D = !!i741[6]
  i740.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[7], i740.startSizeX)
  i740.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[8], i740.startSizeY)
  i740.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[9], i740.startSizeZ)
  i740.startRotation3D = !!i741[10]
  i740.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[11], i740.startRotationX)
  i740.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[12], i740.startRotationY)
  i740.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[13], i740.startRotationZ)
  i740.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i741[14], i740.startColor)
  i740.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[15], i740.gravityModifier)
  i740.simulationSpace = i741[16]
  request.r(i741[17], i741[18], 0, i740, 'customSimulationSpace')
  i740.simulationSpeed = i741[19]
  i740.useUnscaledTime = !!i741[20]
  i740.scalingMode = i741[21]
  i740.playOnAwake = !!i741[22]
  i740.maxParticles = i741[23]
  i740.emitterVelocityMode = i741[24]
  i740.stopAction = i741[25]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i742 = root || new pc.MinMaxCurve()
  var i743 = data
  i742.mode = i743[0]
  i742.curveMin = new pc.AnimationCurve( { keys_flow: i743[1] } )
  i742.curveMax = new pc.AnimationCurve( { keys_flow: i743[2] } )
  i742.curveMultiplier = i743[3]
  i742.constantMin = i743[4]
  i742.constantMax = i743[5]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i744 = root || new pc.MinMaxGradient()
  var i745 = data
  i744.mode = i745[0]
  i744.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i745[1], i744.gradientMin)
  i744.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i745[2], i744.gradientMax)
  i744.colorMin = new pc.Color(i745[3], i745[4], i745[5], i745[6])
  i744.colorMax = new pc.Color(i745[7], i745[8], i745[9], i745[10])
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i747 = data
  i746.mode = i747[0]
  var i749 = i747[1]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i749[i + 0]) );
  }
  i746.colorKeys = i748
  var i751 = i747[2]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i751[i + 0]) );
  }
  i746.alphaKeys = i750
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemColorBySpeed()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i753[1], i752.color)
  i752.range = new pc.Vec2( i753[2], i753[3] )
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i757 = data
  i756.color = new pc.Color(i757[0], i757[1], i757[2], i757[3])
  i756.time = i757[4]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i761 = data
  i760.alpha = i761[0]
  i760.time = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemColorOverLifetime()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i763[1], i762.color)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemEmitter()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.rateOverTime)
  i764.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.rateOverDistance)
  var i767 = i765[3]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i767[i + 0]) );
  }
  i764.bursts = i766
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemBurst()
  var i771 = data
  i770.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[0], i770.count)
  i770.cycleCount = i771[1]
  i770.minCount = i771[2]
  i770.maxCount = i771[3]
  i770.repeatInterval = i771[4]
  i770.time = i771[5]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemRotationBySpeed()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.separateAxes = !!i773[4]
  i772.range = new pc.Vec2( i773[5], i773[6] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemRotationOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[1], i774.x)
  i774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.y)
  i774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.z)
  i774.separateAxes = !!i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemShape()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.shapeType = i777[1]
  i776.randomDirectionAmount = i777[2]
  i776.sphericalDirectionAmount = i777[3]
  i776.randomPositionAmount = i777[4]
  i776.alignToDirection = !!i777[5]
  i776.radius = i777[6]
  i776.radiusMode = i777[7]
  i776.radiusSpread = i777[8]
  i776.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[9], i776.radiusSpeed)
  i776.radiusThickness = i777[10]
  i776.angle = i777[11]
  i776.length = i777[12]
  i776.boxThickness = new pc.Vec3( i777[13], i777[14], i777[15] )
  i776.meshShapeType = i777[16]
  request.r(i777[17], i777[18], 0, i776, 'mesh')
  request.r(i777[19], i777[20], 0, i776, 'meshRenderer')
  request.r(i777[21], i777[22], 0, i776, 'skinnedMeshRenderer')
  i776.useMeshMaterialIndex = !!i777[23]
  i776.meshMaterialIndex = i777[24]
  i776.useMeshColors = !!i777[25]
  i776.normalOffset = i777[26]
  i776.arc = i777[27]
  i776.arcMode = i777[28]
  i776.arcSpread = i777[29]
  i776.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[30], i776.arcSpeed)
  i776.donutRadius = i777[31]
  i776.position = new pc.Vec3( i777[32], i777[33], i777[34] )
  i776.rotation = new pc.Vec3( i777[35], i777[36], i777[37] )
  i776.scale = new pc.Vec3( i777[38], i777[39], i777[40] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemSizeBySpeed()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.x)
  i778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.y)
  i778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.z)
  i778.separateAxes = !!i779[4]
  i778.range = new pc.Vec2( i779[5], i779[6] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemSizeOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.x)
  i780.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.y)
  i780.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.z)
  i780.separateAxes = !!i781[4]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.mode = i783[1]
  i782.animation = i783[2]
  i782.numTilesX = i783[3]
  i782.numTilesY = i783[4]
  i782.useRandomRow = !!i783[5]
  i782.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[6], i782.frameOverTime)
  i782.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[7], i782.startFrame)
  i782.cycleCount = i783[8]
  i782.rowIndex = i783[9]
  i782.flipU = i783[10]
  i782.flipV = i783[11]
  i782.spriteCount = i783[12]
  var i785 = i783[13]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.sprites = i784
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[4], i788.radial)
  i788.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[5], i788.speedModifier)
  i788.space = i789[6]
  i788.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[7], i788.orbitalX)
  i788.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[8], i788.orbitalY)
  i788.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[9], i788.orbitalZ)
  i788.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[10], i788.orbitalOffsetX)
  i788.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[11], i788.orbitalOffsetY)
  i788.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[12], i788.orbitalOffsetZ)
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemNoise()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.separateAxes = !!i791[1]
  i790.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.strengthX)
  i790.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.strengthY)
  i790.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[4], i790.strengthZ)
  i790.frequency = i791[5]
  i790.damping = !!i791[6]
  i790.octaveCount = i791[7]
  i790.octaveMultiplier = i791[8]
  i790.octaveScale = i791[9]
  i790.quality = i791[10]
  i790.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[11], i790.scrollSpeed)
  i790.scrollSpeedMultiplier = i791[12]
  i790.remapEnabled = !!i791[13]
  i790.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[14], i790.remapX)
  i790.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[15], i790.remapY)
  i790.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[16], i790.remapZ)
  i790.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[17], i790.positionAmount)
  i790.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[18], i790.rotationAmount)
  i790.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[19], i790.sizeAmount)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemInheritVelocity()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.mode = i793[1]
  i792.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.curve)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemForceOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.space = i795[4]
  i794.randomized = !!i795[5]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.limit)
  i796.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.limitX)
  i796.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.limitY)
  i796.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[4], i796.limitZ)
  i796.dampen = i797[5]
  i796.separateAxes = !!i797[6]
  i796.space = i797[7]
  i796.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[8], i796.drag)
  i796.multiplyDragByParticleSize = !!i797[9]
  i796.multiplyDragByParticleVelocity = !!i797[10]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'mesh')
  i798.meshCount = i799[2]
  i798.activeVertexStreamsCount = i799[3]
  i798.alignment = i799[4]
  i798.renderMode = i799[5]
  i798.sortMode = i799[6]
  i798.lengthScale = i799[7]
  i798.velocityScale = i799[8]
  i798.cameraVelocityScale = i799[9]
  i798.normalDirection = i799[10]
  i798.sortingFudge = i799[11]
  i798.minParticleSize = i799[12]
  i798.maxParticleSize = i799[13]
  i798.pivot = new pc.Vec3( i799[14], i799[15], i799[16] )
  request.r(i799[17], i799[18], 0, i798, 'trailMaterial')
  i798.applyActiveColorSpace = !!i799[19]
  i798.enabled = !!i799[20]
  request.r(i799[21], i799[22], 0, i798, 'sharedMaterial')
  var i801 = i799[23]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.sharedMaterials = i800
  i798.receiveShadows = !!i799[24]
  i798.shadowCastingMode = i799[25]
  i798.sortingLayerID = i799[26]
  i798.sortingOrder = i799[27]
  i798.lightmapIndex = i799[28]
  i798.lightmapSceneIndex = i799[29]
  i798.lightmapScaleOffset = new pc.Vec4( i799[30], i799[31], i799[32], i799[33] )
  i798.lightProbeUsage = i799[34]
  i798.reflectionProbeUsage = i799[35]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i803 = data
  var i805 = i803[0]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i805[i + 0]));
  }
  i802.ShaderCompilationErrors = i804
  i802.name = i803[1]
  i802.guid = i803[2]
  var i807 = i803[3]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i802.shaderDefinedKeywords = i806
  var i809 = i803[4]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i809[i + 0]) );
  }
  i802.passes = i808
  var i811 = i803[5]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i811[i + 0]) );
  }
  i802.usePasses = i810
  var i813 = i803[6]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i813[i + 0]) );
  }
  i802.defaultParameterValues = i812
  request.r(i803[7], i803[8], 0, i802, 'unityFallbackShader')
  i802.readDepth = !!i803[9]
  i802.hasDepthOnlyPass = !!i803[10]
  i802.isCreatedByShaderGraph = !!i803[11]
  i802.disableBatching = !!i803[12]
  i802.compiled = !!i803[13]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i817 = data
  i816.shaderName = i817[0]
  i816.errorMessage = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i822 = root || new pc.UnityShaderPass()
  var i823 = data
  i822.id = i823[0]
  i822.subShaderIndex = i823[1]
  i822.name = i823[2]
  i822.passType = i823[3]
  i822.grabPassTextureName = i823[4]
  i822.usePass = !!i823[5]
  i822.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[6], i822.zTest)
  i822.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[7], i822.zWrite)
  i822.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[8], i822.culling)
  i822.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i823[9], i822.blending)
  i822.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i823[10], i822.alphaBlending)
  i822.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[11], i822.colorWriteMask)
  i822.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[12], i822.offsetUnits)
  i822.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[13], i822.offsetFactor)
  i822.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[14], i822.stencilRef)
  i822.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[15], i822.stencilReadMask)
  i822.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[16], i822.stencilWriteMask)
  i822.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i823[17], i822.stencilOp)
  i822.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i823[18], i822.stencilOpFront)
  i822.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i823[19], i822.stencilOpBack)
  var i825 = i823[20]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i825[i + 0]) );
  }
  i822.tags = i824
  var i827 = i823[21]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i822.passDefinedKeywords = i826
  var i829 = i823[22]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i829[i + 0]) );
  }
  i822.passDefinedKeywordGroups = i828
  var i831 = i823[23]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i831[i + 0]) );
  }
  i822.variants = i830
  var i833 = i823[24]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i833[i + 0]) );
  }
  i822.excludedVariants = i832
  i822.hasDepthReader = !!i823[25]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i835 = data
  i834.val = i835[0]
  i834.name = i835[1]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i837 = data
  i836.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[0], i836.src)
  i836.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[1], i836.dst)
  i836.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[2], i836.op)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i839 = data
  i838.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[0], i838.pass)
  i838.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[1], i838.fail)
  i838.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[2], i838.zFail)
  i838.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[3], i838.comp)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i843 = data
  i842.name = i843[0]
  i842.value = i843[1]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i847 = data
  var i849 = i847[0]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i846.keywords = i848
  i846.hasDiscard = !!i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i853 = data
  i852.passId = i853[0]
  i852.subShaderIndex = i853[1]
  var i855 = i853[2]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i852.keywords = i854
  i852.vertexProgram = i853[3]
  i852.fragmentProgram = i853[4]
  i852.exportedForWebGl2 = !!i853[5]
  i852.readDepth = !!i853[6]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'shader')
  i858.pass = i859[2]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i863 = data
  i862.name = i863[0]
  i862.type = i863[1]
  i862.value = new pc.Vec4( i863[2], i863[3], i863[4], i863[5] )
  i862.textureValue = i863[6]
  i862.shaderPropertyFlag = i863[7]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i865 = data
  i864.name = i865[0]
  request.r(i865[1], i865[2], 0, i864, 'texture')
  i864.aabb = i865[3]
  i864.vertices = i865[4]
  i864.triangles = i865[5]
  i864.textureRect = UnityEngine.Rect.MinMaxRect(i865[6], i865[7], i865[8], i865[9])
  i864.packedRect = UnityEngine.Rect.MinMaxRect(i865[10], i865[11], i865[12], i865[13])
  i864.border = new pc.Vec4( i865[14], i865[15], i865[16], i865[17] )
  i864.transparency = i865[18]
  i864.bounds = i865[19]
  i864.pixelsPerUnit = i865[20]
  i864.textureWidth = i865[21]
  i864.textureHeight = i865[22]
  i864.nativeSize = new pc.Vec2( i865[23], i865[24] )
  i864.pivot = new pc.Vec2( i865[25], i865[26] )
  i864.textureRectOffset = new pc.Vec2( i865[27], i865[28] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i867 = data
  i866.name = i867[0]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i869 = data
  i868.name = i869[0]
  i868.ascent = i869[1]
  i868.originalLineHeight = i869[2]
  i868.fontSize = i869[3]
  var i871 = i869[4]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i871[i + 0]) );
  }
  i868.characterInfo = i870
  request.r(i869[5], i869[6], 0, i868, 'texture')
  i868.originalFontSize = i869[7]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i875 = data
  i874.index = i875[0]
  i874.advance = i875[1]
  i874.bearing = i875[2]
  i874.glyphWidth = i875[3]
  i874.glyphHeight = i875[4]
  i874.minX = i875[5]
  i874.maxX = i875[6]
  i874.minY = i875[7]
  i874.maxY = i875[8]
  i874.uvBottomLeftX = i875[9]
  i874.uvBottomLeftY = i875[10]
  i874.uvBottomRightX = i875[11]
  i874.uvBottomRightY = i875[12]
  i874.uvTopLeftX = i875[13]
  i874.uvTopLeftY = i875[14]
  i874.uvTopRightX = i875[15]
  i874.uvTopRightY = i875[16]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i877 = data
  i876.name = i877[0]
  i876.bytes64 = i877[1]
  i876.data = i877[2]
  return i876
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i878 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i879 = data
  i878.useSafeMode = !!i879[0]
  i878.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i879[1], i878.safeModeOptions)
  i878.timeScale = i879[2]
  i878.unscaledTimeScale = i879[3]
  i878.useSmoothDeltaTime = !!i879[4]
  i878.maxSmoothUnscaledTime = i879[5]
  i878.rewindCallbackMode = i879[6]
  i878.showUnityEditorReport = !!i879[7]
  i878.logBehaviour = i879[8]
  i878.drawGizmos = !!i879[9]
  i878.defaultRecyclable = !!i879[10]
  i878.defaultAutoPlay = i879[11]
  i878.defaultUpdateType = i879[12]
  i878.defaultTimeScaleIndependent = !!i879[13]
  i878.defaultEaseType = i879[14]
  i878.defaultEaseOvershootOrAmplitude = i879[15]
  i878.defaultEasePeriod = i879[16]
  i878.defaultAutoKill = !!i879[17]
  i878.defaultLoopType = i879[18]
  i878.debugMode = !!i879[19]
  i878.debugStoreTargetId = !!i879[20]
  i878.showPreviewPanel = !!i879[21]
  i878.storeSettingsLocation = i879[22]
  i878.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i879[23], i878.modules)
  i878.createASMDEF = !!i879[24]
  i878.showPlayingTweens = !!i879[25]
  i878.showPausedTweens = !!i879[26]
  return i878
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i880 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i881 = data
  i880.logBehaviour = i881[0]
  i880.nestedTweenFailureBehaviour = i881[1]
  return i880
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i882 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i883 = data
  i882.showPanel = !!i883[0]
  i882.audioEnabled = !!i883[1]
  i882.physicsEnabled = !!i883[2]
  i882.physics2DEnabled = !!i883[3]
  i882.spriteEnabled = !!i883[4]
  i882.uiEnabled = !!i883[5]
  i882.uiToolkitEnabled = !!i883[6]
  i882.textMeshProEnabled = !!i883[7]
  i882.tk2DEnabled = !!i883[8]
  i882.deAudioEnabled = !!i883[9]
  i882.deUnityExtendedEnabled = !!i883[10]
  i882.epoOutlineEnabled = !!i883[11]
  return i882
}

Deserializers["HexFabricData"] = function (request, data, root) {
  var i884 = root || request.c( 'HexFabricData' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'HexObjectPref')
  request.r(i885[2], i885[3], 0, i884, 'FxDestroy')
  i884.ScaleCameraShake = new pc.Vec3( i885[4], i885[5], i885[6] )
  return i884
}

Deserializers["HexSoundEffectsData"] = function (request, data, root) {
  var i886 = root || request.c( 'HexSoundEffectsData' )
  var i887 = data
  i886.DestroySFX = request.d('AudioPlayData', i887[0], i886.DestroySFX)
  i886.StuckSFX = request.d('AudioPlayData', i887[1], i886.StuckSFX)
  i886.ByOneSFX = request.d('AudioPlayData', i887[2], i886.ByOneSFX)
  i886.DeliteHexSFX = request.d('AudioPlayData', i887[3], i886.DeliteHexSFX)
  return i886
}

Deserializers["AudioPlayData"] = function (request, data, root) {
  var i888 = root || request.c( 'AudioPlayData' )
  var i889 = data
  i888.ID = i889[0]
  request.r(i889[1], i889[2], 0, i888, 'clip')
  i888.volume = i889[3]
  i888.pitch = i889[4]
  return i888
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'atlas')
  i890.normalStyle = i891[2]
  i890.normalSpacingOffset = i891[3]
  i890.boldStyle = i891[4]
  i890.boldSpacing = i891[5]
  i890.italicStyle = i891[6]
  i890.tabSize = i891[7]
  i890.hashCode = i891[8]
  request.r(i891[9], i891[10], 0, i890, 'material')
  i890.materialHashCode = i891[11]
  i890.m_Version = i891[12]
  i890.m_SourceFontFileGUID = i891[13]
  request.r(i891[14], i891[15], 0, i890, 'm_SourceFontFile_EditorRef')
  request.r(i891[16], i891[17], 0, i890, 'm_SourceFontFile')
  i890.m_AtlasPopulationMode = i891[18]
  i890.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i891[19], i890.m_FaceInfo)
  var i893 = i891[20]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('UnityEngine.TextCore.Glyph', i893[i + 0]));
  }
  i890.m_GlyphTable = i892
  var i895 = i891[21]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('TMPro.TMP_Character', i895[i + 0]));
  }
  i890.m_CharacterTable = i894
  var i897 = i891[22]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i890.m_AtlasTextures = i896
  i890.m_AtlasTextureIndex = i891[23]
  i890.m_IsMultiAtlasTexturesEnabled = !!i891[24]
  i890.m_ClearDynamicDataOnBuild = !!i891[25]
  var i899 = i891[26]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i899.length; i += 1) {
    i898.add(request.d('UnityEngine.TextCore.GlyphRect', i899[i + 0]));
  }
  i890.m_UsedGlyphRects = i898
  var i901 = i891[27]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('UnityEngine.TextCore.GlyphRect', i901[i + 0]));
  }
  i890.m_FreeGlyphRects = i900
  i890.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i891[28], i890.m_fontInfo)
  i890.m_AtlasWidth = i891[29]
  i890.m_AtlasHeight = i891[30]
  i890.m_AtlasPadding = i891[31]
  i890.m_AtlasRenderMode = i891[32]
  var i903 = i891[33]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('TMPro.TMP_Glyph', i903[i + 0]));
  }
  i890.m_glyphInfoList = i902
  i890.m_KerningTable = request.d('TMPro.KerningTable', i891[34], i890.m_KerningTable)
  i890.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i891[35], i890.m_FontFeatureTable)
  var i905 = i891[36]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 1, i904, '')
  }
  i890.fallbackFontAssets = i904
  var i907 = i891[37]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 1, i906, '')
  }
  i890.m_FallbackFontAssetTable = i906
  i890.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i891[38], i890.m_CreationSettings)
  var i909 = i891[39]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('TMPro.TMP_FontWeightPair', i909[i + 0]) );
  }
  i890.m_FontWeightTable = i908
  var i911 = i891[40]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('TMPro.TMP_FontWeightPair', i911[i + 0]) );
  }
  i890.fontWeights = i910
  return i890
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i913 = data
  i912.m_FaceIndex = i913[0]
  i912.m_FamilyName = i913[1]
  i912.m_StyleName = i913[2]
  i912.m_PointSize = i913[3]
  i912.m_Scale = i913[4]
  i912.m_UnitsPerEM = i913[5]
  i912.m_LineHeight = i913[6]
  i912.m_AscentLine = i913[7]
  i912.m_CapLine = i913[8]
  i912.m_MeanLine = i913[9]
  i912.m_Baseline = i913[10]
  i912.m_DescentLine = i913[11]
  i912.m_SuperscriptOffset = i913[12]
  i912.m_SuperscriptSize = i913[13]
  i912.m_SubscriptOffset = i913[14]
  i912.m_SubscriptSize = i913[15]
  i912.m_UnderlineOffset = i913[16]
  i912.m_UnderlineThickness = i913[17]
  i912.m_StrikethroughOffset = i913[18]
  i912.m_StrikethroughThickness = i913[19]
  i912.m_TabWidth = i913[20]
  return i912
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i917 = data
  i916.m_Index = i917[0]
  i916.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i917[1], i916.m_Metrics)
  i916.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i917[2], i916.m_GlyphRect)
  i916.m_Scale = i917[3]
  i916.m_AtlasIndex = i917[4]
  i916.m_ClassDefinitionType = i917[5]
  return i916
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.TMP_Character' )
  var i921 = data
  i920.m_ElementType = i921[0]
  i920.m_Unicode = i921[1]
  i920.m_GlyphIndex = i921[2]
  i920.m_Scale = i921[3]
  return i920
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i927 = data
  i926.m_X = i927[0]
  i926.m_Y = i927[1]
  i926.m_Width = i927[2]
  i926.m_Height = i927[3]
  return i926
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i929 = data
  i928.Name = i929[0]
  i928.PointSize = i929[1]
  i928.Scale = i929[2]
  i928.CharacterCount = i929[3]
  i928.LineHeight = i929[4]
  i928.Baseline = i929[5]
  i928.Ascender = i929[6]
  i928.CapHeight = i929[7]
  i928.Descender = i929[8]
  i928.CenterLine = i929[9]
  i928.SuperscriptOffset = i929[10]
  i928.SubscriptOffset = i929[11]
  i928.SubSize = i929[12]
  i928.Underline = i929[13]
  i928.UnderlineThickness = i929[14]
  i928.strikethrough = i929[15]
  i928.strikethroughThickness = i929[16]
  i928.TabWidth = i929[17]
  i928.Padding = i929[18]
  i928.AtlasWidth = i929[19]
  i928.AtlasHeight = i929[20]
  return i928
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TMP_Glyph' )
  var i933 = data
  i932.id = i933[0]
  i932.x = i933[1]
  i932.y = i933[2]
  i932.width = i933[3]
  i932.height = i933[4]
  i932.xOffset = i933[5]
  i932.yOffset = i933[6]
  i932.xAdvance = i933[7]
  i932.scale = i933[8]
  return i932
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.KerningTable' )
  var i935 = data
  var i937 = i935[0]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('TMPro.KerningPair', i937[i + 0]));
  }
  i934.kerningPairs = i936
  return i934
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.KerningPair' )
  var i941 = data
  i940.xOffset = i941[0]
  i940.m_FirstGlyph = i941[1]
  i940.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i941[2], i940.m_FirstGlyphAdjustments)
  i940.m_SecondGlyph = i941[3]
  i940.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i941[4], i940.m_SecondGlyphAdjustments)
  i940.m_IgnoreSpacingAdjustments = !!i941[5]
  return i940
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i943 = data
  var i945 = i943[0]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i945[i + 0]));
  }
  i942.m_GlyphPairAdjustmentRecords = i944
  return i942
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i949 = data
  i948.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i949[0], i948.m_FirstAdjustmentRecord)
  i948.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i949[1], i948.m_SecondAdjustmentRecord)
  i948.m_FeatureLookupFlags = i949[2]
  return i948
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i953 = data
  i952.sourceFontFileName = i953[0]
  i952.sourceFontFileGUID = i953[1]
  i952.pointSizeSamplingMode = i953[2]
  i952.pointSize = i953[3]
  i952.padding = i953[4]
  i952.packingMode = i953[5]
  i952.atlasWidth = i953[6]
  i952.atlasHeight = i953[7]
  i952.characterSetSelectionMode = i953[8]
  i952.characterSequence = i953[9]
  i952.referencedFontAssetGUID = i953[10]
  i952.referencedTextAssetGUID = i953[11]
  i952.fontStyle = i953[12]
  i952.fontStyleModifier = i953[13]
  i952.renderMode = i953[14]
  i952.includeFontFeatures = !!i953[15]
  return i952
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'regularTypeface')
  request.r(i957[2], i957[3], 0, i956, 'italicTypeface')
  return i956
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i959 = data
  i958.m_Width = i959[0]
  i958.m_Height = i959[1]
  i958.m_HorizontalBearingX = i959[2]
  i958.m_HorizontalBearingY = i959[3]
  i958.m_HorizontalAdvance = i959[4]
  return i958
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i961 = data
  i960.m_GlyphIndex = i961[0]
  i960.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i961[1], i960.m_GlyphValueRecord)
  return i960
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i963 = data
  i962.m_XPlacement = i963[0]
  i962.m_YPlacement = i963[1]
  i962.m_XAdvance = i963[2]
  i962.m_YAdvance = i963[3]
  return i962
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'spriteSheet')
  var i967 = i965[2]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('TMPro.TMP_Sprite', i967[i + 0]));
  }
  i964.spriteInfoList = i966
  var i969 = i965[3]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 1, i968, '')
  }
  i964.fallbackSpriteAssets = i968
  i964.hashCode = i965[4]
  request.r(i965[5], i965[6], 0, i964, 'material')
  i964.materialHashCode = i965[7]
  i964.m_Version = i965[8]
  i964.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i965[9], i964.m_FaceInfo)
  var i971 = i965[10]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(request.d('TMPro.TMP_SpriteCharacter', i971[i + 0]));
  }
  i964.m_SpriteCharacterTable = i970
  var i973 = i965[11]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('TMPro.TMP_SpriteGlyph', i973[i + 0]));
  }
  i964.m_SpriteGlyphTable = i972
  return i964
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.TMP_Sprite' )
  var i977 = data
  i976.name = i977[0]
  i976.hashCode = i977[1]
  i976.unicode = i977[2]
  i976.pivot = new pc.Vec2( i977[3], i977[4] )
  request.r(i977[5], i977[6], 0, i976, 'sprite')
  i976.id = i977[7]
  i976.x = i977[8]
  i976.y = i977[9]
  i976.width = i977[10]
  i976.height = i977[11]
  i976.xOffset = i977[12]
  i976.yOffset = i977[13]
  i976.xAdvance = i977[14]
  i976.scale = i977[15]
  return i976
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i983 = data
  i982.m_Name = i983[0]
  i982.m_HashCode = i983[1]
  i982.m_ElementType = i983[2]
  i982.m_Unicode = i983[3]
  i982.m_GlyphIndex = i983[4]
  i982.m_Scale = i983[5]
  return i982
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'sprite')
  i986.m_Index = i987[2]
  i986.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i987[3], i986.m_Metrics)
  i986.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i987[4], i986.m_GlyphRect)
  i986.m_Scale = i987[5]
  i986.m_AtlasIndex = i987[6]
  i986.m_ClassDefinitionType = i987[7]
  return i986
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i989 = data
  var i991 = i989[0]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(request.d('TMPro.TMP_Style', i991[i + 0]));
  }
  i988.m_StyleList = i990
  return i988
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.TMP_Style' )
  var i995 = data
  i994.m_Name = i995[0]
  i994.m_HashCode = i995[1]
  i994.m_OpeningDefinition = i995[2]
  i994.m_ClosingDefinition = i995[3]
  i994.m_OpeningTagArray = i995[4]
  i994.m_ClosingTagArray = i995[5]
  i994.m_OpeningTagUnicodeArray = i995[6]
  i994.m_ClosingTagUnicodeArray = i995[7]
  return i994
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_Settings' )
  var i997 = data
  i996.m_enableWordWrapping = !!i997[0]
  i996.m_enableKerning = !!i997[1]
  i996.m_enableExtraPadding = !!i997[2]
  i996.m_enableTintAllSprites = !!i997[3]
  i996.m_enableParseEscapeCharacters = !!i997[4]
  i996.m_EnableRaycastTarget = !!i997[5]
  i996.m_GetFontFeaturesAtRuntime = !!i997[6]
  i996.m_missingGlyphCharacter = i997[7]
  i996.m_warningsDisabled = !!i997[8]
  request.r(i997[9], i997[10], 0, i996, 'm_defaultFontAsset')
  i996.m_defaultFontAssetPath = i997[11]
  i996.m_defaultFontSize = i997[12]
  i996.m_defaultAutoSizeMinRatio = i997[13]
  i996.m_defaultAutoSizeMaxRatio = i997[14]
  i996.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i997[15], i997[16] )
  i996.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i997[17], i997[18] )
  i996.m_autoSizeTextContainer = !!i997[19]
  i996.m_IsTextObjectScaleStatic = !!i997[20]
  var i999 = i997[21]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 1, i998, '')
  }
  i996.m_fallbackFontAssets = i998
  i996.m_matchMaterialPreset = !!i997[22]
  request.r(i997[23], i997[24], 0, i996, 'm_defaultSpriteAsset')
  i996.m_defaultSpriteAssetPath = i997[25]
  i996.m_enableEmojiSupport = !!i997[26]
  i996.m_MissingCharacterSpriteUnicode = i997[27]
  i996.m_defaultColorGradientPresetsPath = i997[28]
  request.r(i997[29], i997[30], 0, i996, 'm_defaultStyleSheet')
  i996.m_StyleSheetsResourcePath = i997[31]
  request.r(i997[32], i997[33], 0, i996, 'm_leadingCharacters')
  request.r(i997[34], i997[35], 0, i996, 'm_followingCharacters')
  i996.m_UseModernHangulLineBreakingRules = !!i997[36]
  return i996
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i1001 = data
  i1000._svcLunaVersion = i1001[0]
  var i1003 = i1001[1]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.add(request.d(' . ⁊', i1003[i + 0]));
  }
  i1000._shaderVariants = i1002
  var i1005 = i1001[2]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d(' . ⁊', i1005[i + 0]));
  }
  i1000._usedByLunaBuild = i1004
  var i1007 = i1001[3]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.add(request.d(' . ⁊', i1007[i + 0]));
  }
  i1000._includedShaderVariants = i1006
  var i1009 = i1001[4]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d(' . ⁊', i1009[i + 0]));
  }
  i1000._excludedShaderVariants = i1008
  i1000.version = System.Int64(i1001[5])
  var i1011 = i1001[6]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i1011[i + 0]));
  }
  i1000._shaderParsedShaders = i1010
  var i1013 = i1001[7]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(i1013[i + 0]);
  }
  i1000._modifiedShaders = i1012
  i1000.invalidShaders = !!i1001[8]
  return i1000
}

Deserializers[" . ⁊"] = function (request, data, root) {
  var i1016 = root || request.c( ' . ⁊' )
  var i1017 = data
  i1016.shaderCompilerPlatform = i1017[0]
  request.r(i1017[1], i1017[2], 0, i1016, 'shader')
  i1016.passType = i1017[3]
  i1016.passId = i1017[4]
  i1016.subShaderIndex = i1017[5]
  i1016.upToDate = !!i1017[6]
  i1016.keywords = request.d(' . ⁮', i1017[7], i1016.keywords)
  return i1016
}

Deserializers[" . ⁮"] = function (request, data, root) {
  var i1018 = root || request.c( ' . ⁮' )
  var i1019 = data
  var i1021 = i1019[0]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( i1021[i + 0] );
  }
  i1018. ‥ = i1020
  return i1018
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i1025 = data
  var i1027 = i1025[0]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i1027[i + 0]));
  }
  i1024.ParsedSubShaders = i1026
  request.r(i1025[1], i1025[2], 0, i1024, 'Shader')
  i1024.ShaderPath = i1025[3]
  var i1029 = i1025[4]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( i1029[i + 0] );
  }
  i1024.ShaderDefinedKeywords = i1028
  request.r(i1025[5], i1025[6], 0, i1024, 'fallbackShader')
  var i1031 = i1025[7]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i1031[i + 0]));
  }
  i1024.CompilationErrors = i1030
  var i1033 = i1025[8]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d(' . ⁊', i1033[i + 0]));
  }
  i1024.Variants = i1032
  return i1024
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i1037 = data
  i1036.Index = i1037[0]
  var i1039 = i1037[1]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i1039[i + 0]));
  }
  i1036.Passes = i1038
  request.r(i1037[2], i1037[3], 0, i1036, 'Shader')
  var i1041 = i1037[4]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1041[i + 0]));
  }
  i1036.Tags = i1040
  return i1036
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'Shader')
  var i1047 = i1045[2]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i1047[i + 0]));
  }
  i1044.ShaderVariants = i1046
  i1044.DefinedKeywords = request.d(' . ⁮', i1045[3], i1044.DefinedKeywords)
  var i1049 = i1045[4]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i1049[i + 0]));
  }
  i1044.KeywordGroups = i1048
  i1044.KeywordsMinimalCardinality = i1045[5]
  i1044.ContainsInvalidVariant = !!i1045[6]
  var i1051 = i1045[7]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.add(request.d(' . ⁊', i1051[i + 0]));
  }
  i1044.VariantStructures = i1050
  var i1053 = i1045[8]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i1053[i + 0]));
  }
  i1044.CompilationErrors = i1052
  i1044.HasDepthReader = !!i1045[9]
  i1044.Id = i1045[10]
  i1044.SubShaderIndex = i1045[11]
  i1044.SerializedObjectId = i1045[12]
  var i1055 = i1045[13]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1055[i + 0]));
  }
  i1044.Tags = i1054
  i1044.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i1045[14], i1044.UsePass)
  i1044.GrabPassTextureName = i1045[15]
  i1044.PlatformMask = i1045[16]
  return i1044
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i1059 = data
  i1058.ShaderCompilerPlatform = i1059[0]
  i1058.NoShaderVariant = !!i1059[1]
  i1058.VertexProgram = i1059[2]
  i1058.FragmentProgram = i1059[3]
  i1058.LOD = i1059[4]
  i1058.readDepth = !!i1059[5]
  i1058.PassId = i1059[6]
  i1058.SubShaderIndex = i1059[7]
  i1058.Keywords = request.d(' . ⁮', i1059[8], i1058.Keywords)
  var i1061 = i1059[9]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1061[i + 0]));
  }
  i1058.Tags = i1060
  return i1058
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i1065 = data
  var i1067 = i1065[0]
  var i1066 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.add(i1067[i + 0]);
  }
  i1064.Keywords = i1066
  i1064.hasDiscard = !!i1065[1]
  return i1064
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i1071 = data
  i1070.Variant = !!i1071[0]
  i1070.ShaderName = i1071[1]
  var i1073 = i1071[2]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i1073[i + 0]));
  }
  i1070.Details = i1072
  return i1070
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i1077 = data
  i1076.Key = i1077[0]
  i1076.Value = i1077[1]
  return i1076
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i1079 = data
  i1078.shader = i1079[0]
  i1078.pass = i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1085[i + 0]) );
  }
  i1082.files = i1084
  i1082.componentToPrefabIds = i1083[1]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1089 = data
  i1088.path = i1089[0]
  request.r(i1089[1], i1089[2], 0, i1088, 'unityObject')
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1091 = data
  var i1093 = i1091[0]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1093[i + 0]) );
  }
  i1090.scriptsExecutionOrder = i1092
  var i1095 = i1091[1]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1095[i + 0]) );
  }
  i1090.sortingLayers = i1094
  var i1097 = i1091[2]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1097[i + 0]) );
  }
  i1090.cullingLayers = i1096
  i1090.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1091[3], i1090.timeSettings)
  i1090.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1091[4], i1090.physicsSettings)
  i1090.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1091[5], i1090.physics2DSettings)
  i1090.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1091[6], i1090.qualitySettings)
  i1090.enableRealtimeShadows = !!i1091[7]
  i1090.enableAutoInstancing = !!i1091[8]
  i1090.enableStaticBatching = !!i1091[9]
  i1090.enableDynamicBatching = !!i1091[10]
  i1090.usePreservativeDynamicBatching = !!i1091[11]
  i1090.lightmapEncodingQuality = i1091[12]
  i1090.desiredColorSpace = i1091[13]
  var i1099 = i1091[14]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( i1099[i + 0] );
  }
  i1090.allTags = i1098
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1103 = data
  i1102.name = i1103[0]
  i1102.value = i1103[1]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1107 = data
  i1106.id = i1107[0]
  i1106.name = i1107[1]
  i1106.value = i1107[2]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1111 = data
  i1110.id = i1111[0]
  i1110.name = i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1113 = data
  i1112.fixedDeltaTime = i1113[0]
  i1112.maximumDeltaTime = i1113[1]
  i1112.timeScale = i1113[2]
  i1112.maximumParticleTimestep = i1113[3]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1115 = data
  i1114.gravity = new pc.Vec3( i1115[0], i1115[1], i1115[2] )
  i1114.defaultSolverIterations = i1115[3]
  i1114.bounceThreshold = i1115[4]
  i1114.autoSyncTransforms = !!i1115[5]
  i1114.autoSimulation = !!i1115[6]
  var i1117 = i1115[7]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1117[i + 0]) );
  }
  i1114.collisionMatrix = i1116
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1121 = data
  i1120.enabled = !!i1121[0]
  i1120.layerId = i1121[1]
  i1120.otherLayerId = i1121[2]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'material')
  i1122.gravity = new pc.Vec2( i1123[2], i1123[3] )
  i1122.positionIterations = i1123[4]
  i1122.velocityIterations = i1123[5]
  i1122.velocityThreshold = i1123[6]
  i1122.maxLinearCorrection = i1123[7]
  i1122.maxAngularCorrection = i1123[8]
  i1122.maxTranslationSpeed = i1123[9]
  i1122.maxRotationSpeed = i1123[10]
  i1122.baumgarteScale = i1123[11]
  i1122.baumgarteTOIScale = i1123[12]
  i1122.timeToSleep = i1123[13]
  i1122.linearSleepTolerance = i1123[14]
  i1122.angularSleepTolerance = i1123[15]
  i1122.defaultContactOffset = i1123[16]
  i1122.autoSimulation = !!i1123[17]
  i1122.queriesHitTriggers = !!i1123[18]
  i1122.queriesStartInColliders = !!i1123[19]
  i1122.callbacksOnDisable = !!i1123[20]
  i1122.reuseCollisionCallbacks = !!i1123[21]
  i1122.autoSyncTransforms = !!i1123[22]
  var i1125 = i1123[23]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1125[i + 0]) );
  }
  i1122.collisionMatrix = i1124
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1129 = data
  i1128.enabled = !!i1129[0]
  i1128.layerId = i1129[1]
  i1128.otherLayerId = i1129[2]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1131 = data
  var i1133 = i1131[0]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1133[i + 0]) );
  }
  i1130.qualityLevels = i1132
  var i1135 = i1131[1]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( i1135[i + 0] );
  }
  i1130.names = i1134
  i1130.shadows = i1131[2]
  i1130.anisotropicFiltering = i1131[3]
  i1130.antiAliasing = i1131[4]
  i1130.lodBias = i1131[5]
  i1130.shadowCascades = i1131[6]
  i1130.shadowDistance = i1131[7]
  i1130.shadowmaskMode = i1131[8]
  i1130.shadowProjection = i1131[9]
  i1130.shadowResolution = i1131[10]
  i1130.softParticles = !!i1131[11]
  i1130.softVegetation = !!i1131[12]
  i1130.activeColorSpace = i1131[13]
  i1130.desiredColorSpace = i1131[14]
  i1130.masterTextureLimit = i1131[15]
  i1130.maxQueuedFrames = i1131[16]
  i1130.particleRaycastBudget = i1131[17]
  i1130.pixelLightCount = i1131[18]
  i1130.realtimeReflectionProbes = !!i1131[19]
  i1130.shadowCascade2Split = i1131[20]
  i1130.shadowCascade4Split = new pc.Vec3( i1131[21], i1131[22], i1131[23] )
  i1130.streamingMipmapsActive = !!i1131[24]
  i1130.vSyncCount = i1131[25]
  i1130.asyncUploadBufferSize = i1131[26]
  i1130.asyncUploadTimeSlice = i1131[27]
  i1130.billboardsFaceCameraPosition = !!i1131[28]
  i1130.shadowNearPlaneOffset = i1131[29]
  i1130.streamingMipmapsMemoryBudget = i1131[30]
  i1130.maximumLODLevel = i1131[31]
  i1130.streamingMipmapsAddAllCameras = !!i1131[32]
  i1130.streamingMipmapsMaxLevelReduction = i1131[33]
  i1130.streamingMipmapsRenderersPerFrame = i1131[34]
  i1130.resolutionScalingFixedDPIFactor = i1131[35]
  i1130.streamingMipmapsMaxFileIORequests = i1131[36]
  i1130.currentQualityLevel = i1131[37]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1141 = data
  i1140.weight = i1141[0]
  i1140.vertices = i1141[1]
  i1140.normals = i1141[2]
  i1140.tangents = i1141[3]
  return i1140
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1142 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1143 = data
  i1142.xPlacement = i1143[0]
  i1142.yPlacement = i1143[1]
  i1142.xAdvance = i1143[2]
  i1142.yAdvance = i1143[3]
  return i1142
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i1147 = data
  i1146.SubShaderIndex = i1147[0]
  i1146.PassId = i1147[1]
  var i1149 = i1147[2]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( i1149[i + 0] );
  }
  i1146.ShaderVariantKeywords = i1148
  var i1151 = i1147[3]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1146.Messages = i1150
  return i1146
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[18],"59":[9],"60":[9],"61":[9],"62":[9],"63":[9],"64":[9],"65":[9],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[18],"81":[16],"82":[83],"84":[83],"23":[22],"85":[86],"87":[22],"88":[22],"26":[23],"30":[29,22],"89":[22],"25":[23],"90":[22],"91":[22],"92":[22],"93":[22],"94":[22],"95":[22],"96":[22],"97":[22],"98":[22],"99":[29,22],"100":[22],"101":[22],"102":[22],"103":[22],"104":[29,22],"105":[22],"106":[31],"107":[31],"32":[31],"108":[31],"109":[18],"110":[18],"111":[10],"112":[86],"113":[114],"115":[18],"116":[22],"117":[16,22],"118":[22,29],"119":[22],"120":[29,22],"121":[16],"122":[29,22],"123":[22],"124":[86]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HexGroopPlace","HexPlacePositor","UnityEngine.Grid","UnityEngine.MeshCollider","UnityEngine.Mesh","UnityEngine.Rigidbody","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HexGroop","HexObject","HexVisual","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","TutorialAnimation","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","DG.Tweening.Core.DOTweenSettings","HexFabricData","UnityEngine.GameObject","HexSoundEffectsData","TMPro.TMP_FontAsset","UnityEngine.Font","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Test-Task-Hexagones";

Deserializers.lunaInitializationTime = "06/07/2026 14:46:17";

Deserializers.lunaDaysRunning = "0.3";

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

Deserializers.linearColorSpace = true;

Deserializers.buildID = "d49c654d-9275-4695-ad24-9af244ca35e0";

Deserializers.runtimeInitializeOnLoadInfos = [[["EntryPoint","Init"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

