function typeWriter() {
    var i = 0
    var paragraph = document.getElementById("about-me-text")
    var text = "hello.\nmy name is alex burton."
    var speed = 1;

    if (i < text.length) {
        paragraph.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
}

// document.addEventListener('DOMContentLoaded', typeWriter())