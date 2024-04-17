document.querySelector('#navbarList').addEventListener('click', (e) => {
    if (e.target.classList.contains('navbar__link--active')) return;

    e.currentTarget.querySelector('.navbar__link--active')
        .classList.remove('navbar__link--active');
    e.target.classList.add('navbar__link--active');
});

document.querySelector('#burger').addEventListener('click', (e) => {
    const burger = e.target === e.currentTarget ? e.target : e.currentTarget;

    burger.classList.toggle('active');
    burger.nextElementSibling.classList.toggle('nav-show');
});

