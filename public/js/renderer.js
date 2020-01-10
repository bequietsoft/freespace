import * as THREE from "./three.module.js.js"
import App from "./app.js.js";

export default class Renderer  {

	static init() {

		var renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.depth = App.far;
			renderer.setClearColor(App.ambient_color, 1);
			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.PCFShadowMap;
			renderer.shadowMapBias = 0.00001;
			renderer.shadowMapDarkness = 0.5;
			renderer.shadowMapWidth = 128;
			renderer.shadowMapHeight = 128;
			renderer.domElement.id = "canvas";
			renderer.setClearColor(App.ambient_color, 1);
			renderer.gammaInput = true;
			renderer.gammaOutput = true;
		
		document.body.appendChild(renderer.domElement);
		Renderer.instance = renderer;
	}

	static resize() {
		if(Renderer.width != window.innerWidth || Renderer.height != window.innerHeight) {
			Renderer.width = window.innerWidth;
			Renderer.height = window.innerHeight;
			Renderer.instance.setSize(Renderer.width, Renderer.height);
		}
	}

	static update() {
		Renderer.resize();
		Renderer.instance.clear();
		Renderer.instance.render(App.scene, App.camera);
	}
}


