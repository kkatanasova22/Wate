import '../styles/globalWarming.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
window.addEventListener('resize', onWindowResize, false);
const loader = new GLTFLoader();
let model;
let model2;
let model3;
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setX(0);
camera.position.setZ(30);
camera.fov = 40;
camera.updateProjectionMatrix();
const light = new THREE.AmbientLight(0xffffff, 9);
renderer.setClearColor(0x000000, 0);
scene.add(light);
let sunLoaded = false;
let earthLoaded = false; 
loader.load('/models/sun.glb', (gltf) => {
  model = gltf.scene;
  model.scale.set(8.5, 8.5, 8.5);
  model.position.set(-8, 0, 0);
  scene.add(model);
  sunLoaded = true;
  checkModelsLoaded();
});

loader.load('/models/sun.glb', (gltf) => {
  model3 = gltf.scene;
  model3.scale.set(7.5, 7.5, 7.5);
  model3.position.set(-25, -10, 0);
  scene.add(model3);
  sunLoaded = true;
  checkModelsLoaded();
});

loader.load('/models/earth.glb', (gltf) => {
  model2 = gltf.scene;
  model2.scale.set(0.017, 0.017, 0.017);
  model2.position.set(21, 10, 10);
  scene.add(model2);
  earthLoaded = true;
  checkModelsLoaded();
});
function checkModelsLoaded() {
  if (sunLoaded && earthLoaded) {
    animate();
  }
}
function rotateEarth() {
  if (model) {
    model.rotation.x += 0.0001;
    model.rotation.y += 0.0001;
  }
}

function rotateSun() {
  if (model2) {
    model2.rotation.z -= 0.0001;
    model2.rotation.x += 0.0001;
  }
}

function animate() {
  requestAnimationFrame(animate);
  rotateEarth();
  rotateSun();
  renderer.render(scene, camera);
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
checkModelsLoaded();