var extraReading;
var i = 0;
var j = 0;
var k = 0;

var slider1 = document.querySelector('.slider-1');
var slider2 = document.querySelector('.slider-2');
var slider3 = document.querySelector('.slider-3');
var sliderType = [slider1, slider2, slider3];
var sliderButton = document.querySelectorAll('.slider__button');

document.querySelector('.slider__read-button').addEventListener('click', function () {

  if (extraReading.style.display === 'block') {
    extraReading.style.display = 'none';
  } else {
    extraReading.style.display = 'block';
  }
});

document.addEventListener('keyup', function (parametre) {
  if (parametre.keyCode === 39) {
    goRight()
  }
  if (parametre.keyCode === 37) {
    goLeft()
  }
})

document.querySelector('.slider-container__navigator-round.right').addEventListener('click', goRight);

function goRight() {
  sliderType[i].style.display = 'none';
  sliderButton[i].style.backgroundColor = 'gray';
  i++;

  if (i == sliderType.length) {
    i = 0;
  }
  sliderType[i].style.display = 'flex';
  sliderButton[i].style.backgroundColor = 'honeyDew';
}

document.querySelector('.slider-container__navigator-round.left').addEventListener('click', goLeft);

function goLeft() {
  sliderType[i].style.display = 'none';
  sliderButton[i].style.backgroundColor = 'gray';
  i--;

  if (i == -1) {
    i = sliderType.length - 1;
  }
  sliderType[i].style.display = 'flex';
  sliderButton[i].style.backgroundColor = 'honeyDew';
}

for (var j = 0; j < sliderButton.length; j++) {
  sliderButton[j].addEventListener('click', function (aa) {
    k = aa;
    
    sliderType[i].style.display = 'none';
    sliderButton[i].style.backgroundColor = 'gray';
    sliderType[k].style.display = 'flex'; 
    sliderButton[k].style.backgroundColor = 'honeyDew';
    
    i = k; 
    

  }.bind(this, j)); 

}
var submitPopup = document.querySelector('.submit-pop-up');
var formInput = document.querySelector("form");
var submitButton = document.querySelector('#form__button');

document.querySelector('body').addEventListener('click', function (event) { 
  if (submitPopup.classList.contains("open") && (event.target !== submitButton)) {

    submitPopup.classList.remove("open");
  }
})

document.querySelector('#form__button').addEventListener('click', function (e) {
  e.preventDefault();
  if (formInput.checkValidity()) {
    
    submitPopup.classList.add("open");
  } 
})

var dene = document.querySelector('.latest-work').cloneNode(true);
document.querySelector('.latest-work-button').addEventListener('click', function () {

  if (dene.parentNode === document.querySelector("#latest-allworks")) {
    document.querySelector('.latest-work-button').innerHTML = 'See More Model';
    dene.parentNode.removeChild(dene);
  } else { 

    document.querySelector("#latest-allworks").appendChild(dene);
    document.querySelector('.latest-work-button').innerHTML = 'Close Model';
  }
})

var wrapper = document.getElementById("gallery__wrapper");
var galleryButton = document.querySelectorAll('.gallery-button');
var p = 0;
var r = 0;
var direction = '';
document.querySelectorAll('.gallery__container')[0].classList.add('margin-gallery');

document.querySelector('.gallery-button.right').addEventListener('click', function () {
  p++;
  if (direction === 'left') {

    $('.gallery__container:first').addClass('open-gallery');

  } else {

    setTimeout(function () {
      $('.gallery__container:first').addClass('open-gallery');

    }, 4)

    if (p > 1) {

      $('.gallery__container:last').remove();
    }
    $('.gallery__container:first').removeClass('margin-gallery');
    $('.gallery__container:last').clone().insertBefore('.gallery__container:first');
    $('.open-gallery:first').removeClass('open-gallery');
    $('.only-transition:first').removeClass('only-transition');
  }
  direction = 'right';
});

document.querySelector('.gallery-button.left').addEventListener('click', function () {
  r++;
  if (direction === 'right') {

    $('.gallery__container:first').addClass('only-transition').removeClass('margin-gallery').removeClass('open-gallery');

  } else {
    setTimeout(function () {
      $('.gallery__container:first').addClass('only-transition').removeClass('margin-gallery');
    }, 4)

    if (r > 1) {

      $('.gallery__container:first').remove();
      $('.gallery__container:first').addClass('margin-gallery');

    }
    $('.gallery__container:first').clone().removeClass('margin-gallery').insertAfter('.gallery__container:last');
  }
  direction = 'left';
});

var x = false;
var navigatorButton = document.querySelectorAll('.slider-container__navigator');

document.querySelector('.insider-container').onmouseover = function () {
  for (var i = 0; i < navigatorButton.length; i++) {
    navigatorButton[i].classList.add('navigator-open');
  }
}

document.querySelector('.insider-container').onmouseout = function () {
  for (var i = 0; i < navigatorButton.length; i++) {
    navigatorButton[i].classList.remove('navigator-open');
  }
}