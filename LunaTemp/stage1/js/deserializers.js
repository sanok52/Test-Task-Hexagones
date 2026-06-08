var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.JointSpring' )
  var i2161 = data
  i2160.spring = i2161[0]
  i2160.damper = i2161[1]
  i2160.targetPosition = i2161[2]
  return i2160
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.JointMotor' )
  var i2163 = data
  i2162.m_TargetVelocity = i2163[0]
  i2162.m_Force = i2163[1]
  i2162.m_FreeSpin = i2163[2]
  return i2162
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.JointLimits' )
  var i2165 = data
  i2164.m_Min = i2165[0]
  i2164.m_Max = i2165[1]
  i2164.m_Bounciness = i2165[2]
  i2164.m_BounceMinVelocity = i2165[3]
  i2164.m_ContactDistance = i2165[4]
  i2164.minBounce = i2165[5]
  i2164.maxBounce = i2165[6]
  return i2164
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.JointDrive' )
  var i2167 = data
  i2166.m_PositionSpring = i2167[0]
  i2166.m_PositionDamper = i2167[1]
  i2166.m_MaximumForce = i2167[2]
  i2166.m_UseAcceleration = i2167[3]
  return i2166
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2169 = data
  i2168.m_Spring = i2169[0]
  i2168.m_Damper = i2169[1]
  return i2168
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2171 = data
  i2170.m_Limit = i2171[0]
  i2170.m_Bounciness = i2171[1]
  i2170.m_ContactDistance = i2171[2]
  return i2170
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2173 = data
  i2172.m_ExtremumSlip = i2173[0]
  i2172.m_ExtremumValue = i2173[1]
  i2172.m_AsymptoteSlip = i2173[2]
  i2172.m_AsymptoteValue = i2173[3]
  i2172.m_Stiffness = i2173[4]
  return i2172
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2175 = data
  i2174.m_LowerAngle = i2175[0]
  i2174.m_UpperAngle = i2175[1]
  return i2174
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2177 = data
  i2176.m_MotorSpeed = i2177[0]
  i2176.m_MaximumMotorTorque = i2177[1]
  return i2176
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2179 = data
  i2178.m_DampingRatio = i2179[0]
  i2178.m_Frequency = i2179[1]
  i2178.m_Angle = i2179[2]
  return i2178
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2181 = data
  i2180.m_LowerTranslation = i2181[0]
  i2180.m_UpperTranslation = i2181[1]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2183 = data
  i2182.name = i2183[0]
  i2182.halfPrecision = !!i2183[1]
  i2182.useSimplification = !!i2183[2]
  i2182.useUInt32IndexFormat = !!i2183[3]
  i2182.vertexCount = i2183[4]
  i2182.aabb = i2183[5]
  var i2185 = i2183[6]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( !!i2185[i + 0] );
  }
  i2182.streams = i2184
  i2182.vertices = i2183[7]
  var i2187 = i2183[8]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2187[i + 0]) );
  }
  i2182.subMeshes = i2186
  var i2189 = i2183[9]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 16) {
    i2188.push( new pc.Mat4().setData(i2189[i + 0], i2189[i + 1], i2189[i + 2], i2189[i + 3],  i2189[i + 4], i2189[i + 5], i2189[i + 6], i2189[i + 7],  i2189[i + 8], i2189[i + 9], i2189[i + 10], i2189[i + 11],  i2189[i + 12], i2189[i + 13], i2189[i + 14], i2189[i + 15]) );
  }
  i2182.bindposes = i2188
  var i2191 = i2183[10]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2191[i + 0]) );
  }
  i2182.blendShapes = i2190
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2197 = data
  i2196.triangles = i2197[0]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2203 = data
  i2202.name = i2203[0]
  var i2205 = i2203[1]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2205[i + 0]) );
  }
  i2202.frames = i2204
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2206 = root || new pc.UnityMaterial()
  var i2207 = data
  i2206.name = i2207[0]
  request.r(i2207[1], i2207[2], 0, i2206, 'shader')
  i2206.renderQueue = i2207[3]
  i2206.enableInstancing = !!i2207[4]
  var i2209 = i2207[5]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2209[i + 0]) );
  }
  i2206.floatParameters = i2208
  var i2211 = i2207[6]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2211[i + 0]) );
  }
  i2206.colorParameters = i2210
  var i2213 = i2207[7]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2213[i + 0]) );
  }
  i2206.vectorParameters = i2212
  var i2215 = i2207[8]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2215[i + 0]) );
  }
  i2206.textureParameters = i2214
  var i2217 = i2207[9]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2217[i + 0]) );
  }
  i2206.materialFlags = i2216
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2221 = data
  i2220.name = i2221[0]
  i2220.value = i2221[1]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2225 = data
  i2224.name = i2225[0]
  i2224.value = new pc.Color(i2225[1], i2225[2], i2225[3], i2225[4])
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2229 = data
  i2228.name = i2229[0]
  i2228.value = new pc.Vec4( i2229[1], i2229[2], i2229[3], i2229[4] )
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2233 = data
  i2232.name = i2233[0]
  request.r(i2233[1], i2233[2], 0, i2232, 'value')
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2237 = data
  i2236.name = i2237[0]
  i2236.enabled = !!i2237[1]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2239 = data
  i2238.name = i2239[0]
  i2238.width = i2239[1]
  i2238.height = i2239[2]
  i2238.mipmapCount = i2239[3]
  i2238.anisoLevel = i2239[4]
  i2238.filterMode = i2239[5]
  i2238.hdr = !!i2239[6]
  i2238.format = i2239[7]
  i2238.wrapMode = i2239[8]
  i2238.alphaIsTransparency = !!i2239[9]
  i2238.alphaSource = i2239[10]
  i2238.graphicsFormat = i2239[11]
  i2238.sRGBTexture = !!i2239[12]
  i2238.desiredColorSpace = i2239[13]
  i2238.wrapU = i2239[14]
  i2238.wrapV = i2239[15]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2241 = data
  i2240.position = new pc.Vec3( i2241[0], i2241[1], i2241[2] )
  i2240.scale = new pc.Vec3( i2241[3], i2241[4], i2241[5] )
  i2240.rotation = new pc.Quat(i2241[6], i2241[7], i2241[8], i2241[9])
  return i2240
}

Deserializers["HexGroopPlace"] = function (request, data, root) {
  var i2242 = root || request.c( 'HexGroopPlace' )
  var i2243 = data
  i2242.IsStartPlace = !!i2243[0]
  return i2242
}

Deserializers["HexPlacePositor"] = function (request, data, root) {
  var i2244 = root || request.c( 'HexPlacePositor' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, 'MainGrid')
  i2244.Position = new pc.Vec2( i2245[2], i2245[3] )
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2247 = data
  request.r(i2247[0], i2247[1], 0, i2246, 'sharedMesh')
  i2246.convex = !!i2247[2]
  i2246.enabled = !!i2247[3]
  i2246.isTrigger = !!i2247[4]
  request.r(i2247[5], i2247[6], 0, i2246, 'material')
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2249 = data
  i2248.mass = i2249[0]
  i2248.drag = i2249[1]
  i2248.angularDrag = i2249[2]
  i2248.useGravity = !!i2249[3]
  i2248.isKinematic = !!i2249[4]
  i2248.constraints = i2249[5]
  i2248.maxAngularVelocity = i2249[6]
  i2248.collisionDetectionMode = i2249[7]
  i2248.interpolation = i2249[8]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'sharedMesh')
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'additionalVertexStreams')
  i2252.enabled = !!i2253[2]
  request.r(i2253[3], i2253[4], 0, i2252, 'sharedMaterial')
  var i2255 = i2253[5]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 2) {
  request.r(i2255[i + 0], i2255[i + 1], 2, i2254, '')
  }
  i2252.sharedMaterials = i2254
  i2252.receiveShadows = !!i2253[6]
  i2252.shadowCastingMode = i2253[7]
  i2252.sortingLayerID = i2253[8]
  i2252.sortingOrder = i2253[9]
  i2252.lightmapIndex = i2253[10]
  i2252.lightmapSceneIndex = i2253[11]
  i2252.lightmapScaleOffset = new pc.Vec4( i2253[12], i2253[13], i2253[14], i2253[15] )
  i2252.lightProbeUsage = i2253[16]
  i2252.reflectionProbeUsage = i2253[17]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2259 = data
  i2258.name = i2259[0]
  i2258.tagId = i2259[1]
  i2258.enabled = !!i2259[2]
  i2258.isStatic = !!i2259[3]
  i2258.layer = i2259[4]
  return i2258
}

Deserializers["HexGroop"] = function (request, data, root) {
  var i2260 = root || request.c( 'HexGroop' )
  var i2261 = data
  i2260.delayHexMove = i2261[0]
  i2260.durationMoveOnPlace = i2261[1]
  i2260.hexOffset = i2261[2]
  i2260.startHexOffset = i2261[3]
  i2260.hexesOffsetGrab = i2261[4]
  return i2260
}

Deserializers["HexObject"] = function (request, data, root) {
  var i2262 = root || request.c( 'HexObject' )
  var i2263 = data
  i2262.hexColor = i2263[0]
  i2262.stackDuration = i2263[1]
  i2262.byOneDuration = i2263[2]
  i2262.byOneUpDist = i2263[3]
  i2262.ease = i2263[4]
  request.r(i2263[5], i2263[6], 0, i2262, 'hexVisual')
  return i2262
}

