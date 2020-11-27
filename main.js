const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');
const colors = document.querySelector('#color');
const size = document.querySelector('#size');
const controls = document.querySelector('.controls');
const clear = document.querySelector('#clear');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - controls.offsetHeight;
ctx.lineJoin = 'round';  // forma dvyx otrezkov 
ctx.lineCap = 'round'; //draw the end points of lines.
ctx.strokeStyle = color.value;
ctx.lineWidth = size.value;
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if(!isDrawing) return; 
    ctx.beginPath(); //nachinaet novyj putj
    ctx.moveTo(lastX, lastY);  //nachinaet v etoj tochke
    ctx.lineTo(e.offsetX, e.offsetY);  // soedinjaet nachalo i konec liniej v etoj tochke
    ctx.stroke(); // ochertanija obvodki zadannogo pyti
    lastX = e.offsetX; //A Number, representing the horizontal coordinate of the mouse pointer, in pixels
    lastY = e.offsetY; //vertical
}

function changeColors() {
ctx.strokeStyle = this.value;
}

function changeSize() {
    ctx.lineWidth = this.value;
}

function clearWindow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
clear.addEventListener('click', clearWindow);
colors.addEventListener('blur', changeColors);    
size.addEventListener('mousemove', (changeSize));   
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup',  () => isDrawing = false);
canvas.addEventListener('mouseout',  () => isDrawing = false);