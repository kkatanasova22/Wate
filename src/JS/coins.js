let savedCoins = localStorage.getItem("coins");
let coinsDisplay = document.getElementById("coinsDisplay");

if (savedCoins !== null) {
    coinsDisplay.textContent = savedCoins + "W";
} else {
    coinsDisplay.textContent = "0W";
}

let resetScoreButton = document.getElementById("resetScoreButton");

resetScoreButton.addEventListener("click", function() {
    localStorage.setItem("coins", "0");
    coinsDisplay.textContent = "0W";
});

function updateCoinsHeading(coins) {
    coinsDisplay.textContent = coins + "W";
}
