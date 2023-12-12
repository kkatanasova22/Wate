import '../styles/styles.css';
import {scene} from './renderer.js';
import * as THREE from 'three';

export function lightBackground(scene) {
    const lightTexture = new THREE.TextureLoader().load('../misc/lightbg.png');
    if (scene) {
        scene.background = lightTexture;
    } else {
        console.error('Scene is undefined.');
    }
}

export function darkBackground(scene) {
    const darkTexture = new THREE.TextureLoader().load('../misc/darkbg.png');
    if (scene) {
        scene.background = darkTexture;
    } else {
        console.error('Scene is undefined.');
    }
}