const lightboxCarousel = document.querySelector('.lightbox-carousel');
const galleryLinks = document.querySelectorAll('.gallery-link');
const websiteBody = document.querySelector('.body');
const modal = document.querySelector('.modal');

galleryLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Wait for the modal to be shown
        setTimeout(() => {
            if (websiteBody.classList.contains('modal-open')) {
                const modal = document.querySelector('.modal'); // Select the modal element
                // Listen for the modal's shown event
                modal.addEventListener('shown.bs.modal', function () {
                    const lightboxCarousel = modal.querySelector('.lightbox-carousel');
                    if (lightboxCarousel) {
                        lightboxCarousel.setAttribute('data-bs-ride', 'false');
                    } else {
                        console.error('Lightbox carousel element not found.');
                    }
                });
            }
        }, 200); // Adjust the delay as needed
    });
});

