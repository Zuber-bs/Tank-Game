class Bullet {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.a = 0;
		this.xspeed = 0;
		this.yspeed = 0;
	}

	display() {
		this.x += this.xspeed;
		this.y += this.yspeed;

		push();
		translate(this.x, this.y);
		rotate(this.a);
		fill(0);
		rect(0, -100, this.w, this.h);
		pop();
	}

	isOffScreen() {
		if(this.x > width || this.x < 0 || this.y < 0) {
			return true;
		}
	}

	shoot() {
		this.xspeed = sin(this.a) * 20;
		this.yspeed = -cos(this.a) * 20;
	}
}