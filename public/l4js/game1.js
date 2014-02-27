//const
// Speed in pixels per second
var playerSpeed = 200;
var bulletSpeed = 500;
var enemySpeed = 100;

//http://jlongster.com/Making-Sprite-based-Games-with-Canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 200;
document.body.appendChild(canvas);

// The main game loop
var lastTime;
var frame = 0;
var running = false;

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
//    if (input.isDown('DOWN') || input.isDown('s')) {
//        player.pos[1] += playerSpeed * dt;
//    }
//
//    if (input.isDown('UP') || input.isDown('w')) {
//        player.pos[1] -= playerSpeed * dt;
//    }
//
//    if (input.isDown('LEFT') || input.isDown('a')) {
//        player.pos[0] -= playerSpeed * dt;
//    }
//
//    if (input.isDown('RIGHT') || input.isDown('d')) {
//        player.pos[0] += playerSpeed * dt;
//    }

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

    var planets = SolarSystem;
    for (var i = 0; i< 5; i++){

        ctx.fillStyle = "red";
        planets[i].draw(ctx, [20,100]);

    }

}

window.onload = function (e) {
    console.log('window loaded');
    $('#play').onclick = start;
    $('#stop').onclick = stop;
    $('#step').onclick = step;
}

step();

