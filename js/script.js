$(document).ready(function () {

    setupModalVideo();
    setupScrollAnimations();
    setupCarouselSlider();

    // Mobile navigation (hamburger menu)
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass("ion-close-round");
        } else {
            icon.removeClass("ion-close-round");
            icon.addClass('ion-navicon-round');
        }




    })

});



function setupModalVideo() {
    const modal = $('#myModal')[0];
    const video = $('#modalVideo')[0];
    const btn = $('#myBtn')[0];
    const span = $('.close-modal')[0];

    btn.onclick = function () {
        modal.style.display = "block";
        video.play();
    }

    span.onclick = function () {
        modal.style.display = "none";
        video.pause();
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            video.pause();
        }
    }
}

function setupScrollAnimations() {
    //About animation
    $('.js--wp-0').waypoint(function () {
        $('.js--wp-0').addClass("animated fadeInUp")
    }, {
        offset: "70%"
    })


    //Packages animation
    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass("animated fadeInLeft")
        $('.js--wp-2').addClass("animated fadeInRight")
    }, {
        offset: "60%"
    });
}

function setupCarouselSlider() {
    const carouselSlide = $('.carousel-slide')[0];
    const carouselImages = $('.carousel-slide .slide');

    const prevBtn = $('#prevBtn')[0];
    const nextBtn = $('#nextBtn')[0];

    let counter = 1;
    const size = carouselImages[0].clientWidth;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px"

    prevBtn.addEventListener('click', onPrevSlide);
    nextBtn.addEventListener('click', onNextSlide);

    function onNextSlide() {
        if (counter >= carouselImages.length - 1) {
            return;
        }
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px"
    }

    function onPrevSlide() {
        if (counter <= 0) {
            return;
        }
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px"
    }

    let carouselInterval = setInterval(() => {
        onNextSlide();
    }, 5000);

    const carouselContainer = $('.carousel-container')[0];

    carouselContainer.addEventListener('mouseover', () => {
        clearInterval(carouselInterval)
    })

    carouselContainer.addEventListener('mouseout', () => {
        carouselInterval = setInterval(() => {
            onNextSlide();
        }, 5000);
    })

    carouselSlide.addEventListener('transitionend', () => {
        if (carouselImages[counter].id == 'lastClone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px"
        }
        if (carouselImages[counter].id == 'firstClone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px"
        }
    })
}