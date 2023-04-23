import React, { useRef, useEffect } from 'react';
import { TextureLoader } from 'three';


export default function Spheres({ texture }) {
    const orbitingSpheres = useRef([]);
  
      const scene = texture.scene;
  
      const centerSphereGeometry = new THREE.SphereGeometry(0, 0, 0);
      const centerSphereMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
      });
      const centerSphere = new THREE.Mesh(
        centerSphereGeometry,
        centerSphereMaterial
      );
      scene.add(centerSphere);
  
      const textureLoader = new TextureLoader();
      textureLoader.load('/sky-orange-contrast.png', function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
        texture.encoding = THREE.sRGBEncoding;
      });
  
      let cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
      cubeRenderTarget.texture.type = THREE.HalfFloatType;
      let cubeCamera = new THREE.Cube
}