//const
// Speed in pixels per second
var playerSpeed = 200;
var bulletSpeed = 500;
var enemySpeed = 100;

//state
function start() {
    running = true;
    loop();
}

function stop() {
    running = false;
}
function step() {
    doStep();
}

//http://jlongster.com/Making-Sprite-based-Games-with-Canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 320;
canvas.height = 200;
document.body.appendChild(canvas);

// The main game loop
var lastTime;
var frame = 0;
var running = false;

function loop() {
    if (!running) return;
    doStep();
    requestAnimFrame(loop);
}

function doStep() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;
}

function update(dt) {
    handleInput(dt);
    frame++;
}


function handleInput(dt) {
    //will exit and you can no go back, because the input will not be handled...
    if (input.isDown('SPACE')) {
        running = !running;
    }
}

// Draw everything
function render() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(10, 50, 20, 20);
    ctx.fillText("hi" + frame, 10, 80);
}

// move out to another file
window.onload = function (e) {
    console.log('window loaded');
    $('#play').onclick = start;
    $('#stop').onclick = stop;
    $('#step').onclick = step;
}

step();

