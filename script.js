var i = 0
var paragraph = document.getElementById("typed-text")
var text = "hello. my name is alex burton."
var speed = 75;

function typeWriter() {
    if (i < text.length) {
      if(i == 6) {
        paragraph.innerHTML += '<br>';
      }
      else {
        paragraph.innerHTML += text.charAt(i);
      }
 //       paragraph.innerHTML += '<span id="cursor"></span>'; // Add cursor
        i++;
        setTimeout(typeWriter, speed);
      }
}

document.addEventListener('DOMContentLoaded', typeWriter())