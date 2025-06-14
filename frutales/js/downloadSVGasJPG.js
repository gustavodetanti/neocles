export function downloadSVGasJPG(svgElement, fileName = 'frutales.jpg', quality = 1.0) {
 
  let  scale = 2; // Scale multiplier for higher resolution
let    backgroundColor = 'white' ;// Background color for JPG
 
// Validate input
if (!(svgElement instanceof SVGSVGElement)) {
    console.error('downloadHighQualityJPG requires an SVG element');
    return;
}

// Create a temporary container for the SVG
const container = document.createElement('div');
container.style.position = 'absolute';
container.style.left = '-9999px';
document.body.appendChild(container);
container.appendChild(svgElement.cloneNode(true));

// Get SVG dimensions
const svgWidth = svgElement.width.baseVal.value;
const svgHeight = svgElement.height.baseVal.value;

// Create high-resolution canvas
const canvas = document.createElement('canvas');
canvas.width = svgWidth * scale;
canvas.height = svgHeight * scale;
const ctx = canvas.getContext('2d');

// Set white background
ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Serialize SVG to data URL
const svgData = new XMLSerializer().serializeToString(svgElement);
const svgUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgData);

// Convert to JPG
const img = new Image();
img.onload = function() {
    // Draw scaled image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Create JPG data URL
    const jpgUrl = canvas.toDataURL('image/jpeg', quality);

    // Trigger download
    const link = document.createElement('a');
    link.download = fileName;
    link.href = jpgUrl;
    link.click();

    // Cleanup
    document.body.removeChild(container);
    setTimeout(() => URL.revokeObjectURL(jpgUrl), 100);
};

img.onerror = function() {
    console.error('Failed to load SVG image');
    document.body.removeChild(container);
};

img.src = svgUrl;

}