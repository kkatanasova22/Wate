
import * as module from "./hambMenu.js";
import { scene } from "./gwRenderer.js";
import { lightBackground } from "./backgroundChanger.js";
import { updateHamburgerColor, calculateVwWidth } from "./hambMenu.js";
import { darkBackground } from "./backgroundChanger.js";
let autoTheme;
if (autoTheme == true) {
  applySystemDefault();
}

let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themeIndicator = document.getElementById("themeIndicator");
let body = document.querySelector("body");
let elementsToStyle = document.querySelectorAll(
  "#heading, #indentHeading, .smalltext, .plantLink, .coinLink, #fineprint, #hamb, #gwHeading, #gwParagraph"
);

function applyDarkMode() {
  darkBackground(scene);
  body.classList.add("dark-mode");
  elementsToStyle.forEach((element) => {
    element.style.color = "white";
  });
  localStorage.setItem("theme", "dark");
  updateHamburgerColor(
    true,
    document.querySelector(".menu").classList.contains("open")
  );
  themeIndicator.textContent = "selected: dark";
}

function applyLightMode() {
  lightBackground(scene);
  body.classList.remove("dark-mode");
  elementsToStyle.forEach((element) => {
    element.style.color = "black";
  });
  localStorage.setItem("theme", "light");
  updateHamburgerColor(
    false,
    document.querySelector(".menu").classList.contains("open")
  );
  themeIndicator.textContent = "selected: light";
}
function applySystemDefault() {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    applyDarkMode();
    themeIndicator.textContent = "selected: system (dark)";
  } else if (!prefersDark) {
    applyLightMode();
    themeIndicator.textContent = "selected: system (light)";
  }
  localStorage.setItem("theme", "automatic");
}

function applyStoredTheme() {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    applyDarkMode();
    themeIndicator.textContent = "selected: dark";
  } else if (storedTheme === "light") {
    applyLightMode();
    themeIndicator.textContent = "selected: light";
  } else if (storedTheme === "automatic") {
    applySystemDefault();
  }
}

applyStoredTheme();
const themeSelect = document.querySelector(".themeSelect");
themeSelect.addEventListener("mouseover", () => {
  themeIndicator.style.opacity = "1";
});
themeSelect.addEventListener("mouseout", () => {
  themeIndicator.style.opacity = "0";
});

function setSavedPreferred(theme) {
  if (theme === "dark") {
    applyDarkMode();
  } else if (theme === "light") {
    applyLightMode();
  } else {
    applySystemDefault();
  }

  localStorage.setItem("theme", theme);
}

document.getElementById("selectDark").onclick = function () {
  setSavedPreferred("dark");
};

document.getElementById("selectLight").onclick = function () {
  setSavedPreferred("light");
};

document.getElementById("selectDefault").onclick = function () {
  setSavedPreferred("automatic");
};
