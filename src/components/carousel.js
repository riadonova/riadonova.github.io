$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    const $e = $(e.relatedTarget);
    const idx = $e.index();
    let itemsPerSlide = 5;
    const carouselItem = $('.carousel-item');
    const totalItems =carouselItem.length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        const it = itemsPerSlide - (totalItems - idx);
        for (let i=0; i<it; i++) {
            // append slides to end
            if (e.direction==="left") {
                carouselItem.eq(i).appendTo('.carousel-inner');
            }
            else {
                carouselItem.eq(0).appendTo('.carousel-inner');
            }
        }
    }
});