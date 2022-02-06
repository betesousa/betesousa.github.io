// Ensures that cover text fits to width, setting max font-size to 200px
let margin = 80;
function fitCover () {
    text = document.querySelector('#cover-text');
    text.style.fontSize = '20px';
    let width = text.offsetWidth;
    // Slides have 15% margin padding, on each side.
    let parent_width = text.parentElement.offsetWidth - window.innerWidth * .3 - margin;
    text.style.fontSize = Math.min(20 * parent_width / width, 200) + 'px';
}
window.addEventListener('resize', fitCover, true);
document.addEventListener('DOMContentLoaded', fitCover);