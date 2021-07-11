class Rubber
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:5,
			density:1
			
			}
            this.x=x;
            this.y=y;
            this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var angle=this.body.angle;
			var pos=this.body.position;
            pos.x = mouseX;
            pos.y = mouseY;
			push();
			translate(pos.x, pos.y);
            rotate(angle);
            strokeWeight(3);
            stroke('white')
            fill('orange')
            ellipse(0,0,this.r,this.r);
			pop();
			
	}

}