class Iron
{
	constructor(x,y)
	{
		var options={
			restitution:0.8,
			friction:3,
			density:30
			
			}
		this.body=Bodies.rectangle(x,y,50,50, options)
        this.width = 30;
        this.height = 50;
		World.add(world, this.body);

	}
	display()
	{
			
			var rubberpos=this.body.position;
			push();
			translate(rubberpos.x, rubberpos.y);
            rectMode(CENTER);
            strokeWeight(4);
            stroke("black")
            fill('darkblue')
            ellipse(0,0,this.r,this.r);
			pop();
			
	}

}