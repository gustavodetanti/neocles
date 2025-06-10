// Import Three.js
//esbuild mapa/main.js --bundle --outfile=mapa/main.bundle.js --loader:.js=jsx --format=cjs 

import * as THREE from './../three.js-master/build/three.module.js';
import { FirstPersonControls } from './../three.js-master/examples/jsm/controls/FirstPersonControls.js';

import { Popup } from './Popup.js';
import { setLights } from './setLights.js';
import { setScene } from './setScene.js';
 
(()=>{})();

 

const [scene,camera,renderer]=setScene(THREE);

const ligths=setLights(THREE,scene);
 

const clickableObjects = [];

// Terrain
const terrainWidth = 800;
const terrainDepth = 800;
/*
const segments = 32;
const geometry = new THREE.PlaneGeometry(terrainWidth, terrainDepth, segments, segments);
geometry.rotateX(-Math.PI / 2);

for (let i = 0; i < geometry.attributes.position.count; i++) {
    let y = Math.random()<0.02?Math.random()*2000:Math.random() * 1500;
    geometry.attributes.position.setY(i, y);
}
geometry.computeVertexNormals();
const material = new THREE.MeshStandardMaterial({ color: 0xaaccbb, wireframe: false });
const terrain = new THREE.Mesh(geometry, material);
terrain.name = "terrain";

*/
const noiseHeight=8;
const terrain=TerrainRare({w:terrainWidth,h:terrainDepth,posY:0,wire:false,noise:noiseHeight,divs:10});

const world = new THREE.Group();
world.add(terrain);
scene.add(world);

// Raycaster for terrain height
const terrain_raycaster = new THREE.Raycaster();
const down = new THREE.Vector3(0, -1, 0);




function getTerrainHeight(x, z) {
    terrain_raycaster.set(new THREE.Vector3(x, 10000, z), down);
    const intersects = terrain_raycaster.intersectObject(terrain);
    return intersects.length > 0 ? intersects[0].point.y : 0;
}




// plantas
const plantas = [
   
];



for(var i=0;i<67;i++){
    plantas.push({
        id:`planta_${i}`,name: randName(3), x: Math.random()*terrainWidth-(terrainWidth/2), y: 0, z: Math.random()*terrainDepth-(terrainDepth/2), color: randCol("#00aa00"), data: [] 
    });
}






const plantasGroup = new THREE.Group();
plantas.forEach(city => {
    city.y = getTerrainHeight(city.x, city.z);
    let H=Math.random()*20+10;
   const cityMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(2, 2, H, 32), // Radius top, radius bottom, height, segments
    new THREE.MeshStandardMaterial({ color: city.color })
);
    cityMesh.position.set(city.x, city.y+H*0.5  , city.z);
    cityMesh.userData.id = city.id; // Asegúrate de que 'city' tenga una propiedad 'id'
    clickableObjects.push(cityMesh); 



    const cityLabel = createTextLabel(city.name);
    cityLabel.position.set(city.x, city.y + H, city.z);

    plantasGroup.add(cityMesh);
    plantasGroup.add(cityLabel);
});

world.add(plantasGroup);

 
 
 
 

// Controls
const controls = new FirstPersonControls(camera, renderer.domElement);
controls.lookSpeed = 0.0005;
controls.movementSpeed = 0.5;
controls.lookVertical = true;
camera.position.set(0, 5, 10);






const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', onClick, false);


function elementClicked(id) {
    console.log("Elemento clickeado con ID:", id);
    // Aquí puedes hacer algo con ese ID

Popup(plantas.filter(p=>p.id==id)[0]);

}


let isFlying = false;
let flyProgress = 0;
let flyDuration = 2; // in seconds
let flyStartTime = null;

let startPosition = new THREE.Vector3();
let startTarget = new THREE.Vector3();

let endPosition = new THREE.Vector3();
let endTarget = new THREE.Vector3();

function _elementClicked(id) {
    console.log("Elemento clickeado con ID:", id);
    flyTo(id);
}

function flyTo(id) {
    // Find the mesh with the matching ID
    const targetMesh = clickableObjects.find(obj => obj.userData.id === id);
    if (!targetMesh) return;

    // Disable FirstPersonControls
    controls.enabled = false;

    // Set up fly animation
    isFlying = true;
    flyProgress = 0;
    flyStartTime = performance.now() / 1000;

    // Save current camera position and target
    startPosition.copy(camera.position);
    startTarget.copy(camera.position.clone().add(camera.getWorldDirection(new THREE.Vector3())));

    // Destination
    endTarget.copy(targetMesh.position.clone());

    // Set the end camera position — e.g. 8000 units behind and 4000 above the target
    const offset = new THREE.Vector3(0, 4000, 8000);
    endPosition.copy(endTarget).add(offset);
}



function onClick(event) {
    // Convertir a coordenadas normalizadas
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(clickableObjects);
    if (intersects.length > 0) {
        const clicked = intersects[0].object;
        const id = clicked.userData.id;
        elementClicked(id);
    }
}











