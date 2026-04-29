// const initApp = () => {
//     const hamburgerBtn = document.getElementById ('hamburger-menu')
//     const mobileMenu = document.getElementById ('mobile-menu')

// const toggleMenu = () => {
//     mobileMenu.classList.toggle('hidden')
//     mobileMenu.classList.toggle('flex')
//     hamburgerBtn.classList.toggle('toggle-btn')

   
// }
// hamburgerBtn.addEventListener('click', toggleMenu)
// mobileMenu.addEventListener('click', toggleMenu)

// }

// document.addEventListener('DOMContentLoaded', initApp)
//  Setup the "Camera" (Observer)
const observer = new IntersectionObserver((entries) =>{entries.forEach(entry => {
    //  Check if the element is on the screen
 if (entry.isIntersecting) {
//    Add the 'visible' class to trigger the CSS transition 
    entry.target.classList.add('visible');
    }
});
}, {threshold: 0.1}); // 0.1 means "start when 10% of the element is visible"
// 4. Tell the camera which elements to watch
document.querySelectorAll('.fade-in').forEach(element => { observer.observe(element);

});