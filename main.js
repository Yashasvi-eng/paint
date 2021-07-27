var MouseEvent = "empty";
var lastposx , lastposy;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black"; width_of_line = 1;
 canvas.addEventListener("mousedown", my_mousedown);
 function my_mousedown(e){
     MouseEvent = "mousedown";
    
 }
 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;
     if(MouseEvent=="mousedown"){
        
         ctx.beginPath();
         ctx.storkeStyle = color;
         ctx.lineWidth = width_of_line;
         ctx.moveTo(lastposx,lastposy);
         console.log(lastposx,lastposy);
         console.log(current_position_of_mouse_x,current_position_of_mouse_y);
         ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
         ctx.stroke();

     }
     lastposx = current_position_of_mouse_x;
     lastposy = current_position_of_mouse_y;
 }

 canvas.addEventListener("mouseup", my_mouseup); function my_mouseup(e) { 
     mouseEvent = "mouseUP";
 } canvas.addEventListener("mouseleave", my_mouseleave); function my_mouseleave(e) { mouseEvent = "mouseleave";
 }