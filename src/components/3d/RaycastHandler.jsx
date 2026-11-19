import { useEffect, useRef, useCallback, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { navConfig } from "../../utils/navConfig.js";

window.THREE = THREE;

export default function RaycastHandler({
  targets,
  controlsRef,
  setScreenMesh,
  setTarget,
  screenMesh,
  currentTarget,
  cameraReset,
  setIsAnimating,
}) {
  const raycaster = useRef(new THREE.Raycaster());
  const pointer = useRef(new THREE.Vector2(-9999, -9999));
  const hoveredNavEntry = useRef(null);
  const animatingRef = useRef(false);
  const animSafetyTimer = useRef(null);
  const lastFocusedMesh = useRef(null);
  const { camera, gl } = useThree();
  const [animating, setAnimating] = useState(false);

  // Pointer/touch tracking for clean tap detection
  const pointerDownPos = useRef({ x: 0, y: 0, time: 0 });

  // Stable refs to prevent tearing down window listeners on navigation state updates
  const targetsRef = useRef(targets);
  targetsRef.current = targets;
  const setScreenMeshRef = useRef(setScreenMesh);
  setScreenMeshRef.current = setScreenMesh;
  const setTargetRef = useRef(setTarget);
  setTargetRef.current = setTarget;

  // Guarantee that whenever user returns home (currentTarget === null or cameraReset triggered),
  // all animation locks, flags, and pointer tracking are immediately cleared!
  useEffect(() => {
    if (!currentTarget) {
      if (animSafetyTimer.current) clearTimeout(animSafetyTimer.current);
      animatingRef.current = false;
      setAnimating(false);
      setIsAnimating?.(false);
      lastFocusedMesh.current = null;
      pointerDownPos.current = { x: 0, y: 0, time: 0 };
      if (controlsRef.current) {
        controlsRef.current.enabled = true;
        controlsRef.current.enableZoom = true;
      }
    }
  }, [currentTarget, cameraReset, setIsAnimating, controlsRef]);

  // --- helpers ---
  const findNavEntryBy = useCallback(
    (key, value) =>
      Object.values(navConfig).find((conf) => conf[key] === value),
    [],
  );

  const findTargetByName = useCallback(
    (name) => (targetsRef.current || []).find((o) => o.name === name),
    [],
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
      if (!object) return;
      if (animSafetyTimer.current) clearTimeout(animSafetyTimer.current);
      lastFocusedMesh.current = object;

      const box = new THREE.Box3().setFromObject(object);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const isMobile = window.innerWidth < 768;

      let distanceMult = 1.5;
      if (isMobile) {
        if (object.name === "Jackbox_Screen_White_Target") {
          // Services: subtly reduce zoom from 2.05 to 2.22 so red border shows without empty side space
          distanceMult = 2.22;
        } else if (object.name === "ArcadeMachine_Screen_White_Target") {
          // Gallery: subtly reduce zoom from 2.05 to 2.22 so arcade wings show cleanly without excess space
          distanceMult = 2.22;
        } else if (object.name === "VendingMachine_Screen_White_Target") {
          // Projects: subtly reduce zoom from 1.50 to 1.80 so title & cards fit edge-to-edge with no clipping
          distanceMult = 1.80;
        } else if (object.name === "Phone_Screen_White_Target") {
          // AboutMe & Contact: subtle framing
          distanceMult = 1.65;
        } else {
          distanceMult = 1.75;
        }
      }

      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * distanceMult;

      const configEntry = findNavEntryBy("target", object.name);
      const offsetArray = configEntry?.cameraOffset || [0, 0, 1];
      const offsetDirection = new THREE.Vector3(...offsetArray).normalize();
      const targetCenter = center.clone();
      if (isMobile) {
        if (object.name === "ArcadeMachine_Screen_White_Target") {
          // Elevate arcade target slightly so 3D joysticks sit cleanly below the video cards
          targetCenter.y += 0.008;
        } else if (object.name === "Jackbox_Screen_White_Target") {
          // Center Jackbox cabinet in mobile portrait
          targetCenter.y -= 0.015;
        } else if (object.name === "VendingMachine_Screen_White_Target") {
          // Center Vending machine comfortably in mobile portrait
          targetCenter.y += 0.010;
        }
      }
      const newCameraPos = targetCenter
        .clone()
        .add(offsetDirection.multiplyScalar(cameraZ));

      animatingRef.current = true;
      setAnimating(true);
      setIsAnimating?.(true);
      if (controlsRef.current) {
        controlsRef.current.enabled = false;
        controlsRef.current.enableZoom = false;
      }

      // Safety timeout: unlock controls and animation flag after 2.2s even if tween is killed
      animSafetyTimer.current = setTimeout(() => {
        animatingRef.current = false;
        setAnimating(false);
        setIsAnimating?.(false);
        if (controlsRef.current) {
          controlsRef.current.enabled = true;
          controlsRef.current.enableZoom = true;
        }
      }, 2200);

      gsap.killTweensOf([controlsRef.current.target, camera.position]);

      gsap.to(controlsRef.current.target, {
        x: targetCenter.x,
        y: targetCenter.y,
        z: targetCenter.z,
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
          if (animSafetyTimer.current) clearTimeout(animSafetyTimer.current);
          if (controlsRef.current) {
            controlsRef.current.enabled = true;
            controlsRef.current.enableZoom = true;
          }
          animatingRef.current = false;
          setAnimating(false);
          setIsAnimating?.(false);
        },
      });
    },
    [camera, controlsRef, findNavEntryBy, setIsAnimating],
  );

  // update pointer coordinates relative to canvas
  const updatePointer = useCallback((clientX, clientY) => {
    if (!gl.domElement) return;
    const rect = gl.domElement.getBoundingClientRect();
    pointer.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  }, [gl]);

  // Robust target finding with touch proximity tolerance
  const findIntersectedTarget = useCallback(
    (clientX, clientY, isTouch = false) => {
      if (!gl.domElement) return null;

      // 1. Direct hit testing
      updatePointer(clientX, clientY);
      raycaster.current.setFromCamera(pointer.current, camera);
      let intersects = raycaster.current.intersectObjects(targets);

      let navHit = intersects.find((i) => {
        const name = i.object.name;
        return (
          name.includes("Screen") ||
          Object.values(navConfig).some(
            (conf) => conf.glass === name || conf.text === name
          )
        );
      });

      if (navHit) return navHit.object;

      // 2. Radial proximity search for touch/mobile devices
      // Catches taps near thin signs like AboutMe_Glass_Target
      const offsets = isTouch
        ? [
            [-10, 0], [10, 0], [0, -10], [0, 10],
            [-18, 0], [18, 0], [0, -18], [0, 18],
            [-14, -14], [14, -14], [-14, 14], [14, 14],
            [-26, 0], [26, 0], [0, -26], [0, 26],
            [-34, 0], [34, 0],
          ]
        : [
            [-6, 0], [6, 0], [0, -6], [0, 6],
            [-12, 0], [12, 0],
          ];

      for (const [dx, dy] of offsets) {
        updatePointer(clientX + dx, clientY + dy);
        raycaster.current.setFromCamera(pointer.current, camera);
        intersects = raycaster.current.intersectObjects(targets);
        navHit = intersects.find((i) => {
          const name = i.object.name;
          return (
            name.includes("Screen") ||
            Object.values(navConfig).some(
              (conf) => conf.glass === name || conf.text === name
            )
          );
        });
        if (navHit) return navHit.object;
      }

      return null;
    },
    [camera, gl, targets, updatePointer],
  );

  // handle pointer and mouse movement (hover on desktop)
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

  // hover logic in render loop (desktop only)
  useFrame(() => {
    if (animatingRef.current) return;

    raycaster.current.setFromCamera(pointer.current, camera);
    const intersects = raycaster.current.intersectObjects(targets);

    if (intersects.length > 0) {
      const hit = intersects.find((i) => {
        const name = i.object.name;
        return (
          name.includes("Screen") ||
          Object.values(navConfig).some(
            (conf) => conf.glass === name || conf.text === name
          )
        );
      })?.object;

      if (!hit) {
        if (hoveredNavEntry.current) {
          playHoverAnimation(findTargetByName(hoveredNavEntry.current.text), false);
          hoveredNavEntry.current = null;
        }
        document.body.style.cursor = "default";
        return;
      }

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

  // focus camera when screenMesh changes (e.g. from external triggers)
  useEffect(() => {
    if (screenMesh && screenMesh !== lastFocusedMesh.current) {
      lastFocusedMesh.current = screenMesh;
      focusCameraOnObject(screenMesh);
    } else if (!screenMesh) {
      lastFocusedMesh.current = null;
    }
  }, [screenMesh, focusCameraOnObject]);

  // Global navigation helper for direct targeting & automated testing
  useEffect(() => {
    window.__navigateToTarget = (targetName) => {
      const navEntry = Object.entries(navConfig).find(
        ([key, conf]) =>
          key.toLowerCase() === targetName.toLowerCase() ||
          conf.glass === targetName ||
          conf.text === targetName ||
          conf.target === targetName ||
          conf.text.toLowerCase().includes(targetName.toLowerCase()),
      )?.[1];
      if (navEntry) {
        const screenTarget = findTargetByName(navEntry.target);
        if (screenTarget) {
          setScreenMesh?.(screenTarget);
          setTarget(navEntry.text);
          focusCameraOnObject(screenTarget);
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

    window.__debugRaycast = (clientX, clientY) => {
      updatePointer(clientX, clientY);
      raycaster.current.setFromCamera(pointer.current, camera);
      const hits = raycaster.current.intersectObjects(targets);
      return {
        pointer: { x: pointer.current.x, y: pointer.current.y },
        hits: hits.map((h) => ({ name: h.object.name, distance: h.distance })),
        targets: targets.map((t) => t.name),
      };
    };

    return () => {
      delete window.__navigateToTarget;
      delete window.__debugRaycast;
    };
  }, [targets, setScreenMesh, setTarget, findTargetByName, findNavEntryBy, updatePointer, camera]);

  // Handle click / tap with drag tolerance & touch reliability
  useEffect(() => {
    const handleDown = (e) => {
      let clientX, clientY;
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      if (clientX !== undefined && clientY !== undefined) {
        pointerDownPos.current = { x: clientX, y: clientY, time: Date.now() };
      }
    };

    const handleUp = (e) => {
      // If animation is in progress, ignore clicks to prevent conflicting tweens
      if (animatingRef.current) return;

      let clientX, clientY;
      if (e.changedTouches && e.changedTouches.length > 0) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      } else if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      if (clientX === undefined || clientY === undefined) return;

      const isTouch = e.type.startsWith("touch") || e.pointerType === "touch";
      const dx = clientX - pointerDownPos.current.x;
      const dy = clientY - pointerDownPos.current.y;
      const dist = Math.hypot(dx, dy);
      const duration = Date.now() - pointerDownPos.current.time;

      // Always reset pointerDownPos immediately so old coordinates never poison subsequent taps
      pointerDownPos.current = { x: 0, y: 0, time: 0 };

      // Reject only if genuinely a drag gesture to orbit the room
      // On mobile touchscreen: finger surface contact shifts 20-35px during a tap
      const maxDragDist = isTouch ? 45 : 25;
      const maxDragDuration = isTouch ? 400 : 300;
      if (dist > maxDragDist && duration > maxDragDuration) {
        return;
      }

      const clicked = findIntersectedTarget(clientX, clientY, isTouch);
      if (!clicked) return;

      if (clicked.name.includes("Screen")) {
        if (controlsRef.current) {
          controlsRef.current.enabled = true;
          controlsRef.current.enableZoom = true;
        }

        const navEntry = findNavEntryBy("target", clicked.name);
        if (!navEntry) return;

        const screenTarget = findTargetByName(navEntry.target);
        if (screenTarget) {
          setScreenMeshRef.current?.(screenTarget);
          setTargetRef.current?.(navEntry.text);
          focusCameraOnObject(screenTarget);
        }
      } else {
        const navEntry = Object.values(navConfig).find(
          (conf) => conf.glass === clicked.name || conf.text === clicked.name,
        );
        if (navEntry) {
          const screenTarget = findTargetByName(navEntry.target);
          if (screenTarget) {
            setScreenMeshRef.current?.(screenTarget);
            setTargetRef.current?.(navEntry.text);
            focusCameraOnObject(screenTarget);
          }
        }
      }
    };

    window.addEventListener("pointerdown", handleDown, { passive: true });
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("touchstart", handleDown, { passive: true });
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("touchstart", handleDown);
      window.removeEventListener("touchend", handleUp);
    };
  }, [
    controlsRef,
    findNavEntryBy,
    findTargetByName,
    findIntersectedTarget,
    focusCameraOnObject,
  ]);

  return null;
}
