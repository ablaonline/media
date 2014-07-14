/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){

    
$('#da-slider').cslider({
 
    current     : 0,   
    // index of current slide
     
    bgincrement : 50,  
    // increment the background position
    // (parallax effect) when sliding
     
    autoplay    : true,
    // slideshow on / off
     
    interval    : 4000 
    // time between transitions
     
});  


     $("#contenedorNotiCultural").liteAccordion({
     "theme":"stitch",
     "activateOn":"mouseover",
     "easing": "easeOutBounce",
     "autoPlay":true,
     "cycleSpeed":4000,
     "enumerateSlides":false,
     "pauseOnHover":true});
     
     
     
     
setTimeout(function(){
  $("#contenedorNotiCultural").fadeIn("fast");
  
}, 200);     
     

   
});



    

 
    
