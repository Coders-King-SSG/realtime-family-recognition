function preload() {
    //empty
}
/**link:
https://teachablemachine.withgoogle.com/models/3yDEel_aM/model.json
 */
function setup() {
    var canvas = createCanvas(600, 400);
    canvas.parent("cam_div");
    video = createCapture(VIDEO);
    video.size(400, 600);
    video.hide();
}

function saveimg() {
    var vl = prompt('What file name do you want to save in?');
    if (vl != null) {
        save(vl + '.png');
    }
}

function draw() {
    image(video, 0, 0, 640, 400);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3yDEel_aM/model.json', modelLoaded)
    classifier.classify(video, gotPoses);
}

function modelLoaded() {
    console.log('ML5 '+ml5.version+' has been initialized.')
}

function gotPoses(results) {
    console.log(results);
}

function modelLoaded() {
    console.log('PoseNet Loaded!')
}
