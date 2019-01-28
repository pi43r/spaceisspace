var audio, playbtn;
function initAudioPlayer(){
  audio = document.getElementsByTagName('audio')[0];

  // Set object references
	playbtn = document.getElementById("playpausebtn");
	visuals = document.getElementById("audiovisualizer");
  // Add Event Handling
	playbtn.addEventListener("click",playPause);

	playPause();
  // Functions
	function playPause(){
		if(audio.paused){
		    audio.play();
		    playbtn.style.background = "url(img/Pause.png) no-repeat";
				playbtn.style.backgroundSize = "contain";
				visuals.classList.add("pulse");
      } else {
				audio.pause();
		    playbtn.style.background = "url(img/Play.png) no-repeat";
        playbtn.style.backgroundSize = "contain";
				visuals.classList.remove("pulse");
	    }
	}
}

window.addEventListener("load", initAudioPlayer);
