import * as THREE from 'three';
let body = document.querySelector("body");
export function lightBackground(scene) {
    body.style.backgroundImage = "url('../misc/lightbg.png')"
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
}
export function darkBackground(scene) {
    body.style.backgroundImage = "url('../misc/darkbg.png')"
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
}