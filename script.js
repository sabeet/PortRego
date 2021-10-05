import * as THREE from '/node_modules/three/src/Three.js';

let container = document.querySelector('.three');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight , 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
renderer.setSize( window.innerWidth - 15, window.innerHeight - 120 );
container.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 10, 10, 10 );

const wireframe = new THREE.WireframeGeometry( geometry );

const line = new THREE.LineSegments( wireframe );
line.material.depthTest = false;
line.material.opacity = 0.75;
line.material.transparent = true;

scene.add( line );

camera.position.z = 50;

function animate() {
	requestAnimationFrame( animate );
    line.rotation.y += 0.005;
	renderer.render( scene, camera );
}
animate();