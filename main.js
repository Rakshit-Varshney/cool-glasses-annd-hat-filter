leftEyeX=0;
leftEyeY=0;
leftEyeX1=0;
leftEyeY1=0;
hat="";
glasses="";
function preload(){
hat=loadImage('hat.png');
glasses=loadImage('sunnglasses.png')
}
function setup(){
    canvas=createCanvas(550,550);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(550,550);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
}
function draw(){
image(video,0,0,550,550);
poseNet.on('pose',gotPoses);
image(hat,leftEyeX,leftEyeY,300,300)
image(glasses,leftEyeX1,leftEyeY1,300,300)
}
function take_snapshot(){
    save('myfilter.png');
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        console.log("leftEye x="+results[0].pose.leftEye.x);
        console.log("leftEye y="+results[0].pose.leftEye.y);
        leftEyeX=results[0].pose.leftEye.x-190;
        leftEyeY=results[0].pose.leftEye.y-350;
        leftEyeX1=results[0].pose.leftEye.x-190;
        leftEyeY1=results[0].pose.leftEye.y-120;
    }
}