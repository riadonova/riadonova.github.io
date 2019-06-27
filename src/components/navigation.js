const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(navItem=>{
    navItem.addEventListener('click',evt => {
        navItems.forEach(navItem=>{
            navItem.classList.remove('active');
        });
        evt.currentTarget.classList.add('active')
    },false)
});