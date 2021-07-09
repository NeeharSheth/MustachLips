filter= "";
nose_x= 0;
nose_y=0;

function preload(){
mustache_img= loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
lipstick_img= loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
    canvas= createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300)
video.hide();

posenet= ml5.poseNet(video, modelLoaded);
posenet.on("pose", gotPoses);
}

function modelLoaded(){
console.log("posenet is loaded :D");
}

function draw(){
    image(video,0,0,300,300);

    if(filter == "mustache"){
       image(mustache_img,nose_x-15,nose_y-10,30,30);
    }

    if(filter == "lipstick"){
        image(lipstick_img,nose_x-15,nose_y+5,30,30);
    }
}

function take_snapshot(){
    save("filtered_clown.png");
}

function gotPoses(result){
    
    setTimeout(function(){if(result.length>0){
        console.log(result);
        nose_x= result[0].pose.nose.x.toFixed(2);
        nose_y= result[0].pose.nose.y.toFixed(2);
        console.log("nose x is"+nose_x, "nose y is"+nose_y);
    }},2000);
    }

function mustache(){
    filter="mustache";
    }

    function lipstick(){
        filter="lipstick";
            }