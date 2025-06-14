//import { buildings } from "./buildings.js";
import { downloadSVG } from "./downloadSVG.js";
import { downloadSVGasJPG } from "./downloadSVGasJPG.js";

import { EditorDragging } from "./EditorDragging.js";
import { iconImage } from "./iconImage.js";
import { ImagesComp } from "./ImagesComp.js";
import { Messages } from "./Messages.js";

let EDITMODE=false;

document.addEventListener("DOMContentLoaded",APP);
 
function APP(){
  const svg = document.getElementById('svgCanvas');
  const editor = document.getElementById('editor');
  const closeBut = editor.querySelector('.closeBut');
  
  const editName = document.getElementById('editName');
  const editColor = document.getElementById('editColor');
  const editId = document.getElementById('editId');
  
  const editData = document.getElementById('editData');
  const saveBtn = document.getElementById('saveChanges');
  const modeBtn = document.getElementById('modeBtn');


const downloadImageBut=document.getElementById('downloadImageBut');



let plantGallery=editor.querySelector('.galeria');
let msgs=editor.querySelector('.msgs');



  let Plants = [];
  let selectedPlant = null;



  async function loadPlants() {
    const res = await fetch('plants.json?r='+Math.random());
    Plants = await res.json();
    renderPlants();
  }



  function renderPlants() {


  let especies = {};
    Plants.forEach((plant, index) => {
      if (especies[plant.name]) especies[plant.name]++;
      else especies[plant.name] = 1;
    });
  console.log(JSON.stringify(especies, false, 4));



svg.innerHTML = '';
console.log(Plants.length,"plants loaded from plants.json");
 
 

    
drawAccidents(svg);
createGrid(svg,13,10,100);


//objetosApp(svg);
 
    Plants.forEach((plant, index) => {
    Plant(plant,index);
    }
    );
  }


function Plant(plant,index){
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('transform', `translate(${plant.x},${plant.y})`);
  g.setAttribute('class', 'plant-group');
  g.setAttribute('data-index', index);

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('r', plant.size||12);
  circle.setAttribute('fill', plant.color);

  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('y', 20);
  text.setAttribute('text-anchor', 'middle');
  text.textContent = plant.name;




  let PL=plant.img;
  if(PL){} else {
    if(plant.fotos && plant.fotos.length){
      PL=plant.fotos[0];
    } 

  }
if(PL){

iconImage(g,PL,-20,-30);

} else{
  g.appendChild(circle);

}

  g.appendChild(text);
  svg.appendChild(g);

  enableDrag(g);
  g.addEventListener('click', gClk);

  function gClk(e) {
    console.log(circle);

    e.stopPropagation();
    if(svg.querySelector('circle.selected'))
    svg.querySelector('circle.selected').setAttribute('class',"b");
   
    circle.setAttribute('class',"selected");
    selectPlant(index);
  }

}


  function enableDrag(g) {
    let offsetX, offsetY, index;

    g.addEventListener('mousedown', (e) => {
      index = g.getAttribute('data-index');
      const plant = Plants[index];
      offsetX = e.offsetX - plant.x;
      offsetY = e.offsetY - plant.y;

      function onMouseMove(e) {
        plant.x = e.offsetX - offsetX;
        plant.y = e.offsetY - offsetY;
        g.setAttribute('transform', `translate(${plant.x},${plant.y})`);
      }

      function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        savePlants();
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }

  function _enableDrag(g) {
    let offsetX, offsetY, index;
    let isTouchDevice = ('ontouchstart' in window);

    function startDrag(clientX, clientY) {
        const rect = g.getBoundingClientRect();
        index = g.getAttribute('data-index');
        const plant = Plants[index];
        
        offsetX = clientX - rect.left - plant.x;
        offsetY = clientY - rect.top - plant.y;
    }

    function moveDrag(clientX, clientY) {
        const rect = g.parentNode.getBoundingClientRect();
        const plant = Plants[index];
        
        plant.x = clientX - rect.left - offsetX;
        plant.y = clientY - rect.top - offsetY;
        g.setAttribute('transform', `translate(${plant.x},${plant.y})`);
    }

    function endDrag() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
        savePlants();
    }

    // Mouse event handlers
    function onMouseDown(e) {
        e.preventDefault();
        startDrag(e.clientX, e.clientY);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    function onMouseMove(e) {
        moveDrag(e.clientX, e.clientY);
    }

    function onMouseUp() {
        endDrag();
    }

    // Touch event handlers
    function onTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        startDrag(touch.clientX, touch.clientY);
        document.addEventListener('touchmove', onTouchMove, { passive: false });
        document.addEventListener('touchend', onTouchEnd);
    }

    function onTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        moveDrag(touch.clientX, touch.clientY);
    }

    function onTouchEnd() {
        endDrag();
    }

    // Add appropriate event listeners
    if (isTouchDevice) {
        g.addEventListener('touchstart', onTouchStart, { passive: false });
    } else {
        g.addEventListener('mousedown', onMouseDown);
    }
}

  function selectPlant(index) {
    selectedPlant = Plants[index];
    editName.value = selectedPlant.name;
    editId.value = selectedPlant.id;
    
    editColor.value = selectedPlant.color;
    editData.value = selectedPlant.data;
    plantGallery.innerHTML=``;
    if(selectedPlant.img){
     //   plantGallery.innerHTML=`<img style='width:100%;' src='${selectedPlant.img}'>`;
    }  

 let IC=ImagesComp(plantGallery,selectedPlant,savePlants);
   



     if(selectedPlant.msgs){
Messages(msgs, selectedPlant, savePlants );

     } else {
      selectedPlant.msgs=[];
      Messages(msgs,selectedPlant,savePlants);
    
     }
    editor.style.display = 'block';
  }


modeBtn.addEventListener('change',()=>{

});

downloadImageBut.addEventListener("click",(e)=>{

  downloadSVGasJPG(svg);



});

  saveBtn.addEventListener('click', () => {
    if (selectedPlant) {
      selectedPlant.name = editName.value;
      selectedPlant.color = editColor.value;
      selectedPlant.id = editId.value;
      
      selectedPlant.data = editData.value;
      renderPlants();
      savePlants();
      editor.style.display = 'none';
    }
  });


  closeBut.addEventListener('click', () => {
    editor.style.display = 'none';
  });

  svg.addEventListener('dblclick', (e) => {
      
    const name = prompt('Enter plant name:');
    if (name) {
      const color = prompt('Enter color (hex):', '#00ff00');
      const newPlant = { id:`${name} x`,name, x: e.offsetX, y: e.offsetY, color, data: [] };
      Plants.push(newPlant);
      renderPlants();
      savePlants();
    }
  });
  modeBtn.checked=EDITMODE;
  modeBtn.addEventListener('change', function() {
    EDITMODE=modeBtn.checked;
});


// Checkbox is checked
  function savePlants() {

if(!EDITMODE)return;   
console.log('saving...'); 
    fetch('save_plants.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Plants)
    }).then(d=>{
      console.log('saved');
    });
  }

  loadPlants();











  function createGrid(svg,cols,rows,size){
 
 
// Add grid lines
for (let x = 0; x <= cols*size; x += size) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("d", `M${x},0 L${x},${rows*size}`);
  line.setAttribute("stroke", "#ccc");
  line.setAttribute("stroke-width", "1");
  svg.appendChild(line);
}

