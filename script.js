
var i = 0
var paragraph = document.getElementById("typed-text")
var text = "hello.my name is alex burton.welcome to my personal portfolio website."
var speed = 75;

function insertBreak() {
  paragraph.innerHTML += '<br>';
}

function typeWriter() {
    if (i < text.length) {
        paragraph.innerHTML += text.charAt(i);
        if(text.charAt(i) == '.' && i != text.length - 1) {
          insertBreak();
        }
        i++;
        setTimeout(typeWriter, speed);
      }
}

document.addEventListener('DOMContentLoaded', typeWriter())