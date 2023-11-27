window.onload = setGame;

function setGame() {
    const treeConst = document.getElementById("treeConst");
    treeConst.draggable = true;

    for (let i = 0; i < 8; i++) {
        let tree = document.createElement("div");
        tree.setAttribute('class', 'treesContainer');
        tree.setAttribute('id', 'tree' + i);
        tree.draggable = true;
        document.getElementById("trees").appendChild(tree);
    }
}