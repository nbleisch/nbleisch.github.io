
	function GameEngine(){
		var self = this;
		this.start = function(){
			setInterval(function(){self.doNextStep();}, 50);
		}

		this.doNextStep = function(){
	      if(player.moveDirection!=null){
	      	if(player.moveDirection == "forward"){
	        	player.x += Math.cos(Math.PI/180 * player.orientation)*player.velocity;
	        	player.y += Math.sin(Math.PI/180 * player.orientation)*player.velocity;
	    	}else if(player.moveDirection == "backward"){
	        	player.x -= Math.cos(Math.PI/180 * player.orientation)*player.velocity;
	        	player.y -= Math.sin(Math.PI/180 * player.orientation)*player.velocity;
	    	}else if(player.moveDirection == "left"){
	        	player.x += Math.cos(Math.PI/180 * (player.orientation - 90))*player.velocity;
	        	player.y += Math.sin(Math.PI/180 * (player.orientation - 90))*player.velocity;
	    	}else if(player.moveDirection == "right"){
	        	player.x += Math.cos(Math.PI/180 * (player.orientation + 90))*player.velocity;
	        	player.y += Math.sin(Math.PI/180 * (player.orientation + 90))*player.velocity;
	    	}
	       }
	    }
	}


