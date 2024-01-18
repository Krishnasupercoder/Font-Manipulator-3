var video;
var canvas;
var posenet_model;
var nose_x = 0;
var nose_y = 0;
var left_wrist = 0;
var right_wrist = 0;
var diffrence = 0;
var i_have;
function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(550,420);
canvas.position(560,199);
posenet_model = ml5.poseNet(video,modelLoaded);
posenet_model.on("pose",gotPoses);
}
function gotPoses(results){
if (results.length>0){
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log("Nose X = "+nose_x +"Nose Y = " + nose_y);
    left_wrist = results[0].pose.leftWrist.x;
    right_wrist = results[0].pose.rightWrist.x;
    diffrence = floor(left_wrist - right_wrist);
    console.log("The Diffrence Is = " + diffrence + "px" + "Left Wrist Is = " + left_wrist + "px Right Writst Is = " + right_wrist);
}
}
function  get_text(){
     i_have = document.getElementById("text_gotten").value;
}
function modelLoaded(){
    console.log("Model is started");
}
function draw(){
    background("#52BE80");
    textSize(diffrence);
    fill("#f2db0c");
   text( i_have, nose_x,nose_y);
   document.getElementById("side").innerHTML = "Width And Height Of This Text Is = " + diffrence + "px";
}