Deserializers["HexVisual"] = function (request, data, root) {
  var i2264 = root || request.c( 'HexVisual' )
  var i2265 = data
  request.r(i2265[0], i2265[1], 0, i2264, 'renderer')
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2267 = data
  i2266.name = i2267[0]
  i2266.atlasId = i2267[1]
  i2266.mipmapCount = i2267[2]
  i2266.hdr = !!i2267[3]
  i2266.size = i2267[4]
  i2266.anisoLevel = i2267[5]
  i2266.filterMode = i2267[6]
  var i2269 = i2267[7]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 4) {
    i2268.push( UnityEngine.Rect.MinMaxRect(i2269[i + 0], i2269[i + 1], i2269[i + 2], i2269[i + 3]) );
  }
  i2266.rects = i2268
  i2266.wrapU = i2267[8]
  i2266.wrapV = i2267[9]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2273 = data
  i2272.name = i2273[0]
  i2272.index = i2273[1]
  i2272.startup = !!i2273[2]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2275 = data
  i2274.aspect = i2275[0]
  i2274.orthographic = !!i2275[1]
  i2274.orthographicSize = i2275[2]
  i2274.backgroundColor = new pc.Color(i2275[3], i2275[4], i2275[5], i2275[6])
  i2274.nearClipPlane = i2275[7]
  i2274.farClipPlane = i2275[8]
  i2274.fieldOfView = i2275[9]
  i2274.depth = i2275[10]
  i2274.clearFlags = i2275[11]
  i2274.cullingMask = i2275[12]
  i2274.rect = i2275[13]
  request.r(i2275[14], i2275[15], 0, i2274, 'targetTexture')
  i2274.usePhysicalProperties = !!i2275[16]
  i2274.focalLength = i2275[17]
  i2274.sensorSize = new pc.Vec2( i2275[18], i2275[19] )
  i2274.lensShift = new pc.Vec2( i2275[20], i2275[21] )
  i2274.gateFit = i2275[22]
  i2274.commandBufferCount = i2275[23]
  i2274.cameraType = i2275[24]
  i2274.enabled = !!i2275[25]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2277 = data
  i2276.type = i2277[0]
  i2276.color = new pc.Color(i2277[1], i2277[2], i2277[3], i2277[4])
  i2276.cullingMask = i2277[5]
  i2276.intensity = i2277[6]
  i2276.range = i2277[7]
  i2276.spotAngle = i2277[8]
  i2276.shadows = i2277[9]
  i2276.shadowNormalBias = i2277[10]
  i2276.shadowBias = i2277[11]
  i2276.shadowStrength = i2277[12]
  i2276.shadowResolution = i2277[13]
  i2276.lightmapBakeType = i2277[14]
  i2276.renderMode = i2277[15]
  request.r(i2277[16], i2277[17], 0, i2276, 'cookie')
  i2276.cookieSize = i2277[18]
  i2276.shadowNearPlane = i2277[19]
  i2276.occlusionMaskChannel = i2277[20]
  i2276.isBaked = !!i2277[21]
  i2276.mixedLightingMode = i2277[22]
  i2276.enabled = !!i2277[23]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2279 = data
  i2278.center = new pc.Vec3( i2279[0], i2279[1], i2279[2] )
  i2278.size = new pc.Vec3( i2279[3], i2279[4], i2279[5] )
  i2278.enabled = !!i2279[6]
  i2278.isTrigger = !!i2279[7]
  request.r(i2279[8], i2279[9], 0, i2278, 'material')
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2281 = data
  i2280.pivot = new pc.Vec2( i2281[0], i2281[1] )
  i2280.anchorMin = new pc.Vec2( i2281[2], i2281[3] )
  i2280.anchorMax = new pc.Vec2( i2281[4], i2281[5] )
  i2280.sizeDelta = new pc.Vec2( i2281[6], i2281[7] )
  i2280.anchoredPosition3D = new pc.Vec3( i2281[8], i2281[9], i2281[10] )
  i2280.rotation = new pc.Quat(i2281[11], i2281[12], i2281[13], i2281[14])
  i2280.scale = new pc.Vec3( i2281[15], i2281[16], i2281[17] )
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2283 = data
  i2282.planeDistance = i2283[0]
  i2282.referencePixelsPerUnit = i2283[1]
  i2282.isFallbackOverlay = !!i2283[2]
  i2282.renderMode = i2283[3]
  i2282.renderOrder = i2283[4]
  i2282.sortingLayerName = i2283[5]
  i2282.sortingOrder = i2283[6]
  i2282.scaleFactor = i2283[7]
  request.r(i2283[8], i2283[9], 0, i2282, 'worldCamera')
  i2282.overrideSorting = !!i2283[10]
  i2282.pixelPerfect = !!i2283[11]
  i2282.targetDisplay = i2283[12]
  i2282.overridePixelPerfect = !!i2283[13]
  i2282.enabled = !!i2283[14]
  return i2282
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2285 = data
  i2284.m_UiScaleMode = i2285[0]
  i2284.m_ReferencePixelsPerUnit = i2285[1]
  i2284.m_ScaleFactor = i2285[2]
  i2284.m_ReferenceResolution = new pc.Vec2( i2285[3], i2285[4] )
  i2284.m_ScreenMatchMode = i2285[5]
  i2284.m_MatchWidthOrHeight = i2285[6]
  i2284.m_PhysicalUnit = i2285[7]
  i2284.m_FallbackScreenDPI = i2285[8]
  i2284.m_DefaultSpriteDPI = i2285[9]
  i2284.m_DynamicPixelsPerUnit = i2285[10]
  i2284.m_PresetInfoIsWorld = !!i2285[11]
  return i2284
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2287 = data
  i2286.m_IgnoreReversedGraphics = !!i2287[0]
  i2286.m_BlockingObjects = i2287[1]
  i2286.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2287[2] )
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2289 = data
  i2288.m_Alpha = i2289[0]
  i2288.m_Interactable = !!i2289[1]
  i2288.m_BlocksRaycasts = !!i2289[2]
  i2288.m_IgnoreParentGroups = !!i2289[3]
  i2288.enabled = !!i2289[4]
  return i2288
}

Deserializers["TutorialAnimation"] = function (request, data, root) {
  var i2290 = root || request.c( 'TutorialAnimation' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'canvasGroup')
  i2290.durationFadeIn = i2291[2]
  request.r(i2291[3], i2291[4], 0, i2290, 'handRect')
  i2290.durationMove = i2291[5]
  i2290.durationPause = i2291[6]
  request.r(i2291[7], i2291[8], 0, i2290, 'firstStart')
  request.r(i2291[9], i2291[10], 0, i2290, 'firstEnd')
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2293 = data
  i2292.cullTransparentMesh = !!i2293[0]
  return i2292
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.UI.Image' )
  var i2295 = data
  request.r(i2295[0], i2295[1], 0, i2294, 'm_Sprite')
  i2294.m_Type = i2295[2]
  i2294.m_PreserveAspect = !!i2295[3]
  i2294.m_FillCenter = !!i2295[4]
  i2294.m_FillMethod = i2295[5]
  i2294.m_FillAmount = i2295[6]
  i2294.m_FillClockwise = !!i2295[7]
  i2294.m_FillOrigin = i2295[8]
  i2294.m_UseSpriteMesh = !!i2295[9]
  i2294.m_PixelsPerUnitMultiplier = i2295[10]
  request.r(i2295[11], i2295[12], 0, i2294, 'm_Material')
  i2294.m_Maskable = !!i2295[13]
  i2294.m_Color = new pc.Color(i2295[14], i2295[15], i2295[16], i2295[17])
  i2294.m_RaycastTarget = !!i2295[18]
  i2294.m_RaycastPadding = new pc.Vec4( i2295[19], i2295[20], i2295[21], i2295[22] )
  return i2294
}

Deserializers["TimeBar"] = function (request, data, root) {
  var i2296 = root || request.c( 'TimeBar' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'imageBar')
  request.r(i2297[2], i2297[3], 0, i2296, 'rectArrow')
  request.r(i2297[4], i2297[5], 0, i2296, 'rectPunch')
  i2296.durationPunch = i2297[6]
  var i2299 = i2297[7]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 2) {
  request.r(i2299[i + 0], i2299[i + 1], 2, i2298, '')
  }
  i2296.imgColors = i2298
  return i2296
}

