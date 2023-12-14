// Tree Handler \\

let ownsCherryTree = localStorage.getItem("ownsCherryTree") || false;
const treeBuyHandler = function (e) {
  const newTree = e.currentTarget.dataset.tree;
  if (
    newTree === "Default" || (newTree === "Cherry" && ownsCherryTree === "true")
      ? true
      : false
  ) {
    return localStorage.setItem("currentTree", newTree);
  }
  const price = this.getElementsByClassName("price")[0],
    ballance = +localStorage.getItem("coins");
  if (price?.innerText && ballance >= Number(price?.innerText)) {
    localStorage.setItem("currentTree", newTree);
    localStorage.setItem("coins", ballance - Number(price.innerText));
    ownsCherryTree = true;
    localStorage.setItem("ownsCherryTree", true);
  }
};
Array.from(document.getElementsByClassName("smallCard")).forEach((card) =>
  card.addEventListener("click", treeBuyHandler)
);

// Soil Handler \\

let soilType = localStorage.getItem("soilType") || "Default";
let ownsSnowySoil = localStorage.getItem("ownsSnowySoil") || false;
let ownsDirtySoil = localStorage.getItem("ownsDirtySoil") || false;
const soilBuyHandler = function (e) {
  const newSoil = e.currentTarget.dataset.soil;
  if (
    (newSoil === "Snowy" && ownsSnowySoil === "true") ||
    (newSoil === "Soil" && ownsDirtySoil === "true")
      ? true
      : false
  ) {
    console.log("set");
    return localStorage.setItem("soilType", newSoil);
  }
  const price = this.getElementsByClassName("price")[0],
    ballance = +localStorage.getItem("coins");
  console.log("price?.innerText", price?.innerText);
  if (price?.innerText && ballance >= Number(price?.innerText)) {
    localStorage.setItem("soilType", newSoil);
    localStorage.setItem("coins", ballance - Number(price.innerText));
    if (newSoil === "Snowy") {
      ownsSnowySoil = true;
      localStorage.setItem("ownsSnowySoil", true);
    }
    if (newSoil === "Soil") {
      ownsDirtySoil = true;
      localStorage.setItem("ownsDirtySoil", true);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  document.body.setAttribute("theme", theme);
});

document.getElementById("snowySoil").addEventListener("click", soilBuyHandler);
document.getElementById("dirtySoil").addEventListener("click", soilBuyHandler);

let hasChristmasTheme = localStorage.getItem("hasChristmasTheme");

let savedCoins = localStorage.getItem("coins");

let christmasBtn = document.getElementById("christmasThemeButton");

christmasBtn.addEventListener("click", function () {
  let hasChristmasTheme = localStorage.getItem("hasChristmasTheme");

  if (hasChristmasTheme !== "true" && parseInt(savedCoins) >= 450) {
    savedCoins -= 450;

    localStorage.setItem("coins", savedCoins);

    localStorage.setItem("hasChristmasTheme", true);
  }
});

christmasBtn.addEventListener("click", function () {
  if (hasChristmasTheme == "true") {
    window.location.href = "christmasTheme.html";
  }
});
