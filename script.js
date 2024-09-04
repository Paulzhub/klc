// Reset scroll top

window.onload = function() {
    window.scrollTo(0, 0);
};

// Slideshow

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");

  // Handle wrapping around slides
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }

  // Hide all slides
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].classList.remove("show");
  }

  // Show the correct slide and trigger the fade-in effect
  x[slideIndex-1].style.display = "block";  // Make the slide visible
  setTimeout(function() {   // Add a delay to ensure opacity is applied after display change
    x[slideIndex-1].classList.add("show");  // Trigger the fade-in
  }, 10);  // Small delay to allow the browser to register the display change before applying opacity
}
