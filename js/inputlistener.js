  var isMoving=false;
  var mousePos = {
      x: 0,
      y: 0
  };


  function InputListener(){  
    var self = this;

    this.registerMouseListener = function(component){
      component.addEventListener('mousemove', function(event) {
        mousePos.x = event.clientX - $(component).offset().left;
        mousePos.y = event.clientY - $(component).offset().top;
        var a = (viewport.width/2 - mousePos.x);
        var b = (viewport.height/2 - mousePos.y);
        player.targetedOrientation = Math.abs(Math.atan(b / a) * radiantToDegrees);
        if(mousePos.x < (player.x - viewport.x)){
          player.targetedOrientation = Math.abs(180 - player.targetedOrientation);
        }
        if(mousePos.y < (player.y - viewport.y)){
          player.targetedOrientation = Math.abs(360 - player.targetedOrientation);
        }
      }, false);
    }

      window.addEventListener("keydown",onKeyDown);
      window.addEventListener("keyup",onKeyUp);

      function onKeyDown(e){
         if (e.keyCode == '87' || e.keyCode == '38') { //w and arrow up
          player.moveDirection ="forward";
        }else if(e.keyCode == '83' || e.keyCode == '40') { //s and arrow down
          player.moveDirection ="backward";
        }else if(e.keyCode == '65' || e.keyCode == '37') { //a and arrow left
          player.moveDirection ="left";
        }else if(e.keyCode == '68' || e.keyCode == '39') { //d and arrow right
          player.moveDirection ="right";
        }
      }

      function onKeyUp(e){
        player.moveDirection = null;
      }
}