Deserializers["FailAnimation"] = function (request, data, root) {
  var i2302 = root || request.c( 'FailAnimation' )
  var i2303 = data
  request.r(i2303[0], i2303[1], 0, i2302, 'canvasGroup')
  request.r(i2303[2], i2303[3], 0, i2302, 'targetScale')
  return i2302
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2304 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2305 = data
  i2304.m_hasFontAssetChanged = !!i2305[0]
  request.r(i2305[1], i2305[2], 0, i2304, 'm_baseMaterial')
  i2304.m_maskOffset = new pc.Vec4( i2305[3], i2305[4], i2305[5], i2305[6] )
  i2304.m_text = i2305[7]
  i2304.m_isRightToLeft = !!i2305[8]
  request.r(i2305[9], i2305[10], 0, i2304, 'm_fontAsset')
  request.r(i2305[11], i2305[12], 0, i2304, 'm_sharedMaterial')
  var i2307 = i2305[13]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 2) {
  request.r(i2307[i + 0], i2307[i + 1], 2, i2306, '')
  }
  i2304.m_fontSharedMaterials = i2306
  request.r(i2305[14], i2305[15], 0, i2304, 'm_fontMaterial')
  var i2309 = i2305[16]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 2) {
  request.r(i2309[i + 0], i2309[i + 1], 2, i2308, '')
  }
  i2304.m_fontMaterials = i2308
  i2304.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2305[17], i2305[18], i2305[19], i2305[20])
  i2304.m_fontColor = new pc.Color(i2305[21], i2305[22], i2305[23], i2305[24])
  i2304.m_enableVertexGradient = !!i2305[25]
  i2304.m_colorMode = i2305[26]
  i2304.m_fontColorGradient = request.d('TMPro.VertexGradient', i2305[27], i2304.m_fontColorGradient)
  request.r(i2305[28], i2305[29], 0, i2304, 'm_fontColorGradientPreset')
  request.r(i2305[30], i2305[31], 0, i2304, 'm_spriteAsset')
  i2304.m_tintAllSprites = !!i2305[32]
  request.r(i2305[33], i2305[34], 0, i2304, 'm_StyleSheet')
  i2304.m_TextStyleHashCode = i2305[35]
  i2304.m_overrideHtmlColors = !!i2305[36]
  i2304.m_faceColor = UnityEngine.Color32.ConstructColor(i2305[37], i2305[38], i2305[39], i2305[40])
  i2304.m_fontSize = i2305[41]
  i2304.m_fontSizeBase = i2305[42]
  i2304.m_fontWeight = i2305[43]
  i2304.m_enableAutoSizing = !!i2305[44]
  i2304.m_fontSizeMin = i2305[45]
  i2304.m_fontSizeMax = i2305[46]
  i2304.m_fontStyle = i2305[47]
  i2304.m_HorizontalAlignment = i2305[48]
  i2304.m_VerticalAlignment = i2305[49]
  i2304.m_textAlignment = i2305[50]
  i2304.m_characterSpacing = i2305[51]
  i2304.m_wordSpacing = i2305[52]
  i2304.m_lineSpacing = i2305[53]
  i2304.m_lineSpacingMax = i2305[54]
  i2304.m_paragraphSpacing = i2305[55]
  i2304.m_charWidthMaxAdj = i2305[56]
  i2304.m_enableWordWrapping = !!i2305[57]
  i2304.m_wordWrappingRatios = i2305[58]
  i2304.m_overflowMode = i2305[59]
  request.r(i2305[60], i2305[61], 0, i2304, 'm_linkedTextComponent')
  request.r(i2305[62], i2305[63], 0, i2304, 'parentLinkedComponent')
  i2304.m_enableKerning = !!i2305[64]
  i2304.m_enableExtraPadding = !!i2305[65]
  i2304.checkPaddingRequired = !!i2305[66]
  i2304.m_isRichText = !!i2305[67]
  i2304.m_parseCtrlCharacters = !!i2305[68]
  i2304.m_isOrthographic = !!i2305[69]
  i2304.m_isCullingEnabled = !!i2305[70]
  i2304.m_horizontalMapping = i2305[71]
  i2304.m_verticalMapping = i2305[72]
  i2304.m_uvLineOffset = i2305[73]
  i2304.m_geometrySortingOrder = i2305[74]
  i2304.m_IsTextObjectScaleStatic = !!i2305[75]
  i2304.m_VertexBufferAutoSizeReduction = !!i2305[76]
  i2304.m_useMaxVisibleDescender = !!i2305[77]
  i2304.m_pageToDisplay = i2305[78]
  i2304.m_margin = new pc.Vec4( i2305[79], i2305[80], i2305[81], i2305[82] )
  i2304.m_isUsingLegacyAnimationComponent = !!i2305[83]
  i2304.m_isVolumetricText = !!i2305[84]
  request.r(i2305[85], i2305[86], 0, i2304, 'm_Material')
  i2304.m_Maskable = !!i2305[87]
  i2304.m_Color = new pc.Color(i2305[88], i2305[89], i2305[90], i2305[91])
  i2304.m_RaycastTarget = !!i2305[92]
  i2304.m_RaycastPadding = new pc.Vec4( i2305[93], i2305[94], i2305[95], i2305[96] )
  return i2304
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2310 = root || request.c( 'TMPro.VertexGradient' )
  var i2311 = data
  i2310.topLeft = new pc.Color(i2311[0], i2311[1], i2311[2], i2311[3])
  i2310.topRight = new pc.Color(i2311[4], i2311[5], i2311[6], i2311[7])
  i2310.bottomLeft = new pc.Color(i2311[8], i2311[9], i2311[10], i2311[11])
  i2310.bottomRight = new pc.Color(i2311[12], i2311[13], i2311[14], i2311[15])
  return i2310
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2313 = data
  request.r(i2313[0], i2313[1], 0, i2312, 'm_FirstSelected')
  i2312.m_sendNavigationEvents = !!i2313[2]
  i2312.m_DragThreshold = i2313[3]
  return i2312
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2315 = data
  i2314.m_HorizontalAxis = i2315[0]
  i2314.m_VerticalAxis = i2315[1]
  i2314.m_SubmitButton = i2315[2]
  i2314.m_CancelButton = i2315[3]
  i2314.m_InputActionsPerSecond = i2315[4]
  i2314.m_RepeatDelay = i2315[5]
  i2314.m_ForceModuleActive = !!i2315[6]
  i2314.m_SendPointerHoverToParent = !!i2315[7]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'clip')
  request.r(i2317[2], i2317[3], 0, i2316, 'outputAudioMixerGroup')
  i2316.playOnAwake = !!i2317[4]
  i2316.loop = !!i2317[5]
  i2316.time = i2317[6]
  i2316.volume = i2317[7]
  i2316.pitch = i2317[8]
  i2316.enabled = !!i2317[9]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2319 = data
  i2318.ambientIntensity = i2319[0]
  i2318.reflectionIntensity = i2319[1]
  i2318.ambientMode = i2319[2]
  i2318.ambientLight = new pc.Color(i2319[3], i2319[4], i2319[5], i2319[6])
  i2318.ambientSkyColor = new pc.Color(i2319[7], i2319[8], i2319[9], i2319[10])
  i2318.ambientGroundColor = new pc.Color(i2319[11], i2319[12], i2319[13], i2319[14])
  i2318.ambientEquatorColor = new pc.Color(i2319[15], i2319[16], i2319[17], i2319[18])
  i2318.fogColor = new pc.Color(i2319[19], i2319[20], i2319[21], i2319[22])
  i2318.fogEndDistance = i2319[23]
  i2318.fogStartDistance = i2319[24]
  i2318.fogDensity = i2319[25]
  i2318.fog = !!i2319[26]
  request.r(i2319[27], i2319[28], 0, i2318, 'skybox')
  i2318.fogMode = i2319[29]
  var i2321 = i2319[30]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2321[i + 0]) );
  }
  i2318.lightmaps = i2320
  i2318.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2319[31], i2318.lightProbes)
  i2318.lightmapsMode = i2319[32]
  i2318.mixedBakeMode = i2319[33]
  i2318.environmentLightingMode = i2319[34]
  i2318.ambientProbe = new pc.SphericalHarmonicsL2(i2319[35])
  request.r(i2319[36], i2319[37], 0, i2318, 'customReflection')
  request.r(i2319[38], i2319[39], 0, i2318, 'defaultReflection')
  i2318.defaultReflectionMode = i2319[40]
  i2318.defaultReflectionResolution = i2319[41]
  i2318.sunLightObjectId = i2319[42]
  i2318.pixelLightCount = i2319[43]
  i2318.defaultReflectionHDR = !!i2319[44]
  i2318.hasLightDataAsset = !!i2319[45]
  i2318.hasManualGenerate = !!i2319[46]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'lightmapColor')
  request.r(i2325[2], i2325[3], 0, i2324, 'lightmapDirection')
  request.r(i2325[4], i2325[5], 0, i2324, 'shadowMask')
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2326 = root || new UnityEngine.LightProbes()
  var i2327 = data
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2335 = data
  i2334.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2335[0], i2334.main)
  i2334.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2335[1], i2334.colorBySpeed)
  i2334.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2335[2], i2334.colorOverLifetime)
  i2334.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2335[3], i2334.emission)
  i2334.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2335[4], i2334.rotationBySpeed)
  i2334.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2335[5], i2334.rotationOverLifetime)
  i2334.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2335[6], i2334.shape)
  i2334.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2335[7], i2334.sizeBySpeed)
  i2334.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2335[8], i2334.sizeOverLifetime)
  i2334.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2335[9], i2334.textureSheetAnimation)
  i2334.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2335[10], i2334.velocityOverLifetime)
  i2334.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2335[11], i2334.noise)
  i2334.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2335[12], i2334.inheritVelocity)
  i2334.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2335[13], i2334.forceOverLifetime)
  i2334.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2335[14], i2334.limitVelocityOverLifetime)
  i2334.useAutoRandomSeed = !!i2335[15]
  i2334.randomSeed = i2335[16]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2336 = root || new pc.ParticleSystemMain()
  var i2337 = data
  i2336.duration = i2337[0]
  i2336.loop = !!i2337[1]
  i2336.prewarm = !!i2337[2]
  i2336.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[3], i2336.startDelay)
  i2336.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[4], i2336.startLifetime)
  i2336.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[5], i2336.startSpeed)
  i2336.startSize3D = !!i2337[6]
  i2336.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[7], i2336.startSizeX)
  i2336.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[8], i2336.startSizeY)
  i2336.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[9], i2336.startSizeZ)
  i2336.startRotation3D = !!i2337[10]
  i2336.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[11], i2336.startRotationX)
  i2336.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[12], i2336.startRotationY)
  i2336.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[13], i2336.startRotationZ)
  i2336.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2337[14], i2336.startColor)
  i2336.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[15], i2336.gravityModifier)
  i2336.simulationSpace = i2337[16]
  request.r(i2337[17], i2337[18], 0, i2336, 'customSimulationSpace')
  i2336.simulationSpeed = i2337[19]
  i2336.useUnscaledTime = !!i2337[20]
  i2336.scalingMode = i2337[21]
  i2336.playOnAwake = !!i2337[22]
  i2336.maxParticles = i2337[23]
  i2336.emitterVelocityMode = i2337[24]
  i2336.stopAction = i2337[25]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2338 = root || new pc.MinMaxCurve()
  var i2339 = data
  i2338.mode = i2339[0]
  i2338.curveMin = new pc.AnimationCurve( { keys_flow: i2339[1] } )
  i2338.curveMax = new pc.AnimationCurve( { keys_flow: i2339[2] } )
  i2338.curveMultiplier = i2339[3]
  i2338.constantMin = i2339[4]
  i2338.constantMax = i2339[5]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2340 = root || new pc.MinMaxGradient()
  var i2341 = data
  i2340.mode = i2341[0]
  i2340.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2341[1], i2340.gradientMin)
  i2340.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2341[2], i2340.gradientMax)
  i2340.colorMin = new pc.Color(i2341[3], i2341[4], i2341[5], i2341[6])
  i2340.colorMax = new pc.Color(i2341[7], i2341[8], i2341[9], i2341[10])
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2343 = data
  i2342.mode = i2343[0]
  var i2345 = i2343[1]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2345[i + 0]) );
  }
  i2342.colorKeys = i2344
  var i2347 = i2343[2]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2347[i + 0]) );
  }
  i2342.alphaKeys = i2346
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2348 = root || new pc.ParticleSystemColorBySpeed()
  var i2349 = data
  i2348.enabled = !!i2349[0]
  i2348.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2349[1], i2348.color)
  i2348.range = new pc.Vec2( i2349[2], i2349[3] )
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2353 = data
  i2352.color = new pc.Color(i2353[0], i2353[1], i2353[2], i2353[3])
  i2352.time = i2353[4]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2357 = data
  i2356.alpha = i2357[0]
  i2356.time = i2357[1]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2358 = root || new pc.ParticleSystemColorOverLifetime()
  var i2359 = data
  i2358.enabled = !!i2359[0]
  i2358.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2359[1], i2358.color)
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2360 = root || new pc.ParticleSystemEmitter()
  var i2361 = data
  i2360.enabled = !!i2361[0]
  i2360.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2361[1], i2360.rateOverTime)
  i2360.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2361[2], i2360.rateOverDistance)
  var i2363 = i2361[3]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2363[i + 0]) );
  }
  i2360.bursts = i2362
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2366 = root || new pc.ParticleSystemBurst()
  var i2367 = data
  i2366.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[0], i2366.count)
  i2366.cycleCount = i2367[1]
  i2366.minCount = i2367[2]
  i2366.maxCount = i2367[3]
  i2366.repeatInterval = i2367[4]
  i2366.time = i2367[5]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2368 = root || new pc.ParticleSystemRotationBySpeed()
  var i2369 = data
  i2368.enabled = !!i2369[0]
  i2368.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[1], i2368.x)
  i2368.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[2], i2368.y)
  i2368.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[3], i2368.z)
  i2368.separateAxes = !!i2369[4]
  i2368.range = new pc.Vec2( i2369[5], i2369[6] )
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2370 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2371 = data
  i2370.enabled = !!i2371[0]
  i2370.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[1], i2370.x)
  i2370.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[2], i2370.y)
  i2370.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[3], i2370.z)
  i2370.separateAxes = !!i2371[4]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2372 = root || new pc.ParticleSystemShape()
  var i2373 = data
  i2372.enabled = !!i2373[0]
  i2372.shapeType = i2373[1]
  i2372.randomDirectionAmount = i2373[2]
  i2372.sphericalDirectionAmount = i2373[3]
  i2372.randomPositionAmount = i2373[4]
  i2372.alignToDirection = !!i2373[5]
  i2372.radius = i2373[6]
  i2372.radiusMode = i2373[7]
  i2372.radiusSpread = i2373[8]
  i2372.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2373[9], i2372.radiusSpeed)
  i2372.radiusThickness = i2373[10]
  i2372.angle = i2373[11]
  i2372.length = i2373[12]
  i2372.boxThickness = new pc.Vec3( i2373[13], i2373[14], i2373[15] )
  i2372.meshShapeType = i2373[16]
  request.r(i2373[17], i2373[18], 0, i2372, 'mesh')
  request.r(i2373[19], i2373[20], 0, i2372, 'meshRenderer')
  request.r(i2373[21], i2373[22], 0, i2372, 'skinnedMeshRenderer')
  i2372.useMeshMaterialIndex = !!i2373[23]
  i2372.meshMaterialIndex = i2373[24]
  i2372.useMeshColors = !!i2373[25]
  i2372.normalOffset = i2373[26]
  i2372.arc = i2373[27]
  i2372.arcMode = i2373[28]
  i2372.arcSpread = i2373[29]
  i2372.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2373[30], i2372.arcSpeed)
  i2372.donutRadius = i2373[31]
  i2372.position = new pc.Vec3( i2373[32], i2373[33], i2373[34] )
  i2372.rotation = new pc.Vec3( i2373[35], i2373[36], i2373[37] )
  i2372.scale = new pc.Vec3( i2373[38], i2373[39], i2373[40] )
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2374 = root || new pc.ParticleSystemSizeBySpeed()
  var i2375 = data
  i2374.enabled = !!i2375[0]
  i2374.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[1], i2374.x)
  i2374.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[2], i2374.y)
  i2374.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[3], i2374.z)
  i2374.separateAxes = !!i2375[4]
  i2374.range = new pc.Vec2( i2375[5], i2375[6] )
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2376 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2377 = data
  i2376.enabled = !!i2377[0]
  i2376.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[1], i2376.x)
  i2376.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[2], i2376.y)
  i2376.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[3], i2376.z)
  i2376.separateAxes = !!i2377[4]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2378 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2379 = data
  i2378.enabled = !!i2379[0]
  i2378.mode = i2379[1]
  i2378.animation = i2379[2]
  i2378.numTilesX = i2379[3]
  i2378.numTilesY = i2379[4]
  i2378.useRandomRow = !!i2379[5]
  i2378.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2379[6], i2378.frameOverTime)
  i2378.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2379[7], i2378.startFrame)
  i2378.cycleCount = i2379[8]
  i2378.rowIndex = i2379[9]
  i2378.flipU = i2379[10]
  i2378.flipV = i2379[11]
  i2378.spriteCount = i2379[12]
  var i2381 = i2379[13]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 2) {
  request.r(i2381[i + 0], i2381[i + 1], 2, i2380, '')
  }
  i2378.sprites = i2380
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2384 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2385 = data
  i2384.enabled = !!i2385[0]
  i2384.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[1], i2384.x)
  i2384.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[2], i2384.y)
  i2384.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[3], i2384.z)
  i2384.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[4], i2384.radial)
  i2384.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[5], i2384.speedModifier)
  i2384.space = i2385[6]
  i2384.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[7], i2384.orbitalX)
  i2384.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[8], i2384.orbitalY)
  i2384.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[9], i2384.orbitalZ)
  i2384.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[10], i2384.orbitalOffsetX)
  i2384.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[11], i2384.orbitalOffsetY)
  i2384.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[12], i2384.orbitalOffsetZ)
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2386 = root || new pc.ParticleSystemNoise()
  var i2387 = data
  i2386.enabled = !!i2387[0]
  i2386.separateAxes = !!i2387[1]
  i2386.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[2], i2386.strengthX)
  i2386.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[3], i2386.strengthY)
  i2386.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[4], i2386.strengthZ)
  i2386.frequency = i2387[5]
  i2386.damping = !!i2387[6]
  i2386.octaveCount = i2387[7]
  i2386.octaveMultiplier = i2387[8]
  i2386.octaveScale = i2387[9]
  i2386.quality = i2387[10]
  i2386.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[11], i2386.scrollSpeed)
  i2386.scrollSpeedMultiplier = i2387[12]
  i2386.remapEnabled = !!i2387[13]
  i2386.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[14], i2386.remapX)
  i2386.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[15], i2386.remapY)
  i2386.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[16], i2386.remapZ)
  i2386.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[17], i2386.positionAmount)
  i2386.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[18], i2386.rotationAmount)
  i2386.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[19], i2386.sizeAmount)
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2388 = root || new pc.ParticleSystemInheritVelocity()
  var i2389 = data
  i2388.enabled = !!i2389[0]
  i2388.mode = i2389[1]
  i2388.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[2], i2388.curve)
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2390 = root || new pc.ParticleSystemForceOverLifetime()
  var i2391 = data
  i2390.enabled = !!i2391[0]
  i2390.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[1], i2390.x)
  i2390.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[2], i2390.y)
  i2390.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[3], i2390.z)
  i2390.space = i2391[4]
  i2390.randomized = !!i2391[5]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2392 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2393 = data
  i2392.enabled = !!i2393[0]
  i2392.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[1], i2392.limit)
  i2392.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[2], i2392.limitX)
  i2392.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[3], i2392.limitY)
  i2392.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[4], i2392.limitZ)
  i2392.dampen = i2393[5]
  i2392.separateAxes = !!i2393[6]
  i2392.space = i2393[7]
  i2392.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[8], i2392.drag)
  i2392.multiplyDragByParticleSize = !!i2393[9]
  i2392.multiplyDragByParticleVelocity = !!i2393[10]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'mesh')
  i2394.meshCount = i2395[2]
  i2394.activeVertexStreamsCount = i2395[3]
  i2394.alignment = i2395[4]
  i2394.renderMode = i2395[5]
  i2394.sortMode = i2395[6]
  i2394.lengthScale = i2395[7]
  i2394.velocityScale = i2395[8]
  i2394.cameraVelocityScale = i2395[9]
  i2394.normalDirection = i2395[10]
  i2394.sortingFudge = i2395[11]
  i2394.minParticleSize = i2395[12]
  i2394.maxParticleSize = i2395[13]
  i2394.pivot = new pc.Vec3( i2395[14], i2395[15], i2395[16] )
  request.r(i2395[17], i2395[18], 0, i2394, 'trailMaterial')
  i2394.applyActiveColorSpace = !!i2395[19]
  i2394.enabled = !!i2395[20]
  request.r(i2395[21], i2395[22], 0, i2394, 'sharedMaterial')
  var i2397 = i2395[23]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 2) {
  request.r(i2397[i + 0], i2397[i + 1], 2, i2396, '')
  }
  i2394.sharedMaterials = i2396
  i2394.receiveShadows = !!i2395[24]
  i2394.shadowCastingMode = i2395[25]
  i2394.sortingLayerID = i2395[26]
  i2394.sortingOrder = i2395[27]
  i2394.lightmapIndex = i2395[28]
  i2394.lightmapSceneIndex = i2395[29]
  i2394.lightmapScaleOffset = new pc.Vec4( i2395[30], i2395[31], i2395[32], i2395[33] )
  i2394.lightProbeUsage = i2395[34]
  i2394.reflectionProbeUsage = i2395[35]
  return i2394
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.UI.Button' )
  var i2399 = data
  i2398.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2399[0], i2398.m_OnClick)
  i2398.m_Navigation = request.d('UnityEngine.UI.Navigation', i2399[1], i2398.m_Navigation)
  i2398.m_Transition = i2399[2]
  i2398.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2399[3], i2398.m_Colors)
  i2398.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2399[4], i2398.m_SpriteState)
  i2398.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2399[5], i2398.m_AnimationTriggers)
  i2398.m_Interactable = !!i2399[6]
  request.r(i2399[7], i2399[8], 0, i2398, 'm_TargetGraphic')
  return i2398
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2401 = data
  i2400.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2401[0], i2400.m_PersistentCalls)
  return i2400
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2403 = data
  var i2405 = i2403[0]
  var i2404 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.add(request.d('UnityEngine.Events.PersistentCall', i2405[i + 0]));
  }
  i2402.m_Calls = i2404
  return i2402
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2408 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2409 = data
  request.r(i2409[0], i2409[1], 0, i2408, 'm_Target')
  i2408.m_TargetAssemblyTypeName = i2409[2]
  i2408.m_MethodName = i2409[3]
  i2408.m_Mode = i2409[4]
  i2408.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2409[5], i2408.m_Arguments)
  i2408.m_CallState = i2409[6]
  return i2408
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2411 = data
  i2410.m_Mode = i2411[0]
  i2410.m_WrapAround = !!i2411[1]
  request.r(i2411[2], i2411[3], 0, i2410, 'm_SelectOnUp')
  request.r(i2411[4], i2411[5], 0, i2410, 'm_SelectOnDown')
  request.r(i2411[6], i2411[7], 0, i2410, 'm_SelectOnLeft')
  request.r(i2411[8], i2411[9], 0, i2410, 'm_SelectOnRight')
  return i2410
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2413 = data
  i2412.m_NormalColor = new pc.Color(i2413[0], i2413[1], i2413[2], i2413[3])
  i2412.m_HighlightedColor = new pc.Color(i2413[4], i2413[5], i2413[6], i2413[7])
  i2412.m_PressedColor = new pc.Color(i2413[8], i2413[9], i2413[10], i2413[11])
  i2412.m_SelectedColor = new pc.Color(i2413[12], i2413[13], i2413[14], i2413[15])
  i2412.m_DisabledColor = new pc.Color(i2413[16], i2413[17], i2413[18], i2413[19])
  i2412.m_ColorMultiplier = i2413[20]
  i2412.m_FadeDuration = i2413[21]
  return i2412
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2415 = data
  request.r(i2415[0], i2415[1], 0, i2414, 'm_HighlightedSprite')
  request.r(i2415[2], i2415[3], 0, i2414, 'm_PressedSprite')
  request.r(i2415[4], i2415[5], 0, i2414, 'm_SelectedSprite')
  request.r(i2415[6], i2415[7], 0, i2414, 'm_DisabledSprite')
  return i2414
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2417 = data
  i2416.m_NormalTrigger = i2417[0]
  i2416.m_HighlightedTrigger = i2417[1]
  i2416.m_PressedTrigger = i2417[2]
  i2416.m_SelectedTrigger = i2417[3]
  i2416.m_DisabledTrigger = i2417[4]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'animatorController')
  request.r(i2419[2], i2419[3], 0, i2418, 'avatar')
  i2418.updateMode = i2419[4]
  i2418.hasTransformHierarchy = !!i2419[5]
  i2418.applyRootMotion = !!i2419[6]
  var i2421 = i2419[7]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 2) {
  request.r(i2421[i + 0], i2421[i + 1], 2, i2420, '')
  }
  i2418.humanBones = i2420
  i2418.enabled = !!i2419[8]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2425 = data
  i2424.playAutomatically = !!i2425[0]
  request.r(i2425[1], i2425[2], 0, i2424, 'clip')
  var i2427 = i2425[3]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 2) {
  request.r(i2427[i + 0], i2427[i + 1], 2, i2426, '')
  }
  i2424.clips = i2426
  i2424.wrapMode = i2425[4]
  i2424.enabled = !!i2425[5]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2431 = data
  var i2433 = i2431[0]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2433[i + 0]));
  }
  i2430.ShaderCompilationErrors = i2432
  i2430.name = i2431[1]
  i2430.guid = i2431[2]
  var i2435 = i2431[3]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( i2435[i + 0] );
  }
  i2430.shaderDefinedKeywords = i2434
  var i2437 = i2431[4]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2437[i + 0]) );
  }
  i2430.passes = i2436
  var i2439 = i2431[5]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2439[i + 0]) );
  }
  i2430.usePasses = i2438
  var i2441 = i2431[6]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2441[i + 0]) );
  }
  i2430.defaultParameterValues = i2440
  request.r(i2431[7], i2431[8], 0, i2430, 'unityFallbackShader')
  i2430.readDepth = !!i2431[9]
  i2430.hasDepthOnlyPass = !!i2431[10]
  i2430.isCreatedByShaderGraph = !!i2431[11]
  i2430.disableBatching = !!i2431[12]
  i2430.compiled = !!i2431[13]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2445 = data
  i2444.shaderName = i2445[0]
  i2444.errorMessage = i2445[1]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2450 = root || new pc.UnityShaderPass()
  var i2451 = data
  i2450.id = i2451[0]
  i2450.subShaderIndex = i2451[1]
  i2450.name = i2451[2]
  i2450.passType = i2451[3]
  i2450.grabPassTextureName = i2451[4]
  i2450.usePass = !!i2451[5]
  i2450.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[6], i2450.zTest)
  i2450.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[7], i2450.zWrite)
  i2450.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[8], i2450.culling)
  i2450.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2451[9], i2450.blending)
  i2450.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2451[10], i2450.alphaBlending)
  i2450.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[11], i2450.colorWriteMask)
  i2450.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[12], i2450.offsetUnits)
  i2450.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[13], i2450.offsetFactor)
  i2450.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[14], i2450.stencilRef)
  i2450.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[15], i2450.stencilReadMask)
  i2450.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[16], i2450.stencilWriteMask)
  i2450.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2451[17], i2450.stencilOp)
  i2450.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2451[18], i2450.stencilOpFront)
  i2450.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2451[19], i2450.stencilOpBack)
  var i2453 = i2451[20]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2453[i + 0]) );
  }
  i2450.tags = i2452
  var i2455 = i2451[21]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( i2455[i + 0] );
  }
  i2450.passDefinedKeywords = i2454
  var i2457 = i2451[22]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2457[i + 0]) );
  }
  i2450.passDefinedKeywordGroups = i2456
  var i2459 = i2451[23]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2459[i + 0]) );
  }
  i2450.variants = i2458
  var i2461 = i2451[24]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2461[i + 0]) );
  }
  i2450.excludedVariants = i2460
  i2450.hasDepthReader = !!i2451[25]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2463 = data
  i2462.val = i2463[0]
  i2462.name = i2463[1]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2465 = data
  i2464.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[0], i2464.src)
  i2464.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[1], i2464.dst)
  i2464.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[2], i2464.op)
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2467 = data
  i2466.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2467[0], i2466.pass)
  i2466.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2467[1], i2466.fail)
  i2466.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2467[2], i2466.zFail)
  i2466.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2467[3], i2466.comp)
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2471 = data
  i2470.name = i2471[0]
  i2470.value = i2471[1]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2475 = data
  var i2477 = i2475[0]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( i2477[i + 0] );
  }
  i2474.keywords = i2476
  i2474.hasDiscard = !!i2475[1]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2481 = data
  i2480.passId = i2481[0]
  i2480.subShaderIndex = i2481[1]
  var i2483 = i2481[2]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2480.keywords = i2482
  i2480.vertexProgram = i2481[3]
  i2480.fragmentProgram = i2481[4]
  i2480.exportedForWebGl2 = !!i2481[5]
  i2480.readDepth = !!i2481[6]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'shader')
  i2486.pass = i2487[2]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2491 = data
  i2490.name = i2491[0]
  i2490.type = i2491[1]
  i2490.value = new pc.Vec4( i2491[2], i2491[3], i2491[4], i2491[5] )
  i2490.textureValue = i2491[6]
  i2490.shaderPropertyFlag = i2491[7]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2493 = data
  i2492.name = i2493[0]
  request.r(i2493[1], i2493[2], 0, i2492, 'texture')
  i2492.aabb = i2493[3]
  i2492.vertices = i2493[4]
  i2492.triangles = i2493[5]
  i2492.textureRect = UnityEngine.Rect.MinMaxRect(i2493[6], i2493[7], i2493[8], i2493[9])
  i2492.packedRect = UnityEngine.Rect.MinMaxRect(i2493[10], i2493[11], i2493[12], i2493[13])
  i2492.border = new pc.Vec4( i2493[14], i2493[15], i2493[16], i2493[17] )
  i2492.transparency = i2493[18]
  i2492.bounds = i2493[19]
  i2492.pixelsPerUnit = i2493[20]
  i2492.textureWidth = i2493[21]
  i2492.textureHeight = i2493[22]
  i2492.nativeSize = new pc.Vec2( i2493[23], i2493[24] )
  i2492.pivot = new pc.Vec2( i2493[25], i2493[26] )
  i2492.textureRectOffset = new pc.Vec2( i2493[27], i2493[28] )
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2495 = data
  i2494.name = i2495[0]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2497 = data
  i2496.name = i2497[0]
  i2496.wrapMode = i2497[1]
  i2496.isLooping = !!i2497[2]
  i2496.length = i2497[3]
  var i2499 = i2497[4]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2499[i + 0]) );
  }
  i2496.curves = i2498
  var i2501 = i2497[5]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2501[i + 0]) );
  }
  i2496.events = i2500
  i2496.halfPrecision = !!i2497[6]
  i2496._frameRate = i2497[7]
  i2496.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2497[8], i2496.localBounds)
  i2496.hasMuscleCurves = !!i2497[9]
  var i2503 = i2497[10]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( i2503[i + 0] );
  }
  i2496.clipMuscleConstant = i2502
  i2496.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2497[11], i2496.clipBindingConstant)
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2507 = data
  i2506.path = i2507[0]
  i2506.hash = i2507[1]
  i2506.componentType = i2507[2]
  i2506.property = i2507[3]
  i2506.keys = i2507[4]
  var i2509 = i2507[5]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2509[i + 0]) );
  }
  i2506.objectReferenceKeys = i2508
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2513 = data
  i2512.functionName = i2513[0]
  i2512.floatParameter = i2513[1]
  i2512.intParameter = i2513[2]
  i2512.stringParameter = i2513[3]
  request.r(i2513[4], i2513[5], 0, i2512, 'objectReferenceParameter')
  i2512.time = i2513[6]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2515 = data
  i2514.center = new pc.Vec3( i2515[0], i2515[1], i2515[2] )
  i2514.extends = new pc.Vec3( i2515[3], i2515[4], i2515[5] )
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2519 = data
  var i2521 = i2519[0]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( i2521[i + 0] );
  }
  i2518.genericBindings = i2520
  var i2523 = i2519[1]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( i2523[i + 0] );
  }
  i2518.pptrCurveMapping = i2522
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2527 = data
  i2526.time = i2527[0]
  request.r(i2527[1], i2527[2], 0, i2526, 'value')
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2529 = data
  i2528.name = i2529[0]
  i2528.ascent = i2529[1]
  i2528.originalLineHeight = i2529[2]
  i2528.fontSize = i2529[3]
  var i2531 = i2529[4]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2531[i + 0]) );
  }
  i2528.characterInfo = i2530
  request.r(i2529[5], i2529[6], 0, i2528, 'texture')
  i2528.originalFontSize = i2529[7]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2535 = data
  i2534.index = i2535[0]
  i2534.advance = i2535[1]
  i2534.bearing = i2535[2]
  i2534.glyphWidth = i2535[3]
  i2534.glyphHeight = i2535[4]
  i2534.minX = i2535[5]
  i2534.maxX = i2535[6]
  i2534.minY = i2535[7]
  i2534.maxY = i2535[8]
  i2534.uvBottomLeftX = i2535[9]
  i2534.uvBottomLeftY = i2535[10]
  i2534.uvBottomRightX = i2535[11]
  i2534.uvBottomRightY = i2535[12]
  i2534.uvTopLeftX = i2535[13]
  i2534.uvTopLeftY = i2535[14]
  i2534.uvTopRightX = i2535[15]
  i2534.uvTopRightY = i2535[16]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2537 = data
  i2536.name = i2537[0]
  var i2539 = i2537[1]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2539[i + 0]) );
  }
  i2536.layers = i2538
  var i2541 = i2537[2]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2541[i + 0]) );
  }
  i2536.parameters = i2540
  i2536.animationClips = i2537[3]
  i2536.avatarUnsupported = i2537[4]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2545 = data
  i2544.name = i2545[0]
  i2544.defaultWeight = i2545[1]
  i2544.blendingMode = i2545[2]
  i2544.avatarMask = i2545[3]
  i2544.syncedLayerIndex = i2545[4]
  i2544.syncedLayerAffectsTiming = !!i2545[5]
  i2544.syncedLayers = i2545[6]
  i2544.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2545[7], i2544.stateMachine)
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2547 = data
  i2546.id = i2547[0]
  i2546.name = i2547[1]
  i2546.path = i2547[2]
  var i2549 = i2547[3]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2549[i + 0]) );
  }
  i2546.states = i2548
  var i2551 = i2547[4]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2551[i + 0]) );
  }
  i2546.machines = i2550
  var i2553 = i2547[5]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2553[i + 0]) );
  }
  i2546.entryStateTransitions = i2552
  var i2555 = i2547[6]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2555[i + 0]) );
  }
  i2546.exitStateTransitions = i2554
  var i2557 = i2547[7]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2557[i + 0]) );
  }
  i2546.anyStateTransitions = i2556
  i2546.defaultStateId = i2547[8]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2561 = data
  i2560.id = i2561[0]
  i2560.name = i2561[1]
  i2560.cycleOffset = i2561[2]
  i2560.cycleOffsetParameter = i2561[3]
  i2560.cycleOffsetParameterActive = !!i2561[4]
  i2560.mirror = !!i2561[5]
  i2560.mirrorParameter = i2561[6]
  i2560.mirrorParameterActive = !!i2561[7]
  i2560.motionId = i2561[8]
  i2560.nameHash = i2561[9]
  i2560.fullPathHash = i2561[10]
  i2560.speed = i2561[11]
  i2560.speedParameter = i2561[12]
  i2560.speedParameterActive = !!i2561[13]
  i2560.tag = i2561[14]
  i2560.tagHash = i2561[15]
  i2560.writeDefaultValues = !!i2561[16]
  var i2563 = i2561[17]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 2, i2562, '')
  }
  i2560.behaviours = i2562
  var i2565 = i2561[18]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2565[i + 0]) );
  }
  i2560.transitions = i2564
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2571 = data
  i2570.fullPath = i2571[0]
  i2570.canTransitionToSelf = !!i2571[1]
  i2570.duration = i2571[2]
  i2570.exitTime = i2571[3]
  i2570.hasExitTime = !!i2571[4]
  i2570.hasFixedDuration = !!i2571[5]
  i2570.interruptionSource = i2571[6]
  i2570.offset = i2571[7]
  i2570.orderedInterruption = !!i2571[8]
  i2570.destinationStateId = i2571[9]
  i2570.isExit = !!i2571[10]
  i2570.mute = !!i2571[11]
  i2570.solo = !!i2571[12]
  var i2573 = i2571[13]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2573[i + 0]) );
  }
  i2570.conditions = i2572
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2577 = data
  i2576.mode = i2577[0]
  i2576.parameter = i2577[1]
  i2576.threshold = i2577[2]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2583 = data
  i2582.destinationStateId = i2583[0]
  i2582.isExit = !!i2583[1]
  i2582.mute = !!i2583[2]
  i2582.solo = !!i2583[3]
  var i2585 = i2583[4]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2585[i + 0]) );
  }
  i2582.conditions = i2584
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2589 = data
  i2588.defaultBool = !!i2589[0]
  i2588.defaultFloat = i2589[1]
  i2588.defaultInt = i2589[2]
  i2588.name = i2589[3]
  i2588.nameHash = i2589[4]
  i2588.type = i2589[5]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2591 = data
  i2590.name = i2591[0]
  i2590.bytes64 = i2591[1]
  i2590.data = i2591[2]
  return i2590
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2592 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2593 = data
  request.r(i2593[0], i2593[1], 0, i2592, 'atlas')
  i2592.normalStyle = i2593[2]
  i2592.normalSpacingOffset = i2593[3]
  i2592.boldStyle = i2593[4]
  i2592.boldSpacing = i2593[5]
  i2592.italicStyle = i2593[6]
  i2592.tabSize = i2593[7]
  i2592.hashCode = i2593[8]
  request.r(i2593[9], i2593[10], 0, i2592, 'material')
  i2592.materialHashCode = i2593[11]
  i2592.m_Version = i2593[12]
  i2592.m_SourceFontFileGUID = i2593[13]
  request.r(i2593[14], i2593[15], 0, i2592, 'm_SourceFontFile_EditorRef')
  request.r(i2593[16], i2593[17], 0, i2592, 'm_SourceFontFile')
  i2592.m_AtlasPopulationMode = i2593[18]
  i2592.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2593[19], i2592.m_FaceInfo)
  var i2595 = i2593[20]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.add(request.d('UnityEngine.TextCore.Glyph', i2595[i + 0]));
  }
  i2592.m_GlyphTable = i2594
  var i2597 = i2593[21]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.add(request.d('TMPro.TMP_Character', i2597[i + 0]));
  }
  i2592.m_CharacterTable = i2596
  var i2599 = i2593[22]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 2) {
  request.r(i2599[i + 0], i2599[i + 1], 2, i2598, '')
  }
  i2592.m_AtlasTextures = i2598
  i2592.m_AtlasTextureIndex = i2593[23]
  i2592.m_IsMultiAtlasTexturesEnabled = !!i2593[24]
  i2592.m_ClearDynamicDataOnBuild = !!i2593[25]
  var i2601 = i2593[26]
  var i2600 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.add(request.d('UnityEngine.TextCore.GlyphRect', i2601[i + 0]));
  }
  i2592.m_UsedGlyphRects = i2600
  var i2603 = i2593[27]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(request.d('UnityEngine.TextCore.GlyphRect', i2603[i + 0]));
  }
  i2592.m_FreeGlyphRects = i2602
  i2592.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2593[28], i2592.m_fontInfo)
  i2592.m_AtlasWidth = i2593[29]
  i2592.m_AtlasHeight = i2593[30]
  i2592.m_AtlasPadding = i2593[31]
  i2592.m_AtlasRenderMode = i2593[32]
  var i2605 = i2593[33]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('TMPro.TMP_Glyph', i2605[i + 0]));
  }
  i2592.m_glyphInfoList = i2604
  i2592.m_KerningTable = request.d('TMPro.KerningTable', i2593[34], i2592.m_KerningTable)
  i2592.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2593[35], i2592.m_FontFeatureTable)
  var i2607 = i2593[36]
  var i2606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2607.length; i += 2) {
  request.r(i2607[i + 0], i2607[i + 1], 1, i2606, '')
  }
  i2592.fallbackFontAssets = i2606
  var i2609 = i2593[37]
  var i2608 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2609.length; i += 2) {
  request.r(i2609[i + 0], i2609[i + 1], 1, i2608, '')
  }
  i2592.m_FallbackFontAssetTable = i2608
  i2592.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2593[38], i2592.m_CreationSettings)
  var i2611 = i2593[39]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('TMPro.TMP_FontWeightPair', i2611[i + 0]) );
  }
  i2592.m_FontWeightTable = i2610
  var i2613 = i2593[40]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('TMPro.TMP_FontWeightPair', i2613[i + 0]) );
  }
  i2592.fontWeights = i2612
  return i2592
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2615 = data
  i2614.m_FaceIndex = i2615[0]
  i2614.m_FamilyName = i2615[1]
  i2614.m_StyleName = i2615[2]
  i2614.m_PointSize = i2615[3]
  i2614.m_Scale = i2615[4]
  i2614.m_UnitsPerEM = i2615[5]
  i2614.m_LineHeight = i2615[6]
  i2614.m_AscentLine = i2615[7]
  i2614.m_CapLine = i2615[8]
  i2614.m_MeanLine = i2615[9]
  i2614.m_Baseline = i2615[10]
  i2614.m_DescentLine = i2615[11]
  i2614.m_SuperscriptOffset = i2615[12]
  i2614.m_SuperscriptSize = i2615[13]
  i2614.m_SubscriptOffset = i2615[14]
  i2614.m_SubscriptSize = i2615[15]
  i2614.m_UnderlineOffset = i2615[16]
  i2614.m_UnderlineThickness = i2615[17]
  i2614.m_StrikethroughOffset = i2615[18]
  i2614.m_StrikethroughThickness = i2615[19]
  i2614.m_TabWidth = i2615[20]
  return i2614
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2619 = data
  i2618.m_Index = i2619[0]
  i2618.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2619[1], i2618.m_Metrics)
  i2618.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2619[2], i2618.m_GlyphRect)
  i2618.m_Scale = i2619[3]
  i2618.m_AtlasIndex = i2619[4]
  i2618.m_ClassDefinitionType = i2619[5]
  return i2618
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2620 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2621 = data
  i2620.m_Width = i2621[0]
  i2620.m_Height = i2621[1]
  i2620.m_HorizontalBearingX = i2621[2]
  i2620.m_HorizontalBearingY = i2621[3]
  i2620.m_HorizontalAdvance = i2621[4]
  return i2620
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2622 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2623 = data
  i2622.m_X = i2623[0]
  i2622.m_Y = i2623[1]
  i2622.m_Width = i2623[2]
  i2622.m_Height = i2623[3]
  return i2622
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2626 = root || request.c( 'TMPro.TMP_Character' )
  var i2627 = data
  i2626.m_ElementType = i2627[0]
  i2626.m_Unicode = i2627[1]
  i2626.m_GlyphIndex = i2627[2]
  i2626.m_Scale = i2627[3]
  return i2626
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2632 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2633 = data
  i2632.Name = i2633[0]
  i2632.PointSize = i2633[1]
  i2632.Scale = i2633[2]
  i2632.CharacterCount = i2633[3]
  i2632.LineHeight = i2633[4]
  i2632.Baseline = i2633[5]
  i2632.Ascender = i2633[6]
  i2632.CapHeight = i2633[7]
  i2632.Descender = i2633[8]
  i2632.CenterLine = i2633[9]
  i2632.SuperscriptOffset = i2633[10]
  i2632.SubscriptOffset = i2633[11]
  i2632.SubSize = i2633[12]
  i2632.Underline = i2633[13]
  i2632.UnderlineThickness = i2633[14]
  i2632.strikethrough = i2633[15]
  i2632.strikethroughThickness = i2633[16]
  i2632.TabWidth = i2633[17]
  i2632.Padding = i2633[18]
  i2632.AtlasWidth = i2633[19]
  i2632.AtlasHeight = i2633[20]
  return i2632
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2636 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2637 = data
  i2636.id = i2637[0]
  i2636.x = i2637[1]
  i2636.y = i2637[2]
  i2636.width = i2637[3]
  i2636.height = i2637[4]
  i2636.xOffset = i2637[5]
  i2636.yOffset = i2637[6]
  i2636.xAdvance = i2637[7]
  i2636.scale = i2637[8]
  return i2636
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2638 = root || request.c( 'TMPro.KerningTable' )
  var i2639 = data
  var i2641 = i2639[0]
  var i2640 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.add(request.d('TMPro.KerningPair', i2641[i + 0]));
  }
  i2638.kerningPairs = i2640
  return i2638
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2644 = root || request.c( 'TMPro.KerningPair' )
  var i2645 = data
  i2644.xOffset = i2645[0]
  i2644.m_FirstGlyph = i2645[1]
  i2644.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2645[2], i2644.m_FirstGlyphAdjustments)
  i2644.m_SecondGlyph = i2645[3]
  i2644.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2645[4], i2644.m_SecondGlyphAdjustments)
  i2644.m_IgnoreSpacingAdjustments = !!i2645[5]
  return i2644
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2646 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2647 = data
  var i2649 = i2647[0]
  var i2648 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2649[i + 0]));
  }
  i2646.m_GlyphPairAdjustmentRecords = i2648
  return i2646
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2652 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2653 = data
  i2652.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2653[0], i2652.m_FirstAdjustmentRecord)
  i2652.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2653[1], i2652.m_SecondAdjustmentRecord)
  i2652.m_FeatureLookupFlags = i2653[2]
  return i2652
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2654 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2655 = data
  i2654.m_GlyphIndex = i2655[0]
  i2654.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2655[1], i2654.m_GlyphValueRecord)
  return i2654
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2656 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2657 = data
  i2656.m_XPlacement = i2657[0]
  i2656.m_YPlacement = i2657[1]
  i2656.m_XAdvance = i2657[2]
  i2656.m_YAdvance = i2657[3]
  return i2656
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2660 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2661 = data
  i2660.sourceFontFileName = i2661[0]
  i2660.sourceFontFileGUID = i2661[1]
  i2660.pointSizeSamplingMode = i2661[2]
  i2660.pointSize = i2661[3]
  i2660.padding = i2661[4]
  i2660.packingMode = i2661[5]
  i2660.atlasWidth = i2661[6]
  i2660.atlasHeight = i2661[7]
  i2660.characterSetSelectionMode = i2661[8]
  i2660.characterSequence = i2661[9]
  i2660.referencedFontAssetGUID = i2661[10]
  i2660.referencedTextAssetGUID = i2661[11]
  i2660.fontStyle = i2661[12]
  i2660.fontStyleModifier = i2661[13]
  i2660.renderMode = i2661[14]
  i2660.includeFontFeatures = !!i2661[15]
  return i2660
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2664 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2665 = data
  request.r(i2665[0], i2665[1], 0, i2664, 'regularTypeface')
  request.r(i2665[2], i2665[3], 0, i2664, 'italicTypeface')
  return i2664
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2666 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2667 = data
  i2666.useSafeMode = !!i2667[0]
  i2666.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2667[1], i2666.safeModeOptions)
  i2666.timeScale = i2667[2]
  i2666.unscaledTimeScale = i2667[3]
  i2666.useSmoothDeltaTime = !!i2667[4]
  i2666.maxSmoothUnscaledTime = i2667[5]
  i2666.rewindCallbackMode = i2667[6]
  i2666.showUnityEditorReport = !!i2667[7]
  i2666.logBehaviour = i2667[8]
  i2666.drawGizmos = !!i2667[9]
  i2666.defaultRecyclable = !!i2667[10]
  i2666.defaultAutoPlay = i2667[11]
  i2666.defaultUpdateType = i2667[12]
  i2666.defaultTimeScaleIndependent = !!i2667[13]
  i2666.defaultEaseType = i2667[14]
  i2666.defaultEaseOvershootOrAmplitude = i2667[15]
  i2666.defaultEasePeriod = i2667[16]
  i2666.defaultAutoKill = !!i2667[17]
  i2666.defaultLoopType = i2667[18]
  i2666.debugMode = !!i2667[19]
  i2666.debugStoreTargetId = !!i2667[20]
  i2666.showPreviewPanel = !!i2667[21]
  i2666.storeSettingsLocation = i2667[22]
  i2666.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2667[23], i2666.modules)
  i2666.createASMDEF = !!i2667[24]
  i2666.showPlayingTweens = !!i2667[25]
  i2666.showPausedTweens = !!i2667[26]
  return i2666
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2668 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2669 = data
  i2668.logBehaviour = i2669[0]
  i2668.nestedTweenFailureBehaviour = i2669[1]
  return i2668
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2670 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2671 = data
  i2670.showPanel = !!i2671[0]
  i2670.audioEnabled = !!i2671[1]
  i2670.physicsEnabled = !!i2671[2]
  i2670.physics2DEnabled = !!i2671[3]
  i2670.spriteEnabled = !!i2671[4]
  i2670.uiEnabled = !!i2671[5]
  i2670.uiToolkitEnabled = !!i2671[6]
  i2670.textMeshProEnabled = !!i2671[7]
  i2670.tk2DEnabled = !!i2671[8]
  i2670.deAudioEnabled = !!i2671[9]
  i2670.deUnityExtendedEnabled = !!i2671[10]
  i2670.epoOutlineEnabled = !!i2671[11]
  return i2670
}

