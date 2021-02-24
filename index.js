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
    if (projects.style.display === 'none') {
        projects.style.display = 'block';
        projectsLink.classList.add('active');
    } else {
        projects.style.display = 'none';
        projectsLink.classList.remove('active');
    };

    if (about.style.display === 'block') {
        about.style.display = 'none';
        aboutLink.classList.remove('active');
    }

    if (articles.style.display === 'block') {
        articles.style.display = 'none';
        articlesLink.classList.remove('active');
    }

    if (contact.style.display === 'block') {
        contact.style.display = 'none';
        contactLink.classList.remove('active');
    }
});

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (about.style.display === 'none') {
        about.style.display = 'block';
        aboutLink.classList.add('active');
    } else {
        about.style.display = 'none';
        aboutLink.classList.remove('active');
    };

    if (projects.style.display === 'block') {
        projects.style.display = 'none';
        projectsLink.classList.remove('active');
    }

    if (articles.style.display === 'block') {
        articles.style.display = 'none';
        articlesLink.classList.remove('active');
    }

    if (contact.style.display === 'block') {
        contact.style.display = 'none';
        contactLink.classList.remove('active');
    }
});

articlesLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (articles.style.display === 'none') {
        articles.style.display = 'block';
        articlesLink.classList.add('active');
    } else {
        articles.style.display = 'none';
        articlesLink.classList.remove('active');
    };

    if (projects.style.display === 'block') {
        projects.style.display = 'none';
        projectsLink.classList.remove('active');
    }

    if (about.style.display === 'block') {
        about.style.display = 'none';
        aboutLink.classList.remove('active');
    }

    if (contact.style.display === 'block') {
        contact.style.display = 'none';
        contactLink.classList.remove('active');
    }
});

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (contact.style.display === 'none') {
        contact.style.display = 'block';
        contactLink.classList.add('active');
    } else {
        contact.style.display = 'none';
        contactLink.classList.remove('active');
    };

    if (projects.style.display === 'block') {
        projects.style.display = 'none';
        projectsLink.classList.remove('active');
    }

    if (about.style.display === 'block') {
        about.style.display = 'none';
        aboutLink.classList.remove('active');
    }

    if (articles.style.display === 'block') {
        articles.style.display = 'none';
        articlesLink.classList.remove('active');
    }
});