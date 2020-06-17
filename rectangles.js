class Rectangle{
    constructor(x,y,width,height){
      var options = {
       'friction':2,
       'density':1.0,
       'restitution':0.7
      } 
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        //push();
        //translate(pos.x,pos.y);
        //rotate(this.body.angle);
        rectMode(CENTER);
        rect(pos.x,pos.y, this.width,this.height);
        //pop();
    }
}