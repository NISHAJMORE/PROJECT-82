canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");
 
color="black";
width_of_line = 2 ;

canvas.addEventListener("mouseup " , my_mouseup );
function my_mouseup(e)
{
    mouseEvent ="mouseUP"; 
}

canvas.addEventListener("mouseleave " , my_mouseleave );
function my_mouseup(e)
{
    mouseEvent ="mouseleave"; 
}

canvas.addEventListener("mousemove" , my_mousemove);
 
function my_mousemove(e)
{

    currrent_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    currrent_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
    if(mouseEvent== "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x , last_position_of_y);
        ctx.lineTo(currrent_position_of_mouse_x,currrent_position_of_mouse_y);
        ctx.stroke();

    }

   last_position_of_x= currrent_position_of_mouse_x;
   last_position_of_y= currrent_position_of_mouse_y;



}

function my_touchmove(e)
{

    currrent_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    currrent_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
    
    if(mouseEvent== "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_touch_x , last_position_of_touch_y);
        ctx.lineTo(currrent_position_of_mouse_touch_x,currrent_position_of_mouse_touch_y);
        ctx.stroke();

    }

   last_position_of_touch_x= currrent_position_of_mouse_touch_x;
   last_position_of_touch_y= currrent_position_of_mouse_touch_y;



}


