Deserializers["HexFabricData"] = function (request, data, root) {
  var i2672 = root || request.c( 'HexFabricData' )
  var i2673 = data
  request.r(i2673[0], i2673[1], 0, i2672, 'HexObjectPref')
  request.r(i2673[2], i2673[3], 0, i2672, 'FxDestroy')
  i2672.ScaleCameraShake = new pc.Vec3( i2673[4], i2673[5], i2673[6] )
  return i2672
}

Deserializers["HexGameRuleData"] = function (request, data, root) {
  var i2674 = root || request.c( 'HexGameRuleData' )
  var i2675 = data
  var i2677 = i2675[0]
  var i2676 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroopPreset')))
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.add(request.d('HexGroopPreset', i2677[i + 0]));
  }
  i2674.startHexes = i2676
  i2674.GameTimer = i2675[1]
  return i2674
}

Deserializers["HexGroopPreset"] = function (request, data, root) {
  var i2680 = root || request.c( 'HexGroopPreset' )
  var i2681 = data
  var i2683 = i2681[0]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( i2683[i + 0] );
  }
  i2680.colors = i2682
  return i2680
}

Deserializers["HexSoundEffectsData"] = function (request, data, root) {
  var i2686 = root || request.c( 'HexSoundEffectsData' )
  var i2687 = data
  i2686.DestroySFX = request.d('AudioPlayData', i2687[0], i2686.DestroySFX)
  i2686.StuckSFX = request.d('AudioPlayData', i2687[1], i2686.StuckSFX)
  i2686.ByOneSFX = request.d('AudioPlayData', i2687[2], i2686.ByOneSFX)
  i2686.DeliteHexSFX = request.d('AudioPlayData', i2687[3], i2686.DeliteHexSFX)
  return i2686
}

