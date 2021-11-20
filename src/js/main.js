const init = () => {

    const burgerBtn = document.querySelector('.burger');
    const mobileNav = document.querySelector('.nav__mobile');
    
    const handleMobileBurger = () => {
        if(!mobileNav.classList.contains('nav__mobile--hidden'))
        {
            mobileNav.classList.add('nav__mobile--hidden');
        }
        else
        {
            mobileNav.classList.remove('nav__mobile--hidden');
        }
    }
    const handleMobileNavLinks = () => {
        const allNavLinks = mobileNav.querySelectorAll('.nav__mobile__link');
        allNavLinks.forEach(navLink => {
            navLink.addEventListener('click', handleMobileBurger);
        });
    }
    burgerBtn.addEventListener('click', handleMobileBurger);
    handleMobileNavLinks();
    
}
window.addEventListener('DOMContentLoaded', init);
