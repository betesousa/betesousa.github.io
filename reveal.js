//  Code based on https://alvarotrigo.com/blog/css-animations-scroll/

let elements;
let bottomOffset = 50;
let wHeight;

function reveal() {
    let remaining = new Array();

    for (let i = 0, n = elements.length; i < n; i++) {
        let elementTop = elements[i].getBoundingClientRect().top;
        if (elementTop < wHeight - bottomOffset) elements[i].classList.add("active");
        else {
            remaining.push(elements[i]);
        }
    }

    if (remaining.length != 0) elements = remaining;
    else document.removeEventListener("scroll", reveal);
}
  
document.addEventListener("DOMContentLoaded", () => {
    elements = document.querySelectorAll(".reveal");
    wHeight = window.innerHeight;
})
document.addEventListener("scroll", reveal);
document.addEventListener("resize", () => {
    wHeight = window.innerHeight;
});