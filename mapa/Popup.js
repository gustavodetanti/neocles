import { Kanas } from './kanas.js';
export function Popup(obj) {
    const kanas=Kanas();
    let pop = document.querySelector(".popup");
    if (pop) { } else { pop = document.createElement("div"); pop.classList.add("popup"); document.body.appendChild(pop); }
   if(obj.name=='')obj.name="no name";
    pop.innerHTML = ` 
    <div class='closePop'>&times;</div>
<h2>${kanas.getKatakana(obj.name)}</h2><small>${obj.name} </small>
<ul>${obj.data.map(d=>{
    return `<li>${d.name}: ${d.value}</li>`
}).join('')}</ul>
${obj.img?`<img src='${obj.img}' style='width:calc( 100% - 40px );margin:20px;'>`:''}
<textarea style='width:95%;border:none;background:#cccccc;padding:5px;' rows='6'>${obj.txt||''}</textarea>
 `;

return pop;
}

 




 