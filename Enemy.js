class Enemy {
	constructor(x, y, w, h, yspeed) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.yspeed = yspeed;
	}

	display() {
		this.y += this.yspeed;

		rect(this.x, this.y, this.w, this.h);
	}
}