import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const loader = new GLTFLoader();

loader.load(
  "path/to/model.glb",
  function (gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
let frames;
const animate = function () {
  frames = requestAnimationFrame(animate);
  console.log("three.js", frames);
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;

  renderer.render(scene, camera);
};

animate();

setTimeout(() => {
  window.cancelAnimationFrame(frames);
  console.log("result", frames);
}, 5000);
