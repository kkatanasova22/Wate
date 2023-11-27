import '../styles/styles.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
window.addEventListener( 'resize', onWindowResize, false );
const loader = new GLTFLoader();
let model;
let model2;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
const light = new THREE.AmbientLight(0xffffff, 9);
scene.add(light);
camera.position.setX(0);
camera.position.setZ(30);
loader.load('../models/earth.glb', (gltf) => {
  model = gltf.scene;
  model.scale.set(0.49, 0.53, 0.49);
  model.position.set(-240, 0, -500);
  model.rotateX(-0);
  model.rotateY(-3.15);
  model.rotateZ(0);
  scene.add(model);
  animate();
});
loader.load('../models/sun.glb', (gltf) => {
  model2 = gltf.scene;
  model2.scale.set(1, 1, 1);
  model2.position.set(1450, 550, -1360);
  scene.add(model2);
  animate();
});
const skyTexture = new THREE.TextureLoader().load('../misc/sky.png');
scene.background = skyTexture;
function rotateEarth() {
  if (model) {
    model.rotation.x += 0.00005;
    model.rotation.y += 0.00005;
  }
}
function rotateSun() {
  if (model) {
    model2.rotation.z -= 0.00003;
    model2.rotation.x += 0.00003;
  }
}
function animate() {
  requestAnimationFrame(animate);
  rotateEarth();
  rotateSun();
  renderer.render(scene, camera);
}
function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
animate();
