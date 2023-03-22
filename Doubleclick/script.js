const gallery = document.querySelector('.gallery');
const photos = gallery.querySelectorAll('.photo');
const fullscreen = document.querySelector('.fullscreen');
const fullscreenImage = fullscreen.querySelector('img');

function openFullscreen(imgSrc) {
  fullscreenImage.src = imgSrc;
  fullscreen.style.display = 'flex';
}

function closeFullscreen() {
  fullscreen.style.display = 'none';
}

photos.forEach(photo => {
  photo.addEventListener('dblclick', () => {
    const imgSrc = photo.querySelector('img').src;
    openFullscreen(imgSrc);
  });
});

fullscreen.addEventListener('click', () => {
  closeFullscreen();
});
