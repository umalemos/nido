/* NAVBAR */
var navBtnWidth = $('.navbar a').css('width');

$('.navbar a').mouseenter(e => {
  $(e.target).clearQueue();
  $(e.target).animate({
    width: $(e.target).get(0).scrollWidth
  }, 300, () => {
    $(e.target).width('auto');
  });
});

$('.navbar a').mouseout(e => {
  $(e.target).animate({
    width: navBtnWidth
  }, 300);
});


/* SLIDE FUNÇÕES */
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  speed: 900,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Onload

window.onload = function() {
  document.getElementById('logo1').className = 'loaded';
  document.getElementById('img-pulseira').className = 'loaded';
};


var element = document.getElementById("txt-teste");
element.scrollIntoView({behavior: "smooth", block: "end"});

  /*document.getElementById('txt-teste').className = 'loaded'; 
  document.getElementById('landing-page').className = 'loaded'; */


$(window).scroll(function() {
	if ($(this).scrollTop() <= 800){  
    $('#landing-page').removeClass("img-down");
    $('#txt-teste').removeClass("txt-up");
    $('#scroll-pg').removeClass("scroll-none");
  } 
  if ($(this).scrollTop() > 50){  
      $('#landing-page').addClass("img-down");
      $('#txt-teste').addClass("txt-up");
  }
  if ($(this).scrollTop() > 800){  
    $('#scroll-pg').addClass("scroll-none");
  }
});

// Animar no scroll
var scroll = window.requestAnimationFrame ||
  // IE Fallback
function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
function loop() {
    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
    scroll(loop);
}
loop();


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

