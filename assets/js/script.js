let body = document.getElementsByTagName('body')[0];
let bodyWrapper = body.querySelector('.wrapper');
let headerMobile = body.querySelector('header.mobile');
let headerHeight = headerMobile.offsetHeight;
let menuBtn = body.querySelector('.menu-btn');
let menu = body.querySelector('header.mobile').querySelector('.menu');
let pointReturn;

menuBtn.addEventListener('click', function() {
  let btnClass = menuBtn.className;
  
  if (btnClass === 'menu-btn') {
    pointReturn = window.pageYOffset;
    body.style.position = 'fixed';
    menuBtn.className = 'menu-btn active';
    menu.className = 'menu active'
    menu.style.cssText = '-webkit-box-shadow: 0px 84vmax 1px 84vmax rgb(0 0 0 / 45%); box-shadow: 0px 84vmax 1px 84vmax rgb(0 0 0 / 45%);';
  } else {
      body.style.position = 'static'
      window.scrollTo(0, pointReturn);
      menuBtn.className = 'menu-btn';
      menu.className = 'menu'
      menu.style.cssText = '-webkit-box-shadow: none; box-shadow: none;';
    }
});

// Menu button

let categories = body.querySelector('.shop').querySelector('.categories');
let activeBtn = categories.querySelector('.item.activated');

if(body.offsetWidth <= 481) {
  if(categories.querySelector('.leftSide').querySelector('.item.activated')) {
    activeBtn = categories.querySelector('.leftSide').querySelector('.item.activated');
  } else {
    activeBtn = categories.querySelector('.rightSide').querySelector('.item.activated');
  }
}

function makeActive(elem) {
  activeBtn.className = 'item';
  elem.className = 'item activated';
  activeBtn = elem;
}

// Categories

const shopSwiper = new Swiper('.shopSwiper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  loop: true,
  centeredSlides: true,
  autoplay: true,
  initialSlide: 1,
  spaceBetween: 30,
  speed: 1000,

  breakpoints: {
    320: {spaceBetween: 40},  
    477: {spaceBetween: 30},
  }
});

// Shop slider

const freshSwiper = new Swiper('.freshSwiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: false,
  centeredSlides: true,
  spaceBetween: 30,
  speed: 1500,

  pagination: {
    el: '.freshSwiper-pagination',
    type: 'bullets',
  },
});

// Fresh slider

let slidesSubtext = body.querySelector('.freshSwiper').getElementsByClassName('slide-subtext');

if(body.offsetWidth <= 481) {
  for(let i = 0; i < slidesSubtext.length; i++) {
    let text = slidesSubtext[i].innerHTML;
    let textToReduce = text.split(" ");
    let texToRemain = Math.floor(textToReduce.length / 3);

    for(let j = 0; j < textToReduce.length; j++) {
      if(textToReduce[j] === "") textToReduce.splice(j, 1);
    }

    for(let j = textToReduce.length - 4; j >= texToRemain; j--) {
      textToReduce.splice(i, 1);
    }

    slidesSubtext[i].innerHTML = textToReduce.join(" ");
  }
}

// Slide's text reducing