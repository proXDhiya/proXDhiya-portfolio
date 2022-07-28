const nav = document.querySelector('nav');

window.onscroll = () => {
    var distanceY = document.documentElement.scrollTop;
    if (distanceY > 50)
        nav.classList.add('nav-scrolled');
    else
        nav.classList.remove('nav-scrolled');
}
