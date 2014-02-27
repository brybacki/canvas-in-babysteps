//const
// Speed in pixels per second
var playerSpeed = 200;
var bulletSpeed = 500;
var enemySpeed = 100;
var planetLimit = 0;

//http://jlongster.com/Making-Sprite-based-Games-with-Canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1900;
canvas.height = 250;
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

function toggleStartStop() {
    return (running ? stop() : start());
}

function stop() {
    running = false;
}

function step() {
    doStep();
}

function loop() {
    if (!running) {
        doStep();
        return;
    }

    doStep();
    requestAnimFrame(loop);
}

function doStep() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);
    render(dt);

    lastTime = now;
}

function update(dt) {
//    handleInput(dt);
    frame++;
}

// Draw everything
function render(dt) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 20, 20);


    var planets = SolarSystem;
    //should be on set/get
    // change only on new planet... removed planet
    if (planetLimit > 1 && planetLimit < planets.length) {
        var max_distance = planets[planetLimit-1].dst_scaled() + 20 + planets[planetLimit-1].radius_scaled();
        if (max_distance > canvas.width) {
            ratio = (max_distance / canvas.width);
            console.log("r=" + ratio);
            AstronomicalObject.scale /= ratio;
        }
    }

    for (var i = 0; i < planetLimit; i++) {
        planets[i].draw(ctx, [20, 100]);
    }

    ctx.font = '11px Courier New';
    ctx.fillStyle = "gray";
    ctx.fillText('   frame: ' + frame, 10, canvas.height - 45);
    ctx.fillText(' objects: ' + planetLimit, 10, canvas.height - 35);
    ctx.fillText(' running: ' + running, 10, canvas.height - 25);
    ctx.fillText('      dt: ' + dt, 10, canvas.height - 15);
    ctx.fillText('    note: distance scale is 100x smaller than diameter scale', 10, canvas.height - 5);
}

window.onload = function (e) {
    console.log('window loaded');
    $('#play').onclick = toggleStartStop;
    $('#step').onclick = step;
}

step();

function setKey(event, status) {
    var code = event.keyCode;
    var key;
    console.log(code);
    switch (code) {
        case 27:
            key = 'ESC';
            console.log(key);

            stop();

            break;

        case 32:
            key = 'SPACE';
            console.log(key);

            toggleStartStop();

            break;
        case 37:
            key = 'LEFT';
            console.log(key);
            planetLimit--;

            break;
        case 38:
            key = 'UP';
            break;
        case 39:
            key = 'RIGHT';
            console.log(key);
            planetLimit++;

            break;
        case 40:
            key = 'DOWN';
            break;
        case 107:
            key = 'PLUS';
            //todo: change scale
            break;
        case 109:
            key = 'MINUS';
            break;
        default:
            // Convert ASCII codes to letters
            key = String.fromCharCode(code);
            console.log(key);
    }

    event.stopPropagation();
    event.preventDefault();

}

document.addEventListener('keyup', function (e) {
    setKey(e, true);
});
