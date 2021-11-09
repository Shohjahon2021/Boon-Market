let body = document.getElementsByTagName('body')[0];
let bodyWrapper = body.querySelector('.wrapper');
let headerMobile = body.querySelector('header.mobile');
let menu = body.querySelector('header.mobile').querySelector('.menu');
let menuBtn = body.querySelector('.menu-btn');

menuBtn.addEventListener('click', function() {
  let btnClass = menuBtn.className;

  if (btnClass === 'menu-btn') {
    menuBtn.className = 'menu-btn active';
    menu.className = 'menu active'
    bodyWrapper.style.overflowY = "hidden";
    menu.style.boxShadow = '0px 100vmax 1px 100vmax rgb(0 0 0 / 45%)';
  } else {
      menuBtn.className = 'menu-btn';
      menu.className = 'menu'
      bodyWrapper.style.overflowY = "auto";
      menu.style.boxShadow = 'none';
  }
});

// Menu button


let categories = body.querySelector('.shop').querySelector('.categories');
let activeBtn = categories.querySelector('.item.active');

if(body.offsetWidth <= 481) {
  if(categories.querySelector('.leftSide').querySelector('.item.active')) {
    activeBtn = categories.querySelector('.leftSide').querySelector('.item.active');
  } else {
    activeBtn = categories.querySelector('.rightSide').querySelector('.item.active');
  }
}

function makeActive(elem) {
  activeBtn.className = 'item';
  elem.className = 'item active';
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