class Caja {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 30;
    this.vel = random(1, 3);
  }
  mover() {
    this.y += this.vel;
    if (this.y > height + this.h) {
      this.y = (-100 -1000);
      this.x = random(10, width - 10);
    } }
  mostrar() {
    fill(255, 0, 0);
    image(caja,this.x, this.y, this.w, this.h);
  }}
