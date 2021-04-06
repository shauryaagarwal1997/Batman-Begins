class Drops{
    constructor(x,y,radius){
        var options={
            friction:0.1
        }
        this.drop=Bodies.circle(x,y,radius,options)
        
        World.add(world,this.drop);

        this.radius=radius;
        this.rainDrops=[];

    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.drop.position.x,this.drop.position.y,this.radius,this.radius);

        var maxDrops=200;
        for(var i=0; i<maxDrops; i++){
            this.rainDropsrops.push(new createDrop(random(0,600),random(0,950)));

        }

    }
}