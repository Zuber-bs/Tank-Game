// Cannon
var cannon;

// Shootable
var shootable = true;

// Enemy
var enemies = [];

// Score
var score = 0;

// Bullet
var bullets = [];
var bulletState = "ready";

function setup() {
	createCanvas(800, 600);

	cannon = new Cannon(width/2, height - 40, 10, 200, 0);

	for(var i = 0; i < 20; i++) {
		enemies.push(new Enemy(random(0, width-20), random(-20, -2000), 20, 20, 1));
	}
}

function draw() {
	background(100, 200, 255);
	rectMode(CENTER);

	text("Score: " + score, 700, 100);

	// Cannon
	cannon.display();
	cannon.keyBind();

	// Ground
	fill(0, 255, 0);
	rect(width/2, height - 20, width, 40);

	// Ship
	fill(0, 100, 0);
	arc(width/2, height - 40, 100, 100, PI, 0);

	// Bullet

	for(var i = 0; i < bullets.length; i++) {
		bullets[i].display();

		for(var j = 0; j < enemies.length; j++) {
			if(enemies[j].x < bullets[i].x + bullets[i].w &&
				enemies[j].x + enemies[j].w > bullets[i].x &&
				enemies[j].y < bullets[i].y + bullets[i].h &&
				enemies[j].y + enemies[j].h > bullets[i].y) {
				enemies.splice(j, 1);
				score++;
			} 
		}

		if(keyCode === 32 && bulletState === "ready" && shootable === true) {
			bullets[i].a = cannon.a
			prev = cannon.a
			bulletState = "fire";
		}

		if(bulletState === "fire") {
			shootable = false;
			bullets[i].a = prev;
			bullets[i].shoot();
			bulletState = "ready";
		}

		if(bullets[i].isOffScreen()) {
			shootable = true;
		}
	}

	// Enemy
	for(var i = 0; i < enemies.length; i++) {
		enemies[i].display();
		if(enemies[i].y > height) {
			console.log("Game OVER >:)");
			textSize(32);
			text("GAME OVER HA HA", width/2, height/2);
			noLoop();
		}
	}

	

	if(score === 20) {
		console.log("You win... :(");
		textSize(32);
		text("You win... :(", width/2, height/2);
		noLoop();
	}
}

function keyPressed() {

	if(shootable) {
		if(keyCode === 32 && bulletState === "ready" && shootable === true) {
			bullets.push(new Bullet(cannon.x, cannon.y, 10, 20));
		}
	}
}