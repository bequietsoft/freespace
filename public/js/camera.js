import App from "./app.js";

class Camera extends App.THREE.PerspectiveCamera {

	constructor(scene, distance, rotation) { //, helpers) {
		
		super(App.fov, window.innerWidth / window.innerHeight, App.near, App.far);
		
		this.root = new THREE.Object3D();
		this.target = new THREE.Object3D();
		
		this.root.add( this.target );
		this.target.add( this );
		
		this.position.x = -distance;
		this.target.rotateZ( rotation.z ); 

		scene.add( this.root );
		
		// if( helpers ) {
		// 	this.root.add( helper( 0.25, 0.25, 0.25, 'red') );
		// 	this.target.add( helper( 0.251, 0.251, 0.251, 'green') );
		// }
	}

	// update() {
		
	// 	//App.camera.root.position.set( object.position.x, object.position.y, object.position.z );
	// 	//App.camera.root.rotation.set( object.rotation.x, object.rotation.y, object.rotation.z );

	// 	//let tp = AV( object.position, App.camera.target.position );
	// 	//App.camera.lookAt( tp.x, tp.y, tp.z );
	// }
}

export default Camera;