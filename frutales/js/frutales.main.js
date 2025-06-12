//import { buildings } from "./buildings.js";
import { EditorDragging } from "./EditorDragging.js";

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
let plantGallery=editor.querySelector('.galeria');
  let Plants = [];
  let selectedPlant = null;

  async function loadPlants() {
    const res = await fetch('plants.json?r='+Math.random());
    Plants = await res.json();
    renderPlants();
  }

  function renderPlants() {
    let especies={};
Plants.forEach((plant, index) => {
//plant.y=plant.y-100;
//plant.x=1240-plant.x;
if(especies[plant.name])especies[plant.name]++;
else especies[plant.name]=1;
    });
 


svg.innerHTML = '';
console.log(Plants.length,"plants.json loaded");
//console.log(JSON.stringify(Plants,false,4));
for(let e in especies){
  console.log(e,especies[e]);
}

    
drawAccidents(svg);
createGrid(svg,12,10,100);
objetosApp(svg);

    Plants.forEach((plant, index) => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('transform', `translate(${plant.x},${plant.y})`);
      g.setAttribute('class', 'plant-group');
      g.setAttribute('data-index', index);

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('r', 12);
      circle.setAttribute('fill', plant.color);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('y', 20);
      text.setAttribute('text-anchor', 'middle');
      text.textContent = plant.name;

      g.appendChild(circle);
      g.appendChild(text);
      svg.appendChild(g);

      enableDrag(g);
      g.addEventListener('click', (e) => {
        e.stopPropagation();
        selectPlant(index);
      });
    });
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

  function selectPlant(index) {
    selectedPlant = Plants[index];
    editName.value = selectedPlant.name;
    editId.value = selectedPlant.id;
    
    editColor.value = selectedPlant.color;
    editData.value = selectedPlant.data;
    if(selectedPlant.img){
        plantGallery.innerHTML=`<img style='width:100%;' src='${selectedPlant.img}'>`;
    } else {
        plantGallery.innerHTML=``;
   
    }
    editor.style.display = 'block';
  }


modeBtn.addEventListener('change',()=>{

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
  modeBtn.addEventListener('change', function() {
    EDITMODE=modeBtn.checked;
});


// Checkbox is checked
  function savePlants() {

if(!EDITMODE)return;    
    fetch('save_plants.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Plants)
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
//buildings(g);


}



document.addEventListener('DOMContentLoaded', EditorDragging);