Deserializers["AudioPlayData"] = function (request, data, root) {
  var i2688 = root || request.c( 'AudioPlayData' )
  var i2689 = data
  i2688.ID = i2689[0]
  request.r(i2689[1], i2689[2], 0, i2688, 'clip')
  i2688.volume = i2689[3]
  i2688.pitch = i2689[4]
  return i2688
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2691 = data
  request.r(i2691[0], i2691[1], 0, i2690, 'spriteSheet')
  var i2693 = i2691[2]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.add(request.d('TMPro.TMP_Sprite', i2693[i + 0]));
  }
  i2690.spriteInfoList = i2692
  var i2695 = i2691[3]
  var i2694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2695.length; i += 2) {
  request.r(i2695[i + 0], i2695[i + 1], 1, i2694, '')
  }
  i2690.fallbackSpriteAssets = i2694
  i2690.hashCode = i2691[4]
  request.r(i2691[5], i2691[6], 0, i2690, 'material')
  i2690.materialHashCode = i2691[7]
  i2690.m_Version = i2691[8]
  i2690.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2691[9], i2690.m_FaceInfo)
  var i2697 = i2691[10]
  var i2696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.add(request.d('TMPro.TMP_SpriteCharacter', i2697[i + 0]));
  }
  i2690.m_SpriteCharacterTable = i2696
  var i2699 = i2691[11]
  var i2698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.add(request.d('TMPro.TMP_SpriteGlyph', i2699[i + 0]));
  }
  i2690.m_SpriteGlyphTable = i2698
  return i2690
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2702 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2703 = data
  i2702.name = i2703[0]
  i2702.hashCode = i2703[1]
  i2702.unicode = i2703[2]
  i2702.pivot = new pc.Vec2( i2703[3], i2703[4] )
  request.r(i2703[5], i2703[6], 0, i2702, 'sprite')
  i2702.id = i2703[7]
  i2702.x = i2703[8]
  i2702.y = i2703[9]
  i2702.width = i2703[10]
  i2702.height = i2703[11]
  i2702.xOffset = i2703[12]
  i2702.yOffset = i2703[13]
  i2702.xAdvance = i2703[14]
  i2702.scale = i2703[15]
  return i2702
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2708 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2709 = data
  i2708.m_Name = i2709[0]
  i2708.m_HashCode = i2709[1]
  i2708.m_ElementType = i2709[2]
  i2708.m_Unicode = i2709[3]
  i2708.m_GlyphIndex = i2709[4]
  i2708.m_Scale = i2709[5]
  return i2708
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2712 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2713 = data
  request.r(i2713[0], i2713[1], 0, i2712, 'sprite')
  i2712.m_Index = i2713[2]
  i2712.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2713[3], i2712.m_Metrics)
  i2712.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2713[4], i2712.m_GlyphRect)
  i2712.m_Scale = i2713[5]
  i2712.m_AtlasIndex = i2713[6]
  i2712.m_ClassDefinitionType = i2713[7]
  return i2712
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2714 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2715 = data
  var i2717 = i2715[0]
  var i2716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.add(request.d('TMPro.TMP_Style', i2717[i + 0]));
  }
  i2714.m_StyleList = i2716
  return i2714
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2720 = root || request.c( 'TMPro.TMP_Style' )
  var i2721 = data
  i2720.m_Name = i2721[0]
  i2720.m_HashCode = i2721[1]
  i2720.m_OpeningDefinition = i2721[2]
  i2720.m_ClosingDefinition = i2721[3]
  i2720.m_OpeningTagArray = i2721[4]
  i2720.m_ClosingTagArray = i2721[5]
  i2720.m_OpeningTagUnicodeArray = i2721[6]
  i2720.m_ClosingTagUnicodeArray = i2721[7]
  return i2720
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2722 = root || request.c( 'TMPro.TMP_Settings' )
  var i2723 = data
  i2722.m_enableWordWrapping = !!i2723[0]
  i2722.m_enableKerning = !!i2723[1]
  i2722.m_enableExtraPadding = !!i2723[2]
  i2722.m_enableTintAllSprites = !!i2723[3]
  i2722.m_enableParseEscapeCharacters = !!i2723[4]
  i2722.m_EnableRaycastTarget = !!i2723[5]
  i2722.m_GetFontFeaturesAtRuntime = !!i2723[6]
  i2722.m_missingGlyphCharacter = i2723[7]
  i2722.m_warningsDisabled = !!i2723[8]
  request.r(i2723[9], i2723[10], 0, i2722, 'm_defaultFontAsset')
  i2722.m_defaultFontAssetPath = i2723[11]
  i2722.m_defaultFontSize = i2723[12]
  i2722.m_defaultAutoSizeMinRatio = i2723[13]
  i2722.m_defaultAutoSizeMaxRatio = i2723[14]
  i2722.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2723[15], i2723[16] )
  i2722.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2723[17], i2723[18] )
  i2722.m_autoSizeTextContainer = !!i2723[19]
  i2722.m_IsTextObjectScaleStatic = !!i2723[20]
  var i2725 = i2723[21]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2725.length; i += 2) {
  request.r(i2725[i + 0], i2725[i + 1], 1, i2724, '')
  }
  i2722.m_fallbackFontAssets = i2724
  i2722.m_matchMaterialPreset = !!i2723[22]
  request.r(i2723[23], i2723[24], 0, i2722, 'm_defaultSpriteAsset')
  i2722.m_defaultSpriteAssetPath = i2723[25]
  i2722.m_enableEmojiSupport = !!i2723[26]
  i2722.m_MissingCharacterSpriteUnicode = i2723[27]
  i2722.m_defaultColorGradientPresetsPath = i2723[28]
  request.r(i2723[29], i2723[30], 0, i2722, 'm_defaultStyleSheet')
  i2722.m_StyleSheetsResourcePath = i2723[31]
  request.r(i2723[32], i2723[33], 0, i2722, 'm_leadingCharacters')
  request.r(i2723[34], i2723[35], 0, i2722, 'm_followingCharacters')
  i2722.m_UseModernHangulLineBreakingRules = !!i2723[36]
  return i2722
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i2727 = data
  i2726._svcLunaVersion = i2727[0]
  var i2729 = i2727[1]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d(' . ⁊', i2729[i + 0]));
  }
  i2726._shaderVariants = i2728
  var i2731 = i2727[2]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.add(request.d(' . ⁊', i2731[i + 0]));
  }
  i2726._usedByLunaBuild = i2730
  var i2733 = i2727[3]
  var i2732 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.add(request.d(' . ⁊', i2733[i + 0]));
  }
  i2726._includedShaderVariants = i2732
  var i2735 = i2727[4]
  var i2734 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.add(request.d(' . ⁊', i2735[i + 0]));
  }
  i2726._excludedShaderVariants = i2734
  i2726.version = System.Int64(i2727[5])
  var i2737 = i2727[6]
  var i2736 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i2737[i + 0]));
  }
  i2726._shaderParsedShaders = i2736
  var i2739 = i2727[7]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.add(i2739[i + 0]);
  }
  i2726._modifiedShaders = i2738
  i2726.invalidShaders = !!i2727[8]
  return i2726
}

