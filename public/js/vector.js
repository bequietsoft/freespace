import * as THREE from "./three.module.js.js"

class Vector {

	static PI = Math.PI;
	static wPI = 2 * Math.PI;
	static hPI = Math.PI / 2;
	static zero = new THREE.Vector3(0, 0, 0);
	
	// constructor(x = 0, y = 0, z = 0) {
	// 	return new THREE.Vector3(x, y, z);
	// }
	static create(x, y, z) {
		return new THREE.Vector3(x, y, z);
	}

	// turn source vector on rotation vector
	static turn(v, r) {
		var rv = v.clone();
			rv.applyAxisAngle(new THREE.Vector3(1, 0, 0), r.x);
			rv.applyAxisAngle(new THREE.Vector3(0, 1, 0), r.y);
			rv.applyAxisAngle(new THREE.Vector3(0, 0, 1), r.z);
		return rv;
	}

	// static zero(x, y, z) {
	// 	return new THREE.Vector3(0, 0, 0);
	// }

	// #region old code

	// static create(x, y, z) {
	// 	return new THREE.Vector3(x, y, z);
	// }

	// // div vectors
	// static DV(a, b) {
	// 	return new THREE.Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
	// }

	// // add vectors
	// static AV(a, b) {
	// 	return new THREE.Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
	// }

	// // normalize vector
	// static NV(a) {
	// 	let l = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
	// 	return new THREE.Vector3(a.x / l, a.y / l, a.z / l);
	// }

	// // points dist 
	// static DP(a, b) {
	// 	return LV(Craft.DV(a, b));
	// }

	// // vector lenght
	// static LV(a) {
	// 	return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
	// }

	// // multiple vector
	// static MV(a, k) {
	// 	return new THREE.Vector3(a.x * k, a.y * k, a.z * k);
	// }

	// // step vector a to b on k
	// static SV(a, b, k) {
	// 	return AV(a, MV(DV(b, a), k));
	// }

	// // vector to string 
	// static V2S(c) {
	// 	return "[" + ft(c.x) + " " + ft(c.y) + " " + ft(c.z) + "]";
	// }

	// // vectors array middle vector
	// static GV(n) {
	// 	var r = new THREE.Vector3();
	// 	var d = 1 / n.length;
	// 	for(let j=0; j<n.length; j++ ) r = AV(r, n[j]);
	// 	r = MV(r, d);
	// 	return r;
	// }

	// #endregion

}

export default Vector;
