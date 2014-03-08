
	function GameEngine(){
		var self = this;
		this.start = function(){
			setInterval(function(){self.doNextStep();}, 50);
		}

		this.doNextStep = function(){
		  for (var i = 0; i < mapObjects.length; i++){
		  	var mapobject =  mapObjects[i];      
		      if(mapobject.moveDirection!=null){
		      	var movementDeltaX=0;
			  	var movementDeltaY=0;

		      	if(mapobject.moveDirection == "forward"){
		        	movementDeltaX += Math.cos(Math.PI/180 * mapobject.orientation)*mapobject.velocity;
		        	movementDeltaY += Math.sin(Math.PI/180 * mapobject.orientation)*mapobject.velocity;
		    	}else if(mapobject.moveDirection == "backward"){
		        	movementDeltaX -= Math.cos(Math.PI/180 * mapobject.orientation)*mapobject.velocity;
		        	movementDeltaY -= Math.sin(Math.PI/180 * mapobject.orientation)*mapobject.velocity;
		    	}else if(mapobject.moveDirection == "left"){
		        	movementDeltaX += Math.cos(Math.PI/180 * (mapobject.orientation - 90))*mapobject.velocity;
		        	movementDeltaY += Math.sin(Math.PI/180 * (mapobject.orientation - 90))*mapobject.velocity;
		    	}else if(mapobject.moveDirection == "right"){
		        	movementDeltaX += Math.cos(Math.PI/180 * (mapobject.orientation + 90))*mapobject.velocity;
		        	movementDeltaY += Math.sin(Math.PI/180 * (mapobject.orientation + 90))*mapobject.velocity;
		    	}
		    	var nextPositionX = mapobject.x + movementDeltaX;
		    	var nextPositionY = mapobject.y + movementDeltaY;
		    	//lets do some collision detection
		    	var isCollided = false;
		    	for (var j = 0; j < mapObjects.length; j++){
		    		if(i!=j){
		    			var dx = nextPositionX - mapObjects[j].x;
		    			var dy = nextPositionY - mapObjects[j].y;
		    			var combinedRadius = (mapobject.radius + mapObjects[j].radius);
		    			//optimized pythagoras
		    			if(((dx * dx) + (dy * dy)) < (combinedRadius * combinedRadius)){
		    				isCollided=true;
		    			}
		    		}
		    	}
		    	if(!isCollided){
		    		mapobject.x = nextPositionX;
		    		mapobject.y = nextPositionY;
		    	}
		       }
		       if(mapobject.orientation!=mapobject.targetedOrientation){
		       		var difference = mapobject.orientation-mapobject.targetedOrientation;
		       		if(Math.abs(difference)<= mapobject.rotationVelocity){
		       			mapobject.orientation=mapobject.targetedOrientation;
		       		}else{
		       			if((difference + 360)%360>180){
		       				mapobject.orientation+=mapobject.rotationVelocity;
		       			}else{
		       				mapobject.orientation-=mapobject.rotationVelocity;
		       			}
		       		}
		       		if(mapobject.orientation<0){
		       			mapobject.orientation = 360 + mapobject.orientation;
		       		}else if(mapobject.orientation>360){
		       			mapobject.orientation%=360;
		       		}
		       }
	        }
	    }
	}