Deserializers[" . ⁊"] = function (request, data, root) {
  var i2742 = root || request.c( ' . ⁊' )
  var i2743 = data
  i2742.shaderCompilerPlatform = i2743[0]
  request.r(i2743[1], i2743[2], 0, i2742, 'shader')
  i2742.passType = i2743[3]
  i2742.passId = i2743[4]
  i2742.subShaderIndex = i2743[5]
  i2742.upToDate = !!i2743[6]
  i2742.keywords = request.d(' . ⁮', i2743[7], i2742.keywords)
  return i2742
}

Deserializers[" . ⁮"] = function (request, data, root) {
  var i2744 = root || request.c( ' . ⁮' )
  var i2745 = data
  var i2747 = i2745[0]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( i2747[i + 0] );
  }
  i2744. ‥ = i2746
  return i2744
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i2751 = data
  var i2753 = i2751[0]
  var i2752 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i2753[i + 0]));
  }
  i2750.ParsedSubShaders = i2752
  request.r(i2751[1], i2751[2], 0, i2750, 'Shader')
  i2750.ShaderPath = i2751[3]
  var i2755 = i2751[4]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( i2755[i + 0] );
  }
  i2750.ShaderDefinedKeywords = i2754
  request.r(i2751[5], i2751[6], 0, i2750, 'fallbackShader')
  var i2757 = i2751[7]
  var i2756 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i2757[i + 0]));
  }
  i2750.CompilationErrors = i2756
  var i2759 = i2751[8]
  var i2758 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.add(request.d(' . ⁊', i2759[i + 0]));
  }
  i2750.Variants = i2758
  return i2750
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i2763 = data
  i2762.Index = i2763[0]
  var i2765 = i2763[1]
  var i2764 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i2765.length; i += 1) {
    i2764.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i2765[i + 0]));
  }
  i2762.Passes = i2764
  request.r(i2763[2], i2763[3], 0, i2762, 'Shader')
  var i2767 = i2763[4]
  var i2766 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i2767[i + 0]));
  }
  i2762.Tags = i2766
  return i2762
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i2771 = data
  request.r(i2771[0], i2771[1], 0, i2770, 'Shader')
  var i2773 = i2771[2]
  var i2772 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i2773[i + 0]));
  }
  i2770.ShaderVariants = i2772
  i2770.DefinedKeywords = request.d(' . ⁮', i2771[3], i2770.DefinedKeywords)
  var i2775 = i2771[4]
  var i2774 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i2775[i + 0]));
  }
  i2770.KeywordGroups = i2774
  i2770.KeywordsMinimalCardinality = i2771[5]
  i2770.ContainsInvalidVariant = !!i2771[6]
  var i2777 = i2771[7]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns(' . ⁊')))
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.add(request.d(' . ⁊', i2777[i + 0]));
  }
  i2770.VariantStructures = i2776
  var i2779 = i2771[8]
  var i2778 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i2779[i + 0]));
  }
  i2770.CompilationErrors = i2778
  i2770.HasDepthReader = !!i2771[9]
  i2770.Id = i2771[10]
  i2770.SubShaderIndex = i2771[11]
  i2770.SerializedObjectId = i2771[12]
  var i2781 = i2771[13]
  var i2780 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i2781[i + 0]));
  }
  i2770.Tags = i2780
  i2770.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i2771[14], i2770.UsePass)
  i2770.GrabPassTextureName = i2771[15]
  i2770.PlatformMask = i2771[16]
  return i2770
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i2785 = data
  i2784.ShaderCompilerPlatform = i2785[0]
  i2784.NoShaderVariant = !!i2785[1]
  i2784.VertexProgram = i2785[2]
  i2784.FragmentProgram = i2785[3]
  i2784.LOD = i2785[4]
  i2784.readDepth = !!i2785[5]
  i2784.PassId = i2785[6]
  i2784.SubShaderIndex = i2785[7]
  i2784.Keywords = request.d(' . ⁮', i2785[8], i2784.Keywords)
  var i2787 = i2785[9]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i2787[i + 0]));
  }
  i2784.Tags = i2786
  return i2784
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i2791 = data
  var i2793 = i2791[0]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(i2793[i + 0]);
  }
  i2790.Keywords = i2792
  i2790.hasDiscard = !!i2791[1]
  return i2790
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i2797 = data
  i2796.Variant = !!i2797[0]
  i2796.ShaderName = i2797[1]
  var i2799 = i2797[2]
  var i2798 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i2799[i + 0]));
  }
  i2796.Details = i2798
  return i2796
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i2803 = data
  i2802.Key = i2803[0]
  i2802.Value = i2803[1]
  return i2802
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i2805 = data
  i2804.shader = i2805[0]
  i2804.pass = i2805[1]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2809 = data
  var i2811 = i2809[0]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2811[i + 0]) );
  }
  i2808.files = i2810
  i2808.componentToPrefabIds = i2809[1]
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2815 = data
  i2814.path = i2815[0]
  request.r(i2815[1], i2815[2], 0, i2814, 'unityObject')
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2817 = data
  var i2819 = i2817[0]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2819[i + 0]) );
  }
  i2816.scriptsExecutionOrder = i2818
  var i2821 = i2817[1]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2821[i + 0]) );
  }
  i2816.sortingLayers = i2820
  var i2823 = i2817[2]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2823[i + 0]) );
  }
  i2816.cullingLayers = i2822
  i2816.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2817[3], i2816.timeSettings)
  i2816.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2817[4], i2816.physicsSettings)
  i2816.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2817[5], i2816.physics2DSettings)
  i2816.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2817[6], i2816.qualitySettings)
  i2816.enableRealtimeShadows = !!i2817[7]
  i2816.enableAutoInstancing = !!i2817[8]
  i2816.enableStaticBatching = !!i2817[9]
  i2816.enableDynamicBatching = !!i2817[10]
  i2816.usePreservativeDynamicBatching = !!i2817[11]
  i2816.lightmapEncodingQuality = i2817[12]
  i2816.desiredColorSpace = i2817[13]
  var i2825 = i2817[14]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( i2825[i + 0] );
  }
  i2816.allTags = i2824
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2829 = data
  i2828.name = i2829[0]
  i2828.value = i2829[1]
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2833 = data
  i2832.id = i2833[0]
  i2832.name = i2833[1]
  i2832.value = i2833[2]
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2837 = data
  i2836.id = i2837[0]
  i2836.name = i2837[1]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2839 = data
  i2838.fixedDeltaTime = i2839[0]
  i2838.maximumDeltaTime = i2839[1]
  i2838.timeScale = i2839[2]
  i2838.maximumParticleTimestep = i2839[3]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2841 = data
  i2840.gravity = new pc.Vec3( i2841[0], i2841[1], i2841[2] )
  i2840.defaultSolverIterations = i2841[3]
  i2840.bounceThreshold = i2841[4]
  i2840.autoSyncTransforms = !!i2841[5]
  i2840.autoSimulation = !!i2841[6]
  var i2843 = i2841[7]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2843[i + 0]) );
  }
  i2840.collisionMatrix = i2842
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2847 = data
  i2846.enabled = !!i2847[0]
  i2846.layerId = i2847[1]
  i2846.otherLayerId = i2847[2]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2849 = data
  request.r(i2849[0], i2849[1], 0, i2848, 'material')
  i2848.gravity = new pc.Vec2( i2849[2], i2849[3] )
  i2848.positionIterations = i2849[4]
  i2848.velocityIterations = i2849[5]
  i2848.velocityThreshold = i2849[6]
  i2848.maxLinearCorrection = i2849[7]
  i2848.maxAngularCorrection = i2849[8]
  i2848.maxTranslationSpeed = i2849[9]
  i2848.maxRotationSpeed = i2849[10]
  i2848.baumgarteScale = i2849[11]
  i2848.baumgarteTOIScale = i2849[12]
  i2848.timeToSleep = i2849[13]
  i2848.linearSleepTolerance = i2849[14]
  i2848.angularSleepTolerance = i2849[15]
  i2848.defaultContactOffset = i2849[16]
  i2848.autoSimulation = !!i2849[17]
  i2848.queriesHitTriggers = !!i2849[18]
  i2848.queriesStartInColliders = !!i2849[19]
  i2848.callbacksOnDisable = !!i2849[20]
  i2848.reuseCollisionCallbacks = !!i2849[21]
  i2848.autoSyncTransforms = !!i2849[22]
  var i2851 = i2849[23]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2851[i + 0]) );
  }
  i2848.collisionMatrix = i2850
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2855 = data
  i2854.enabled = !!i2855[0]
  i2854.layerId = i2855[1]
  i2854.otherLayerId = i2855[2]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2857 = data
  var i2859 = i2857[0]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2859[i + 0]) );
  }
  i2856.qualityLevels = i2858
  var i2861 = i2857[1]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( i2861[i + 0] );
  }
  i2856.names = i2860
  i2856.shadows = i2857[2]
  i2856.anisotropicFiltering = i2857[3]
  i2856.antiAliasing = i2857[4]
  i2856.lodBias = i2857[5]
  i2856.shadowCascades = i2857[6]
  i2856.shadowDistance = i2857[7]
  i2856.shadowmaskMode = i2857[8]
  i2856.shadowProjection = i2857[9]
  i2856.shadowResolution = i2857[10]
  i2856.softParticles = !!i2857[11]
  i2856.softVegetation = !!i2857[12]
  i2856.activeColorSpace = i2857[13]
  i2856.desiredColorSpace = i2857[14]
  i2856.masterTextureLimit = i2857[15]
  i2856.maxQueuedFrames = i2857[16]
  i2856.particleRaycastBudget = i2857[17]
  i2856.pixelLightCount = i2857[18]
  i2856.realtimeReflectionProbes = !!i2857[19]
  i2856.shadowCascade2Split = i2857[20]
  i2856.shadowCascade4Split = new pc.Vec3( i2857[21], i2857[22], i2857[23] )
  i2856.streamingMipmapsActive = !!i2857[24]
  i2856.vSyncCount = i2857[25]
  i2856.asyncUploadBufferSize = i2857[26]
  i2856.asyncUploadTimeSlice = i2857[27]
  i2856.billboardsFaceCameraPosition = !!i2857[28]
  i2856.shadowNearPlaneOffset = i2857[29]
  i2856.streamingMipmapsMemoryBudget = i2857[30]
  i2856.maximumLODLevel = i2857[31]
  i2856.streamingMipmapsAddAllCameras = !!i2857[32]
  i2856.streamingMipmapsMaxLevelReduction = i2857[33]
  i2856.streamingMipmapsRenderersPerFrame = i2857[34]
  i2856.resolutionScalingFixedDPIFactor = i2857[35]
  i2856.streamingMipmapsMaxFileIORequests = i2857[36]
  i2856.currentQualityLevel = i2857[37]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2867 = data
  i2866.weight = i2867[0]
  i2866.vertices = i2867[1]
  i2866.normals = i2867[2]
  i2866.tangents = i2867[3]
  return i2866
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2868 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2869 = data
  request.r(i2869[0], i2869[1], 0, i2868, 'm_ObjectArgument')
  i2868.m_ObjectArgumentAssemblyTypeName = i2869[2]
  i2868.m_IntArgument = i2869[3]
  i2868.m_FloatArgument = i2869[4]
  i2868.m_StringArgument = i2869[5]
  i2868.m_BoolArgument = !!i2869[6]
  return i2868
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2870 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2871 = data
  i2870.xPlacement = i2871[0]
  i2870.yPlacement = i2871[1]
  i2870.xAdvance = i2871[2]
  i2870.yAdvance = i2871[3]
  return i2870
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i2875 = data
  i2874.SubShaderIndex = i2875[0]
  i2874.PassId = i2875[1]
  var i2877 = i2875[2]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( i2877[i + 0] );
  }
  i2874.ShaderVariantKeywords = i2876
  var i2879 = i2875[3]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.push( i2879[i + 0] );
  }
  i2874.Messages = i2878
  return i2874
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[65],"66":[16],"67":[9],"68":[9],"69":[9],"70":[9],"71":[9],"72":[9],"73":[9],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[16],"89":[11],"90":[91],"92":[91],"21":[20],"93":[94],"95":[96],"97":[94],"98":[20],"99":[20],"24":[21],"28":[27,20],"100":[20],"23":[21],"101":[20],"102":[20],"103":[20],"104":[20],"105":[20],"106":[20],"107":[20],"108":[20],"109":[20],"110":[27,20],"111":[20],"112":[20],"113":[20],"114":[20],"115":[27,20],"116":[20],"117":[34],"118":[34],"35":[34],"119":[34],"120":[16],"121":[16],"122":[123],"124":[16],"125":[20],"126":[11,20],"32":[20,27],"127":[20],"128":[27,20],"129":[11],"130":[27,20],"131":[20],"132":[94]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HexGroopPlace","HexPlacePositor","UnityEngine.Grid","UnityEngine.MeshCollider","UnityEngine.Mesh","UnityEngine.Rigidbody","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Material","HexGroop","HexObject","HexVisual","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","TutorialAnimation","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TimeBar","FailAnimation","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","HexFabricData","UnityEngine.GameObject","HexGameRuleData","HexSoundEffectsData","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Test-Task-Hexagones";

Deserializers.lunaInitializationTime = "06/07/2026 14:46:17";

Deserializers.lunaDaysRunning = "1.3";

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

Deserializers.buildID = "7b3b56f3-58d2-43d3-8942-cbe3cdd3ecc5";

Deserializers.runtimeInitializeOnLoadInfos = [[["EntryPoint","Init"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

