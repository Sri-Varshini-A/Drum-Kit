//Handles Click 
var drumslen = document.querySelectorAll(".drum").length;
for(var i=0; i<drumslen; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonText = this.innerHTML;
        makeSound(buttonText);
        buttonAnimation(buttonText);
    });   
}

//Handles key press
document.addEventListener("keypress", function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});

//Play Sound
function makeSound(key)
{
    var path = "";
    switch(key)
    {
        case 'w':
            path = "./sounds/tom-1.mp3";
            break;
        
        case 'a':
            path = "./sounds/tom-2.mp3";
            break;

        case 's':
            path = "./sounds/tom-3.mp3";
            break;

        case 'd':
            path = "./sounds/tom-4.mp3";
            break;

        case 'j':
            path = "./sounds/snare.mp3";
            break;

        case 'k':
            path = "./sounds/kick-bass.mp3";
            break;

        case 'l':
            path = "./sounds/crash.mp3";
            break;

        default: 
            console.log("button is clicked!");
    }

    var audio = new Audio(path);
    audio.play();      
}

//ButtonAnimation
function buttonAnimation(key)
{
    var button = document.querySelector("."+key);
    button.classList.add("pressed");

    setTimeout(function(){button.classList.remove("pressed")},100);
}
