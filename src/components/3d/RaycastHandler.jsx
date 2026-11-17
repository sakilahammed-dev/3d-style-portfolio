import { useEffect, useRef, useCallback, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { navConfig } from "../../utils/navConfig.js";

export default function RaycastHandler({
  targets,
  controlsRef,
  setScreenMesh,
  setTarget,
  screenMesh,
  currentTarget,
  setIsAnimating,
}) {
  const raycaster = useRef(new THREE.Raycaster());
  const pointer = useRef(new THREE.Vector2(-9999, -9999));
  const hoveredNavEntry = useRef(null);
  const { camera, gl } = useThree();
  const [animating, setAnimating] = useState(false);

  // --- helpers ---
  const findNavEntryBy = useCallback(
    (key, value) =>
      Object.values(navConfig).find((conf) => conf[key] === value),
    [],
  );

  const findTargetByName = useCallback(
    (name) => targets.find((o) => o.name === name),
    [targets],
  );

  const playHoverAnimation = useCallback((object, on) => {
    if (!object || !object.material) return;

    if (!object.userData.initialScale) {
      object.userData.initialScale = object.scale.clone();
    }

    if (!object.userData.initialColor && object.material.color) {
      object.userData.initialColor = object.material.color.clone();
    }

    const targetScale = on
      ? object.userData.initialScale.clone().multiplyScalar(1.1)
      : object.userData.initialScale;

    // Idle is pure white (#ffffff), on hover turns standard vibrant golden yellow (#ffd700)
    const targetColor = on
      ? { r: 1, g: 0.84, b: 0.0 }
      : { r: 1, g: 1, b: 1 };

    gsap.to(object.scale, {
      x: targetScale.x,
      y: targetScale.y,
      z: targetScale.z,
      duration: 0.25,
      ease: "back.out(1.8)",
      overwrite: "auto",
    });

    if (object.material.color) {
      gsap.to(object.material.color, {
        r: targetColor.r,
        g: targetColor.g,
        b: targetColor.b,
        duration: 0.25,
        overwrite: "auto",
      });
    }
  }, []);

  const focusCameraOnObject = useCallback(
    (object) => {
      if (!currentTarget) return;
      const box = new THREE.Box3().setFromObject(object);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5;

      const configEntry = findNavEntryBy("target", object.name);
      const offsetArray = configEntry?.cameraOffset || [0, 0, 1];
      const offsetDirection = new THREE.Vector3(...offsetArray).normalize();
      const newCameraPos = center
        .clone()
        .add(offsetDirection.multiplyScalar(cameraZ));

      gsap.killTweensOf([controlsRef.current.target, camera.position]);

      gsap.to(controlsRef.current.target, {
        x: center.x,
        y: center.y,
        z: center.z,
        duration: 2,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to(camera.position, {
        x: newCameraPos.x,
        y: newCameraPos.y,
        z: newCameraPos.z,
        duration: 2,
        ease: "power2.out",
        overwrite: "auto",
        onUpdate: () => {
          camera.lookAt(controlsRef.current.target);
          controlsRef.current.update();
        },
        onComplete: () => {
          controlsRef.current.enabled = true;
          controlsRef.current.enableZoom = true;
          setAnimating(false);
          setIsAnimating(false);
        },
      });
    },
    [camera, controlsRef, findNavEntryBy, currentTarget, setIsAnimating],
  );

  // update pointer coordinates relative to canvas
  const updatePointer = useCallback((clientX, clientY) => {
    if (!gl.domElement) return;
    const rect = gl.domElement.getBoundingClientRect();
    pointer.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  }, [gl]);

  // handle pointer and mouse movement
  useEffect(() => {
    const handleMove = (e) => {
      if (e.pointerType === "touch") return;
      updatePointer(e.clientX, e.clientY);
    };

    const handleLeave = () => {
      pointer.current.set(-9999, -9999);
      if (hoveredNavEntry.current) {
        playHoverAnimation(findTargetByName(hoveredNavEntry.current.text), false);
        hoveredNavEntry.current = null;
      }
      document.body.style.cursor = "default";
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [updatePointer, findTargetByName, playHoverAnimation]);

  useEffect(() => {
    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  // hover logic in render loop
  useFrame(() => {
    if (animating) return;

    raycaster.current.setFromCamera(pointer.current, camera);
    const intersects = raycaster.current.intersectObjects(targets);

    if (intersects.length > 0) {
      const hit = intersects[0].object;

      // Find if this hit is part of a nav button (glass box or 3D text)
      const navEntry = Object.values(navConfig).find(
        (conf) => conf.glass === hit.name || conf.text === hit.name,
      );

      if (navEntry) {
        if (hoveredNavEntry.current !== navEntry) {
          if (hoveredNavEntry.current) {
            playHoverAnimation(findTargetByName(hoveredNavEntry.current.text), false);
          }
          hoveredNavEntry.current = navEntry;
          playHoverAnimation(findTargetByName(navEntry.text), true);
        }
        document.body.style.cursor = "pointer";
      } else {
        if (hoveredNavEntry.current) {
          playHoverAnimation(findTargetByName(hoveredNavEntry.current.text), false);
          hoveredNavEntry.current = null;
        }

        if (hit.name.includes("Screen") && hit !== screenMesh) {
          document.body.style.cursor = "pointer";
        } else {
          document.body.style.cursor = "default";
        }
      }
    } else {
      if (hoveredNavEntry.current) {
        playHoverAnimation(findTargetByName(hoveredNavEntry.current.text), false);
        hoveredNavEntry.current = null;
      }
      document.body.style.cursor = "default";
    }
  });

  // focus camera when screenMesh changes
  useEffect(() => {
    if (screenMesh) {
      controlsRef.current.enabled = false;
      controlsRef.current.enableZoom = false;
      setAnimating(true);
      setIsAnimating(true);
      focusCameraOnObject(screenMesh);
    }
  }, [screenMesh, currentTarget, focusCameraOnObject, controlsRef, setIsAnimating]);

  // Global navigation helper for direct targeting & automated testing
  useEffect(() => {
    window.__navigateToTarget = (targetName) => {
      const navEntry = Object.values(navConfig).find(
        (conf) =>
          conf.glass === targetName ||
          conf.text === targetName ||
          conf.target === targetName ||
          conf.text.toLowerCase().includes(targetName.toLowerCase()),
      );
      if (navEntry) {
        const screenTarget = findTargetByName(navEntry.target);
        if (screenTarget) {
          setScreenMesh?.(screenTarget);
          setTarget(navEntry.text);
          return;
        }
      }
      const screenTarget = findTargetByName(targetName);
      if (screenTarget) {
        setScreenMesh?.(screenTarget);
        const nav = findNavEntryBy("target", targetName);
        if (nav) setTarget(nav.text);
      }
    };
    return () => {
      delete window.__navigateToTarget;
    };
  }, [targets, setScreenMesh, setTarget, findTargetByName, findNavEntryBy]);

  // handle click / tap
  useEffect(() => {
    const handleClick = (e) => {
      let clientX, clientY;
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if (e.changedTouches && e.changedTouches.length > 0) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      updatePointer(clientX, clientY);
      raycaster.current.setFromCamera(pointer.current, camera);

      const intersects = raycaster.current.intersectObjects(targets);
      if (intersects.length === 0) return;

      const clicked = intersects[0].object;

      if (clicked.name.includes("Screen")) {
        if (clicked === screenMesh) {
          controlsRef.current.enabled = false;
        }

        const navEntry = findNavEntryBy("target", clicked.name);
        if (!navEntry) return;

        const screenTarget = findTargetByName(navEntry.target);
        if (screenTarget && screenTarget !== screenMesh) {
          setScreenMesh?.(screenTarget);
          setTarget(navEntry.text);
        }
      } else {
        const navEntry = Object.values(navConfig).find(
          (conf) => conf.glass === clicked.name || conf.text === clicked.name,
        );
        if (navEntry) {
          const screenTarget = findTargetByName(navEntry.target);
          if (screenTarget) {
            setScreenMesh?.(screenTarget);
            setTarget(navEntry.text);
          }
        }
      }
    };

    const handlePointerUp = () => {
      if (animating) return;
      controlsRef.current.enabled = true;
    };

    window.addEventListener("pointerdown", handleClick);
    window.addEventListener("touchstart", handleClick);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      window.removeEventListener("pointerdown", handleClick);
      window.removeEventListener("touchstart", handleClick);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [
    targets,
    camera,
    controlsRef,
    setScreenMesh,
    screenMesh,
    setTarget,
    findNavEntryBy,
    findTargetByName,
    animating,
    updatePointer,
  ]);

  return null;
}
