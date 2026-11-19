// components/ModelLoader.jsx
import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

useGLTF.preload("models/3dPortfolio.glb?v=executive_signs_v6");

export default function ModelLoader({ onMeshReady, onFansReady, setLoaded }) {
  const groupRef = useRef();
  const { scene } = useGLTF("models/3dPortfolio.glb?v=executive_signs_v6");

  // As soon as the 3D scene is mounted, signal loaded immediately so START appears without delay
  useEffect(() => {
    if (scene) {
      setLoaded(true);
    }
  }, [scene, setLoaded]);

  const manager = new THREE.LoadingManager();

  manager.onLoad = () => {
    setLoaded(true);
  };

  const textures = useMemo(() => {
    const loader = new THREE.TextureLoader(manager);
    const textureMap = {
      First: "textures/First.webp?v=pristine_v11",
      Second: "textures/Second.webp",
      Third: "textures/Third.webp",
      Roof_Billboard: "textures/roof_billboard.webp?v=perfect_legibility_v13",
    };

    const loaded = {};
    for (const [key, path] of Object.entries(textureMap)) {
      const tex = loader.load(path);
      tex.flipY = false;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 16;
      loaded[key] = tex;
    }
    return loaded;
  }, []);

  useEffect(() => {
    const interactive = [];
    const fans = [];

    scene.traverse((child) => {
      if (!child.isMesh) return;

      // Roof Billboard
      if (child.name.includes("Roof_Billboard")) {
        if (textures.Roof_Billboard) {
          textures.Roof_Billboard.generateMipmaps = true;
          textures.Roof_Billboard.minFilter = THREE.LinearMipmapLinearFilter;
          textures.Roof_Billboard.magFilter = THREE.LinearFilter;
          textures.Roof_Billboard.anisotropy = 16;
          textures.Roof_Billboard.needsUpdate = true;
        }
        child.material = new THREE.MeshBasicMaterial({
          map: textures.Roof_Billboard,
          side: THREE.DoubleSide,
          toneMapped: false,
        });
        return;
      }

      // Apply texture if matches
      for (const key in textures) {
        if (child.name.includes(key)) {
          child.material = new THREE.MeshBasicMaterial({
            map: textures[key],
          });
          child.material.map.minFilter = THREE.LinearFilter;
        }
      }

      // Apply special materials
      if (child.name.includes("Glass")) {
        child.material = new THREE.MeshPhysicalMaterial({
          transparent: true,
          transmission: 1,
          roughness: 0,
          metalness: 0,
          opacity: 1,
          ior: 1.5,
          thickness: 0.1,
          specularIntensity: 1,
          clearcoat: 1,
          clearcoatRoughness: 0,
        });

        // Add red border lines to the navigation button boxes
        if (child.name.endsWith("_Glass_Target")) {
          const existingLine = child.children.find((c) => c.isLineSegments);
          if (!existingLine) {
            const edges = new THREE.EdgesGeometry(child.geometry, 20);
            const lineMat = new THREE.LineBasicMaterial({
              color: 0xff1525,
              linewidth: 2,
            });
            const line = new THREE.LineSegments(edges, lineMat);
            line.raycast = () => {};
            child.add(line);
          }
        }
      } else if (child.name.endsWith("_Red_Text_Target")) {
        // Elegant, crisp pure white text inside the red outline boxes
        child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      } else if (child.name.includes("Red")) {
        child.material = new THREE.MeshBasicMaterial({
          color: 0xff2222,
          side: THREE.DoubleSide,
        });
      } else if (child.name.includes("White")) {
        child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      }

      // Collect fans and interactive objects
      if (child.name.includes("Fan")) fans.push(child);

      if (child.name.includes("Target")) {
        if (!child.userData.initialScale) {
          child.userData.initialScale = child.scale.clone();
        }
        interactive.push(child);
      }
    });

    onMeshReady?.(interactive);
    onFansReady?.(fans);
  }, [scene, textures, onMeshReady, onFansReady]);

  return <primitive object={scene} ref={groupRef} />;
}
