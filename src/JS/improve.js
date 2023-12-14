let savedCoins = localStorage.getItem("coins");
      if (savedCoins === null) {
        savedCoins = "0";
        localStorage.setItem("coins", savedCoins);
      }
    
      let boughtItems;
      try {
        boughtItems = JSON.parse(localStorage.getItem("boughtItems")) || [];
      } catch (error) {
        boughtItems = [];
      }
    
      const buyButtons = document.querySelectorAll(".buyButton");
    
      buyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
          const cost = parseInt(this.getAttribute("data-cost"));
    
          if (parseInt(savedCoins) >= cost) {
            savedCoins -= cost;
            localStorage.setItem("coins", savedCoins.toString());
    
            boughtItems.push(this.id);
            localStorage.setItem("boughtItems", JSON.stringify(boughtItems));
    
            this.textContent = "Done";
            this.classList.add("bought");
    
            console.log("Remaining coins: " + savedCoins);
          } else {
            console.log("Not enough money to buy this item.");
          }
        });
    
        if (boughtItems.includes(button.id)) {
          button.textContent = "Done";
          button.classList.add("bought");
        }
      });