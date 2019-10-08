window.jQuery = window.$ = require('jquery');
require('bootstrap');
require('./style/main.scss');

require('owl.carousel2/dist/assets/owl.carousel.css');
require('owl.carousel2/dist/assets/owl.theme.default.css');
require('owl.carousel2/dist/owl.carousel');

require('./components/navigation');

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});
