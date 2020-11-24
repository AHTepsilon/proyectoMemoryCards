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
            break;
        case 1:
            rect(135, 581, 25, 32);
            break;
        case 2:
            rect(135, 581, 50, 32);
            break;
        case 3:
            rect(135, 581, 75, 32);
            break;
        case 4:
            rect(135, 581, 100, 32);
            break;
        case 5:
            rect(135, 581, 125, 32);
            break;
        case 6:
            rect(135, 581, 150, 32);
            break;
        case 7:
            rect(135, 581, 175, 32);
            break;
        case 8:
            rect(135, 581, 200, 32);
            break;
    }
}

function endGame()
{
    fill(255);
    rect(0, 0, 375, 667);
    textSize(32);
    fill(0);
    text("Time Out!", 145, 360);
}

function randomizer()
{
    noStroke();
    switch(randomOne)
    {
        case 0:
            fill(0, 255, 0);
            triangle(135, 241, 155, 241, 145, 221);
            triangle(295, 401, 315, 401, 305, 381);

            fill(0, 0, 255);
            circle(225, 230, 20);
            circle(225+80, 230+80, 20);

            fill(255, 0, 0);
            square(56, 221+80+80, 20);
            square(56+80+80, 221+80+80+80, 20);

            fill(255, 100, 0);
            circle(65, 230, 20);
            fill(0);
            circle(60, 225, 6);
            circle(70, 225, 6);
            stroke(0);
            line(60, 235, 70, 235); 
            noStroke();

            fill(255, 100, 0);
            circle(65+80, 230+80+80, 20);
            fill(0);
            circle(60+80, 225+80+80, 6);
            circle(70+80, 225+80+80, 6);
            stroke(0);
            line(60+80, 235+80+80, 70+80, 235+80+80); 
            noStroke();

            stroke(255, 75, 100);
            strokeWeight(3);
            line(292, 215, 319, 246);
            line(319, 215, 292, 246);
            line(292-80-80, 215+80, 319-80-80, 246+80);
            line(319-80-80, 215+80, 292-80-80, 246+80);

            break;
        case 1:
            fill(0, 255, 0);
            triangle(135, 241+80, 155, 241+80, 145, 221+80);
            triangle(135+80, 241+80+80+80, 155+80, 241+80+80+80, 145+80, 221+80+80+80);

            fill(0, 0, 255);
            circle(225, 230+80+80, 20);
            circle(225-80-80, 230+80+80+80, 20);
            
            fill(255, 0, 0);
            square(56, 221, 20);
            square(56+80, 221, 20);

            fill(255, 100, 0);
            circle(65+80+80+80, 230, 20);
            fill(0);
            circle(60+80+80+80, 225, 6);
            circle(70+80+80+80, 225, 6);
            stroke(0);
            line(60+80+80+80, 235, 70+80+80+80, 235); 
            noStroke();

            fill(255, 100, 0);
            circle(65+80+80+80, 230+80+80+80, 20);
            fill(0);
            circle(60+80+80+80, 225+80+80+80, 6);
            circle(70+80+80+80, 225+80+80+80, 6);
            stroke(0);
            line(60+80+80+80, 235+80+80+80, 70+80+80+80, 235+80+80+80); 
            noStroke();
    
            stroke(255, 75, 100);
            strokeWeight(3);
            line(292-80, 215+80, 319-80, 246+80);
            line(319-80, 215+80, 292-80, 246+80);
            line(292-80-80, 215+80+80+80, 319-80-80, 246+80+80+80);
            line(319-80-80, 215+80+80+80, 292-80-80, 246+80+80+80);

            break;
        case 2:
            fill(0, 255, 0);
            triangle(135-80, 241+80, 155-80, 241+80, 145-80, 221+80);
            triangle(135+80+80, 241+80+80+80, 155+80+80, 241+80+80+80, 145+80+80, 221+80+80+80);

            fill(0, 0, 255);
            circle(225-80, 230, 20);
            circle(225, 230+80+80+80, 20);

            fill(255, 0, 0);
            square(56+80+80, 221, 20);
            square(56+80+80+80, 221+80+80, 20);

            fill(255, 100, 0);
            circle(65, 230+80+80, 20);
            fill(0);
            circle(60, 225+80+80, 6);
            circle(70, 225+80+80, 6);
            stroke(0);
            line(60, 235+80+80, 70, 235+80+80); 
            noStroke();

            fill(255, 100, 0);
            circle(65+80+80, 230+80, 20);
            fill(0);
            circle(60+80+80, 225+80, 6);
            circle(70+80+80, 225+80, 6);
            stroke(0);
            line(60+80+80, 235+80, 70+80+80, 235+80); 
            noStroke();

            stroke(255, 75, 100);
            strokeWeight(3);
            line(292-80-80-80, 215, 319-80-80-80, 246);
            line(319-80-80-80, 215, 292-80-80-80, 246);
            line(292, 215+80, 319, 246+80);
            line(319, 215+80, 292, 246+80);

            break;
        case 3:
            fill(0, 255, 0);
            triangle(135+80+80, 241, 155+80+80, 241, 145+80+80, 221);
            triangle(135-80, 241+80+80+80, 155-80, 241+80+80+80, 145-80, 221+80+80+80);

            fill(0, 0, 255);
            circle(225-80, 230+80+80+80, 20);
            circle(225, 230+80+80, 20);

            fill(255, 0, 0);
            square(56, 221+80+80, 20);
            square(56+80+80, 221+80+80+80, 20);

            fill(255, 100, 0);
            circle(65, 230+80, 20);
            fill(0);
            circle(60, 225+80, 6);
            circle(70, 225+80, 6);
            stroke(0);
            line(60, 235+80, 70, 235+80); 
            noStroke();

            fill(255, 100, 0);
            circle(65+80+80+80, 230+80, 20);
            fill(0);
            circle(60+80+80+80, 225+80, 6);
            circle(70+80+80+80, 225+80, 6);
            stroke(0);
            line(60+80+80+80, 235+80, 70+80+80+80, 235+80); 
            noStroke();

            stroke(255, 75, 100);
            strokeWeight(3);
            line(292, 215+80+80, 319, 246+80+80);
            line(319, 215+80+80, 292, 246+80+80);
            line(292-80-80, 215+80+80, 319-80-80, 246+80+80);
            line(319-80-80, 215+80+80, 292-80-80, 246+80+80);
            break;
        case 4:
            fill(0, 255, 0);
            triangle(135+80, 241+80+80, 155+80, 241+80+80, 145+80, 221+80+80);
            triangle(135, 241+80+80, 155, 241+80+80, 145, 221+80+80);

            fill(0, 0, 255);
            circle(225-80-80, 230, 20);
            circle(225+80, 230+80+80, 20);

            fill(255, 0, 0);
            square(56, 221+80+80+80, 20);
            square(56+80+80, 221+80, 20);

            fill(255, 100, 0);
            circle(65+80+80, 230, 20);
            fill(0);
            circle(60+80+80, 225, 6);
            circle(70+80+80, 225, 6);
            stroke(0);
            line(60+80+80, 235, 70+80+80, 235); 
            noStroke();

            fill(255, 100, 0);
            circle(65+80, 230+80+80+80, 20);
            fill(0);
            circle(60+80, 225+80+80+80, 6);
            circle(70+80, 225+80+80+80, 6);
            stroke(0);
            line(60+80, 235+80+80+80, 70+80, 235+80+80+80); 
            noStroke();

            stroke(255, 75, 100);
            strokeWeight(3);
            line(292-80-80, 215, 319-80-80, 246);
            line(319-80-80, 215, 292-80-80, 246);
            line(292-80-80-80, 215+80, 319-80-80-80, 246+80);
            line(319-80-80-80, 215+80, 292-80-80-80, 246+80);
            break;
    }   
}
