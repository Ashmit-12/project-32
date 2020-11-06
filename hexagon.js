class Hexagone {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
          restitution: 0,
          friction:1,
          density:1.2
      }
      
      this.radius=radius;
      this.image=loadImage("download.png");
   this.body = Bodies.circle(x,y,radius,options);    
      World.add(world,this.body);

    }
    display(){
      var pos =this.body.position;
      fill(230,180,197);
  imageMode(CENTER);
  image(this.image,pos.x,pos.y,this.radius,this.radius);
  
}

  };
 