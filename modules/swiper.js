let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // change slidesPerView above 600px
    breakpoints: {
        600: {
            slidesPerView: 2
        }
    }
});

export { swiper };