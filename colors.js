var colors = ["red", "yellow", "purple", "blue", "green"];

document.getElementById("display-colors").onclick = function () {
    for (var i = 0; i < colors.length; i++) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(colors[i]);
        node.appendChild(textnode);
        document.getElementById("colors").appendChild(node);
    }
}
``

document.getElementById("change-background").onclick = function () {
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
};

document.getElementById("toggle-background").onclick = function () {
    var x = 1;
    setInterval(change, 1000);

    function change() {
        if (x === 1) {
            color = "red";
            x = 2;
        } else {
            color = "blue";
            x = 1;
        }

        document.body.style.background = color;
    }
};