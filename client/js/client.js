import { log } from "./tools.js";
import * as THREE from "./three.module.js"
import Panel from "./panel.js";
import Renderer from "./renderer.js";
import World from "./world.js";
import Mouse from "./mouse.js";
import Keyboard from "./keyboard.js";

class App {
	
	static init() {
		
		// #region variables

			App.log = log;
			App.debug = true;
			App.shadows = true;
			App.smooth = 1;
			App.ambient_color = new THREE.Color("rgb(200, 200, 200)");
			App.fog_color = new THREE.Color("rgb(240, 240, 240)");
			App.ground_color = new THREE.Color("rgb(200, 200, 200)");
			App.light_color = new THREE.Color("rgb(255, 255, 255)");
			App.shadow_map_size = 1024;
			App.shadow_camera_size = 20;
			App.near = 0.1;
			App.fov = 50;
			App.far = 50;
			App.fog = 0.99;
			//App.auth = false;

		// #endregion

		//console.log(App.req("GET","/id", [ { name: "id", value: "?" } ], "data1"));

		
		Renderer.init(this);
		Panel.init();
		World.init();
		Mouse.init();
		Keyboard.init();

		App.UI = { Panel: Panel };

		App.onresize();
		App.update();
	}

	static req(method, url, headers, data, )
	{
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open(method, url, false);
		if(headers) headers.forEach(header => { xmlHttp.setRequestHeader(header.name, header.value)	}); 
		if(data) xmlHttp.send(data); else xmlHttp.send();
		return xmlHttp.responseText;
	}

	static onresize() {
		App.camera.aspect = window.innerWidth / window.innerHeight;
		App.camera.updateProjectionMatrix();
	}

	static onload() {
		log(document.URL);
		if(navigator.userAgent
			.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
			log("Mobile platform");
			document.addEventListener("deviceready", App.ondeviceready, false);
		} else {
			log("Browser platform");
			App.ondeviceready();
		}
	}

	static ondeviceready() {
		log("Device ready");
		App.init();
	}

	static update() {

		requestAnimationFrame(App.update);

		Mouse.update();
		
		App.camera.position.x += Mouse.wheel/10;
		if(Mouse.buttons[0]) {
			App.camera.root.rotation.y -= Mouse.dx/300;
			App.camera.target.rotation.z -= Mouse.dy/300;
		}
		
		Renderer.update();
	}
}

export default App;

window.addEventListener ( "resize", App.onresize );
window.addEventListener ( "load", App.onload );