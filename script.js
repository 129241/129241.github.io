document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", function(e) {
            const href = link.getAttribute("href");
            // Check if the link is internal (starts with '#')
            if (href.startsWith("#")) {
                e.preventDefault();

                const targetID = href.substring(1);
                const targetSection = document.getElementById(targetID);

                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
            // Allow default behavior for external links (those not starting with '#')
        });
    }

    // Carousel functionality
    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    let index = 0;

    function showSlide(n) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === n) {
                slide.classList.add('active');
            }
        });
    }

    next.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

    showSlide(index);
});
}
