let images = [];
let cards = [];
let cardOneRef = null;
let cardTwoRef = null;
let activated = true;

function preload()
{
	let ind = 1;
	for(let i = 0; i < 8; i++)
	{
		images[i] = loadImage("images/china" + ind + ".png");
		ind++;
	}
}

function reset()
{
	let cardType = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7];
	shuffle(cardType, true);
	let tempX = 25;
	let tempY = 75;

	for(let i = 0; i < 16; i++)
	{
		cards[i] = new Card(10 + tempX, 10 + tempY, images, cardType[i]);
		tempX += 60;

		if(tempX >= 225)
		{
			tempX = 25;
			tempY += 60;
		}
	}

}

function setup() 
{
	createCanvas(310, 600);
	reset();
}

function draw()
{
	background(100);

	cards.forEach((card) => 
	{
		card.display();
	});
	validateSelectedCardsType();
}

function validateSelectedCardsType()
{
	if(cardOneRef !== null && cardTwoRef !== null)
	{
		if(cardOneRef.getType() === cardTwoRef.getType())
		{
			completeSelectedCards();
		}
		else
		{
			resetSelectedCards();
		}
	}
}

function completeSelectedCards()
{
	activated = false;
	setTimeout(() => 
	{
		cardOneRef.setShow(true);
		cardTwoRef.setShow(true);
		cardOneRef.setCompleted(true);
		cardTwoRef.setCompleted(true);
		cardOneRef = null;
		cardTwoRef = null;
		activated = true;
	}, 400);
}

function resetSelectedCards()
{
	activated = false;
	setTimeout(() => 
	{
		cardOneRef.setShow(false);
		cardTwoRef.setShow(false);
		cardOneRef.setCompleted(false);
		cardTwoRef.setCompleted(false);
		cardOneRef = null;
		cardTwoRef = null;
		activated = true;
	}, 400);
}

function mousePressed()
{
	if(activated)
	{
		cards.forEach((card) =>
		{
			if(card.validate(mouseX, mouseY))
			{
				if(cardOneRef == null)
				{
					cardOneRef = card;
					card.setShow(true);
					return true;
				}
				else if(cardTwoRef === null && card !== cardOneRef)
				{
					cardTwoRef = card;
					card.setShow(true);
					return true;
				}
			}
		})
	}
}
