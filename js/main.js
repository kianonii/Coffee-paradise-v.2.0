const navbarToggler = document.querySelector('.navbar__icon');
const navBody = document.querySelector('.navbar__body');
if (navbarToggler) {    
    navbarToggler.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        navbarToggler.classList.toggle('_active');
        navBody.classList.toggle('_active');
    });
};

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
// const nextIcon = '<img src = "../img/icons/next.svg">';
// const prevIcon = '<img src = "../img/icons/prev.svg">';


$('.facts-carousel').owlCarousel ({
    items: 1,
    margin: 10,
    nav: true,
    rewind: true,
    dots: true,
    navContainer: ".carousel-control",
    dotsContainer: ".dots", 
    // navText: [
    //     prevIcon,
    //     nextIcon
    // ],
    smartSpeed: 500,
    mouseDrag: false,
});

//popup 

const popupBtn = document.querySelector('.review-btn');
const popupOverlay = document.querySelector('.review-popup');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const carousel = document.querySelector('.reviews-carousel');

popupBtn.addEventListener('click', function(){
    popupOverlay.classList.add('active')
    popup.classList.add('active')
    if(popup.classList.contains('active')) {
        carousel.classList.add('hide')
    }
    // document.body.classList.add('_lock')
})

closeBtn.addEventListener('click', function(){
    popupOverlay.classList.remove('active')
    popup.classList.remove('active')
    carousel.classList.remove('hide')
    // document.body.classList.remove('_lock')
})

// reviews 
const username = document.querySelector('.username');
const reviewText = document.querySelector('#reviewText');
const submit = document.querySelector('.submit');

submit.addEventListener('click', function(){
    let user = username.value;
    let text = reviewText.value;
    
    console.log(user + ' typed ' + text);
    
    popupOverlay.classList.remove('active')
    popup.classList.remove('active')
    carousel.classList.remove('hide')

})

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