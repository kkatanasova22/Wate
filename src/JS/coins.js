let savedCoins = localStorage.getItem("coins");
    let coinsDisplay = document.getElementById("coinsDisplay");

    if (savedCoins !== null) {
      coinsDisplay.textContent = "Coins: " + savedCoins;
    } else {
      coinsDisplay.textContent = "No coins saved.";
    }

     resetScoreButton.addEventListener("click", function() {
       localStorage.setItem("coins", "0");
       coinsDisplay.textContent = "Coins: 0";
     });