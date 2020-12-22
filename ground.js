 class Ground{
    constructor(){
        var opti={
            isStatic:true


        }

        this.body = Bodies.rectangle(400,395,800,10,opti);
        this.width = 800;
        this.height = 10;

        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position

        fill("yellow");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);


    }

 }