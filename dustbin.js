class Dustbin
{
    constructor()
{
    var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2

        }



this.left= createSprite(490,620,20,120)

this.right= createSprite(690,620,20,120)
this.base= createSprite(585,680,217,20)

//left.shapeColor=right.shapeColor=base.shapeColor='cyan'
this.left1=Bodies.rectangle(490,620,20,120,options)
this.right1=Bodies.rectangle(690,620,20,120,options)
this.base1=Bodies.rectangle(585,680,217,20,options)

World.add(world,this.left1);
World.add(world,this.right1);
World.add(world,this.base1)
}
}
