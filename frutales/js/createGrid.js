export function createGrid(svg, cols, rows, size) {


  // Add grid lines
  for (let x = 0; x <= cols * size; x += size) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line.setAttribute("d", `M${x},0 L${x},${rows * size}`);
    line.setAttribute("stroke", "#11111155");
    line.setAttribute("stroke-width", "1");
    svg.appendChild(line);
  }

  for (let y = 0; y <= rows * size; y += size) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line.setAttribute("d", `M0,${y} L${cols * size},${y}`);
    line.setAttribute("stroke", "#11111155");
    line.setAttribute("stroke-width", "1");
    svg.appendChild(line);
  }

  // Add clickable squares
  /*
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
    }*/
}
