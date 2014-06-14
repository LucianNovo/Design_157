// JavaScript Document

$(document).ready(function() {
	console.log("Ready and willing.");
	//CHANGE THE DIMENSIONS OF THE POCKESCREEN
	$('#pockescreen_html').width($('rect#pockescreen')[0].getBoundingClientRect().width);
	$('#items_screen').width($('rect#pockescreen')[0].getBoundingClientRect().width);
	$('#pockescreen_html').height($('rect#pockescreen')[0].getBoundingClientRect().height);
	$('#items_screen').height($('rect#pockescreen')[0].getBoundingClientRect().height);

	$("#items_screen").css({left: $('rect#pockescreen')[0].getBoundingClientRect().left});
	$("#items_screen").css({left: $('rect#pockescreen')[0].getBoundingClientRect().left});

	$("#items_screen").css({top: $('rect#pockescreen')[0].getBoundingClientRect().top});
    $("#items_screen").css({top: $('rect#pockescreen')[0].getBoundingClientRect().top});

    //CHANGE THE DIMENSIONS/POSITIONING OF THE TEXT SCREEN
	$('#interactive_text').width($('rect#textscreen')[0].getBoundingClientRect().width);
	$('#interactive_text').height($('rect#textscreen')[0].getBoundingClientRect().height);

	$("#interactive_text").css({left: $('rect#textscreen')[0].getBoundingClientRect().left});
    $("#interactive_text").css({top: $('rect#textscreen')[0].getBoundingClientRect().top});

    // $('#pocketext').fontStretch();
    // $('polygon#up').click(function(){
    // 	//change svg

    // });
    // $('polygon#down').click(function(){});
    // $('polygon#right').click(function(){});
    // $('polygon#left').click(function(){});

	$( window ).resize(function() {
	  //CHANGE THE DIMENSIONS OF THE POCKESCREEN *DYNAMICALLY
	  $('#pockescreen_html').width($('rect#pockescreen')[0].getBoundingClientRect().width);
	  $('#items_screen').width($('rect#pockescreen')[0].getBoundingClientRect().width);
	  $('#pockescreen_html').height($('rect#pockescreen')[0].getBoundingClientRect().height);
	  $('#items_screen').height($('rect#pockescreen')[0].getBoundingClientRect().height);


	  $("#items_screen").css({left: $('rect#pockescreen')[0].getBoundingClientRect().left});
	  $("#items_screen").css({left: $('rect#pockescreen')[0].getBoundingClientRect().left});

	  $("#items_screen").css({top: $('rect#pockescreen')[0].getBoundingClientRect().top});
	  $("#items_screen").css({top: $('rect#pockescreen')[0].getBoundingClientRect().top});
	

    //CHANGE THE DIMENSIONS/POSITIONING OF THE TEXT SCREEN *DYANMICALLY
	$('#interactive_text').width($('rect#textscreen')[0].getBoundingClientRect().width);
	$('#interactive_text').height($('rect#textscreen')[0].getBoundingClientRect().height);

	$("#interactive_text").css({left: $('rect#textscreen')[0].getBoundingClientRect().left});
    $("#interactive_text").css({top: $('rect#textscreen')[0].getBoundingClientRect().top});
	})

	replaceWindex(0);
});

var pockemon = [ ["Swiss Armeon","Double-Edge","Uncork","Defense Curl","Super Cut","Toothpick-Pluck","assets/imgs/svgs/items_armory/generation1/pockemon-00.svg"],
				 [ "USBinix", "Thunder Load","Giga Save","Bolt Unlock","Contact Shock","Zap Cannon","assets/imgs/svgs/items_armory/generation1/pockemon-01.svg"],
				 [ "iPhoenix", "Illuminade","Discharge","Snap-attack","Song Decipher","SMSmash","assets/imgs/svgs/items_armory/generation1/pockemon-02.svg"],
				 [ "Callipie", "Inkwhirl","Cap-attack","Curlsive","45˚ Burn","Thick-Thin-Wind","assets/imgs/svgs/items_armory/generation1/pockemon-03.svg"],
				 [ "Keyzor", "Alarmarm","Rocklock","Disarm","Homeown","Master-unlock","assets/imgs/svgs/items_armory/generation1/pockemon-04.svg"],
				 ["current", 0]
];

var dpads = [[1, 'down',"assets/imgs/svgs/down.html"],[2, 'left',"assets/imgs/svgs/left.svg"],[3,'up',"assets/imgs/svgs/up.svg"],[4,'right',"assets/imgs/svgs/right.svg"]];


function newPockemon(direction){
	if(direction < 0){
		replaceWindex(++pockemon[5][1]);
	}
	else{
		replaceWindex(--pockemon[5][1]);
	}
}

function replaceWindex(index){
	if(index >= 5){
		index = 0;
	}
	else if(index < 0){
		index = 4;
	}
	$('#pockemon_name').text(pockemon[index][0]);
	$('#items_screen')[0].src = pockemon[index][6];
	for(var i=0; i<5; i++){
		$('#pockebilities li')[i].innerHTML = pockemon[index][i+1];
	}
}