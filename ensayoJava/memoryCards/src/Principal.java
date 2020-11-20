import processing.core.PApplet;

public class Principal extends PApplet
{

	public static void main(String[] args) 
	{
		PApplet.main("Principal");
	}
	
	@Override
	public void settings() //void Awake
	{
		size(375, 667);
	}
	
	resetButton resetButton;
	counter counter;
	
	@Override
	public void setup() //void Start
	{
		resetButton = new resetButton(302, 32);
		counter = new counter(16, 52);
	}
	
	@Override
	public void draw() //void Update
	{		
		background(255);
		System.out.println(mouseX + ", " + mouseY);
		
		noFill();
		
		stroke(0);

		for(int x = 17; x < 500; x += 95)
		{
			for(int y = 200; y < 650; y += 120)
			{
				square(x, y, 60);
			}
		}
		
		resetButton.paint(this);
		counter.paint(this);
	}

}
