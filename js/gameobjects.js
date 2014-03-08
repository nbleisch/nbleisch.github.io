function GameObject(){
	this.x = 0;
	this.y = 0;
	this.color = "#FFFFFF";
	this.radius = 0;
	this.orientation = 0;
	this.targetedOrientation=0;
	this.rotationVelocity = 10; //degrees per tick
	this.velocity = 5; //units per tick
	this.moveDirection = null;
	this.image = null;
}