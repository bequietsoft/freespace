import * as THREE from "./three.module.js"
import Material from "./material.js";
import Vector from "./vector.js";

class Craft {

	static helper(width=0.5, height=0.5, length=0.5, color=0xff0000) {
		let material = Material.create("wire", color, false);
		return Craft.box(width, height, length, Vector.zero, Vector.zero, material, false);
	}

	static box(width, height, length, position, rotation, material, shadow) {
		var geometry = new THREE.BoxGeometry(width, height, length);
		var mesh = new THREE.Mesh(geometry, material);
			mesh.position.set(position.x, position.y, position.z);
			mesh.rotation.set(rotation.x, rotation.y, rotation.z);
			mesh.castShadow = shadow;
			mesh.reciveShadow = shadow;
		return mesh;
	}

	static sphere(radius, position, rotation, material, shadow, devisions) {
		var geometry = new THREE.SphereBufferGeometry(radius, devisions, devisions);
		var mesh = new THREE.Mesh(geometry, material);
			mesh.position.set(position.x, position.y, position.z);
			mesh.rotation.set(rotation.x, rotation.y, rotation.z);
			mesh.castShadow = shadow;
			mesh.reciveShadow = shadow;
		return mesh;
	}

	// function plane(y, step, material, shadow = false) {
	// 	var geometry = new THREE.PlaneBufferGeometry(step * 10, step * 10, step, step);
	// 	var mesh = new THREE.Mesh(geometry, material);
	// 	mesh.rotation.x = - Math.PI / 2;
	// 	mesh.position.y = y;
	// 	mesh.receiveShadow = shadow;
	// 	return mesh;
	// }

	// function marker( position, color, size, div, visible ) {
	// 	let material = mat( 'basic', color );
	// 	let marker = sphere( size, position, V0, material, false, div );
	// 		marker.renderOrder = 999;
	// 		marker.visible = visible;
	// 		marker.onBeforeRender = function( renderer ) { renderer.clearDepth(); };
	// 	return marker;
	// }


}

export default Craft;
