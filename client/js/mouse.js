import * as THREE from "./three.module.js.js"
import App from "./app.js.js";

class Mouse {
	
	static init() {
		
		// item format: [pos0, ... , pos_length] [x, y, time]
		Mouse.path = [];		
		Mouse.max_path_length = 10;

		// item format: [x, y, time]
		Mouse.pos = []; 		
		Mouse.coords = new THREE.Vector2( -1.1, -1.1 );
		
		Mouse.dx = 0;
		Mouse.dy = 0;

		Mouse.mdx = 0;
		Mouse.mdy = 0;

		Mouse.buttons = [0, 0, 0];
		
		Mouse._wheel = 0;
		Mouse.wheel = 0;

		document.addEventListener("mousemove", Mouse.onmove.bind(this));
		document.addEventListener("mousedown", Mouse.ondown.bind(this));
		document.addEventListener("mouseup", Mouse.onup.bind(this));
		document.addEventListener("mousewheel", Mouse.onwheel.bind(this));
		document.addEventListener("click", Mouse.onclick.bind(this));
	}
	
	static update() {
		if(Math.abs(Mouse.mdx) > 1) Mouse.mdx /= 2; else Mouse.mdx = 0;
		if(Math.abs(Mouse.mdy) > 1) Mouse.mdy /= 2; else Mouse.mdy = 0;
		if(Math.abs(Mouse.wheel) > 0.5) Mouse.wheel /= 1.1; else Mouse.wheel = 0;
	}

	static onmove( event ) {
		
		Mouse.coords.set( 
			+(event.clientX / window.innerWidth) * 2 - 1, 
			-(event.clientY / window.innerHeight) * 2 + 1
		);

		Mouse.pos = [event.clientX, event.clientY, Date.now()];
		Mouse.path.push(Mouse.pos);
		
		let len = Mouse.path.length;
		if(len > 1) { 
			Mouse.dx = Mouse.path[len - 1][0] - Mouse.path[len - 2][0]; 
			Mouse.dy = Mouse.path[len - 1][1] - Mouse.path[len - 2][1]; 
			
			Mouse.mdx = (Mouse.mdx + Mouse.dx) / 2;
			Mouse.mdy = (Mouse.mdy + Mouse.dy) / 2;
		}

		if(len > Mouse.max_path_length) Mouse.path.shift();
	}

	static ondown( event ) {
		Mouse.buttons[event.button] = 1;
	}

	static onup( event ) {
		Mouse.buttons[event.button] = 0;
	}

	static onwheel( event ) {
		let d = event.wheelDelta / 120;
		if(Mouse._wheel * d < 0) Mouse.wheel = 0;
		Mouse._wheel = Mouse.wheel;
		Mouse.wheel += d;
	}

	static onclick( event ) {
		
	}
}

export default Mouse;


