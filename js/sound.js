$(document).on("keyup", handleKeyUp);

    function handleKeyUp(event){
        if(event.keyCode == 49){
            var one = new Audio();
            one.src = "audio/numberOne.mp3";
            one.play();
        }
        else if(event.keyCode == 50){
            var one = new Audio();
            one.src = "audio/numberTwo.mp3";
            one.play();
        }
        else if(event.keyCode == 51){
            var one = new Audio();
            one.src = "audio/numberThree.mp3";
            one.play(); 
        }
        else if(event.keyCode == 38){
            var one = new Audio();
            one.src = "audio/moveUp.mp3";
            one.play();
        }
        else if(event.keyCode == 40){
            var one = new Audio();
            one.src = "audio/moveDown.mp3";
            one.play();
        }
        else if(event.keyCode == 37){
            var one = new Audio();
            one.src = "audio/left.mp3";
            one.play();
        }
        else if(event.keyCode == 39){
            var one = new Audio();
            one.src = "audio/right.mp3";
            one.play();
        }
        else{
            alert("Bitte geben Sie nur die Tasten 1,2,3,4,linke Pfeil Taste, rechte Pfeil Taste, oberen Pfeil Taste oder unteren Pfeil Taste ein!")
        }
    }