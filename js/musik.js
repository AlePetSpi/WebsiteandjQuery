$(document).ready(function(){
    var vid = document.getElementById("Muezik");
    vid.volume = 0.5;
    console.log(vid.volume);
});
$(document).on("keyup", handleKeyUp);
    var a1 = document.createElement('audio');a1.src = "audio/Galactic_Damages.mp3";
    var a2 = document.createElement('audio');a2.src = "audio/Finding_the_Balance.mp3";
    var a3 = document.createElement('audio');a3.src = "audio/Epic_Unease.mp3";
    var a4 = document.createElement('audio');a4.src = "audio/Blue_Skies.mp3";
    var audiolist = [a1,a2,a3,a4]
    
    function handleKeyUp(event){
        if(event.keyCode == 49){
            for (let index = 0; index < audiolist.length; index++) {
                if(index == 0){
                    audiolist[index].setAttribute('volume', '0.2');
                    audiolist[index].play();
                    $('#musikplayer' + index).css("font-weight", "bold")
                }else{
                    $('#musikplayer' + index).removeAttr("style");
                    $('#musikplayer').removeAttr("style");
                    audiolist[index].pause();
                } 
            }
        }
        else if(event.keyCode == 50){
            for (let index = 0; index < audiolist.length; index++) {
                if(index == 1){
                    audiolist[index].setAttribute('volume', '0.2');
                    audiolist[index].play();
                    $('#musikplayer' + index).css("font-weight", "bold")
                }else{
                    $('#musikplayer' + index).removeAttr("style");
                    $('#musikplayer').removeAttr("style");
                    audiolist[index].pause();
                } 
            }
        }
        else if(event.keyCode == 51){
            for (let index = 0; index < audiolist.length; index++) {
                if(index == 2){
                    audiolist[index].setAttribute('volume', '0.2');
                    audiolist[index].play();
                    $('#musikplayer' + index).css("font-weight", "bold")
                }else{
                    $('#musikplayer' + index).removeAttr("style");
                    $('#musikplayer').removeAttr("style");
                    audiolist[index].pause();
                } 
            }
        }
        else if(event.keyCode == 52){
            for (let index = 0; index < audiolist.length; index++) {
                if(index == 3){
                    audiolist[index].setAttribute('volume', '0.2');
                    audiolist[index].play();
                    $('#musikplayer' + index).css("font-weight", "bold")
                }else{
                    $('#musikplayer' + index).removeAttr("style");
                    $('#musikplayer').removeAttr("style");
                    audiolist[index].pause();
                } 
            }
        }
        else if(event.keyCode == 81){
            for (let index = 0; index < audiolist.length; index++) {
                audiolist[index].pause();
                audiolist[index].currentTime = 0;
                $('#musikplayer' + index).removeAttr("style");
            }   
            $('#musikplayer').css("font-weight", "bold")
        }
        else{
            alert("Bitte geben Sie nur die Tasten 1,2,3,4 oder Q ein!")
        }
    }