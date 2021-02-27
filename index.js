const about = document.querySelector('.section-about');
const projects = document.querySelector('.section-projects');
const articles = document.querySelector('.section-articles');
const contact = document.querySelector('.section-contact');
const aboutLink = document.querySelector('#nav__about');
const projectsLink = document.querySelector('#nav__projects');
const articlesLink = document.querySelector('#nav__articles');
const contactLink = document.querySelector('#nav__contact');

projectsLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (projects.classList.contains('hidden')) {
        projects.classList.remove('hidden');
        projectsLink.classList.add('active');
    } else {
        projects.classList.add('hidden');
        projectsLink.classList.remove('active');
    };

    if (about.classList.contains('hidden') === false) {
        about.classList.add('hidden');
        aboutLink.classList.remove('active');
    };

    if (articles.classList.contains('hidden') === false) {
        articles.classList.add('hidden');
        articlesLink.classList.remove('active');
    };

    if (contact.classList.contains('hidden') === false) {
        contact.classList.add('hidden');
        contactLink.classList.remove('active');
    };
});

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (about.classList.contains('hidden')) {
        about.classList.remove('hidden');
        aboutLink.classList.add('active');
    } else {
        about.classList.add('hidden');
        aboutLink.classList.remove('active');
    };

    if (projects.classList.contains('hidden') === false) {
        projects.classList.add('hidden');
        projectsLink.classList.remove('active');
    };

    if (articles.classList.contains('hidden') === false) {
        articles.classList.add('hidden');
        articlesLink.classList.remove('active');
    };

    if (contact.classList.contains('hidden') === false) {
        contact.classList.add('hidden');
        contactLink.classList.remove('active');
    };
});

articlesLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (articles.classList.contains('hidden')) {
        articles.classList.remove('hidden');
        articlesLink.classList.add('active');
    } else {
        articles.classList.add('hidden');
        articlesLink.classList.remove('active');
    };

    if (about.classList.contains('hidden') === false) {
        about.classList.add('hidden');
        aboutLink.classList.remove('active');
    };

    if (projects.classList.contains('hidden') === false) {
        projects.classList.add('hidden');
        projectsLink.classList.remove('active');
    };

    if (contact.classList.contains('hidden') === false) {
        contact.classList.add('hidden');
        contactLink.classList.remove('active');
    };
});

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (contact.classList.contains('hidden')) {
        contact.classList.remove('hidden');
        contactLink.classList.add('active');
    } else {
        contact.classList.add('hidden');
        contactLink.classList.remove('active');
    };

    if (about.classList.contains('hidden') === false) {
        about.classList.add('hidden');
        aboutLink.classList.remove('active');
    };

    if (articles.classList.contains('hidden') === false) {
        articles.classList.add('hidden');
        articlesLink.classList.remove('active');
    };

    if (projects.classList.contains('hidden') === false) {
        projects.classList.add('hidden');
        projectsLink.classList.remove('active');
    };
});