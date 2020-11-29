var 
canv        = document.querySelector('#canvas'),
ctx         = canv.getContext("2d");

var
  pencil      = document.querySelector('#pencil'),
  brush       = document.querySelector('#brush');
  eraser      = document.querySelector('#eraser'),
  structure   = document.querySelector('#structure'),
  circle      = document.querySelector('#circle'),
  saveDraw    = document.querySelector('#save'),
  replayDraw  = document.querySelector('#replay');

var
  colorBg     = document.querySelector('#bgColor'),
  sizePen     = document.querySelector('#inprange'),
  colorPen    = document.querySelector('#penColor');

var
  isMouseDown = false;
  isMouseDown1 = false;
  
  canv.width = window.innerWidth;  
  canv.height = window.innerHeight - 90; 
  
  canv.style.background = colorBg.value;
  
  
  // structure.addEventListener('mousedown', function structure(){
    //   canv.addEventListener('mousedown', function(e){
      //     ctx.fillStyle = colorPen.value; // Цвет квадрата по стандарту черн 
      //     ctx.arc(e.clientX, e.clientY, 30, 0, Math.PI * 2);
      //     ctx.fill();
      //   });
      // });
      
      // Круг 
      
      // mouse
    circle.addEventListener('mousedown', function circleMouse(){
      canv.addEventListener('mousedown', function(e){
        ctx.fillStyle = colorPen.value; // Color
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, sizePen.value, 0, Math.PI * 2);
        ctx.fill();
      });
    });

  // touch
  circle.addEventListener('touchstart', function circleTouch(){
    canv.addEventListener('touchstart', function(e){
      ctx.fillStyle = colorPen.value; 
      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, sizePen.value, 0, Math.PI * 2);
      ctx.fill();
    });
  });

// // Карандаш 
//   pencil.addEventListener('mousedown', function pencilMouse(){

//     canv.addEventListener('mousedown', function() {
//       isMouseDown   = true;
//     })

//     canv.addEventListener('mouseup', function() {
//       isMouseDown   = false;
//     })

//     canv.addEventListener('mousemove', function(e){
//       ctx.fillStyle = colorPen.value; // Color

//       if( isMouseDown )
//       {
//         ctx.lineTo(e.clientX, e.clientY);
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.moveTo(e.clientX, e.clientY)
//       }
//     });
//   });

// Кисть

  // mouse
  brush.addEventListener('mousedown', function brushMouse(){

    canv.addEventListener('mousedown', function() {
      isMouseDown   = true;
    })

    canv.addEventListener('mouseup', function() {
      isMouseDown   = false;
      ctx.beginPath();
    })

    ctx.lineWidth   = sizePen.value * 2;
    canv.addEventListener('mousemove', function(e){
      ctx.fillStyle = colorPen.value; // Color

      if( isMouseDown )
      {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = colorPen.value;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, sizePen.value, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY)
      }
    });
  });