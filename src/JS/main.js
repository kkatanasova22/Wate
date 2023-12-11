import '../styles/styles.css';
import * as module from '../JS/hambMenu.js';
import {scene} from './renderer.js';
import {lightBackground} from './backgroundChanger.js';
import {updateHamburgerColor, calculateVwWidth} from '../JS/hambMenu.js';
import {darkBackground} from './backgroundChanger.js';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
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
  darkBackground(scene);
  body.classList.add("dark-mode");
  elementsToStyle.forEach(element => {
    element.style.color = "white";
  });
  localStorage.setItem('theme', 'dark');
  updateHamburgerColor(true, document.querySelector('.menu').classList.contains('open'));
  themeIndicator.textContent = 'selected: dark';
};
function applyLightMode() {
  lightBackground(scene);
  body.classList.remove("dark-mode");
  elementsToStyle.forEach(element => {
    element.style.color = "black";
  });
  localStorage.setItem('theme', 'light');
  updateHamburgerColor(false, document.querySelector('.menu').classList.contains('open'));
  themeIndicator.textContent = 'selected: light';
}
  translateIcon.onclick = function () {
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
document.getElementById("selectDark").onclick = function () {
  applyDarkMode();
}
document.getElementById("selectLight").onclick = function () {
  applyLightMode();
}
document.getElementById("selectDefault").onclick = function () {
  applySystemDefault();
}