// Label function
function createTextLabel(text) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = 'italic 8px Arial';
    context.fillStyle = '#aaaaaa';
    context.fillText(text, 1, 1);
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(1, 1, 1);
    return sprite;
}

 

// Animate
function animate() {
    requestAnimationFrame(animate);
let yy=getTerrainHeight(camera.position.x, camera.position.z)+noiseHeight+2;
if(camera.position.y<yy){
    camera.position.y=yy;
}
 
    controls.update(1);
 
    renderer.render(scene, camera);
}




function _animate() {
    requestAnimationFrame(animate);


const now = performance.now() / 1000;

if (isFlying) {
    const t = Math.min((now - flyStartTime) / flyDuration, 1);
    const ease = t * t * (3 - 2 * t); // smoothstep easing

    // Interpolate camera position and target
    camera.position.lerpVectors(startPosition, endPosition, ease);
    const lookAt = new THREE.Vector3().lerpVectors(startTarget, endTarget, ease);
    camera.lookAt(lookAt);

    if (t >= 1) {
        isFlying = false;
        controls.enabled = true; // re-enable controls
    }
} else {
    camera.position.y = getTerrainHeight(camera.position.x, camera.position.z)+5;

    controls.update(1); // Only update when not flying
}

}




animate();

// Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});




function randCol(nn) {
    var r, g, b;
    var mx = 255 * 3;
    var sep = rand(10) + 20;
    b = rand(176 - sep);
    r = b + sep;
    g = rand(sep * 0.8) + b + 10;
  
    var dif = mx - (r + g + b);
    if (dif < 5) { }

  
    return "rgba(" + r + "," + g + "," + b + ")";
  
  
  }
    //rand(10), rand([a,b,c]),rand()
    function rand(arr) {
        if (arr == undefined) return Math.random();
        if (isNaN(arr)) {
          if (arr)
      
            return arr[parseInt(Math.random() * arr.length)];
        }
        else return parseInt(Math.random() * arr);
      }



function capitalizar(str){
    return str.substr(0,1).toUpperCase()+str.substr(1);
  
  }







  function randName(n){
	var fonemas="a i u e o ka ki ku ke ko ha hi ho he hu ta chi tu te to na ni nu ne no sa shi so tsu wa ma me mi mo".split(" ");

	var jstr="";
	if(!n)n=rand(2)+2;
	for(var i=0;i<n;i++){
	
		jstr+=rand(fonemas);
	}
	return capitalizar(jstr);	
	}



 
    //o={w,h,noise,color,wire}
   export function TerrainRare(o) {
   let w=200,h=200;
   if(o && o.w){w=o.w};
   if(o && o.h){h=o.h};
   let rh=o.noise||4;
   
   if(o.posY || o.posY==0){} else o.posY=-6;
       let res=parseInt(w/10);
       const group = new THREE.Group();
       const geometry = new THREE.PlaneGeometry(w, h, res,res);
       //let g=ModifyPlaneWithBitmap(geometry,res,(bmp)=>{console.log(bmp)})
    let planePoints=[];
       // Get the vertices of the PlaneGeometry
       const vertices = geometry.attributes.position.array;
       
   let xx=0;
   let zz=0;
   let isBorder=true;
       // Change the vertices (modify the geometry)
       for (let i = 0; i < vertices.length; i += 3) {
            
           if(vertices[i]==-w/2 || vertices[i+1]==-h/2 || vertices[i]==w/2 || vertices[i+1]==h/2){
               console.log(vertices[i], vertices[i+1], vertices[i+2]);
               vertices[i + 2] = -1; // Move the vertices along the y-axis
                   
       } else {
           vertices[i + 2] += Math.random() * rh; // Move the vertices along the y-axis
          // if(Math.random()<0.01) vertices[i + 2] += Math.random() * 10;
       }        
   
           planePoints.push({i:i, x:vertices[i],y:vertices[i + 1],z:vertices[i + 2]});
   
           xx+=3;
           if(xx>=res){
               xx=0;
               zz+=3;
           }
   
    
       }
   
       // Update the geometry to reflect the changes
       geometry.attributes.position.needsUpdate = true;
   
       const material = new THREE.MeshPhongMaterial({
           color: o.color||0xbbff88,
   wireframe:o.wire||false,
           opacity: 1,
           transparent: false,
       });
   
    
   
   
       const plane = new THREE.Mesh(geometry, material); //bmpMaterial());
     
       plane.position.x = 0 * 1;
       plane.position.y = o.posY * 1;
       plane.position.z = 0 * 1;
   
       plane.rotation.x =  -Math.PI / 2;
       plane.receiveShadow = true;
      //plane.rotation.y =  Math.PI;
       group.add(plane);
   /*
   if(fn){  terrainBmp(fn);//plane;
   return;
   }*/
   if(window.terrainCreated)window.terrainCreated(plane,planePoints);
   
   return plane;
   
   }
   
   
   
   
   