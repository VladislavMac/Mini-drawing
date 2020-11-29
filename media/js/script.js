var 
canv        = document.querySelector('#canvas'),
ctx         = canv.getContext("2d");

var
  pen         = document.querySelector('#pen'),
  eraser      = document.querySelector('#eraser'),
  structure   = document.querySelector('#structure'),
  circle      = document.querySelector('#circle'),
  saveDraw    = document.querySelector('#save'),
  replayDraw  = document.querySelector('#replay');

var
  colorBg     = document.querySelector('#bgColor'),
  sizePen     = document.querySelector('#sizePen'),
  colorPen    = document.querySelector('#penColor');

  canv.width = window.innerWidth;  
canv.height = window.innerHeight - 90; 




// structure.addEventListener('mousedown', function structure(){
//   canv.addEventListener('mousedown', function(e){
//     ctx.fillStyle = colorPen.value; // Цвет квадрата по стандарту черн 
//     ctx.arc(e.clientX, e.clientY, 30, 0, Math.PI * 2);
//     ctx.fill();
//   });
// });

// mouse

circle.addEventListener('mousedown', function circleMouse(){
  canv.addEventListener('mousedown', function(e){
    ctx.fillStyle = colorPen.value; // Цвет квадрата по стандарту черн 
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 30, 0, Math.PI * 2);
    ctx.fill();
  });
});

// touch
circle.addEventListener('touchstart', function circleTouch(){
  canv.addEventListener('touchstart', function(e){
    ctx.fillStyle = colorPen.value; // Цвет квадрата по стандарту черн 
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 30, 0, Math.PI * 2);
    ctx.fill();
  });
});
