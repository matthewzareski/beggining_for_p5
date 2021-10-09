function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);

    fill(0,128,0);
    stroke(0,128,0);
    rect(90, 40, 460, 20);

    rect(90, 420, 460, 20);
    fill(0,128,0);
    stroke(0,128,0);
    rect(50, 50, 20, 380);
    
    rect(540, 50, 20, 380);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);


    fill(255,0,0);
    stroke(255,0,0);
    circle(50,430,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(540,50,80);
    
    
    fill(255,0,0);
    stroke(255,0,0);
    circle(540,430,80);
}

function snap(){
    save('Selfie.png');
}