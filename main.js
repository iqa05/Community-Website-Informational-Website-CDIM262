const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav_links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

// header container
ScrollReveal().reveal(".header_container h1", scrollRevealOption);

ScrollReveal().reveal(".header_container h4", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_container .btn", {
    ...scrollRevealOption,
    delay: 1000,
});



 
//end of header section




// accomodations container

    

ScrollReveal().reveal(".accomodations__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".accomodations__card__content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
  });
 
//end of accomodation section




// gallery section

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//end of gallery section




