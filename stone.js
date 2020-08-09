class Stone{
    constructor(x,y,width,radius){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);

        this.image=loadImage("stone.png");
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        imageMode(CENTER);
        
        image(this.body.position.x,this.body.position.y,50,50);
        pop();
        
    }



        
    }
