/*************************** Canvas *****************************/ 
const drawing = document.getElementById("drawing");

function circle(radius, fillMode, color) {
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(200, 200, radius, 0, 2 * Math.PI);
  if (fillMode === "solid") {
    ctx.fillStyle = color;
    ctx.fill();
  } else if (fillMode === "outline") {
    ctx.strokeStyle = color;
    ctx.stroke();
  } else {
    alert("Invalid fillMode");
  }
  drawing.appendChild(canvas);
  return canvas;
}

function rectangle(width, height, fillMode, color) {
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");
  if (fillMode === "solid") {
    ctx.fillStyle = color;
    ctx.fillRect(200 - width / 2, 200 - height / 2, width, height);
  } else if (fillMode === "outline") {
    ctx.strokeStyle = color;
    ctx.strokeRect(200 - width / 2, 200 - height / 2, width, height);
  } else {
    alert("Invalid fillMode");
  }
  drawing.appendChild(canvas);
  return canvas;
}

function putImage(img1, x, y, img2) {
  drawing.innerHTML = "";
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img2, 0, 0);
  ctx.drawImage(img1, x, y);
  drawing.appendChild(canvas);
  return canvas;
}

function rotate(angle, img) {
  drawing.innerHTML = "";
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");
  ctx.translate(200, 200);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.translate(-200, -200);
  ctx.drawImage(img, 0, 0);
  drawing.appendChild(canvas);
  return canvas;
}
/*************************** SVG *****************************/ 
const drawingSvg = document.getElementById("drawingSvg");

function circleSvg(radius, mode, color) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns:link", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 400 400");
  svg.setAttribute("width", "400px");
  svg.setAttribute("height", "400px");

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", 200);
  circle.setAttribute("cy", 200);
  circle.setAttribute("r", radius);

  if (mode === "solid") {
    circle.setAttribute("stroke-opacity", "0");
    circle.setAttribute("fill", color);
  } else if (mode === "outline") {
    circle.setAttribute("fill-opacity", "0");
    circle.setAttribute("stroke", color);
  } else {
    alert("Invalid mode");
  }

  // Append circle to svg
  svg.appendChild(circle);
  // Append to drawing
  drawingSvg.appendChild(svg);

  // Return the svg element
  return svg;
}

function rectangleSvg(width, height, mode, color) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns:link", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 400 400");
  svg.setAttribute("width", "400px");
  svg.setAttribute("height", "400px");

  const rectangle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );

  rectangle.setAttribute("x", 200 - width / 2);
  rectangle.setAttribute("y", 200 - height / 2);
  rectangle.setAttribute("width", `${width}px`);
  rectangle.setAttribute("height", `${height}px`);

  if (mode === "solid") {
    rectangle.setAttribute("stroke-opacity", "0");
    rectangle.setAttribute("fill", color);
  } else if (mode === "outline") {
    rectangle.setAttribute("fill-opacity", "0");
    rectangle.setAttribute("stroke", color);
  } else {
    alert("Invalid mode");
  }

  svg.appendChild(rectangle);

  drawingSvg.appendChild(svg);

  return svg;
}

function rotateSvg(angle, img) {
  drawingSvg.innerHTML = "";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns:link", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 400 400");
  svg.setAttribute("width", "400px");
  svg.setAttribute("height", "400px");

  let svgElement = img.firstChild;
  if (svgElement.nodeName === "rect") {
    svgElement.setAttribute("transform", `rotate(${angle}, ${200}, ${200})`);
    console.log(svgElement);
  }
  svg.appendChild(svgElement);
  drawingSvg.appendChild(svg);
  return svg;
}

function putImageSvg(image1, x, y, image2) {
  // Clear drawing
  drawingSvg.innerHTML = "";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns:link", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 400 400");
  svg.setAttribute("width", "400px");
  svg.setAttribute("height", "400px");

  // Get all elements of image2:
  let img2Nodes = image2.querySelectorAll("rect, circle");

  // Loop through the img2Nodes, clone them and append them to svg.
  for (let el of img2Nodes) {
    let clonedNode = el.cloneNode();
    svg.appendChild(clonedNode);
  }

  // Add first child from image 1
  // Get the first image, and reposition it
  let firstImage = image1.firstChild;

  if (firstImage.nodeName === "circle") {
    //console.log(firstImage);
    firstImage.setAttribute(
      "cx",
      parseFloat(firstImage.getAttribute("cx")) + x
    );
    firstImage.setAttribute(
      "cy",
      parseFloat(firstImage.getAttribute("cy")) + y
    );
  } else {
    // It must be a rectanble
    console.log(firstImage);
    firstImage.setAttribute("x", parseFloat(firstImage.getAttribute("x")) + x);
    firstImage.setAttribute("y", parseFloat(firstImage.getAttribute("y")) + y);
  }

  svg.appendChild(image1.firstChild);

  // Add svg to drawing
  drawingSvg.appendChild(svg);

  // Return svg
  return svg;
}

export { circle, rectangle, putImage, rotate, circleSvg, rectangleSvg, putImageSvg, rotateSvg };
