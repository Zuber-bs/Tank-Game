class Cannon {
	constructor(x, y, w, h, a) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.a = a;
	}

	display() {
		push();
		translate(this.x, this.y);
		rotate(this.a);
		fill(0, 100, 0);
		rect(0, 0, this.w, this.h);
		pop();
	}

	keyBind() {
		if(this.a < 0.77) {
			if(keyCode === RIGHT_ARROW) {
				this.a += 0.05;
			}
		}

		if(this.a > -0.77) {
			if(keyCode === LEFT_ARROW) {
				this.a -= 0.05;
			}
		}

		return true;
	}
}