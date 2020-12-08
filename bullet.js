class Bullet{
constructor(x,y,width,angle){
    var options={
'friction':0.8,
'density':1.8,
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}
display(){
var angle = this.body.angle;
push();
translate(this.body.position.x,this.body.position.y);
rotate(angle);
imageMode(CENTER);
image(this.image,0,0,this.width,this,height);
pop();





}


}