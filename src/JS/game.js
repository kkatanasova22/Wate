window.onload = setGame;
let coins = 0;

function setGame() {
    const treeConst = document.getElementById("treeConst");
    treeConst.draggable = true;
    treeConst.addEventListener("dragstart", dragStart);

    const container = document.getElementById("soilContainer");
    container.addEventListener("dragover", dragOver);
    container.addEventListener("drop", drop);

    for (let i = 0; i < 9; i++) {
        let soil = document.createElement("div");
        soil.setAttribute('class', 'soils');
        soil.addEventListener("dragover", dragOver);
        soil.addEventListener("drop", drop);
        container.appendChild(soil);
    }

    for (let i = 0; i < 8; i++) {
        let tree = document.createElement("div");
        tree.setAttribute('class', 'treesContainer');
        tree.setAttribute('id', 'tree' + i);
        tree.draggable = true;
        tree.addEventListener("dragstart", dragStart);
        document.getElementById("trees").appendChild(tree);
    }

    coins = parseInt(localStorage.getItem("coins")) || 0;

    updateCoinsInParentWindow();

    if (localStorage.getItem('dark')) {
        document.body.classList.add('dark');
    }
}

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    let data = event.dataTransfer.getData("text/plain");

    let draggedElement = document.getElementById(data);

    if (event.target.classList.contains("soils")) {
        draggedElement.parentNode.removeChild(draggedElement);

        event.target.appendChild(draggedElement);

        coins += 10;

        updateCoinsInParentWindow();

        localStorage.setItem("coins", coins.toString());
    }
}

function updateCoinsInParentWindow() {
    if (window.opener && !window.opener.closed) {
        window.opener.updateCoinsHeading(coins);
    }
}
