let savedCoins = localStorage.getItem("coins");
let coinsDisplay = document.getElementById("coinsDisplay");

if (savedCoins !== null) {
    coinsDisplay.textContent = savedCoins + "W";
} else {
    coinsDisplay.textContent = "0W";
}

let shopBtn = document.getElementById("shopBtn");

shopBtn.addEventListener("click", function() {
    window.location.href = "store.html";
});