
import { createGrid } from "./createGrid.js"; 
import { downloadSVGasJPG } from "./downloadSVGasJPG.js";

import { EditorDragging } from "./EditorDragging.js";
import { iconImage } from "./iconImage.js";
import { ImagesComp } from "./ImagesComp.js";
import { Messages } from "./Messages.js";
 

let EDITMODE = false;
let FULLSIZE = true;
let MapSize = { w: 1518, h: 1420 };

let MAP = {};
let Plants = [];


let hash = window.location.hash ? window.location.hash.split('#').join('') : null;
console.log({ hash });




document.addEventListener("DOMContentLoaded", () => {
  if (hash) {
    let himg = new Image();
    himg.onload = function () {
      himg.onload = null;
      APP(himg);
    };
    himg.src = "bgs/" + hash + ".jpg"

  } else {
     APP();
  }

});







function APP(bgImage) {
  let file = "plants.json";

  const svg = document.getElementById('svgCanvas');

  if (bgImage) {
    MapSize.w = bgImage.naturalWidth;
    MapSize.h = bgImage.naturalHeight;
    console.log({ src: bgImage.src, MapSize });
    svg.style.backgroundImage = `url('bgs/${hash}.jpg')`;
  }

  let scale = window.innerWidth / MapSize.w;

  if (FULLSIZE) {
    svg.setAttribute('width', MapSize.w);
    svg.setAttribute('height', MapSize.h);
    scale = 1;
  }




  const editor = document.getElementById('editor');
  const editorFlex = editor.querySelector('.flex');
  const editorFlexBut = editor.querySelector('.toggle-info');

  const closeBut = editor.querySelector('.closeBut');

  const editName = document.getElementById('editName');
  const editColor = document.getElementById('editColor');
  const editId = document.getElementById('editId');

  const editData = document.getElementById('editData');
  const editRadio= document.getElementById('editRadio');
  const editCircle= document.getElementById('editCircle');

  

  const saveBtn = document.getElementById('saveChanges');
  const modeBtn = document.getElementById('modeBtn');
  const downloadImageBut = document.getElementById('downloadImageBut');
  const plantGallery = editor.querySelector('.galeria');
  const msgs = editor.querySelector('.msgs');


  let selectedPlant = null;

  svg.setAttribute("viewBox", `0 0 ${MapSize.w} ${MapSize.h}`);


  window.addEventListener('resize', () => {
    scale = window.innerWidth / MapSize.w;
  });


  loadPlants();



  async function loadPlants() {
    let afile = hash ? `json/${hash}.json` : file;
    const res = await fetch(afile + '?r=' + Math.random());
    MAP = await res.json();

    Plants = MAP.plants;//.map((p,i)=>{p.id=`${p.name} ${i+1}`;return p});
    renderPlants();
  }


  function renderPlants() {


    let especies = {};
    Plants.forEach((plant, index) => {
      if (especies[plant.name]) {
        // plant.id = `${plant.name} ${especies[plant.name] + 1}`; 
         especies[plant.name]++;
         }
      else {
       // plant.id = `${plant.name} 1`;
        especies[plant.name] = 1;

      }
    });
    console.log(JSON.stringify(especies, false, 4));



    svg.innerHTML = '';
    console.log(Plants.length, "plants loaded from plants.json");




    //drawAccidents(svg);
    createGrid(svg, 16, 15, 200);



    Plants.forEach((plant, index) => {
      Plant(plant, index,);
    }
    );
  }




  function Plant(plant, index) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${plant.x},${plant.y})`);
    g.setAttribute('class', 'plant-group');
    g.setAttribute('data-index', index);

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', plant.size || 12);
    circle.setAttribute('fill', plant.color);

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('y', 20);
    text.setAttribute('text-anchor', 'middle');
    text.textContent = plant.name;
    let PL = plant.img;
    if (PL) { } else {
      if (plant.fotos && plant.fotos.length) {
        PL = plant.fotos[0];
      }

    }
    g.appendChild(circle);

    if (PL) {

      iconImage(g, PL, -20, -40);

    }




    g.appendChild(text);
    svg.appendChild(g);

    enableDrag(g);
    g.addEventListener('click', gClk);

    function gClk(e) {
      console.log(circle);

      e.stopPropagation();
      if (svg.querySelector('circle.selected'))
        svg.querySelector('circle.selected').setAttribute('class', "b");

      circle.setAttribute('class', "selected");
      selectPlant(index);
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
    editor.querySelector('small').innerHTML = `${selectedPlant.name} - ${selectedPlant.id} `;

    editor.style.left = `${scale * selectedPlant.x}px`;
    editor.style.top = `${scale * selectedPlant.y}px`;

    editorFlex.classList.add('hidded');
    editorFlexBut.innerHTML = '+ info';
   editRadio.value= selectedPlant.size||20;

   editCircle.style.width=editRadio.value*2+"px";
   editCircle.style.height=editRadio.value*2+"px";
   
   editCircle.style.background=selectedPlant.color;
   

    editName.value = selectedPlant.name;
    editId.value = selectedPlant.id;
    editColor.value = selectedPlant.color;
    editData.value = selectedPlant.data;
    plantGallery.innerHTML = ``;


    // ICONO
    if (selectedPlant.img) {
      //   plantGallery.innerHTML=`<img style='width:100%;' src='${selectedPlant.img}'>`;
      editor.querySelector('.drag-handle').src = selectedPlant.img;
    }
    if (selectedPlant.fotos && selectedPlant.fotos.length > 0) {
      editor.querySelector('.drag-handle').src = selectedPlant.fotos[0];

    } else {
      editor.querySelector('.drag-handle').src = 'img/sign.jpeg'
    }



    ImagesComp(plantGallery, selectedPlant, savePlants);




    if (selectedPlant.msgs) {
      Messages(msgs, selectedPlant, savePlants);

    } else {
      selectedPlant.msgs = [];
      Messages(msgs, selectedPlant, savePlants);

    }
    editor.style.display = 'block';
  }




  downloadImageBut.addEventListener("click", (e) => {

    downloadSVGasJPG(svg);



  });

editRadio.addEventListener("input",()=>{
  if(selectedPlant){} else return;
 
   editCircle.style.width=editRadio.value*2+"px";
   editCircle.style.height=editRadio.value*2+"px";
   
});
 

  editorFlexBut.addEventListener('click', () => {
    if (editorFlex.classList.contains('hidded')) {
      editorFlex.classList.remove('hidded');
      editorFlexBut.innerHTML = '- info';

      editor.classList.add('opened');
      editor.style.left = 0;
      editor.style.top = 0;
      editor.style.width = '95%';
    } else {
      editor.classList.remove('opened');
      editor.style.width = '100px';
      editorFlex.classList.add('hidded');
      editorFlexBut.innerHTML = '+ info';
    }

  });



  saveBtn.addEventListener('click', () => {
    if (selectedPlant) {
      selectedPlant.name = editName.value;
      selectedPlant.color = editColor.value;
      selectedPlant.id = editId.value;
 
      selectedPlant.size=editRadio.value;
      selectedPlant.data = editData.value;
      renderPlants();
      savePlants();
      editor.style.display = 'none';

      editor.classList.remove('opened');
      editor.style.width = '100px';
      editorFlex.classList.add('hidded');
      editorFlexBut.innerHTML = '+ info';


    }
  });


  closeBut.addEventListener('click', () => {
    editor.style.display = 'none';
    editor.classList.remove('opened');
    editor.style.width = '100px';
    editorFlex.classList.add('hidded');
    editorFlexBut.innerHTML = '+ info';
  });

  svg.addEventListener('dblclick', (e) => {

    const name = "nombre";
    if (name) {
      const color = '#22aa44';
      const newPlant = { id: `${name} x`, name, x: e.offsetX, y: e.offsetY, color, data: [] };
      Plants.push(newPlant);
      renderPlants();
      savePlants();
    }
  });
  modeBtn.checked = EDITMODE;
  modeBtn.addEventListener('change', function () {
    EDITMODE = modeBtn.checked;
  });


  // Checkbox is checked
  function savePlants() {

    if (!EDITMODE) return;


    let afile = hash ? `json/${hash}.json` : file;


    console.log('saving...');
    fetch('save_plants.php?filename=' + afile, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(MAP, false, 4)
    }).then(d => {
      console.log('saved');
    });
  }
}




function drawAccidents(svg) {
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



document.addEventListener('DOMContentLoaded', EditorDragging);








