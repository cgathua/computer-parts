const accordions = document.querySelectorAll('.Accordion');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        if (!accordion.classList.contains('active')) {
            accordions.forEach(accordion => {
                accordion.classList.remove('active');
            })
        };
        accordion.classList.toggle('active');
    });
});

export { accordions };