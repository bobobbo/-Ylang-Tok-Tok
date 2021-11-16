//드래그
$(document).ready(function(){
    $( function() {
      $("#draggable1").draggable();
    });
    $( function() {
      $("#draggable2").draggable();
    });
    $( function() {
      $("#draggable3").draggable();
    });
    $( function() {
      $("#draggable4").draggable();
    });
    $( function() {
      $("#draggable5").draggable();
    });
    $( function() {
      $("#draggable6").draggable();
    });
    $( function() {
      $("#draggable7").draggable();
    });
  
    document.onmousemove = function(){
      var x = event.clientX * 100 / window.innerWidth + "%";
      var y = event.clientY * 100 / window.innerHeight + "%";
   
      // for(var i=0;i<2;i++){
      //   pupils[i].style.left = x;
      //   pupils[i].style.top = y;
      //   pupils[i].style.transform = "translate(-"+x+", -"+y+")";
      // }
    }
  
  });