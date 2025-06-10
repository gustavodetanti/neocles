// Import Three.js
//esbuild mapa/main.js --bundle --outfile=mapa/main.bundle.js --minify --watch

console.log("MAPA");


import * as THREE from './../three.js-master/build/three.module.js';
import { FirstPersonControls } from './../three.js-master/examples/jsm/controls/FirstPersonControls.js';

import { Popup } from './Popup.js';
import { setLights } from './setLights.js';
import { setScene } from './setScene.js';
import { TerrainRare } from './TerrainRare';
  
let active=true;
const [scene,camera,renderer]=setScene();
const ligths=setLights(THREE,scene);
const clickableObjects = [];

// Terrain
const terrainWidth = 800;
const terrainDepth = 800;
const noiseHeight=30;
const terrain=TerrainRare({w:terrainWidth,h:terrainDepth,posY:0,wire:false,noise:noiseHeight,divs:10});

const world = new THREE.Group();
world.add(terrain);
scene.add(world);

// Raycaster for terrain height
const terrain_raycaster = new THREE.Raycaster();
const down = new THREE.Vector3(0, -1, 0);




animate();

// Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

console.log({camera});


function getTerrainHeight(x, z) {
    terrain_raycaster.set(new THREE.Vector3(x, 10000, z), down);
    const intersects = terrain_raycaster.intersectObject(terrain);
    return intersects.length > 0 ? intersects[0].point.y : 0;
}


fetch('plantas.json').then(d=>d.json()).then(json=>plantasLoaded(json)).catch(e=>console.log(e))
 
function plantasLoaded(jsn){
/*
for(var i=0;i<10;i++){
    plantas.push({
        id:`IMAGINARY_${i}`,name: randName(3), x: Math.random()*terrainWidth-(terrainWidth/2), y: 0, z: Math.random()*terrainDepth-(terrainDepth/2), color: randCol("#00aa00"), data: [] 
    });
}*/
plantas=jsn;
console.log(JSON.stringify(plantas,false,4));




const plantasGroup = new THREE.Group();
plantas.forEach(city => {
    city.y = getTerrainHeight(city.x, city.z);
    let H=city.height||Math.random()*30+30;
    let mat=city.img?bmpMaterial(city.img,()=>{}): new THREE.MeshStandardMaterial({ color: city.color });
   const cityMesh = new THREE.Mesh(
    new THREE.BoxGeometry(H/2, H, H/2, 32), // Radius top, radius bottom, height, segments
   mat
);
    cityMesh.position.set(city.x, city.y+H*0.5  , city.z);
    cityMesh.userData.id = city.id; // Asegúrate de que 'city' tenga una propiedad 'id'
    clickableObjects.push(cityMesh); 



    const cityLabel = createTextLabel(city.name);
    cityLabel.position.set(city.x, city.y + H*1.2, city.z);

    plantasGroup.add(cityMesh);
    plantasGroup.add(cityLabel);
});

world.add(plantasGroup);

 
}
 
 

// Controls
const controls = new FirstPersonControls(camera, renderer.domElement);
controls.lookSpeed = 0.01;
controls.movementSpeed = 3;
controls.lookVertical = false;
camera.position.set(0, 2, 10);






const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', onClick, false);


function elementClicked(id) {
    console.log("Elemento clickeado con ID:", id);
    // Aquí puedes hacer algo con ese ID
active=false;
let pp=Popup(plantas.filter(p=>p.id==id)[0]);
pp.querySelector('.closePop').addEventListener('click',clk);


function clk(e){
    pp.removeEventListener('click',clk);
 
        pp.parentNode.removeChild(pp);
 active=true;
 animate(1);  
}
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










function createTextLabel(text) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set explicit size
    canvas.width = 1024;
    canvas.height = 256;

    // Draw background for debugging (optional)
    // context.fillStyle = '#333';
    // context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    context.font = 'italic 180px Arial';
    context.fillStyle = '#222222';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    // Create texture and sprite
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(10, 3, 1); // Adjust based on your scene scale

    return sprite;
}

 

// Animate
function animate() {

    if(active){} else return;
    requestAnimationFrame(animate);
let yy=getTerrainHeight(camera.position.x, camera.position.z)+noiseHeight+2;
//if(camera.position.y<yy){
    camera.position.y=yy;
//}
 if(controls)    controls.update(1);
 
    renderer.render(scene, camera);
}


 



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



 



 
 function bmpMaterial(src,fn) {
 


    
    const loader = new THREE.TextureLoader();
    const texture = loader.load(src);
    const tmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        map: texture,
        opacity: 1,
        transparent: false
      
    });

    return tmaterial;
}
