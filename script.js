"use strict";

// play, pause and unpause background sound
// change button text
function bgSound() {

    let audio;
    
    // Play the audio on page load
    window.addEventListener("load", init, false);
    function init() {
        audio = document.getElementsByTagName("audio")[0];
        audio.play();
    }

    //
    // Control sound functions e.g pause and unpause options
    // attached to the button. 
    // Also change text from mute to unmute, vice versa.
    //

    // get button using id
    let controlButton = document.getElementById("controlButton");

    // when button is clicked, the sound stops and clicked again,
    // sound resumes.
    // also, changes button text
    controlButton.addEventListener("click", useButton, false);

    // call on the two functions
    function useButton() {
        playPause();
        changeButton();
    }

    // Pause and unpause the audio
    function playPause() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    // change the text of the audio
    function changeButton() {
        if (audio.paused) {
            document.getElementById("bu1").innerHTML = "unmute";
        } else {
            document.getElementById("bu1").innerHTML = "mute";
        }
    }

}
bgSound();