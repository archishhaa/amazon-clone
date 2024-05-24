document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', () => {
        alert(`Searching for: ${searchInput.value}`);
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel .slides img');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);
});

