var getClick =document.querySelectorAll(".drum");

// for (i in getClick){
//  getClick[i].addEventListener("click", function () { alert("I got clicked!")});
// }



// ALTERNATIVELY

// function play(soundName){
//  var audio = new Audio("sounds/" + soundName + ".mp3");
//  return audio.play()
// }
 
for (i = 0; i < getClick.length; i++) {

  // CLICK EVENT
  getClick[i].addEventListener("click", function (){
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML); 
      buttonAnimnation(buttonInnerHTML);
  })
}


  // KEYBOARD EVENT
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimnation(even.key);
})


function makeSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a": 
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();    
      break;
    case "s":
      var  snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j" :
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play()
    default:
        console.log("buttonInnerHTML");
}
}

function buttonAnimnation (currentKey){

 var activeButton = document.querySelector("." + currentKey);

      activeButton.classList.add("class", "pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);    
  }