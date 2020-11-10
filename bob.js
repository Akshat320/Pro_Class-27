class Bob{

    constructor (x,y,radius)
    {
    var options = 
    {   isStatic: false,
        restitution: 0.7,
        friction: 0.5,
        density: 1.2
        

    }

    this.body = Bodies.circle(x, y, radius, options);
    this.body.radius = radius;
    
    World.add(world, this.body);
    }

    
  fly()
  {
      this.body.bodyA = null;
  }
    
    display()
    {
       
        fill("blue");
       // this.body.position.x = mouseX;
        //this.body.position.y = mouseY;

        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}