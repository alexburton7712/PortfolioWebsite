
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

document.addEventListener('DOMContentLoaded', typeWriter());

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate a value between 0 and 1 based on scroll position
  var scrollFraction = scrollTop / maxScroll;

  // Interpolate between white (255, 255, 255) and black (0, 0, 0)
  var red = 255 - Math.floor(255 * scrollFraction);
  var green = 255 - Math.floor(255 * scrollFraction);
  var blue = 255 - Math.floor(255 * scrollFraction);

  // Set the new background color
  document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
});

