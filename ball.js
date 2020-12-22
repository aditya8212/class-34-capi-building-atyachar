class BALL{
    constructor(){
        var opti={
            density:2

        }

        this.body = Bodies.circle(300,300,30,opti);
        this.radius = 30;
        
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position

        push();
        translate(pos.x,pos.y);
        fill("gold");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();

    }

 }