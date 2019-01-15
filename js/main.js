btnItems = document.querySelectorAll('.hamburger__item');
navItems = document.querySelectorAll('.nav__item');

nav = document.querySelector('.main-navbar__nav');
navList = document.querySelector('.nav__list');
btn = document.querySelector('.main-navbar__hamburger');

btn.addEventListener('click', function () {
    btnItems.forEach(navItem => {
        navItem.classList.toggle('active');
    });
    nav.classList.toggle('active');
    navList.classList.toggle('active');
    btn.classList.toggle('active');

});

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        btnItems.forEach(btnItem => {
            btnItem.classList.remove('active');
        });
        nav.classList.remove('active');
        navList.classList.remove('active');
        btn.classList.remove('active');
    });
})