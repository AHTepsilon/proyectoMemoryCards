function setup() 
{
    createCanvas(375, 667);
}

function draw()
{
    background(70);
    console.log(mouseX + ", " + mouseY);
    noFill();
    stroke(255);

    cards();
    resetButton();
    counter();

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

/*class resetButton
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    paint()
    {
        square(x, y, 60);
    }
}*/

/*class Cards
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    paint()
    {
        square(x, y, 60);
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
}*/

