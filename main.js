function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = creatCapture(VIDEO)
    video.size(300, 300)
    video.hide();

    posNet = ml5.posNet(video, modelLoaded);
    posNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    Save('myFilterImage.png');
}
function modelLoaded(){
    console.log('PoseNet Is Initialized')
}
