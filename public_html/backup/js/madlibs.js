console.log("Ready and able.");

document.cah.onsubmit=process;

function process(){
	console.log(" hey.");

	//collect the variable values!!!
	var adj_1  = document.cah.adj.value;
	var n_1    = document.cah.nn.value;
	// var adv_1  = document.cah.advb.value;

	var msg = document.getElementById("fittext");
	msg.innerHTML = "Step 1: " + adj_1  + "<br/> Step 2: " + n_1 + "<br/>Step 3: Profit.";
	//"Step 3: " + adj_1

	//clear the overlay
    var theOverlay = document.getElementById( 'overlay' );
    theOverlay.className = theOverlay.className + " hide"; 

    //clear the blur
    var theResults = document.getElementById( 'fittext' );
    theResults.className = theResults.className + " off"; 

	document.cah.results;

	return false;
}