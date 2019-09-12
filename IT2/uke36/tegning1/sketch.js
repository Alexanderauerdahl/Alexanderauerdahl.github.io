function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(228);
}
var xPos1=0; var yPos1=20;
function draw() {
  // put drawing code here
strokeweight(4);stroke("green");
var xPos2=width;
while (yPos1<height)
line(xPos1,yPos1,xPos2,yPos2);
yPos1=yPos1+a;xPos2=xPos2+a;
}
if (yPos1>height){
  while (xPos<=width){
    line(xPos1,yPos1,xPos2,yPos2);
    xPos2=xPos2+a;
    xPos1=xPos1+a;
  }
}
