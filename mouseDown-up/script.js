const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.clientX - canvas.offsetLeft;
  lastY = e.clientY - canvas.offsetTop;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    const currentX = e.clientX - canvas.offsetLeft;
    const currentY = e.clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    lastX = currentX;
    lastY = currentY;
  }
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
