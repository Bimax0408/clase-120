function setup() {
    canvas.center();
    
    background("white");
}

function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
}

function draw() {
    strokeWeight(3);
    stroke("black");
}

function borrar() {
    background("white");
}

