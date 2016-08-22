var __runningScript = true;

(function(){
  let canvas = document.getElementById("game_canvas");
  let canvasContext = canvas.getContext("2d");

  let keyPressed = (function(){
    let keys = new Array(256);
    function isValidKey(idx){
      return (typeof idx === "number" && idx>=0 && idx<256);
    }
    function getKey(idx){
      if(isValidKey(idx)){
        return keys[idx] || false;
      }
    }
    function setKeyDown(idx){
      if(isValidKey(idx)){
        keys[idx] = true;
        console.log('key ' + idx + ' down');
      }
    }
    function setKeyUp(idx){
      if(isValidKey(idx)){
        keys[idx] = false;
        console.log('key ' + idx + ' up');
      }
    }
    return{
      get : getKey,
      setKeyDown : setKeyDown,
      setKeyUp : setKeyUp
    }
  })();

  document.onkeydown = function(e){
    e.preventDefault();
    keyPressed.setKeyDown(e.keyCode);
  }

  document.onkeyup = function(e){
    e.preventDefault();
    keyPressed.setKeyUp(e.keyCode);
  }

})();
