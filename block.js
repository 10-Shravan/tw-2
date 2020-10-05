class Block  {
    constructor(x, y, width, height){
      this.Visiblity = 255;
     
    }
  display(){
    if(this.body.speed < 3){
      this.Visiblity = 255;
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
    }
  
    attach(body){
      this.sling.bodyA = polygon;
  }
  };
  