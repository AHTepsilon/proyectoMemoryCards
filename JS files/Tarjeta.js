class Tarjeta 
{
    constructor(x , y, images, type)
    {
        this.x = x;
        this.y= y;
        this.images=images[type];
        this.type=type;
        this.show=false;
    }
    
    pintar () 
    {
        if (!this.show) 
        {
          fill(0);
          rect(this.x, this.y, 50, 50);
        } 
        
        else 
        {
          image(this.images, this.x, this.y);
        }
  
    }
}

