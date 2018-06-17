var num, pos, side;

var nums = [];

function setup() {
  createCanvas(10000,2000);
  background(51);
  num = 1;
  pos = 0;
  side = true;
  console.log("created by George Soteriou")
}

function draw(){
  noFill();
  stroke(255,255,255);
  // if(num > 100000){
    // noLoop();
  // }
  var lastPos = pos;
  nums.push(pos);
  if(pos - num > 0 && !nums.includes(pos-num)){
    pos -= num;
    if(side){
      arc((lastPos + pos) * 2 , 1000, (lastPos - pos) * 4 , (lastPos - pos) * 4 , 0, PI);
      side = false;
    }else{
      arc((lastPos + pos) * 2, 1000, (lastPos - pos) * 4 , (lastPos - pos) * 4 , PI, 0);
      side = true;
    }
  }else{
    pos += num;
    if(side){
      arc((lastPos + pos) * 2 , 1000, (pos - lastPos) * 4 , (pos - lastPos) * 4 , 0, PI);
      side = false;
    }else{
      arc((lastPos + pos) * 2 , 1000, (pos - lastPos) * 4 , (pos - lastPos) * 4 , PI, 0);
      side = true;
    }
  }  num++;
}