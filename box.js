class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false,
          resitution:0.5,
          friction:0.5,
          density:1.2
         
      }
      this.Visiblity=255;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      
      if(this.body.speed<4){
        rectMode(CENTER);
        fill(random(0,255),random(0,255),random(0,255));
         rect(pos.x, pos.y, this.width, this.height);
      }else{
        push();
  this.Visiblity=this.Visiblity-5;
  pop();
  World.remove(world,this.body)
      }
    }
    score(){
      if(this.Visiblity<0 && this.Visiblity>-105){
        score=score+1;
        
      }
    }
  };