function setup() {
createCanvas(1480, 620);
background(255,0,0);

function draw() {
if (mouseIsPressed) 
{fill(0,255,16);
} else{fill(0,155,23);} 

ellipse(mouseX, mouseY, 80, 80);
}