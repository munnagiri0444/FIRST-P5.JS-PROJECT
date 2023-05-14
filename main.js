function setup(){
    canvas=createCanvas(800,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    color=""


}
function draw(){
    
    rect(100,50,600,400);
   
    fill("white");
   
    rect(120,70,560,360);
    fill("red");
    image(video,150,80,500,320);
    circle(120,80,100);
    circle(680,70,100);
    circle(120,420,100);
    circle(680,420,100);

    fill("green")
    
  
}
function take_snapshot(){
    save("");
}
function applyfilter(){
    color=document.getElementById("color").value;
}
