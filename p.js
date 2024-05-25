// Carousel functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function prevSlide() {
    slideIndex -= 2;
    if (slideIndex < 0) {
        slideIndex = document.querySelectorAll('.slides img').length - 1;
    }
    showSlides();
}

function nextSlide() {
    showSlides();
}

// Sign-in functionality
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('signInContainer').classList.remove('active');
});

window.onload = function() {
    document.getElementById('signInContainer').classList.add('active');
}
