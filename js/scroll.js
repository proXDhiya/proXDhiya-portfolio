const nav = document.querySelector('nav');
const mobileNav = document.querySelector('.mobile-nav');

window.onscroll = () => {
    let distanceY = document.documentElement.scrollTop;
    if (distanceY > 50 && !state) {
        // mobile
        mobileNav.classList.add('nav-scrolled');
        mobileNav.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 15px 20px -20px';
        // desktop
        nav.classList.add('nav-scrolled');
    }
    else {
        // mobile
        mobileNav.classList.remove('nav-scrolled');
        mobileNav.style.boxShadow = 'none';
        // desktop
        nav.classList.remove('nav-scrolled');
    }
}
