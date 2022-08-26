const mobileNavButton = document.querySelector('.mobile-nav > ion-icon');
const mobileNavElements = document.querySelectorAll('.mobile-slider>ul>li>a');
const logo = document.querySelectorAll('.logo-name');
const slider = document.querySelector('.mobile-slider');
let state = false;

mobileNavButton.addEventListener('click', () => {
    if (state === false) {
        slider.style.left = '0';
        slider.style.boxShadow = 'rgba(81, 82, 87, 0.2) 0px 5px 15px 1200px';
        logo[1].style.color = '#fff';
        mobileNavButton.name = 'close';
        mobileNavButton.style.color = 'inherit';
        mobileNav.style.backgroundColor = 'transparent';
        mobileNav.style.boxShadow = 'none';
        state = true;
    } else {
        slider.style.left = '-85%';
        slider.style.boxShadow = 'none';
        logo[1].style.color = 'transparent';
        mobileNavButton.name = 'menu';
        mobileNavButton.style.color = 'inherit';
        mobileNav.style.backgroundColor = 'var(--background-color)';
        mobileNav.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 15px 20px -20px';
        state = false;
    }
});

mobileNavElements.forEach(element => {
    element.addEventListener('click', () => {
        slider.style.left = '-85%';
        slider.style.boxShadow = 'none';
        logo[1].style.color = 'transparent';
        mobileNavButton.name = 'menu';
        mobileNavButton.style.color = 'inherit';
        mobileNav.style.backgroundColor = 'var(--background-color)';
        mobileNav.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 15px 20px -20px';
        state = false;
    } );
});
