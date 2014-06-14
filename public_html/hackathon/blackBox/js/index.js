var ui_colors = {
  cancel: '#FF0521',
  ok: 	'#00B636'
}


  //creating test variables
$('.slide').hammer().on('drag', function(event) {
  var offset, zero;
  // Prevent the browser from scrolling on mobile
	event.gesture.preventDefault();
  
  // Calculate where left=0 in relation to the parent
  offset = $('.slider-list').offset();
  zero = offset.left;
    
  $(this).offset({ left: zero + event.gesture.deltaX });

  if( event.gesture.deltaX < 0 ) { //if you move it left 
	  $(this).parent().css('background', ui_colors.cancel);
  } else { //turn it red
	  $(this).parent().css('background', ui_colors.ok);
	} //else turn it green
});

$('.slide').hammer().on('release', function(event) {
  $(this).animate({ left: 0 }, 100, function () {
	  $(this).parent().css('background', '#fff');
  });
});