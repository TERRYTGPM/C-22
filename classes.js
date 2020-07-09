class Box{
    constructor(x, y, width, height){

        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }
    display(){
        rectMode(CENTER);
        //fill(255,0,0)
        rect(pos.x , pos.y , this.width, this.height, isStatic);
    }
}
