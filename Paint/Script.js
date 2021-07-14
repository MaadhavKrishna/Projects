canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color;
var lineWidth;
var radius;
var mouseEvent="";

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e){
mouseEvent="mousedown";
color=document.getElementById("color").value;
lineWidth=document.getElementById("width").value;
radius=document.getElementById("radius").value;
console.log("mousedown");
}

canvas.addEventListener("mouseup", myMouseup);

function myMouseup(e){
mouseEvent="mouseup";
color=document.getElementById("color").value;
lineWidth=document.getElementById("width").value;
radius=document.getElementById("radius").value;
console.log("mouseup");
}

canvas.addEventListener("mouseleave", myMouseleave);

function myMouseleave(e){
mouseEvent="mouseup";
color=document.getElementById("color").value;
lineWidth=document.getElementById("width").value;
radius=document.getElementById("radius").value;
console.log("mouseleave");
}

canvas.addEventListener("mousemove", myMousemove);

function myMousemove(e){
console.log("mousemove");
current_x=e.clientX;
current_y=e.clientY;
if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=lineWidth;
ctx.arc(current_x,current_y,radius,0,2*Math.PI);
ctx.stroke();
}
}

function clearArea(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}