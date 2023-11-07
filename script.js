console.log('load script')

let athletsSlideIndex = 1;
let playersSlideIndex = 1
showAthletsSlides(athletsSlideIndex);
showPlayersSlides(playersSlideIndex);

// display current athlets slide
function currentAthletsSlide(n) {
  showAthletsSlides(athletsSlideIndex = n);
}

// display current players slide
function currentPlayersSlide(n) {
    showPlayersSlides(playersSlideIndex = n);
}

function showAthletsSlides(n) {
  let i;
  let slides = document.getElementsByClassName("athletsSlides");
  let dots = document.getElementsByClassName("athletsDot");

  // hide all athlets slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // remove active from all athlets dot
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // update to display selected athlet slide
  slides[athletsSlideIndex-1].style.display = "block";
  dots[athletsSlideIndex-1].className += " active";
}

function showPlayersSlides(n) {
    let i;
    let slides = document.getElementsByClassName("playersSlides");
    let dots = document.getElementsByClassName("playersDot");
  
    // hide all players slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // remove active from all players dot
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    // update to display selected player slide
    slides[playersSlideIndex-1].style.display = "block";
    dots[playersSlideIndex-1].className += " active";
  }