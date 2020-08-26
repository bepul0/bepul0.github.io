var slideIndex = 1;
var timer;
var playing = true;

showSlides(slideIndex);

var pauseButton1 = document.getElementById("pause1"); // add following line for add new slide show image
var pauseButton2 = document.getElementById("pause2");
var pauseButton3 = document.getElementById("pause3");

function pauseSlides1(n) {
  // add following function for add new slide show image
  if (playing) {
    pauseButton1.innerHTML =
      '<img src="https://img.icons8.com/officel/15/000000/circled-play.png"/>';
    playing = false;
    clearInterval(timer);
  } else {
    pauseButton1.innerHTML =
      '<img src="https://img.icons8.com/offices/15/000000/circled-pause.png"/>';
    playing = true;
    timer = setTimeout(nextSlide, 2000);
  }
}

function pauseSlides2(n) {
  if (playing) {
    pauseButton2.innerHTML =
      '<img src="https://img.icons8.com/officel/15/000000/circled-play.png"/>';
    playing = false;
    clearInterval(timer);
  } else {
    pauseButton2.innerHTML =
      '<img src="https://img.icons8.com/offices/15/000000/circled-pause.png"/>';
    playing = true;
    timer = setTimeout(nextSlide, 2000);
  }
}
function pauseSlides3(n) {
  if (playing) {
    pauseButton3.innerHTML =
      '<img src="https://img.icons8.com/officel/15/000000/circled-play.png"/>'; //here
    playing = false;
    clearInterval(timer);
  } else {
    pauseButton3.innerHTML =
      '<img src="https://img.icons8.com/offices/15/000000/circled-pause.png"/>'; // here
    playing = true;
    timer = setTimeout(nextSlide, 2000);
  }
}

function plusSlides(n) {
  clearInterval(timer);
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  clearInterval(timer);
  showSlides((slideIndex = n));
}
function nextSlide() {
  clearInterval(timer);
  showSlides((slideIndex = slideIndex + 1));
}

function showSlides(n) {
  playing = true;

  pauseButton1 = document.getElementById("pause1"); // add following line for add new slide show image
  pauseButton1.innerHTML =
    '<img src="https://img.icons8.com/offices/15/000000/circled-pause.png"/>'; // add following line for add new slide show image

  pauseButton2 = document.getElementById("pause2");
  pauseButton2.innerHTML =
    '<img src="https://img.icons8.com/offices/15/000000/circled-pause.png"/>';

  pauseButton3 = document.getElementById("pause3");
  pauseButton3.innerHTML =
    '<img src="https://img.icons8.com/offices/15/000000/circled-pause.png"/>';

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  timer = setTimeout(nextSlide, 2000);
}
