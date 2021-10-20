function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 50, 50, 550, 380);
    fill(255, 204, 230);
    stroke(255, 204, 230);
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(590, 50, 80);
    circle(590, 430, 80);


    fill(179, 0, 179);
    stroke(179, 0, 179);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);

}

function take_snapshot() {
    save('myselfie.png');
}
