class Card
{
    constructor(x, y, images, type)
    {
        this.x = x;
        this.y = y;
        this.type = type;
        this.img = images[type];
        this.completed = false;
        this.show = false;
    }

    display()
    {
        if(!this.completed)
        {
            if(!this.show)
            {
                stroke(0);
                strokeWeight(3);
                noFill();
                square(this.x, this.y, 50);
            }
            else
            {
                image(this.img, this.x, this.y);
            }
        }
        else
        {
            image(this.img, this.x, this.y);
        }
    }

    validate(dx, dy)
    {
        let result = false;
        if(dx > this.x && dx < this.x + 50 && dy > this.y && dy < this.y + 50 && !this.show && !this.completed)
        {
            return true;
        }

        return result;
    }

    getType()
    {
        return this.type;
    }

    getCompleted()
    {
        return this.completed;
    }

    getShow()
    {
        return this.show;
    }

    setCompleted(completed)
    {
        this.completed = completed;
    }

    setShow(show)
    {
        this.show = show;
    }
}