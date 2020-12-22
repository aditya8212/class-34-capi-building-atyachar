class BUILDING{
    constructor(x,y){
        var opti={
            density:0.4,
            restitution:0.8,
            friction:1

        }

        this.body = Bodies.rectangle(x,y,60,50,opti);
        this.width = 60;
        this.height = 50;

        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position

        
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);


    }

 }