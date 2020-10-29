class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.Body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       this. visibility=255
        World.add(world, this.Body);
      }
      display(){
        
       
        if(this.Body.speed<2){
         rect(this.Body.position.x,this.Body.position.y,this.width,this.height)
      }
      else{
        World.remove(world,this.Body)
        push()
        this.visibility=this.visibility-50
        tint(255,this.visibility)
        
       
       
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
    }
      attach(body){
        this.sling.bodyA =body;
      }
      score(){
        if(this.visibility<0 && this.visibility>=-1000){
          score++
        }
      }
}