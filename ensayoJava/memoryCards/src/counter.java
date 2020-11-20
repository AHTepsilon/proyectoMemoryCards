import processing.core.PApplet;

public class counter 
{
	int x;
	int y;
	int parNumber;
	
	public counter(int x, int y)
	{
		this.x = x;
		this.y = y;
		this.parNumber = 0;
	}
	
	public void paint(PApplet app)
	{
		app.fill(0);
		app.textSize(24);
		app.text(parNumber + "/8", x, y);
	}
}
