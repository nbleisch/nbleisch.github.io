GeometricType = {
    CIRCLE : 0,
    TRIANGLE : 1,
    COMPLEX : 2
}

function GameObject(){
	this.X = 0;
	this.Y = 0;
	this.geometricType = GeometricType.CIRCLE;
	this.color = "#FFFFFF";
	this.radius = 0;
	this.orientation = 0;
	this.targetedOrientation=0;
	this.rotationVelocity = 10; //degrees per tick
	this.velocity = 5; //units per tick
	this.moveDirection = null;
	this.image = null;
	this.animationIndex=0;
}
