import { Kanas } from './kanas.js';
export function Popup(obj) {
    const kanas=Kanas();
    let pop = document.querySelector(".popup");
    if (pop) { } else { pop = document.createElement("div"); pop.classList.add("popup"); document.body.appendChild(pop); }
    pop.innerHTML = ` 
<h3>${obj.name} <small>${kanas.getKatakana(obj.name)}</small></h3>
<p>${JSON.stringify(obj, false, 4)}</p>
 `;


}


