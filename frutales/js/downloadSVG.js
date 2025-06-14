export function downloadSVG(svgElement, fileName = 'frutales.svg') {
  // Validate input
  if (!(svgElement instanceof SVGSVGElement)) {
    console.error('downloadSVG requires an SVG element');
    return;
  }

  // Clone the SVG to avoid modifying the original
  const svgClone = svgElement.cloneNode(true);
  
  // Add XML namespace if missing
  if (!svgClone.getAttribute('xmlns')) {
    svgClone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  }

  // Serialize the SVG to string
  const serializer = new XMLSerializer();
  let svgString = serializer.serializeToString(svgClone);

  // Fix any xlink references
  svgString = svgString.replace(/xlink:href/g, 'href');

  // Add XML declaration
  const preamble = '<?xml version="1.0" standalone="no"?>\n';
  svgString = preamble + svgString;

  // Create download link
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 100);
}