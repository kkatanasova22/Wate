Array.from(document.getElementsByClassName("smallCard")).forEach(card => card.addEventListener("click", handleSelection));

function handleSelection(e)
{  
    let price = this.getElementsByClassName("price")[0];
    let ballance =  +localStorage.getItem("coins"); 

    localStorage.setItem("currentTree", e.currentTarget.dataset.tree)
    console.log(ballance)
    if(price){
        ballance -= Number(price.innerText);
        localStorage.setItem("coins", ballance);
    }
}