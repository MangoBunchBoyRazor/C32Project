class Box extends BaseClass {
  constructor(x, y, width, height, color){
    super(x,y,width,height);
    this.color = color || random(0,255);
  }
  display(){
    push();
    colorMode(HSB);
    fill(this.color,100,100);
    super.display();
    pop();
  }
};
