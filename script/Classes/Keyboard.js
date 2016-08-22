class Keyboard{
  constructor(){
    this.key = new Array(256);
  }

  this.getKeyStatus = function(idx){
    return keys[idx] || false;
  }

  this.keyUp = function(idx){
    if(idx >= 0 && idx < 256){
      keys[idx] = true;
    }
  }

  this.keyDown = function(idx){
    if(idx >= 0 && idx < 256){
      keys[idx] = false;
    }
  }
}
