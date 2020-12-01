let img1, img2, img3, img4;

var randomOne; 

let matches;
let matcherOne;

let xc1, xc2, xc3, xc4, xc5, xc6, xc7, xc8,
xc9, xc10, xc11, xc12, xc13, xc14, xc15, xc16;

let yc1, yc2, yc3, yc4, yc5, yc6, yc7, yc8,
yc9, yc10, yc11, yc12, yc13, yc14, yc15, cy16;

let oneSel, twoSel, threeSel, fourSel, fiveSel, sixSel, sevenSel, eightSel, 
nineSel, tenSel, elevSel, twelSel, thirtSel, fourtSel, fiftSel, sixtSel;

let faceMatch, triangleMatch, squareMatch, circleMatch, xMatch, ringMatch, houseMatch, pinkMatch;

function preload()
{
    img = loadImage('assets/orange.jpg');
}

function setup() 
{
    createCanvas(375, 667);
    randomOne = 0;
    matches = 0;

    faceMatch = false;
    triangleMatch = false;
    squareMatch = false;
    circleMatch = false;
    xMatch = false;
    ringMatch = false;
    houseMatch = false;
    pinkMatch = false;

    yc1 = 207; 
    yc2 = 207; 
    yc3 = 207; 
    yc4 = 207;
    xc1 = 41; 
    xc2 = 41 + 80;
    xc3 = 41 + 80 + 80;
    xc4 = 41 + 80 + 80 + 80;

    yc5 = 207 + 80; 
    yc6 = 207 + 80; 
    yc7 = 207 + 80; 
    yc8 = 207 + 80;
    xc5 = 41; 
    xc6 = 41 + 80;
    xc7 = 41 + 80 + 80;
    xc8 = 41 + 80 + 80 + 80;

    yc9 = 207 + 80 + 80; 
    yc10 = 207 + 80 + 80; 
    yc11 = 207 + 80 + 80; 
    yc12 = 207 + 80 + 80;
    xc9 = 41; 
    xc10 = 41 + 80;
    xc11 = 41 + 80 + 80;
    xc12 = 41 + 80 + 80 + 80;

    yc13 = 207 + 80 + 80 + 80; 
    yc14 = 207 + 80 + 80 + 80; 
    yc15 = 207 + 80 + 80 + 80; 
    yc16 = 207 + 80 + 80 + 80;
    xc13 = 41; 
    xc14 = 41 + 80;
    xc15 = 41 + 80 + 80;
    xc16 = 41 + 80 + 80 + 80;

    oneSel = false;
    twoSel = false;
    threeSel = false;
    fourSel = false;
    fiveSel = false;
    sixSel = false;
    sevenSel = false;
    eightSel = false;
    nineSel = false;
    tenSel = false;
    elevSel = false;
    twelSel = false;
    thirtSel = false;
    fourtSel = false;
    fiftSel = false;
    sixtSel  = false;

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

    covers();
    matcher();
    progressBar();
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
    fill(255);
    textSize(32);
    text(matches + '/8', 39, 608);

    console.log(oneSel + ", " + tenSel);

    stroke(255);
    noFill();
    rect(135, 581, 200, 32);

    fill(255);
    switch(randomOne)
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
            noStroke();
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
            noStroke();
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
            noStroke();
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
            noStroke();
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
            noStroke();
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

function covers()
{
    square(xc1, yc1, 50);
    square(xc2, yc2, 50);
    square(xc3, yc3, 50);
    square(xc4, yc4, 50);
    square(xc5, yc5, 50);
    square(xc6, yc6, 50);
    square(xc7, yc7, 50);
    square(xc8, yc8, 50);
    square(xc9, yc9, 50);
    square(xc10, yc10, 50);
    square(xc11, yc11, 50);
    square(xc12, yc12, 50);
    square(xc13, yc13, 50);
    square(xc14, yc14, 50);
    square(xc15, yc15, 50);
    square(xc16, yc16, 50);
}

function mousePressed()
{
    
    if(dist(mouseX, mouseY, xc1 + 25, yc1 + 25) < 25)
    {
        oneSel = true;
    }
    if(dist(mouseX, mouseY, xc2 + 25, yc2 + 25) < 25)
    {
        twoSel = true;
    }
    if(dist(mouseX, mouseY, xc3 + 25, yc3 + 25) < 25)
    {
        threeSel = true;
    }
    if(dist(mouseX, mouseY, xc4 + 25, yc4 + 25) < 25)
    {
        fourSel = true;
    }
    if(dist(mouseX, mouseY, xc5 + 25, yc5 + 25) < 25)
    {
        fiveSel = true;
    }
    if(dist(mouseX, mouseY, xc6 + 25, yc6 + 25) < 25)
    {
        sixSel = true;
    }
    if(dist(mouseX, mouseY, xc7 + 25, yc7 + 25) < 25)
    {
        sevenSel = true;
    }
    if(dist(mouseX, mouseY, xc8 + 25, yc8 + 25) < 25)
    {
        eightSel = true;
    }
    if(dist(mouseX, mouseY, xc9 + 25, yc9 + 25) < 25)
    {
        nineSel = true;
    }
    if(dist(mouseX, mouseY, xc10 + 25, yc10 + 25) < 25)
    {
        tenSel = true;
    }
    if(dist(mouseX, mouseY, xc11 + 25, yc11 + 25) < 25)
    {
        elevSel = true;
    }
    if(dist(mouseX, mouseY, xc12 + 25, yc12 + 25) < 25)
    {
        twelSel = true;
    }
    if(dist(mouseX, mouseY, xc13 + 25, yc13 + 25) < 25)
    {
        thirtSel = true;
    }
    if(dist(mouseX, mouseY, xc14 + 25, yc14 + 25) < 25)
    {
        fourtSel = true;
    }
    if(dist(mouseX, mouseY, xc15 + 25, yc15 + 25) < 25)
    {
        fiftSel = true;
    }
    if(dist(mouseX, mouseY, xc16 + 25, yc16 + 25) < 25)
    {
        sixtSel = true; 
    }

    switch(randomOne)
    {
        case 0:
            if(oneSel && tenSel)
            {
                faceMatch = true;
            }
            else if(twoSel && twelSel)
            {
               triangleMatch = true;
            }
            else if(threeSel && eightSel)
            {
              circleMatch = true;
            }
            else if(fourSel && sixSel)
            {
                xMatch = true;
            }
            else if(fiveSel && sixtSel)
            {
                ringMatch = true;
            }
            else if(sevenSel && thirtSel)
            {
               pinkMatch = true;
            }
            else if(nineSel && fiftSel)
            {
                squareMatch = true;
            }
            else if(elevSel && fourtSel)
            {
                houseMatch = true;
            }
    }
}

function matcher()
{
    //Este código destapa las casillas

    if(oneSel)
    {
        xc1 = -900;
    }
    else if(oneSel = false)
    {
        xc1 = 41;
    }
    if(twoSel)
    {
        xc2 = -900;
    }
    else if(twoSel = false)
    {
        xc2 = 41+80;
    }
    if(threeSel)
    {
        xc3 = -900;
    }
    else if(threeSel = false)
    {
        xc3 = 41+80+80;
    }
    if(fourSel)
    {
        xc4 = -900;
    }
    else if(fourSel = false)
    {
        xc4 = 41 + 80 + 80 + 80;
    }
    if(fiveSel)
    {
        xc5 = -900;
    }
    else if(fiveSel = false)
    {
        xc5 = 41;
    }
    if(sixSel)
    {
        xc6 = -900;
    }
    else if(sixSel = false)
    {
        xc6 = 41 + 80;
    }
    if(sevenSel)
    {
        xc7 = -900;
    }
    else if(sevenSel = false)
    {
        xc7 = 41 + 80 + 80;
    }
    if(eightSel)
    {
        xc8 = -900;
    }
    else if(eightSel = false)
    {
        xc8 = 41 + 80 + 80 + 80;
    }
    if(nineSel)
    {
        xc9 = -900;
    }
    else if(nineSel = false)
    {
        xc9 = 41;
    }
    if(tenSel)
    {
        xc10 = -900;
    }
    else if(tenSel = false)
    {
        xc10 = 41 + 80;
    }
    if(elevSel)
    {
        xc11 = -900;
    }
    else if(elevSel = false)
    {
        xc11 = 41 + 80 + 80;
    }
    if(twelSel)
    {
        xc12 = -900;
    }
    else if(twelSel = false)
    {
        xc12 = 41 + 80 + 80 + 80;
    }
    if(thirtSel)
    {
        xc13 = -900;
    }
    else if(thirtSel = false)
    {
        xc13 = 41;
    }
    if(fourtSel)
    {
        xc14 = -900;
    }
    else if(fourtSel = false)
    {
        xc14 = 41 + 80;
    }
    if(fiftSel)
    {
        xc15 = -900;
    }
    else if(fiftSel = false)
    {
        xc15 = 41 + 80 + 80;
    }
    if(sixtSel)
    {
        xc16 = -900;
    }
    else if(sixtSel = false)
    {
        xc16 = 41 + 80 + 80 + 80;
    }
}

function progressBar()
{
    fill(255);

    //Barra de progreso

    switch(matches)
    {
        case 1:
            rect(136, 582, 25, 32);
            break;
        case 2:
            rect(136, 582, 50, 32);
            break;
        case 3:
            rect(136, 582, 75, 32);
            break;
        case 4:
            rect(136, 582, 100, 32);
            break;
        case 5:
            rect(136, 582, 125, 32);
            break;
        case 6:
            rect(136, 582, 150, 32);
            break;
        case 7:
            rect(136, 582, 175, 32);
            break;
        case 8:
            rect(136, 582, 200, 32);
            break;
        }
}