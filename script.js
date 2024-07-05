
var i = 0
var paragraph = document.getElementById("typed-text")
var text = "hello.my name is alex burton.welcome to my personal portfolio website.this is me ------>"
var cursor = "|"
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

document.addEventListener('DOMContentLoaded', function() {
  // Get a reference to the fixed header element
  var header = document.querySelector('.fixed-header');

  // Add an event listener for the scroll event
  window.addEventListener('scroll', function() {
      // Get the current scroll position
      var scrollPosition = window.scrollY;

      // Change the background color of the header based on the scroll position
      if (scrollPosition > 100) {
          header.style.backgroundColor = 'darkblue';
      } else {
          header.style.backgroundColor = 'coral';
      }
  });
});