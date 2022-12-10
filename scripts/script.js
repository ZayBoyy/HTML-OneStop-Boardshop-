const menuBtn = document.querySelector(".menu-btn");
const navElements = document.querySelector(".mobile-nav");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        navElements.classList.remove('hidden');

        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        navElements.classList.add('hidden');
        menuOpen = false;
    }
});

$(".carousel").carousel({
    intveral: 3000
})