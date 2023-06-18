const navBtn = document.querySelector('.nav-icon');
const navMobile = document.querySelector('.mobile-nav');
const fade = document.querySelector('.mobile-nav-fade');

navBtn.addEventListener('click', () => {
    navMobile.classList.toggle('mobile-nav__open');
    fade.classList.toggle('mobile-nav-fade--open ')
    document.body.classList.toggle('no-scroll');
});


