const photo = document.querySelector('.my-photo');

function animation() {

    photo.classList.toggle('photo_animation_active');

}

photo.addEventListener('click', animation);

const letter = document.querySelector('.letter');
const letter_A = document.querySelector('.letter_A');
const letter_B = document.querySelector('.letter_B');
const letter_C = document.querySelector('.letter_C');
const letter_D = document.querySelector('.letter_D');

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyA') {
        return letter_A.scrollIntoView(true)
    }
    else if (event.code === 'KeyB') {
        return letter_B.scrollIntoView(true)
    }
    else if (event.code === 'KeyC') {
        return letter_C.scrollIntoView(true)}
    else if (event.code === 'KeyD') {
        return letter_D.scrollIntoView(true)}

});
