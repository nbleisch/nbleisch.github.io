    

      //init
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

    function animate(){
        requestAnimFrame(animate);
        var thisFrameFPS = 1000 / ((now=new Date) - lastUpdate);
          if (now!=lastUpdate){
          fps += (thisFrameFPS - fps) / 20;
           lastUpdate = now*1 -1;
        }
        
        render(context);
      }

      function render(context){
        //reset current canvas
        context.clearRect(0, 0, viewport.width, viewport.height);
        viewport.x = player.x - viewport.width/2; //- player.radius/2;
        viewport.y = player.y - viewport.height/2; //- player.radius;
        for (var i = 0; i < mapObjects.length; i++){
          drawObject(context, mapObjects[i]);
        }
        drawCursor(context, player);
      }

      function drawObject(context, object){
        context.beginPath();
        if(object.image != null && object.image.ready){
            if(object.moveDirection==null){
              drawSprite(object.image,object.x - viewport.x, object.y - viewport.y, (object.orientation - 90)*degreesToRadiant, 1, 0, 0, 46, 42);
            }else{
              drawSprite(object.image,object.x - viewport.x, object.y - viewport.y, (object.orientation - 90)*degreesToRadiant, 1, object.animationIndex * 48, 0, 46, 42);
            }
        }else{
          context.arc(object.x - viewport.x, object.y - viewport.y, object.radius, 0, 2 * Math.PI, false);
          context.fillStyle = object.color;
          context.fill();
          context.lineWidth = 1;
          context.strokeStyle = '#FFFFFF';
          context.stroke();
        }
      }

      function drawSprite(imageObject, x, y, rotation, scale, spriteLocationX, spriteLocationY, spriteWidth, spriteHeight){
        context.save();
        context.translate(x, y);
        context.rotate(rotation);
        context.scale(scale, scale);
        context.drawImage(imageObject, spriteLocationX, spriteLocationY, spriteWidth, spriteHeight, -spriteWidth/2, -spriteHeight/2, spriteWidth,spriteHeight);
        context.restore();
      }


      function drawCursor(context, object){
        context.beginPath();
        //render cursor
        lineX1 = object.x - viewport.x //+ Math.cos(Math.PI/180 * object.orientation)*object.radius ;
        lineY1 = object.y - viewport.y; //+ Math.sin(Math.PI/180 * object.orientation)*object.radius ;
        context.strokeStyle = "#FF0000";
        context.moveTo(lineX1,lineY1);
        context.lineTo(mousePos.x, mousePos.y);
        context.arc(mousePos.x, mousePos.y,5, 0, 2 * Math.PI, false);
        context.stroke();
      }