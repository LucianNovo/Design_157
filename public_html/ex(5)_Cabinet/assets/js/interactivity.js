function onYouTubePlayerReady(playerId) {
  console.log("player is ready");

  var timeTasks  = ["hephaestus","fabradeus","casteous","apollo","hammid","planning"];
  var timePoints = [8.45, 87.53, 156.47, 164.92, 208.03, 245.3, 253.75, 266.27, 357.8, 366.3, 381.1, 423.9, 432.2, 481.4, 527.3, 535.75, 570.79, 608.7];

  $(".tool").click(function(){
    console.log("Tool clicked");
    console.log(this.id);

    ytp = document.getElementById("ytPlayer");
    
    console.log(videoTimer);
    clearInterval(videoTimer);
    var timePointsIndex = timeTasks.indexOf(this.id) + 1;

    //go to the begining of the video.
    ytp.seekTo(timePoints[timePointsIndex * 3 - 3],1);
    console.log("begining of video: " + timePoints[timePointsIndex * 3 - 3]);

    //go to the begining of the loop segment.
    console.log("loop begining: " + timePoints[timePointsIndex * 3 - 2]);
    console.log("loop ending: " + timePoints[timePointsIndex * 3 - 1]);
    console.log("loop length: " + (timePoints[timePointsIndex * 3 - 1] - timePoints[timePointsIndex * 3 - 2]));

    // function(){console.log("ytplayer");ytPlayer.seekTo(0);}

    startPoint = timePoints[timePointsIndex * 3 - 2];
    loopLength = (Math.round((timePoints[timePointsIndex * 3 - 1] - timePoints[timePointsIndex * 3 - 2])* 1000) / 1000) * 1000;

    videoTimer = setInterval(function(){console.log("Going to: " + startPoint); ytPlayer.seekTo(startPoint);}, loopLength);
  });

  var videoTimer = setInterval(function(){console.log("Interval to 0"); ytPlayer.seekTo(0);},8450);

  
  //footer interactivity
  // 'use strict';     
  // var body = document.body,         
  // mask = document.createElement("div"), slideMenuBottom = document.querySelector( ".slide-menu-bottom" ), activeNav;
  // mask.className = "mask";

  // toggleSlideBottom.addEventListener( "click", function(){
  //       classie.add( body, "smb-open" );
  //       document.body.appendChild(mask);
  //       activeNav = "smb-open";
  // } );

  // /* slide menu bottom */
  // toggleSlideBottom.addEventListener( "click", function(){
  //     classie.add( body, "smb-open" );
  //     document.body.appendChild(mask);
  //     activeNav = "smb-open";
  // } );     

  // /* hide active menu if mask is clicked */
  // mask.addEventListener( "click", function(){
  //     classie.remove( body, activeNav );
  //     activeNav = "";
  //     document.body.removeChild(mask);
  // } );

  // /* hide active menu if close menu button is clicked */
  // [].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
  //     el.addEventListener( "click", function(){
  //         classie.remove( body, activeNav );
  //         activeNav = "";
  //         document.body.removeChild(mask);
  //     } );
  // });

};
