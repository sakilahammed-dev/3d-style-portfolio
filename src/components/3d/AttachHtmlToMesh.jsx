import { Html } from "@react-three/drei";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Vector3 } from "three";
import { navConfig } from "../../utils/navConfig.js";

export default function AttachHtmlToMesh({ mesh, children, isActive = false }) {
  const [size, setSize] = useState({ width: 1, height: 1 });
  const [position, setPosition] = useState([0, 0, 0]);
  const [isMedium, setIsMedium] = useState(window.innerWidth >= 768);
  const htmlRef = useRef();

  const configEntry = Object.values(navConfig).find(
    (entry) => entry.target === mesh?.name,
  );

  // Step 1: Set the size
  useLayoutEffect(() => {
    if (!mesh || !configEntry) return;

    mesh.geometry?.computeBoundingBox();
    const box = mesh.geometry?.boundingBox;
    if (!box) return;

    const axisMap = {
      x: box.max.x - box.min.x,
      y: box.max.y - box.min.y,
      z: box.max.z - box.min.z,
    };

    const width = axisMap[configEntry.htmlSizeAxis[0]] || 1;
    const height = axisMap[configEntry.htmlSizeAxis[1]] || 1;
    setSize({ width, height });
  }, [mesh, configEntry]);

  // Step 2: After size has been applied and rendered
  useEffect(() => {
    if (!mesh || !configEntry) return;

    const raf = requestAnimationFrame(() => {
      // Now that size is applied, compute position
      const box = mesh.geometry?.boundingBox;
      if (!box) return;

      const center = new Vector3();
      box.getCenter(center);
      mesh.localToWorld(center);

      setPosition([
        center.x + configEntry.htmlOffset[0],
        center.y + configEntry.htmlOffset[1],
        center.z + configEntry.htmlOffset[2],
      ]);
    });

    return () => cancelAnimationFrame(raf);
  }, [size, mesh, configEntry]);

  useEffect(() => {
    const onResize = () => setIsMedium(window.innerWidth >= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // If this screen is not active or mesh is not ready, do not mount Drei Html or render DOM overlays
  if (!isActive || !mesh || !configEntry) return null;

  const distanceFactor = isMedium ? 0.4 : 0.6; // md+ = 0.4, below md = 0.6
  const multiplier = isMedium ? 1000 : 700; // md+ = 1000px, below md = 700px

  const forwardWheelToCanvas = (e) => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.dispatchEvent(
        new WheelEvent("wheel", {
          deltaX: e.deltaX,
          deltaY: e.deltaY,
          deltaZ: e.deltaZ,
          deltaMode: e.deltaMode,
          clientX: e.clientX,
          clientY: e.clientY,
          screenX: e.screenX,
          screenY: e.screenY,
          bubbles: true,
          cancelable: true,
        }),
      );
    }
  };

  const handleWheel = (e) => {
    // If ctrl key is pressed, it is an intentional zoom/pinch gesture -> forward to canvas
    if (e.ctrlKey) {
      forwardWheelToCanvas(e);
      return;
    }

    // Traverse upwards to see if the user is scrolling inside a vertically scrollable container
    let el = e.target;
    let isScrollable = false;

    while (el && el !== htmlRef.current && el !== document.body) {
      if (el.scrollHeight > el.clientHeight + 2) {
        const style = window.getComputedStyle(el);
        const overflowY = style.overflowY;
        if (overflowY === "auto" || overflowY === "scroll") {
          const atTop = el.scrollTop <= 1 && e.deltaY < 0;
          const atBottom =
            el.scrollTop + el.clientHeight >= el.scrollHeight - 2 && e.deltaY > 0;
          if (!atTop && !atBottom) {
            isScrollable = true;
            break;
          }
        }
      }
      el = el.parentElement;
    }

    if (!isScrollable) {
      forwardWheelToCanvas(e);
    }
  };

  return (
    <Html
      ref={htmlRef}
      position={position}
      rotation={configEntry.htmlRotation}
      transform
      occlude="blending"
      center
      distanceFactor={distanceFactor}
      pointerEvents="auto"
      style={{
        width: `${size.width * multiplier}px`,
        height: `${size.height * multiplier}px`,
        pointerEvents: "auto",
      }}
    >
      <div
        onWheel={handleWheel}
        className={`w-full h-full flex items-center justify-center ${
          isActive ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {children}
      </div>
    </Html>
  );
}
