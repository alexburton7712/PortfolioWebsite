
var i = 0
var paragraph = document.getElementById("typed-text")
//using '~' as a line break character
var text = "hello.~my name is alex burton.~i am a software engineer from ASU specializing in machine learning.~this is me ------>"
var speed = 75;

function insertBreak() {
  paragraph.innerHTML += '<br>';
}

function typeWriter() {
    if (i < text.length) {
        if(text.charAt(i) == '~') {
          insertBreak();
          i++;
          setTimeout(typeWriter, speed);
          return;
        }
        paragraph.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
}

document.addEventListener('DOMContentLoaded', typeWriter());

function hexToRgb(hex) {
  var bigint = parseInt(hex.slice(1), 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;
  return [r, g, b];
}

// Interpolate between two colors
function interpolateColor(startColor, endColor, factor) {
  var result = startColor.slice();
  for (var i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (endColor[i] - result[i]));
  }
  return result;
}

// Convert RGB array to RGB string
function rgbToString(rgb) {
  return 'rgb(' + rgb.join(',') + ')';
}

var startColorHex = '#232323'; // Start color
var endColorHex = '#ffffff'; // End color

var startColorRgb = hexToRgb(startColorHex);
var endColorRgb = hexToRgb(endColorHex);

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate a value between 0 and 1 based on scroll position
  var scrollFraction = scrollTop / maxScroll;

  // Interpolate between black (0, 0, 0) and white (255, 255, 255)
  var interpolatedColor = interpolateColor(startColorRgb, endColorRgb, scrollFraction);

  // Set the new background color
  document.body.style.backgroundColor = rgbToString(interpolatedColor);
});

