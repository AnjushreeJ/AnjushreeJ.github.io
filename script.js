console.log("Advanced IT Portfolio Loaded Successfully");

// Smooth Scroll Effect

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Shadow on Scroll

window.addEventListener('scroll', function () {

    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    }
    else {
        header.style.boxShadow = 'none';
    }
});