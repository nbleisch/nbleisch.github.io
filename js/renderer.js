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
        context.clearRect(0, 0, canvas.width, canvas.height);
        //for (var mapObject in mapObjects){
          drawObject(context, player);
          drawObject(context, staticObject1);
        //}
        drawCursor(context, player);
      }

      function drawObject(context, object){
        context.beginPath();
        context.arc(object.x, object.y, object.radius, 0, 2 * Math.PI, false);
        context.fillStyle = object.color;
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = '#FFFFFF';
        context.stroke();
      }

      function drawCursor(context, object){
        context.beginPath();
        //render cursor
        lineX1 = object.x + Math.cos(Math.PI/180 * object.orientation)*object.radius;
        lineY1 = object.y + Math.sin(Math.PI/180 * object.orientation)*object.radius;
        context.moveTo(lineX1,lineY1);
        context.lineTo(mousePos.x, mousePos.y);
        context.arc(mousePos.x, mousePos.y,5, 0, 2 * Math.PI, false);
        context.stroke();
      }