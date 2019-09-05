


function setup(){

    createCanvas(1400,900);
background(0,0,0);
angleMode(DEGREES);
}

function draw(){
noStroke();
    //pond
    fill(255,255,255);
    ellipse(700,785,1400,100);
   fill(255,255,250,3);
    ellipse(700,785,1600,150);
    fill(255,255,250,1);
    ellipse(700,785,1690,170);
 
 
      //lilypads
  //1
fill(0); 
ellipse(400,820,50,7);  
fill(255); 
ellipse(405,820,7,2);  

  //2
fill(0); 
ellipse(330,820,50,7); 
fill(255); 
ellipse(335,820,7,1);
 
  //3
fill(0); 
ellipse(310,800,50,5); 
fill(255); 
ellipse(315,800,6,2); 

 
  //4
fill(0); 
ellipse(365,800,45,5); 
fill(255); 
ellipse(360,800,5,1);

  //5
fill(0); 
ellipse(320,775,20,3); 
fill(255); 
ellipse(322,775,3,1); 
  
  //6
fill(0); 
ellipse(385,790,25,3); 
fill(255); 
ellipse(387,790,2,1);
  
  //7
fill(0); 
ellipse(365,780,25,3);
fill(255); 
ellipse(367,780,2,1);
  
  //
fill(0); 
ellipse(315,790,20,3); 
fill(255); 
ellipse(318,790,3,1);
  
  //8
fill(0); 
ellipse(305,790,10,3); 
fill(255); 
ellipse(302,790,2,1); 
  
  //9
fill(0); 
ellipse(370,790,15,3); 
fill(255); 
ellipse(374,790,2,1);
  
  //10
fill(0); 
//ellipse(375,845,20,3);
fill(255); 
//ellipse(370,845,2,1);
  
  //11
fill(0); 
//ellipse(390,720,14,2);  
fill(255); 
//ellipse(395,720,4,1);
  
  //12
fill(0); 
ellipse(355,750,13,2); 
fill(255); 
ellipse(352,750,3,1);
  
  //13
fill(0); 
ellipse(390,770,20,3);
fill(255); 
ellipse(392,770,2,1);
  
  //14
fill(0); 
ellipse(307,755,15,2); 
fill(255); 
ellipse(309,755,1,1); 
  
  //15
fill(0); 
ellipse(435,745,13,2); 
fill(255); 
ellipse(432,745,3,1);
  
  //16
fill(0); 
ellipse(455,765,14,2);

  
  //17
fill(0); 
ellipse(445,760,15,2);

  
  //18
fill(0); 
ellipse(295,810,35,3);

  
  //19
fill(0); 
ellipse(220,790,25,3);
fill(255); 
ellipse(222,790,3,1);
  
  //20
fill(0); 
ellipse(211,777,25,3);
fill(255); 
ellipse(213,777,5,1);

  //21
fill(0); 
ellipse(285,757,10,2);

  //22
fill(0); 
ellipse(465,740,9,1);

  //23
fill(0); 
ellipse(400,790,25,3);

  //24
fill(0); 
ellipse(185,790,25,4);
fill(255); 
ellipse(183,790,5,1);



//Saturn

//planet
fill(255); 
ellipse(485,375,600,600);
fill(0,0,0,50); 
ellipse(485,375,570,570);
fill(0,0,0,50); 
ellipse(485,375,500,500);
fill(0,0,0,25); 
ellipse(485,375,300,300);



//ring
push()
  rotate(PI/-.120)
fill(25,25,25,70);
strokeWeight(15);
stroke(0,0,0,45);
ellipse(300,565,900,50);
noStroke
fill(0,0,0,100)
ellipse(300,565,745,25);
  pop()
  
//shadow
noStroke();
fill(0,0,0,95); 
ellipse(575,770,300,3);
//shadow
noStroke();
fill(0,0,0,95); 
ellipse(675,777,250,3);
//shadow
noStroke();
fill(0,0,0,95); 
ellipse(750,783,200,3);
//shadow
noStroke();
fill(0,0,0,95); 
ellipse(825,789,150,3);




//moon
noStroke();
fill(255); 
ellipse(1185,150,200,200);
noStroke();
fill(0,0,0,10); 
ellipse(1185,150,170,170);


//crater
fill(0,0,0,35); 
ellipse(1255,150,50,50);
//crater
fill(0,0,0,25); 
ellipse(1255,165,40,40);
//crater
fill(0,0,0,25); 
ellipse(1255,115,40,40);
//crater
fill(0,0,0,15); 
ellipse(1240,100,30,30);
//crater
fill(0,0,0,15); 
ellipse(1230,120,30,30);
//crater
fill(0,0,0,15); 
ellipse(1237,125,30,30);
//crater
fill(0,0,0,15); 
ellipse(1210,140,30,30);
//crater
fill(0,0,0,15); 
ellipse(1220,140,30,30);
//crater
fill(0,0,0,25); 
ellipse(1245,180,50,50);
//crater
fill(0,0,0,15); 
ellipse(1209,90,40,40);
//crater
fill(0,0,0,10); 
ellipse(1180,88,40,40);
//crater
fill(0,0,0,15); 
ellipse(1255,150,110,110);
//crater
fill(0,0,0,25); 
ellipse(1260,88,40,40);
//crater
fill(0,0,0,25); 
ellipse(1230,80,40,40);
//crater
fill(0,0,0,35); 
ellipse(1235,200,60,60);
//crater
fill(0,0,0,35); 
ellipse(1245,125,60,60);
//crater
fill(0,0,0,25); 
ellipse(1255,85,40,40);
//crater
fill(0,0,0,25); 
ellipse(1200,115,40,40);
//crater
fill(0,0,0,15); 
ellipse(1133,115,40,40);
//crater
fill(0,0,0,10); 
ellipse(1120,135,40,40);
//crater
fill(0,0,0,10); 
ellipse(1110,165,40,40);
//crater
fill(0,0,0,20); 
ellipse(1140,160,40,40);




push()
rotate(7)

//shadow
fill(100,100,100,100); 
ellipse(1185,620,150,5);
//shadow
fill(100,100,100,100); 
ellipse(1175,627,120,5);
//shadow
fill(100,100,100,100); 
ellipse(1161,634,100,4);
//shadow
fill(100,100,100,100); 
ellipse(1145,639,75,3);
//shadow
fill(100,100,100,100); 
ellipse(1135,643,55,3);
//shadow
fill(100,100,100,100); 
ellipse(1120,648,25,2);

pop()




//stars
fill(255); 
ellipse(300,100,3,8); 
  //
fill(255); 
ellipse(180,150,2,5);
//
  fill(255); 
ellipse(220,60,4,7);
//
  fill(255); 
ellipse(100,45,2,3);
//
  fill(255); 
ellipse(90,170,5,10);
//
fill(255); 
ellipse(50,270,3,5);
//
  fill(255); 
ellipse(170,300,3,5);
  //
  fill(255); 
ellipse(130,400,1,2);
  //
  fill(255); 
ellipse(30,390,3,5);
  //
  fill(255); 
ellipse(60,480,3,2);
  //
  fill(255); 
ellipse(40,600,6,7);
  //
  fill(255); 
ellipse(170,600,3,5);
  //
  fill(255); 
ellipse(400,50,2,3);
  //
  fill(255); 
ellipse(500,30,3,5);
  //
  fill(255); 
ellipse(570,55,5,10);
  //
  fill(255); 
ellipse(670,20,3,5);
  //
  fill(255); 
ellipse(720,100,3,2);
//  
  fill(255); 
ellipse(750,180,3,5);
  //
  fill(255); 
ellipse(850,100,3,5);
  //
fill(255); 
ellipse(990,50,8,15);
//
fill(255); 
ellipse(1000,300,3,5);
//
fill(255); 
ellipse(899,443,6,5);
//
fill(255); 
ellipse(1100,550,6,9);
//
fill(255); 
ellipse(1300,600,3,5);
//
fill(255); 
ellipse(1350,400,3,8);
//
fill(255); 
ellipse(1225,300,3,1);
//
fill(255); 
ellipse(1172,400,3,2);
 








}
