import { useRef, useState, useEffect, useCallback } from "react";
import { OrbitControls } from "@react-three/drei";
import ModelLoader from "./ModelLoader";
import RaycastHandler from "./RaycastHandler";
import FanAnimator from "./FanAnimator";
import AttachHtmlToMesh from "./AttachHtmlToMesh";
import { navConfig } from "../../utils/navConfig.js";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import AboutMe from "../pages/AboutMe";
import ProjectsPage from "../pages/ProjectsPage";
import GalleryPage from "../pages/GalleryPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";

export default function SceneWrapper({
  audioRef,
  setLoaded,
  showLoading,
  cameraReset,
  setCameraReset,
  setIsAnimating,
  language,
  onTargetChange,
}) {
  const [interactives, setInteractives] = useState([]);
  const [fans, setFans] = useState([]);
  const controlsRef = useRef();
  const isFirstReset = useRef(true);
  const [screenMesh, setScreenMesh] = useState(null);
  const [target, setTarget] = useState(null);
  const [navKey, setNavKey] = useState(0);
  const { camera, scene } = useThree();

  const handleCameraReset = useCallback(() => {
    setCameraReset((prev) => !prev);
  }, [setCameraReset]);

  const handleSetTarget = useCallback((newTarget) => {
    setTarget(newTarget);
    onTargetChange?.(newTarget);
    setNavKey((k) => k + 1);

    const isGallery =
      typeof newTarget === "string" &&
      (newTarget.includes("Games") ||
        newTarget.includes("Arcade") ||
        newTarget.toLowerCase().includes("gallery"));

    if (!isGallery) {
      const allVideos = document.querySelectorAll("video");
      allVideos.forEach((vid) => {
        if (!vid.paused) vid.pause();
      });
      const bgAudio = audioRef?.current;
      if (bgAudio) {
        bgAudio.dataset.videoPlaying = "false";
        if (
          !document.hidden &&
          document.visibilityState === "visible" &&
          bgAudio.dataset.userOff !== "true" &&
          bgAudio.dataset.pausedByTab !== "true"
        ) {
          bgAudio.muted = false;
          bgAudio.play().catch(() => {});
        }
      }
    }
  }, [audioRef]);

  useEffect(() => {
    // On the very first render / mount, do not run camera reset tween or lock controls
    if (isFirstReset.current) {
      isFirstReset.current = false;
      const controls = controlsRef.current;
      if (controls) {
        controls.enabled = true;
        controls.enableZoom = true;
        controls.target.set(0, 2, 0);
        controls.update();
      }
      return;
    }

    setTarget(null);
    onTargetChange?.(null);
    setScreenMesh(null);
    setNavKey((k) => k + 1);

    // Stop all videos and restore background audio when returning to home view
    const allVideos = document.querySelectorAll("video");
    allVideos.forEach((vid) => {
      if (!vid.paused) vid.pause();
    });
    const bgAudio = audioRef?.current;
    if (bgAudio) {
      bgAudio.dataset.videoPlaying = "false";
      if (
        !document.hidden &&
        document.visibilityState === "visible" &&
        bgAudio.dataset.userOff !== "true" &&
        bgAudio.dataset.pausedByTab !== "true"
      ) {
        bgAudio.muted = false;
        bgAudio.play().catch(() => {});
      }
    }

    const controls = controlsRef.current;
    if (!controls) return;
    controls.enabled = false;
    controls.enableZoom = false;

    // Kill any existing camera tweens
    gsap.killTweensOf([controls.target, camera.position]);

    const newTarget = { x: 0, y: 2, z: 0 };
    const newPosition = { x: 16.5, y: 4, z: 14.5 };

    gsap.to(controls.target, {
      ...newTarget,
      duration: 2,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(camera.position, {
      ...newPosition,
      duration: 2,
      ease: "power2.out",
      overwrite: "auto",
      onUpdate: () => {
        camera.lookAt(controls.target);
        controls.update();
      },
      onComplete: () => {
        controls.enabled = true;
        controls.enableZoom = true;
        setIsAnimating(false);
      },
    });
  }, [cameraReset]);

  // Ensure controls are immediately enabled and updated whenever the loading screen exits
  useEffect(() => {
    if (!showLoading && controlsRef.current) {
      controlsRef.current.enabled = true;
      controlsRef.current.enableZoom = true;
      controlsRef.current.target.set(0, 2, 0);
      controlsRef.current.update();
      setIsAnimating(false);
    }
  }, [showLoading, setIsAnimating]);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 2, 0);
      controlsRef.current.enabled = true;
      controlsRef.current.enableZoom = true;
      controlsRef.current.enablePan = false;
      controlsRef.current.minPolarAngle = 0;
      controlsRef.current.maxPolarAngle = Math.PI / 2;
      controlsRef.current.minDistance = 0.3;
      controlsRef.current.maxDistance = 40;
      controlsRef.current.update();
    }
    window.__r3fControls = controlsRef.current;
    window.__r3fCamera = camera;
    window.__r3fScene = scene;
  }, [camera, scene]);

  const phoneScreen = interactives.find(
    (m) => m.name === "Phone_Screen_White_Target",
  );
  const vendingMachineScreen = interactives.find(
    (m) => m.name === "VendingMachine_Screen_White_Target",
  );
  const jackboxScreen = interactives.find(
    (m) => m.name === "Jackbox_Screen_White_Target",
  );
  const arcadeScreen = interactives.find(
    (m) => m.name === "ArcadeMachine_Screen_White_Target",
  );

  return (
    <>
      <ModelLoader
        onMeshReady={setInteractives}
        onFansReady={setFans}
        setLoaded={setLoaded}
      />

      {phoneScreen && (
        <AttachHtmlToMesh
          mesh={phoneScreen}
          isActive={
            typeof target === "string" &&
            (target.includes("Phone") ||
              target.includes("Contact") ||
              target.includes("About"))
          }
        >
          {target && target === "Contact_Red_Text_Target" ? (
            <ContactPage language={language} setTarget={setTarget} onHome={handleCameraReset} />
          ) : (
            <AboutMe language={language} setTarget={setTarget} onHome={handleCameraReset} />
          )}
        </AttachHtmlToMesh>
      )}

      {vendingMachineScreen && (
        <AttachHtmlToMesh
          mesh={vendingMachineScreen}
          isActive={
            typeof target === "string" &&
            (target.includes("Projects") || target.includes("Vending"))
          }
        >
          <ProjectsPage
            language={language}
            target={target}
            cameraReset={cameraReset}
            navKey={navKey}
            onHome={handleCameraReset}
          />
        </AttachHtmlToMesh>
      )}

      {jackboxScreen && (
        <AttachHtmlToMesh
          mesh={jackboxScreen}
          isActive={
            typeof target === "string" &&
            (target.includes("Services") || target.includes("Jackbox"))
          }
        >
          <ServicesPage
            language={language}
            setTarget={handleSetTarget}
            target={target}
            cameraReset={cameraReset}
            navKey={navKey}
            onHome={handleCameraReset}
          />
        </AttachHtmlToMesh>
      )}

      {arcadeScreen && (
        <AttachHtmlToMesh
          mesh={arcadeScreen}
          isActive={
            typeof target === "string" &&
            (target.includes("Games") ||
              target.includes("Arcade") ||
              target.toLowerCase().includes("gallery"))
          }
        >
          <GalleryPage
            language={language}
            audioRef={audioRef}
            target={target}
            cameraReset={cameraReset}
            onHome={handleCameraReset}
          />
        </AttachHtmlToMesh>
      )}

      {!showLoading && (
        <RaycastHandler
          targets={interactives}
          controlsRef={controlsRef}
          setScreenMesh={setScreenMesh}
          setTarget={handleSetTarget}
          screenMesh={screenMesh}
          currentTarget={target}
          setIsAnimating={setIsAnimating}
        />
      )}

      <FanAnimator fans={fans} />
      <OrbitControls
        ref={controlsRef}
        makeDefault
        enabled={true}
        enableZoom={true}
        enableRotate={true}
        enablePan={false}
        target={[0, 2, 0]}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        minDistance={0.3}
        maxDistance={40}
      />
    </>
  );
}
