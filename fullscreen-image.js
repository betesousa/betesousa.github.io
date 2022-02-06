// Inspired on https://stackoverflow.com/questions/52766477/animate-a-div-to-full-screen-from-its-position

document.addEventListener('DOMContentLoaded', () => {
    let photos = document.querySelectorAll('.photo');
    photos.forEach((photo) => {
        photo.onclick = () => {
            console.log(photo)
            enterFullscreen(photo);
        };
    });
});

function enterFullscreen (element) {
    let offset = element.getBoundingClientRect();

    let newElement = document.createElement('div');
    newElement.onclick = () => exitFullscreen(newElement, element);

    newElement.style = `
        position: fixed;
        left: ${offset.left};
        top: ${offset.top};
        width: ${offset.width};
        height: ${offset.height};
        background-image: ${window.getComputedStyle(element).backgroundImage};
        background-position: center;
        background-size: cover;
        z-index: 9999;
        border-radius: 21px;
        transition: all .5s ease;
    `;
    document.body.append(newElement);

    newElement.style = `
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-image: ${window.getComputedStyle(element).backgroundImage};
        background-position: center;
        background-size: cover;
        z-index: 9999;
        transition: all .5s ease;
    `;
}

async function exitFullscreen (element, original) {
    let offset = original.getBoundingClientRect();

    element.style = `
        position: fixed;
        left: ${offset.left};
        top: ${offset.top};
        width: ${offset.width};
        height: ${offset.height};
        background-image: ${window.getComputedStyle(element).backgroundImage};
        background-position: center;
        background-size: cover;
        z-index: 9999;
        border-radius: 20px;
        transition: all .5s ease;
    `;

    await new Promise(resolve => setTimeout(resolve, 500));

    element.remove();
}