for (let y = 0; y <= rows*size; y += size) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("d", `M0,${y} L${cols*size},${y}`);
  line.setAttribute("stroke", "#ccc");
  line.setAttribute("stroke-width", "1");
  svg.appendChild(line);
}

// Add clickable squares
for (let x = 0; x < cols; x++) {
  for (let y = 0; y < rows; y++) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x * size);
    rect.setAttribute("y", y * size);
    rect.setAttribute("width", size);
    rect.setAttribute("height", size);
    rect.setAttribute("fill", "transparent");
    rect.setAttribute("data-pos", `${x} ${y}`);
    svg.appendChild(rect);
  }
}
//div.appendChild(svg);
    }



function drawAccidents(svg){
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", 590);
    rect.setAttribute("y", 600);
    rect.setAttribute("width", 60);
    rect.setAttribute("height", 150);
    rect.setAttribute("fill", "#dddddd");
   
    svg.appendChild(rect);

    let rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect1.setAttribute("x", 0);
    rect1.setAttribute("y", 180);
    rect1.setAttribute("width", 1240);
    rect1.setAttribute("height", 40);
    rect1.setAttribute("fill", "#884400");
    svg.appendChild(rect1);





}

}





function objetosApp(svg){


let g=document.createElementNS("http://www.w3.org/2000/svg","g");
svg.appendChild(g);
let bg=document.createElementNS("http://www.w3.org/2000/svg","path");

bg.setAttribute("d",`M0,0 L 1240,0 1240,1000 0,1000 0,0`);
bg.setAttribute("fill",`#00aa0055`);
g.appendChild(bg);

console.log('objetos disabled');
 buildings(g);


}



document.addEventListener('DOMContentLoaded', EditorDragging);








