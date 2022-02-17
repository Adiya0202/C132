status="";

function preload(){
img= loadImage("CUTE ANIMALS.jpg");
}
function setup(){
canvas= createCanvas(640,420);
canvas.center();
objectDetector= ml5.objectDetector('cocoSSD',modelLoaded);
}
function modelLoaded(){
console.log("model is initialised");
status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error,results){
if (error){
    console.log(error);
}
console.log(results);
}

function draw(){
image(img, 0,0,640,420);
fill ("#2E5090");
noFill();
stroke ("#2E5090");
rect(15,200,170,200);
text("Cat",25,220);
}