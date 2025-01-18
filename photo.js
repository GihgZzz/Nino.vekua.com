const topGallery = document.getElementById('top-gallery');
const bottomGallery = document.querySelector('.bottom-photo-wrapper');

const topPhotos = document.querySelectorAll('.photo-wrapper');
topPhotos.forEach(photo => {
    photo.addEventListener('mouseenter', () => {
        topGallery.style.animationPlayState = 'paused';
    });

    photo.addEventListener('mouseleave', () => {
        topGallery.style.animationPlayState = 'running';
    });
});


const bottomPhotos = document.querySelectorAll('.bottom-photo-wrapper');
bottomPhotos.forEach(photo => {
    photo.addEventListener('mouseenter', () => {
        bottomGallery.style.animationPlayState = 'paused';
    });

    photo.addEventListener('mouseleave', () => {
        bottomGallery.style.animationPlayState = 'running';
    });
});
