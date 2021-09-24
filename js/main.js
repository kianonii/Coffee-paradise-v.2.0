// navbar

const navbarToggler = document.querySelector('.navbar__icon');
const navBody = document.querySelector('.navbar__body');
if (navbarToggler) {    
    navbarToggler.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        navbarToggler.classList.toggle('_active');
        navBody.classList.toggle('_active');
    });
};

// scroll to sectiont

const navLinks = document.querySelectorAll('.nav__link[data-goto]');

if(navLinks.length > 0) {
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', onNavLinkClick);
    });
    
    function onNavLinkClick(e) {
        const navLink = e.target;
    
        if(navLink.dataset.goto && document.querySelector(navLink.dataset.goto)){
            const gotoBlock = document.querySelector(navLink.dataset.goto); // обьект к которому перемещает ссылка
    
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - header.offsetHeight; // точное положение обьекта 
    
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });

            navbarToggler.classList.remove('_active');
            navBody.classList.remove('_active');
            document.body.classList.remove('_lock')

            e.preventDefault();
        };
    };
};

// header scrolling

const header = document.querySelector('header');

window.onscroll = function() {
    if(window.pageYOffset > 100) {
        header.classList.add('scrolled')
    }else {
        header.classList.remove('scrolled')
    }
}

// bestsellers carousel 

$('.carousel').owlCarousel({
    loop: true,
    items: 3.5,
    // !включить после верстки слайдера
    autoplay: true,
    smartSpeed: 500,
    responsive: {
        1100: {
            items: 3.5,
        },

        769: {
            items: 2.5
        },

        0: {
            margin: 20,
            items: 1,
        }
    }
})

// facts carousel 

$('.facts-carousel').owlCarousel ({
    items: 1,
    margin: 10,
    nav: true,
    rewind: true,
    dots: true,
    navContainer: ".carousel-control",
    dotsContainer: ".dots", 
    smartSpeed: 500,
    mouseDrag: false,
});

// reviews popup 

const popupBtn = document.querySelector('.review-btn');
const popupOverlay = document.querySelector('.review-popup');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const carousel = document.querySelector('.reviews-carousel');

popupBtn.addEventListener('click', function(){
    popupOverlay.classList.add('active');
    popup.classList.add('active');
    if(popup.classList.contains('active')) {
        carousel.classList.add('hide');
    }
    document.body.classList.add('_lock');
});

closeBtn.addEventListener('click', function(){
    popupOverlay.classList.remove('active')
    popup.classList.remove('active')
    carousel.classList.remove('hide')
    document.body.classList.remove('_lock')
});

// reviews carousel 

$('.reviews-carousel').owlCarousel({
    items: 3,
    loop: true,
    dots: true,
    dotsContainer: ".reviews-dots", 
    smartSpeed: 500,

    responsive: {
        0: {
            center: true,
            items: 1,
        },

        769: {
            items: 2.5,
        },

        1100: {
            center: false,
            items: 3,
        }
    }
})

// to top btn 

$(function() {
    $(window).scroll(function() {
    if($(this).scrollTop() >= 2300) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
    });
        $('.back-to-top').click(function() {
        $('body,html').animate({scrollTop:0}, 500);
    });
});
