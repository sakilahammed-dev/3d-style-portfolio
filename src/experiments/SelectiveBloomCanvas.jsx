// Source recovered from branch: feature-selective-bloom (commit 6708e42d4e82b73dbbc8fca905e50d2af31cd4f2)
// Custom UnrealBloomPass with Selective Bloom Shaders & Skybox Environment for 3dPortfolio
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import gsap from "gsap";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D baseTexture;
  uniform sampler2D bloomTexture;
  varying vec2 vUv;

  void main() {
    vec4 base = texture2D(baseTexture, vUv);
    vec4 bloom = texture2D(bloomTexture, vUv);
    gl_FragColor = base + bloom;
  }
`;

export default function SelectiveBloomCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = canvasRef.current;

    // ------------------ Setup ------------------
    const sizes = {
      width: container.clientWidth,
      height: container.clientHeight,
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      sizes.width / sizes.height,
      0.1,
      1000,
    );
    camera.position.set(16, 1, 16);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 2.5, 0);

    // ------------------ Postprocessing ------------------
    const renderScene = new RenderPass(scene, camera);
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2),
      0.2,
      0.5,
      0,
    );
    composer.addPass(bloomPass);
    composer.renderToScreen = false;

    const mixPass = new ShaderPass(
      new THREE.ShaderMaterial({
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: composer.renderTarget2.texture },
        },
        vertexShader,
        fragmentShader,
      }),
      "baseTexture",
    );

    const finalComposer = new EffectComposer(renderer);
    finalComposer.addPass(renderScene);
    finalComposer.addPass(mixPass);
    finalComposer.addPass(new OutputPass());

    // ------------------ Bloom Config ------------------
    const BLOOM_SCENE = 1;
    const bloomLayer = new THREE.Layers();
    bloomLayer.set(BLOOM_SCENE);
    const darkMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const darkGlassMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0,
    });
    const materials = {};

    function nonBloomed(obj) {
      if (obj.isMesh && !bloomLayer.test(obj.layers)) {
        materials[obj.uuid] = obj.material;
        obj.material = obj.name.includes("Glass")
          ? darkGlassMaterial
          : darkMaterial;
      }
    }

    function restoreMaterial(obj) {
      if (materials[obj.uuid]) {
        obj.material = materials[obj.uuid];
        delete materials[obj.uuid];
      }
    }

    // ------------------ Assets ------------------
    const zAxisFans = [];
    const yAxisFans = [];
    const raycasterObjects = [];

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let currentHoveredObject = null;

    const textureLoader = new THREE.TextureLoader();
    const textureMap = {
      First: { red: "/textures/First.webp" },
      Second: { red: "/textures/Second.webp" },
      Third: { red: "/textures/Third.webp" },
    };

    const loadedTextures = { red: {} };
    Object.entries(textureMap).forEach(([key, paths]) => {
      const redTexture = textureLoader.load(paths.red);
      redTexture.flipY = false;
      redTexture.colorSpace = THREE.SRGBColorSpace;
      loadedTextures.red[key] = redTexture;
    });

    const environmentMap = new THREE.CubeTextureLoader()
      .setPath("textures/skybox/")
      .load(["px.webp", "nx.webp", "py.webp", "ny.webp", "pz.webp", "nz.webp"]);
    scene.environment = environmentMap;

    const navItems = {
      aboutMe: "Phone_Screen_White_Target",
      projects: "VendingMachine_Screen_White_Target",
      music: "Jackbox_Screen_White_Target",
      games: "ArcadeMachine_Screen_White_Target",
    };

    const hoverGroups = {
      AboutMe_Glass_Target: "aboutMe",
      AboutMe_Red_Text_Target: "aboutMe",
      Projects_Glass_Target: "projects",
      Projects_Red_Text_Target: "projects",
      Games_Glass_Target: "games",
      Games_Red_Text_Target: "games",
      Music_Glass_Target: "music",
      Music_Red_Text_Target: "music",
    };

    // Load Model with Draco
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("draco/gltf/");
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    gltfLoader.load("models/3dPortfolio.glb", (gltf) => {
      gltf.scene.traverse((child) => {
        if (!child.isMesh) return;

        for (const key in loadedTextures.red) {
          if (child.name.includes(key)) {
            child.material = new THREE.MeshBasicMaterial({
              map: loadedTextures.red[key],
            });
            child.material.map.minFilter = THREE.LinearFilter;
          }
        }

        if (child.name.includes("Fan")) {
          if (child.name.includes("Fan_2") || child.name.includes("Fan_5")) {
            zAxisFans.push(child);
          } else {
            yAxisFans.push(child);
          }
        }

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
        } else if (child.name.includes("Red")) {
          child.material = new THREE.MeshBasicMaterial({ color: 0xff2222 });
          child.layers.enable(BLOOM_SCENE);
        } else if (child.name.includes("White")) {
          child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        }

        if (child.name.includes("Target") || child.name.includes("First")) {
          child.userData.initialScale = child.scale.clone();
          raycasterObjects.push(child);
        }
      });

      scene.add(gltf.scene);
    });

    const playHoverAnimation = (groupName, isHovered) => {
      raycasterObjects.forEach((obj) => {
        if (hoverGroups[obj.name] === groupName) {
          const targetScale = isHovered
            ? obj.userData.initialScale.clone().multiplyScalar(1.1)
            : obj.userData.initialScale;
          const targetColor = isHovered ? "#ffffff" : "#ff4444";

          gsap.to(obj.scale, {
            x: targetScale.x,
            y: targetScale.y,
            z: targetScale.z,
            duration: 0.4,
            ease: "back.out(1.8)",
            overwrite: "auto",
          });

          if (obj.material && obj.material.color) {
            gsap.to(obj.material.color, {
              ...new THREE.Color(targetColor),
              duration: 0.4,
              overwrite: "auto",
            });
          }
        }
      });
    };

    function focusCameraOnObject(object) {
      const box = new THREE.Box3().setFromObject(object);
      const center = new THREE.Vector3();
      const size = new THREE.Vector3();

      box.getCenter(center);
      box.getSize(size);

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5;

      const dir = new THREE.Vector3()
        .subVectors(camera.position, controls.target)
        .normalize();

      const newCameraPos = center.clone().add(dir.multiplyScalar(cameraZ));

      gsap.to(controls.target, {
        x: center.x,
        y: center.y,
        z: center.z,
        duration: 2,
        onUpdate: () => {
          camera.lookAt(controls.target);
          controls.update();
        },
      });

      gsap.to(camera.position, {
        x: newCameraPos.x,
        y: newCameraPos.y,
        z: newCameraPos.z,
        duration: 2,
        onUpdate: () => {
          camera.lookAt(controls.target);
          controls.update();
        },
      });
    }

    window.addEventListener("pointerdown", (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(raycasterObjects);

      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        if (hoverGroups[clickedObject.name] in navItems) {
          const object = raycasterObjects.find(
            (obj) => obj.name === navItems[hoverGroups[clickedObject.name]],
          );
          if (object) focusCameraOnObject(object);
        }
      }
    });

    const handleResize = () => {
      sizes.width = container.clientWidth;
      sizes.height = container.clientHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      composer.setSize(sizes.width, sizes.height);
      finalComposer.setSize(sizes.width, sizes.height);
    };
    window.addEventListener("resize", handleResize);

    const handleMousemove = (e) => {
      const bounds = container.getBoundingClientRect();
      pointer.x = ((e.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((e.clientY - bounds.top) / bounds.height) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMousemove);

    let animationId;
    const animate = () => {
      controls.update();

      zAxisFans.forEach((fan) => (fan.rotation.y -= 0.01));
      yAxisFans.forEach((fan) => (fan.rotation.x -= 0.01));

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(raycasterObjects);

      if (intersects.length > 0) {
        const hovered = intersects[0].object;
        if (hovered !== currentHoveredObject) {
          if (currentHoveredObject) {
            const group =
              hoverGroups[currentHoveredObject.name] ||
              currentHoveredObject.name;
            playHoverAnimation(group, false);
          }
          const group = hoverGroups[hovered.name] || hovered.name;
          playHoverAnimation(group, true);
          currentHoveredObject = hovered;
        }
        document.body.style.cursor = "pointer";
      } else {
        if (currentHoveredObject) {
          const group =
            hoverGroups[currentHoveredObject.name] || currentHoveredObject.name;
          playHoverAnimation(group, false);
          currentHoveredObject = null;
        }
        document.body.style.cursor = "default";
      }

      scene.traverse(nonBloomed);
      composer.render();
      scene.traverse(restoreMaterial);
      finalComposer.render();

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMousemove);
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={canvasRef} className="h-screen w-full overflow-hidden" />;
}
