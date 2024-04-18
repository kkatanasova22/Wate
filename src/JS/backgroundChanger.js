import * as THREE from 'three'
import darkTheme from '../misc/darkbg.png'
import bgImage from '../misc/lightbg.png'

let body = document.querySelector("body");
console.log(`url('${bgImage}')`);
export function lightBackground(scene) {
    body.style.backgroundImage = `url('${bgImage}')`;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
}
export function darkBackground(scene) {
    body.style.backgroundImage =  `url('${darkTheme}')`;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
}