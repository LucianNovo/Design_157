// JavaScript Document

$(document).ready(function() {
	console.log("Ready and willing.");

	$('#pockescreen_html').width($('rect#pockescreen')[0].getBoundingClientRect().width);
	$('#items_screen').width($('rect#pockescreen')[0].getBoundingClientRect().width);

	$("#items_screen").css({left: $('rect#pockescreen')[0].getBoundingClientRect().left});
	$("#items_screen").css({left: $('rect#pockescreen')[0].getBoundingClientRect().left});

	$("#items_screen").css({top: $('rect#pockescreen')[0].getBoundingClientRect().top});
    $("#items_screen").css({top: $('rect#pockescreen')[0].getBoundingClientRect().top});

	$( window ).resize(function() {
	  // document.querySelector('#pockescreen_html').width($('#pockescreen')[0].getBoundingClientRect().width);
	  // document.querySelector('#items_screen').width($('#pockescreen')[0].getBoundingClientRect().width);
	
	  $('#pockescreen_html').width($('rect#pockescreen')[0].getBoundingClientRect().width);
	  $('#pockescreen_html').width($('rect#pockescreen')[0].getBoundingClientRect().width);

	  // $('#items_screen').width($('rect#pockescreen')[0].getBoundingClientRect().width);
	  // $('#items_screen').width($('rect#pockescreen')[0].getBoundingClientRect().width);
	  $('#items_screen').height($('rect#pockescreen')[0].getBoundingClientRect().height);
	  $('#items_screen').height($('rect#pockescreen')[0].getBoundingClientRect().height);


	  $("#items_screen").css({left: $('rect#pockescreen')[0].getBoundingClientRect().left});
	  $("#items_screen").css({left: $('rect#pockescreen')[0].getBoundingClientRect().left});

	  $("#items_screen").css({top: $('rect#pockescreen')[0].getBoundingClientRect().top});
	  $("#items_screen").css({top: $('rect#pockescreen')[0].getBoundingClientRect().top});
	})

});