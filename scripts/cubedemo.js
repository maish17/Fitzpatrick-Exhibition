// Set up scene
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5; // Move the camera back so we can see the cube

// Renderer setup
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube geometry and material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube); // Add cube to the scene

let scrollDelta = 0;

window.addEventListener("wheel", (event) => {
  scrollDelta += event.deltaY * 0.01; // Adjust the sensitivity
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const animate = () => {
  requestAnimationFrame(animate);

  // Rotate cube based on scroll
  cube.rotation.x = scrollDelta;
  cube.rotation.y = scrollDelta;

  renderer.render(scene, camera);
};

animate();

console.log(renderer.domElement);
