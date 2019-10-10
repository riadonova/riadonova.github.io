const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(navItem => {
    navItem.addEventListener('click', evt => {
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        evt.currentTarget.classList.add('active')
    }, false)
});

function highlightNavLink(name) {
    const navItems = document.querySelectorAll('*[data-link]');
    navItems.forEach(item => {
        if (item.getAttribute('data-link') === name) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

window.highlightNavLink = highlightNavLink;

window.addEventListener('scroll', () => {
    checkScrollPosition();
}, false);

function checkScrollPosition() {
    const scrollPosition = window.scrollY;
    const bottom = document.body.clientHeight - window.screen.height;
    if (scrollPosition >= bottom) {
        highlightNavLink('contacts');
    } else {
        const resume = document.querySelector('*[data-anchor="resume"]');
        const portfolio = document.querySelector('*[data-anchor="portfolio"]');
        const headerHeight = 50;
        if (scrollPosition > (resume.offsetTop - headerHeight) && scrollPosition < portfolio.offsetTop - headerHeight) {
            highlightNavLink('resume');
        } else if (scrollPosition > portfolio.offsetTop - headerHeight) {
            highlightNavLink('portfolio');
        } else {
            highlightNavLink(null);
        }
    }
}