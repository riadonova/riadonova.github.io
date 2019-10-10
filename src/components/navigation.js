const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(navItem=>{
    navItem.addEventListener('click',evt => {
        navItems.forEach(navItem=>{
            navItem.classList.remove('active');
        });
        evt.currentTarget.classList.add('active')
    },false)
});

function highlightNavLink(name) {
    const navItems = document.querySelectorAll('*[data-link]');
    navItems.forEach(item => {
        if(item.getAttribute('data-link') === name) {
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
    if(scrollPosition >= bottom) {
        highlightNavLink('contacts');
    } else {
        const resume = document.querySelector('*[data-anchor="resume"]');
        const portfolio = document.querySelector('*[data-anchor="portfolio"]');
        if (scrollPosition > (resume.offsetTop - 50)  && scrollPosition < portfolio.offsetTop - 50) {
            highlightNavLink('resume');
        }
        else if (scrollPosition > portfolio.offsetTop -50 ) {
            highlightNavLink('portfolio');
        }
        else {
            highlightNavLink(null);
        }
    }
}