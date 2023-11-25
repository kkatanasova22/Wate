import '../styles/styles.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(0);
const loader = new GLTFLoader();
loader.load('../models/sun.glb', (gltf) => {
  const model = gltf.scene;
    model.scale.set(0.1, 0.1, 0.1);
    model.position.set(-40, 0, -100);
    scene.add(model);
    animate();
});
const skyTexture = new THREE.TextureLoader().load('../misc/sky.jpg');
scene.background = skyTexture;
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();