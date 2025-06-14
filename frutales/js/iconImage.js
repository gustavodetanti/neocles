 
export function iconImage(gElement, imageUrl, x, y, height="40px") {
   
    const svgImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
     
    svgImage.setAttribute('href', imageUrl); // Usar 'href' en lugar de 'xlink:href' para SVG2
    svgImage.setAttribute('x', x);
    svgImage.setAttribute('y', y);
    svgImage.setAttribute('height', height);
    svgImage.setAttribute('preserveAspectRatio', "xMidYMid meet");
   
    
     
    gElement.appendChild(svgImage);
    
    return svgImage;
}