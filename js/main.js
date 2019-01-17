// Menu
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
});


//Portfolio

portfolioBtns = document.querySelectorAll('.portfolio__btn');
portfolioProjects = document.querySelectorAll('.portfolio__project')

function userChoice() {
    portfolioBtns.forEach(portfolioBtn => {
        portfolioBtn.classList.remove('active');

    });

    this.classList.add('active');

    portfolioProjects.forEach(portfolioProject => {
        portfolioProject.classList.remove('disable');
        if (this.dataset.group) {
            if (portfolioProject.dataset.group != this.dataset.group) {
                portfolioProject.classList.add('disable');
            }
        }
    });
};

portfolioBtns.forEach(portfolioBtn => {
    portfolioBtn.addEventListener('click', userChoice);
});


//Fact section

const factSection = document.querySelector('.fact');
const factList = document.querySelector('.fact__list');
const factSectionFromTop = factSection.offsetTop;

window.addEventListener('scroll', function () {
    let scrollValue = window.scrollY;
    console.log(scrollValue);
    if (scrollValue - 50 > factSectionFromTop) {
        factList.classList.add('active');
    }
})