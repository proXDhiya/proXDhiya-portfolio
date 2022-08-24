const mobileNavButton = document.querySelector('.mobile-nav > ion-icon');
const logo = document.querySelectorAll('.logo-name');
const slider = document.querySelector('.mobile-slider');
let state = false;

mobileNavButton.addEventListener('click', () => {
    if (state === false) {
        slider.style.left = '0';
        logo[1].style.color = '#fff';
        mobileNavButton.name = 'close';
        state = true;
    } else {
        slider.style.left = '-85%';
        logo[1].style.color = 'transparent';
        mobileNavButton.name = 'menu';
        state = false;
    }
});
