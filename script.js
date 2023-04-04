const photo = document.querySelector('.my-photo');

function animation() {

    photo.classList.toggle('photo_animation_active');

}

photo.addEventListener('click', animation);

const letter = document.querySelector('.letter');

letter.addEventListener('keydown', (e) => alert('key pressed ' + e.key))

letter.addEventListener('keydown', function (e) {
    if e.key {letter.scrollIntoView(true);
});





