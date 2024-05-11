let started = false;
let canvas;
let gouchSlider;
let gouchLevel;

let shakeX = 0;
let shakeY = 0;

let s_soft;
let s_intense;

function preload() {
    if (!started) {
        soundFormats("ogg");
        s_soft = loadSound("soft");
        s_soft.setLoop(true);
        s_intense = loadSound("intense");
        s_intense.setLoop(true);
    }
}

function startcond() {
    started = !started;
    userStartAudio();
    s_soft.setVolume(0);
    s_intense.setVolume(0);
    if (started) {
        s_intense.play();
        s_soft.play();
    } else {
        s_soft.stop();
        s_intense.stop();
    }
}

function setup() {
    canvas = createCanvas(800, 600);
    canvas.mousePressed(startcond);
    canvas.center("horizontal");
    gouchSlider = createSlider(0, 1, 0, 0.01);
    gouchSlider.style("width", "300px");
    gouchSlider.center("horizontal");
    gouchSlider.position(gouchSlider.position().x, 700);
    rectMode(CENTER);
    ellipseMode(CENTER);
}

function face(posx, posy, gouch) {
    noStroke();
    // face
    fill(250, 214, 162);
    square(posx, posy, 350);
    // eyes
    fill(255, 255, 255);
    rect(posx - 75, posy - 55, 100, 85);
    rect(posx + 75, posy - 55, 100, 85);
    fill(0, 0, 0);
    circle(posx - 75, posy - 55, 40);
    circle(posx + 75, posy - 55, 40);
    // eyebrows
    rect(posx - 75, posy - 110, 100, 7);
    rect(posx + 75, posy - 110 - (30 * gouch), 100, 7);
    // mouth
    rect(posx + (sin(millis() / 500) * 50 * gouch), posy + 120, 140, 10);
    fill(250, 214, 162);
    rect(posx - 75, posy - (37 * (1 - gouch)) - 65, 110, (75 * gouch));
    rect(posx + 75, posy - (32 * (1 - gouch)) - 73, 110, (60 * gouch));
}

function draw() {
    background(0, 0, 0);
    if (started) {
        gouchLevel = gouchSlider.value();
        s_soft.setVolume(gouchLevel);
        s_intense.setVolume(1 - gouchLevel);
        shakeX = (sin(millis() / 300) * 40) * (sin(millis() / 500) * 2);
        shakeY = sin(millis() / 74) * 70;
        face(400 + shakeX * (1 - gouchLevel), 300 + shakeY * (1 - gouchLevel), gouchLevel);
    } else {
        fill(255);
        textSize(32);
        text("Click to start", 310, 50);
    }
}