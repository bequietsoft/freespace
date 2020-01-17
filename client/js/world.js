import * as THREE from "./three.module.js"
import App from "./app.js";
import Material from "./material.js";
import Vector from "./vector.js";
import Craft from "./craft.js";

class World {
	
	static init() {
		
		//console.log(" test = " + App.test);
		
		App.scene = new THREE.Scene();
		App.scene.background = new THREE.Color(App.ground_color);
		App.scene.fog = new THREE.Fog(App.fog_color, App.far * App.fog, App.far);
		
		//App.light00 = new THREE.AmbientLight(App.ambient_color, 0.005);

		App.light01 = new THREE.DirectionalLight(0xffffff, 1);
		App.light01.position.set(0, 1, 0);
		//App.light01.lookAt(0,0,0);
		//App.light01.castShadow = true;
		App.light01.shadow.mapSize.width = App.shadow_map_size;
		App.light01.shadow.mapSize.height = App.shadow_map_size;
		App.light01.shadow.camera.left = -App.shadow_camera_size / 2;
		App.light01.shadow.camera.bottom = -App.shadow_camera_size / 2;
		App.light01.shadow.camera.right = App.shadow_camera_size / 2;
		App.light01.shadow.camera.top = App.shadow_camera_size / 2;
		App.light01.shadow.camera.near = App.near;    
		App.light01.shadow.camera.far = App.far;

		App.world = new THREE.Object3D();
			var geometry = new THREE.PlaneBufferGeometry(1, 1);
			var planeMaterial = new THREE.MeshPhongMaterial();
				planeMaterial.color = App.ground_color;
				planeMaterial.side = THREE.DoubleSide;
			var ground = new THREE.Mesh(geometry, planeMaterial);
				ground.name = 'ground';
				ground.position.set(0, 0, 0);
				ground.rotation.x = - Math.PI/2;
				ground.scale.set(5, 5, 1);
				ground.castShadow = false;
				ground.receiveShadow = true;
		App.world.add(ground);
		
		App.camera = new THREE.PerspectiveCamera();
			App.camera.root = new THREE.Object3D();
			App.camera.target = new THREE.Object3D();
			App.camera.root.add(App.camera.target);
			App.camera.target.add(App.camera);
			App.camera.position.x -= 10;
			//App.camera.position.z += 5;
			// App.camera.root.rotateY(Math.PI/);
			App.camera.target.rotateZ(-Math.PI/2); 
			App.camera.lookAt(App.camera.root.position);

		App.scene.add(App.camera.root);
		//App.scene.add(App.light00);
		App.scene.add(App.light01);
		App.scene.add(App.world);	
		
		//World.helpers();
		//World.demo_scene_00();
	}

	static demo_scene_01() {
		var m = Material.create("standard", "red");
		App.scene.add(Craft.box(1, 1, 1, Vector.create(1, 0.5, 1), Vector.zero, m, true));
		App.scene.add(Craft.sphere(0.1, Vector.create(0, 0.05, 0), Vector.zero, m, true, 32));
	}

	static demo_scene_00() {
		var wm = Material.create("standard", "white");
		App.scene.add(Craft.box(4, 0.1, 4, Vector.create(0, 0.005, 0), Vector.zero, wm, true));
	}

	static helpers() {
		Craft.helper();
		App.world.add(Craft.helper( {color:0x00ff00} ));
		App.camera.root.add(Craft.helper(0.5, 0.5, 0.5, "green"));
		App.camera.target.add(Craft.helper(0.5, 0.5, 0.5, "red"));
	}

}

export default World;
