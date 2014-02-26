//http://jlongster.com/Making-Sprite-based-Games-with-Canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 320;
canvas.height = 200;
document.body.appendChild(canvas);

// The main game loop
var lastTime;
var frame = 0;

function loop() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    frame++;
    render();

    lastTime = now;
    requestAnimFrame(loop);
}

// Draw everything
function render() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "black";
    ctx.fillRect(10, 50, 20, 20);
    ctx.fillText("hi" + frame, 10, 80);
}

loop();

