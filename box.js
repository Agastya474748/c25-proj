class Box{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.image= loadImage("dustbingreen.png")
        this.body= Bodies.rectangle(x,y,w,h,options)
        this.width=w
        this.height = h
        World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      imageMode(CENTER)
      image(this.image,pos.x,pos.y,this.width,this.height)
    }
    
    }