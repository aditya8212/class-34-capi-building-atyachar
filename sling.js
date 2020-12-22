class SLING{
    constructor(bodyA,pointB){
        var op ={
            stiffness:0.4,
            length:250,
            bodyA : bodyA,
            pointB:pointB

        }

        this.consi = Constraint.create(op);
        this.pointB = pointB;
        World.add(world,this.consi)


    }

    display(){
        push();
        strokeWeight(4);
        stroke("aqua");
        line(this.consi.bodyA.position.x,this.consi.bodyA.position.y,this.pointB.x,this.pointB.y);
        pop();
    }

}