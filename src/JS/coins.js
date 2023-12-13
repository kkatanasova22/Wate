let savedCoins = localStorage.getItem("coins");
let coinsDisplay = document.getElementById("coinsDisplay");

if (savedCoins !== null) {
  coinsDisplay.textContent = savedCoins + "W";
} else {
  coinsDisplay.textContent = "0W";
}

document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  document.body.setAttribute("theme", theme);
});
