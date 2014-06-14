// JavaScript Document
$(document).ready(function() {
  console.log("Ready and willing.");

  function _run() {
      console.log("Ready and willing.");
      // The video to load.
      var videoID = "1qhL9LcshHk"
      // Lets Flash from another domain call JavaScript
      var params = { allowScriptAccess: "always" };
      // The element id of the Flash embed
      var atts = { id: "ytPlayer" };
      // All of the magic handled by SWFObject (http://code.google.com/p/swfobject/)

      var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          x = w.innerWidth || e.clientWidth || g.clientWidth,
          y = w.innerHeight|| e.clientHeight|| g.clientHeight;

      swfobject.embedSWF("http://www.youtube.com/v/" + videoID + "?version=3&enablejsapi=1&loop=1&playlist=,&playerapiid=player1&showinfo=0&modestbranding=0&autoplay=1&controls=0&disablekb=1&rel=0", "videoDiv", x, y, "9", null, null, params, atts);  
    console.log("youtube player created");
  }

  // This function is called when an error is thrown by the player
  function onPlayerError(errorCode) {
  	alert("An error occured of type:" + errorCode);
  }

  // This function is automatically called by the player once it loads
  function onYouTubePlayerReady(playerId) {
  	console.log("locked and loaded");
  	ytplayer = document.getElementById("ytPlayer");
  	ytplayer.addEventListener("onError", "onPlayerError");
  }

  google.setOnLoadCallback(_run);
});