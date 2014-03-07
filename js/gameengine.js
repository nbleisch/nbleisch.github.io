
	function GameEngine(){
		var self = this;
		this.start = function(){
			setInterval(function(){self.doNextStep();}, 50);
		}

		this.doNextStep = function(){
		  for (var i = 0; i < mapObjects.length; i++){         
		      if(mapObjects[i].moveDirection!=null){
		      	var movementDeltaX=0;
			  	var movementDeltaY=0;

		      	if(mapObjects[i].moveDirection == "forward"){
		        	movementDeltaX += Math.cos(Math.PI/180 * mapObjects[i].orientation)*mapObjects[i].velocity;
		        	movementDeltaY += Math.sin(Math.PI/180 * mapObjects[i].orientation)*mapObjects[i].velocity;
		    	}else if(mapObjects[i].moveDirection == "backward"){
		        	movementDeltaX -= Math.cos(Math.PI/180 * mapObjects[i].orientation)*mapObjects[i].velocity;
		        	movementDeltaY -= Math.sin(Math.PI/180 * mapObjects[i].orientation)*mapObjects[i].velocity;
		    	}else if(mapObjects[i].moveDirection == "left"){
		        	movementDeltaX += Math.cos(Math.PI/180 * (mapObjects[i].orientation - 90))*mapObjects[i].velocity;
		        	movementDeltaY += Math.sin(Math.PI/180 * (mapObjects[i].orientation - 90))*mapObjects[i].velocity;
		    	}else if(mapObjects[i].moveDirection == "right"){
		        	movementDeltaX += Math.cos(Math.PI/180 * (mapObjects[i].orientation + 90))*mapObjects[i].velocity;
		        	movementDeltaY += Math.sin(Math.PI/180 * (mapObjects[i].orientation + 90))*mapObjects[i].velocity;
		    	}
		    	var nextPositionX = mapObjects[i].x + movementDeltaX;
		    	var nextPositionY = mapObjects[i].y + movementDeltaY;
		    	//lets do some collision detection
		    	var isCollided = false;
		    	for (var j = 0; j < mapObjects.length; j++){
		    		if(i!=j){
		    			var dx = nextPositionX - mapObjects[j].x;
		    			var dy = nextPositionY - mapObjects[j].y;
		    			var combinedRadius = (mapObjects[i].radius + mapObjects[j].radius);
		    			//optimized pythagoras
		    			if(((dx * dx) + (dy * dy)) < (combinedRadius * combinedRadius)){
		    				isCollided=true;
		    			}
		    		}
		    	}
		    	if(!isCollided){
		    		mapObjects[i].x = nextPositionX;
		    		mapObjects[i].y = nextPositionY;
		    	}
		       }
	        }
	    }
	}


