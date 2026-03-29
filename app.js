/*import * as THREE from 'https://unpkg.com/three@0.164.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.164.0/examples/jsm/controls/OrbitControls.js';
*/
//import './styles.css'
import * as THREE from "three";




// 1 - scene 

const scene = new THREE.Scene();


// 2 - camera 
const fov = 75;  // champ de vision 
const aspect = window.innerWidth / window.innerHeight; // l'encadrement 
const near = 0.1; // espace camera avant 
const far = 1000; //esapce après 

const camera = new THREE.PerspectiveCamera(fov, aspect, near,far);

//3 - Renderer 

const renderer = new THREE.WebGLRenderer(
  {
    canvas: document.querySelector('#bg')
  }
  );

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera)


function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const pixelRatio = window.devicePixelRatio;
      const width  = Math.floor( canvas.clientWidth  * pixelRatio );
      const height = Math.floor( canvas.clientHeight * pixelRatio );
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }



/// GEOMETRY

const radius = 10.0;  

const widthSegments = 30;  

const heightSegments = 30;  

const geometry = new THREE.SphereGeometry( radius, widthSegments, heightSegments );

// Material 

const material = new THREE.MeshBasicMaterial (
  {
    color : 0xFFF6347, 
    wireframe :true,
    //flatShading: true
  });

const sphere = new THREE.Mesh( geometry,material);

scene.add(sphere);

// animate loop 

function animate(){
  requestAnimationFrame(animate); 

    // rotation automatique
  sphere.rotation.y += 0.0015;


  renderer.render(scene,camera);
}

animate();





/*

  import * as THREE from "three";
  import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const winWidth =  window.innerWidth;
const winHeight = window.innerHeight;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const fov = 75;
const aspect = winWidth/ winHeight;
const near = 0.1;
const far = 1000;

const camera = new THREE.PerspectiveCamera( fov, aspect, near, far);
camera.position.set(0, 0, 4);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(winWidth, winHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// 2. Lumières
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 3, 5);
scene.add(directionalLight);

// 3. Globe (sphere + texture)
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load('assets/earth.jpg');

const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
const earthMaterial = new THREE.MeshPhongMaterial({
  map: earthTexture,
});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

// 4. Contrôles (rotation à la souris)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = false;
controls.minDistance = 2;
controls.maxDistance = 10;

// 5. Animation
function animate() {
  requestAnimationFrame(animate);

  // rotation automatique
  earthMesh.rotation.y += 0.0015;

  controls.update();
  renderer.render(scene, camera);
}
animate();

// 6. Resize
window.addEventListener('resize', () => {
  camera.aspect = winWidth / winHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(winWidth, winHeight);
});

*/