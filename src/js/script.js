

window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about_us');
    const item_wraper = document.getElementById('item_wraper');

    

    const aboutSectionTop = aboutSection.offsetTop;
    const aboutSectionHeight = aboutSection.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= aboutSectionTop && scrollPosition < aboutSectionTop + aboutSectionHeight) {
        item_wraper.classList.add('bottom');

        item_wraper.style.transitionDuration = '1s';
    } else {
        item_wraper.classList.remove('bottom');
    }

  });
  


// slic_slider code here
$(document).ready(function(){
 

    $('.slaider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow : '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-angle-right"></i></button>',


      });    
    $('.slaider_2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
autoplaySpeed: 10000,
        prevArrow : '<button class="slider2-prev" aria-label="Previous-2" type="button"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next" aria-label="Next-2" type="button"><i class="fa-solid fa-angle-right"></i></button>',


      });    
  });
//   

// venoBox code start here
new VenoBox({
    selector: '.my-video-links',
});























 
