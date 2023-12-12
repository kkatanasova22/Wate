window.onload = setGame;
let coins = 0;

function setGame() {
    let treeSource;
    let checkTree = localStorage.getItem("currentTree");
    let earnerdCoins = localStorage.getItem("coins");
    let coinsHolder = document.getElementById('earnerdCoins');
    let ballance = +earnerdCoins;

    coinsHolder.innerText = ballance;

    if (checkTree == null || checkTree.length == 0 || checkTree == 'undefined') {
        localStorage.setItem("currentTree", "Default");
        checkTree = localStorage.getItem("currentTree");
    }

    if (checkTree == "Default") {
        treeSource = "../images/tree.png";
    }

    if (checkTree == "Cherry") {
        treeSource = "../images/cherryTree.png";
    }

    localStorage.getItem("currentTree", "treeOne");
    const treeConst = document.getElementsByClassName("treeConst")[0];

    treeConst.src = treeSource;
    treeConst.id = 'someId'
    treeConst.draggable = true;
    treeConst.addEventListener("dragstart", dragStart);

    const gameContainer = document.getElementById("gameContainer");
    let checkSoil = localStorage.getItem("soilType");
    if (checkSoil == "Soil") {
        console.log('set to soil');
        gameContainer.style.backgroundImage = "url('../images/dirtySoil.png')";
    }

    if (checkSoil == "Snowy") {
        console.log('set to snowy');
        gameContainer.style.backgroundImage = "url('../images/snowyBg.png')";
    }

    const container = document.getElementById("soilContainer");
    container.addEventListener("dragover", dragOver);

    for (let i = 0; i < 9; i++) {
        let soil = document.createElement("div");
        soil.setAttribute('class', 'soils');
        soil.addEventListener("dragover", dragOver);
        soil.addEventListener("drop", drop);
        container.appendChild(soil);
    }

    for (let i = 0; i < 8; i++) {
        let tree = document.createElement("div");
        let newTree = treeConst.cloneNode();
        newTree.setAttribute('id', 'treeConst' + i);
        document.getElementById("trees").appendChild(newTree);
        newTree.draggable = true;
        newTree.addEventListener("dragstart", dragStart);
    }

    if (localStorage.getItem('dark')) {
        document.body.classList.add('dark');
    }

    function dragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        console.log("test")

        let data = event.dataTransfer.getData("text/plain");

        let draggedElement = document.getElementById(data);

        if (event.target.classList.contains("soils")) {
            draggedElement.parentNode.removeChild(draggedElement);

            event.target.appendChild(draggedElement);

            ballance += 20 
            coinsHolder.innerText = ballance;
            localStorage.setItem("coins", ballance.toString());
        }
    }
}
