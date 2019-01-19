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

// Fact section
const factSection = document.querySelector('.fact');
const factList = document.querySelector('.fact__list');
const factSectionFromTop = factSection.offsetTop;

window.addEventListener('scroll', function () {
    let scrollValue = window.scrollY;
    if (scrollValue - 50 > factSectionFromTop) {
        factList.classList.add('active');
    }
});


//Clients section
clientImages = document.querySelectorAll('.client__photo');
clientTitle = document.querySelector('.client__title');
clientDescription = document.querySelector('.client__description');
clientQuotes = document.querySelectorAll('.client__quote');

function clientChoice() {
    clientImages.forEach(clientImage => {
        clientImage.classList.remove('active');
    });
    clientQuotes.forEach(clientQuote => {
        clientQuote.classList.remove('active');
        if (clientQuote.dataset.client == this.dataset.client) {
            clientQuote.classList.add('active');
        }
    });

    this.classList.add('active');
    if (this.dataset.client == '1') {
        clientTitle.textContent = 'Anthony Green';
        clientDescription.textContent = 'Web developer';
    } else if (this.dataset.client == '2') {
        clientTitle.textContent = 'Kyle Roberts';
        clientDescription.textContent = 'Company CEO';
    } else if (this.dataset.client == '3') {
        clientTitle.textContent = 'Bella Morgan';
        clientDescription.textContent = 'Project manager';
    }
}
clientImages.forEach(clientImage => {
    clientImage.addEventListener('click', clientChoice);
});


// jQuery


//smooth scroll nav items
$('.nav__link').on('click', function () {
    const menuItem = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(menuItem).offset().top
    }, 3000);
});

// show|hide .up-btn
const $upBtn = $('.up-btn');

$(window).on('scroll', function () {
    const scrollValue = $(window).scrollTop();
    return (scrollValue > 0) ? $upBtn.addClass('active') : $upBtn.removeClass('active')
})

//smooth scroll .up-btn to top
$upBtn.on('click', function () {
    $('body, html').animate({
        scrollTop: $('body').offset().top
    }, 2000);
});

//smooth scroll in header hto next section
$('.header__scroll').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.services').offset().top
    }, 1000);
});

