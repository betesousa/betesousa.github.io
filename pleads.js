let pleads;
let length;
let currentPlead = 0;

function nextPlead () {
    pleads[currentPlead].classList.remove("active-plead")
    currentPlead ++;
    if (currentPlead == length) currentPlead = 0;
    pleads[currentPlead].classList.add("active-plead")
}

document.addEventListener('DOMContentLoaded', async () => {
    pleads = document.querySelectorAll('.plead');
    length = pleads.length;
    nextPlead();
})