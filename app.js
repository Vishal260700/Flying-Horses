let spritesheet;
let spritedata;

let animation = [];

let horses = [];

function preload() {
  spritedata = loadJSON('horse.json');
  spritesheet = loadImage('horse.png');
}


function setup() {
  createCanvas(1520, 700);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for (let i = 0; i < 8; i++) {
    horses[i] = new Sprite(animation, 0, i * 75, random(0.2, 0.5));
  }
}

function draw() {
  background(0);

  for (let horse of horses) {
    horse.show();
    horse.animate();
  }

}