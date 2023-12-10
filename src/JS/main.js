import '../styles/styles.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
window.addEventListener('resize', onWindowResize, false);
const loader = new GLTFLoader();
let model;
let model2;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
const light = new THREE.AmbientLight(0xffffff, 9);
scene.add(light);
camera.position.setX(0);
camera.position.setZ(30);
camera.fov = 40;
camera.updateProjectionMatrix();
loader.load('../models/earth.glb', (gltf) => {
  model = gltf.scene;
  model.scale.set(0.017, 0.017, 0.017);
  model.position.set(-8, 0, 0);
  model.rotateX(-0);
  model.rotateY(-3.15);
  model.rotateZ(0);
  scene.add(model);
  animate();
});
loader.load('../models/sun.glb', (gltf) => {
  model2 = gltf.scene;
  model2.scale.set(5, 5.5, 5);
  model2.position.set(38, 16, -20);
  scene.add(model2);
  animate();
});
let autoTheme;
if(autoTheme == true) {
  applySystemDefault();
}
let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themeIndicator = document.getElementById("themeIndicator");
const translateIcon = document.getElementById("translateIcon");
let body = document.querySelector("body");
let elementsToStyle = document.querySelectorAll("#heading, .smalltext, .plantLink, .coinLink, #fineprint, #hamb");
function applyDarkMode() {
  const darkTexture = new THREE.TextureLoader().load('../misc/darkbg.png');
  scene.background = darkTexture;
  body.classList.add("dark-mode");
  elementsToStyle.forEach(element => {
    element.style.color = "white";
  });
  localStorage.setItem('theme', 'dark');
  updateHamburgerColor(true, document.querySelector('.menu').classList.contains('open'));
  themeIndicator.textContent = 'selected: dark';
}
function applyLightMode() {
  const lightTexture = new THREE.TextureLoader().load('../misc/lightbg.png');
  scene.background = lightTexture;
  body.classList.remove("dark-mode");
  elementsToStyle.forEach(element => {
    element.style.color = "black";
  });
  localStorage.setItem('theme', 'light');
  updateHamburgerColor(false, document.querySelector('.menu').classList.contains('open'));
  themeIndicator.textContent = 'selected: light';
}
translateIcon.onclick = function () {
  window.location.href = "pages/coins.html";
};
function applySystemDefault() {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    applyDarkMode();
    themeIndicator.textContent = 'selected: system (dark)';
  } else if (!prefersDark) {
    applyLightMode();
    themeIndicator.textContent = 'selected: system (light)';
  }
  localStorage.setItem('theme', 'automatic');
}
function applyStoredTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    applyDarkMode();
    themeIndicator.textContent = 'selected: dark';
  } else if (storedTheme === 'light') {
    applyLightMode();
    themeIndicator.textContent = 'selected: light';
  }
  else if (storedTheme === 'automatic') {
    applySystemDefault();
  }
}
applyStoredTheme();
const themeSelect = document.querySelector('.themeSelect');
themeSelect.addEventListener('mouseover', () => {
  themeIndicator.style.opacity = '1';
});
themeSelect.addEventListener('mouseout', () => {
  themeIndicator.style.opacity = '0';
});

function updateHamburgerColor(isDarkMode, isMenuOpen) {
  const hamb = document.querySelector('#hamb');
  const iconText = isMenuOpen ? "close" : "menu";
  const iconColor = isMenuOpen ? 'black' : (isDarkMode ? 'white' : 'black');
  hamb.innerHTML = iconText;
  hamb.style.color = iconColor;
}

document.getElementById("selectDark").onclick = function () {
  applyDarkMode();
}
document.getElementById("selectLight").onclick = function () {
  applyLightMode();
}
document.getElementById("selectDefault").onclick = function () {
  applySystemDefault();
}
document.getElementById("hamb").onclick = function () {
  const menu = document.querySelector('.menu');
  const isMenuOpen = menu.classList.toggle('open');
  const darkMode = body.classList.contains("dark-mode");
  updateHamburgerColor(darkMode, isMenuOpen);
  if (!isMenuOpen) {
    setTimeout(() => {
      menu.style.zIndex = "-1";
    }, 250);
  } else {
    menu.style.zIndex = "0";
  }
};

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

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
const iconContainers = document.querySelectorAll('.iconContainer');
function calculateVwWidth(text) {
  const fontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
  const textLength = text.length;
  const vwWidth = (textLength * fontSize) / window.innerWidth * 140;
  return vwWidth;
}
iconContainers.forEach(container => {
  const iconText = container.querySelector('.iconText');
  container.addEventListener('mouseenter', () => {
      const vwWidth = calculateVwWidth(iconText.textContent);
      iconText.style.width = `${vwWidth}vw`;
      iconText.style.opacity = '1';
  });
  container.addEventListener('mouseleave', () => {
      iconText.style.width = '0';
      iconText.style.opacity = '0';
  });
});
document.getElementById("coinSc").onclick = function () {
  window.location.href = "pages/coins.html";
};
document.getElementById("gameSc").onclick = function () {
  window.location.href = "pages/game.html";
};
document.getElementById("climSc").onclick = function () {
  window.location.href = "pages/globalWarming.html";
};
document.getElementById("coinSc").onclick = function () {
  window.location.href = "pages/coins.html";
};

animate();