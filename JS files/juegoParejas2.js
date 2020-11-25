let img1, img2, img3, img4;

var randomOne; 

function preload()
{
    img = loadImage('assets/orange.jpg');
}

function setup() 
{
    createCanvas(375, 667);
    randomOne = 0;
}

function draw()
{
    background(100);
    console.log(mouseX + ", " + mouseY);
    noFill();
    stroke(255);

    cards();
    resetButton();
    counter();

    randomizer();
}

function cards()
{
    square(35, 200, 60);
    square(115, 200, 60);
    square(195, 200, 60);
    square(275, 200, 60);
    square(35, 280, 60);
    square(115, 280, 60);
    square(195, 280, 60);
    square(275, 280, 60);
    square(35, 360, 60);
    square(115, 360, 60);
    square(195, 360, 60);
    square(275, 360, 60);
    square(35, 440, 60);
    square(115, 440, 60);
    square(195, 440, 60);
    square(275, 440, 60);
}

function resetButton()
{
    square(275, 32, 60);
}

function counter()
{
    var matches = 0;
    fill(255);
    textSize(32);
    text(matches + '/8', 39, 608);

    stroke(255);
    noFill();
    rect(135, 581, 200, 32);

    fill(255);
    switch(matches)
    {
        case 0:

        
            //triangulo verde
            fill(0, 255, 0);
            triangle(135, 241, 155, 241, 145, 221);
            triangle(295, 401, 315, 401, 305, 381);

            // circulo azul
            fill(0, 0, 255);
            circle(225, 230, 20);
            circle(225+80, 230+80, 20);

            //cuarado pequeño rojo 
            fill(255, 0, 0);
            square(56, 221+80+80, 20);
            square(56+80+80, 221+80+80+80, 20);

            // cara seria naraja 1
            fill(255, 100, 0);
            circle(65, 230, 20);
            fill(0);
            circle(60, 225, 6);
            circle(70, 225, 6);
            stroke(0);
            line(60, 235, 70, 235); 
            noStroke();

            // carita seria naranja 2
            fill(255, 100, 0);
            circle(65+80, 230+80+80, 20);
            fill(0);
            circle(60+80, 225+80+80, 6);
            circle(70+80, 225+80+80, 6);
            stroke(0);
            line(60+80, 235+80+80, 70+80, 235+80+80); 
            noStroke();

            //equix
            stroke(255, 75, 100);
            strokeWeight(3);
            line(292, 215, 319, 246);
            line(319, 215, 292, 246);
            line(292-80-80, 215+80, 319-80-80, 246+80);
            line(319-80-80, 215+80, 292-80-80, 246+80);


            // anillo amarillo
            stroke(255,255,0);
            strokeWeight(3);
            noFill();
            circle(65,310,30)
            circle(306,470,30)


            // rectangulo violeta con cara 1
            noStroke();
            fill(255,0,255);
            rect(210,290,30,40);
            fill(255);
            circle(210, 310, 15);
            circle(240, 310, 15);
            fill(0);
            circle(210, 314, 10);
            circle(240, 308, 10);
            stroke(255);
            line(216, 322, 235, 322); 
            noStroke();

            //rectangulo violeta con cara 2
            noStroke();
            fill(255,0,255);
            rect(210-80-80,290+80+80,30,40);
            fill(255);
            circle(210-80-80, 310+80+80, 15);
            circle(240-80-80, 310+80+80, 15);
            fill(0);
            circle(210-80-80, 314+80+80, 10);
            circle(240-80-80, 308+80+80, 10);
            stroke(255);
            line(216-80-80, 322+80+80, 235-80-80, 322+80+80); 
            noStroke();

            // a house 1
            fill(67,232,156);
            rect(130,462,30,30);
            rect(152,448,8,8);
            fill(190,110,232);
            rect(125,455,40,7);
            rect(140,475,10,17);

            // a house 2
            fill(67,232,156);
            rect(130+80,462-80,30,30);
            rect(152+80,448-80,8,8);
            fill(190,110,232);
            rect(125+80,455-80,40,7);
            rect(140+80,475-80,10,17);
            
            

            break;
        case 1:

            //triangulo verde
            fill(0, 255, 0);
            triangle(135, 241+80, 155, 241+80, 145, 221+80);
            triangle(135+80, 241+80+80+80, 155+80, 241+80+80+80, 145+80, 221+80+80+80);

            //circulo azul
            fill(0, 0, 255);
            circle(225, 230+80+80, 20);
            circle(225-80-80, 230+80+80+80, 20);
            
            //cuadrado rojo
            fill(255, 0, 0);
            square(56, 221, 20);
            square(56+80, 221, 20);

            // carita seria naranja 1
            fill(255, 100, 0);
            circle(65+80+80+80, 230, 20);
            fill(0);
            circle(60+80+80+80, 225, 6);
            circle(70+80+80+80, 225, 6);
            stroke(0);
            line(60+80+80+80, 235, 70+80+80+80, 235); 
            noStroke();

             // carita seria naranja 2
            fill(255, 100, 0);
            circle(65+80+80+80, 230+80+80+80, 20);
            fill(0);
            circle(60+80+80+80, 225+80+80+80, 6);
            circle(70+80+80+80, 225+80+80+80, 6);
            stroke(0);
            line(60+80+80+80, 235+80+80+80, 70+80+80+80, 235+80+80+80); 
            noStroke();
    
            //equis
            stroke(255, 75, 100);
            strokeWeight(3);
            line(292-80, 215+80, 319-80, 246+80);
            line(319-80, 215+80, 292-80, 246+80);
            line(292-80-80, 215+80+80+80, 319-80-80, 246+80+80+80);
            line(319-80-80, 215+80+80+80, 292-80-80, 246+80+80+80);


            // anillo amarillo
            stroke(255,255,0);
            strokeWeight(3);
            noFill();
            circle(65,310+80,30)
            circle(306,470-80-80,30)

            // rectangulo violeta con cara 1
            noStroke();
            fill(255,0,255);
            rect(210+80,290+80,30,40);
            fill(255);
            circle(210+80, 310+80, 15);
            circle(240+80, 310+80, 15);
            fill(0);
            circle(210+80, 314+80, 10);
            circle(240+80, 308+80, 10);
            stroke(255);
            line(216+80, 322+80, 235+80, 322+80); 
            noStroke();

            //rectangulo violeta con cara 2
            noStroke();
            fill(255,0,255);
            rect(210,290-80,30,40);
            fill(255);
            circle(210, 310-80, 15);
            circle(240, 310-80, 15);
            fill(0);
            circle(210, 314-80, 10);
            circle(240, 308-80, 10);
            stroke(255);
            line(216, 322-80, 235, 322-80); 
            noStroke();

             // a house 1
             fill(67,232,156);
             rect(130-80,462-80-80,30,30);
             rect(152-80,448-80-80,8,8);
             fill(190,110,232);
             rect(125-80,455-80-80,40,7);
             rect(140-80,475-80-80,10,17);
 
             // a house 2
             fill(67,232,156);
             rect(130,462-80,30,30);
             rect(152,448-80,8,8);
             fill(190,110,232);
             rect(125,455-80,40,7);
             rect(140,475-80,10,17);


            

            break;
        case 2:
            // triangulo verde
            fill(0, 255, 0);
            triangle(135-80, 241+80, 155-80, 241+80, 145-80, 221+80);
            triangle(135+80+80, 241+80+80+80, 155+80+80, 241+80+80+80, 145+80+80, 221+80+80+80);

            //circulo azul
            fill(0, 0, 255);
            circle(225-80, 230, 20);
            circle(225, 230+80+80+80, 20);

            // cuadrado rojo
            fill(255, 0, 0);
            square(56+80+80, 221, 20);
            square(56+80+80+80, 221+80+80, 20);

            // carita seria naranja 1
            fill(255, 100, 0);
            circle(65, 230+80+80, 20);
            fill(0);
            circle(60, 225+80+80, 6);
            circle(70, 225+80+80, 6);
            stroke(0);
            line(60, 235+80+80, 70, 235+80+80); 
            noStroke();

            //carita seria naranja 2
            fill(255, 100, 0);
            circle(65+80+80, 230+80, 20);
            fill(0);
            circle(60+80+80, 225+80, 6);
            circle(70+80+80, 225+80, 6);
            stroke(0);
            line(60+80+80, 235+80, 70+80+80, 235+80); 
            noStroke();

            // equis roja
            stroke(255, 75, 100);
            strokeWeight(3);
            line(292-80-80-80, 215, 319-80-80-80, 246);
            line(319-80-80-80, 215, 292-80-80-80, 246);
            line(292, 215+80, 319, 246+80);
            line(319, 215+80, 292, 246+80);

            // yellow ring
            stroke(255,255,0);
            strokeWeight(3);
            noFill();
            circle(65+80,310,30);
            circle(306-80-80,470,30);

            
            // rectangulo violeta con cara 1
            noStroke();
            fill(255,0,255);
            rect(210+80,290-80,30,40);
            fill(255);
            circle(210+80, 310-80, 15);
            circle(240+80, 310-80, 15);
            fill(0);
            circle(210+80, 314-80, 10);
            circle(240+80, 308-80, 10);
            stroke(255);
            line(216+80, 322-80, 235+80, 322-80); 
            noStroke();

            //rectangulo violeta con cara 2
            noStroke();
            fill(255,0,255);
            rect(210-80,290+80,30,40);
            fill(255);
            circle(210-80, 310+80, 15);
            circle(240-80, 310+80, 15);
            fill(0);
            circle(210-80, 314+80, 10);
            circle(240-80, 308+80, 10);
            stroke(255);
            line(216-80, 322+80, 235-80, 322+80); 
            noStroke();

            // a house 1
            fill(67,232,156);
            rect(130-80,462,30,30);
            rect(152-80,448,8,8);
            fill(190,110,232);
            rect(125-80,455,40,7);
            rect(140-80,475,10,17);

            // a house 2
            fill(67,232,156);
            rect(130+80,462-80,30,30);
            rect(152+80,448-80,8,8);
            fill(190,110,232);
            rect(125+80,455-80,40,7);
            rect(140+80,475-80,10,17);
            
            

            break;
        case 3:
            //triangulo verde
            fill(0, 255, 0);
            triangle(135+80+80, 241, 155+80+80, 241, 145+80+80, 221);
            triangle(135-80, 241+80+80+80, 155-80, 241+80+80+80, 145-80, 221+80+80+80);

            // circulo azul
            fill(0, 0, 255);
            circle(225-80, 230+80+80+80, 20);
            circle(225, 230+80+80, 20);

            // cuadrado rojo
            fill(255, 0, 0);
            square(56, 221+80+80, 20);
            square(56+80+80, 221+80+80+80, 20);

            // carita seria naranja 1
            fill(255, 100, 0);
            circle(65, 230+80, 20);
            fill(0);
            circle(60, 225+80, 6);
            circle(70, 225+80, 6);
            stroke(0);
            line(60, 235+80, 70, 235+80); 
            noStroke();

            // carita seria naranja 2
            fill(255, 100, 0);
            circle(65+80+80+80, 230+80, 20);
            fill(0);
            circle(60+80+80+80, 225+80, 6);
            circle(70+80+80+80, 225+80, 6);
            stroke(0);
            line(60+80+80+80, 235+80, 70+80+80+80, 235+80); 
            noStroke();

            // X
            stroke(255, 75, 100);
            strokeWeight(3);
            line(292, 215+80+80, 319, 246+80+80);
            line(319, 215+80+80, 292, 246+80+80);
            line(292-80-80, 215+80+80, 319-80-80, 246+80+80);
            line(319-80-80, 215+80+80, 292-80-80, 246+80+80);

            // ring
            stroke(255,255,0);
            strokeWeight(3);
            noFill();
            circle(65,310-80,30);
            circle(306-80,470-80-80-80,30);

            // purple rectangle with crazy face
             noStroke();
             fill(255,0,255);
             rect(210-80,290-80,30,40);
             fill(255);
             circle(210-80, 310-80, 15);
             circle(240-80, 310-80, 15);
             fill(0);
             circle(210-80, 314-80, 10);
             circle(240-80, 308-80, 10);
             stroke(255);
             line(216-80, 322-80, 235-80, 322-80); 
             noStroke();
 
             // purple rectangle with crazy face
             noStroke();
             fill(255,0,255);
             rect(210+80,290+80+80,30,40);
             fill(255);
             circle(210+80, 310+80+80, 15);
             circle(240+80, 310+80+80, 15);
             fill(0);
             circle(210+80, 314+80+80, 10);
             circle(240+80, 308+80+80, 10);
             stroke(255);
             line(216+80, 322+80+80, 235+80, 322+80+80); 
             noStroke();

             // a house 1
            fill(67,232,156);
            rect(130,462-80-80,30,30);
            rect(152,448-80-80,8,8);
            fill(190,110,232);
            rect(125,455-80-80,40,7);
            rect(140,475-80-80,10,17);

            // a house 2
            fill(67,232,156);
            rect(130+80,462-80-80,30,30);
            rect(152+80,448-80-80,8,8);
            fill(190,110,232);
            rect(125+80,455-80-80,40,7);
            rect(140+80,475-80-80,10,17);
            
             
            
            break;
        case 4:
            // green triangle 
            fill(0, 255, 0);
            triangle(135+80, 241+80+80, 155+80, 241+80+80, 145+80, 221+80+80);
            triangle(135, 241+80+80, 155, 241+80+80, 145, 221+80+80);

            // blue circle
            fill(0, 0, 255);
            circle(225-80-80, 230, 20);
            circle(225+80, 230+80+80, 20);

            // red square
            fill(255, 0, 0);
            square(56, 221+80+80+80, 20);
            square(56+80+80, 221+80, 20);

            // sirious oreange face 1
            fill(255, 100, 0);
            circle(65+80+80, 230, 20);
            fill(0);
            circle(60+80+80, 225, 6);
            circle(70+80+80, 225, 6);
            stroke(0);
            line(60+80+80, 235, 70+80+80, 235); 
            noStroke();

            // sirious oreange face 2
            fill(255, 100, 0);
            circle(65+80, 230+80+80+80, 20);
            fill(0);
            circle(60+80, 225+80+80+80, 6);
            circle(70+80, 225+80+80+80, 6);
            stroke(0);
            line(60+80, 235+80+80+80, 70+80, 235+80+80+80); 
            noStroke();

            // X
            stroke(255, 75, 100);
            strokeWeight(3);
            line(292-80-80, 215, 319-80-80, 246);
            line(319-80-80, 215, 292-80-80, 246);
            line(292-80-80-80, 215+80, 319-80-80-80, 246+80);
            line(319-80-80-80, 215+80, 292-80-80-80, 246+80);

            // yellow ring 
            stroke(255,255,0);
            strokeWeight(3);
            noFill();
            circle(65+80+80+80,310-80,30);
            circle(306-80,470,30);

            // purple rectangle with crazy face
            noStroke();
            fill(255,0,255);
            rect(210-80-80,290+80,30,40);
            fill(255);
            circle(210-80-80, 310+80, 15);
            circle(240-80-80, 310+80, 15);
            fill(0);
            circle(210-80-80, 314+80, 10);
            circle(240-80-80, 308+80, 10);
            stroke(255);
            line(216-80-80, 322+80, 235-80-80, 322+80); 
            noStroke();

            // purple rectangle with crazy face
            noStroke();
            fill(255,0,255);
            rect(210+80,290,30,40);
            fill(255);
            circle(210+80, 310, 15);
            circle(240+80, 310, 15);
            fill(0);
            circle(210+80, 314, 10);
            circle(240+80, 308, 10);
            stroke(255);
            line(216+80, 322, 235+80, 322); 
            noStroke();

            // a house 1
            fill(67,232,156);
            rect(130+80+80,462,30,30);
            rect(152+80+80,448,8,8);
            fill(190,110,232);
            rect(125+80+80,455,40,7);
            rect(140+80+80,475,10,17);

            // a house 2
            fill(67,232,156);
            rect(130,462-80-80,30,30);
            rect(152,448-80-80,8,8);
            fill(190,110,232);
            rect(125,455-80-80,40,7);
            rect(140,475-80-80,10,17);
            
            break;
    }   
}
