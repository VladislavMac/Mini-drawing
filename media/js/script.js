var 
  ctx         = canv.getContext("2d"), 
  canv        = document.querySelector('#canvas');

var
  pen         = document.querySelector('#pen'),
  eraser      = document.querySelector('#eraser'),
  saveDraw    = document.querySelector('#save'),
  replayDraw  = document.querySelector('#replay');

var
  colorBg     = document.querySelector('#colorBg'),
  sizePen     = document.querySelector('#sizePen'),
  colorPen    = document.querySelector('#colorPen');


canv.width = window.innerWidth;  
canv.height = window.innerHeight - 90; 

