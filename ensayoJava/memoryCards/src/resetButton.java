import processing.core.PApplet;

public class resetButton 
{
	int x;
	int y;
	
	public resetButton(int x, int y)
	{
		this.x = x;
		this.y = y;
	}
	
	public void paint(PApplet app)
	{
		app.square(x, y, 60);
	}
}
