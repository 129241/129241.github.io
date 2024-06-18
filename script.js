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
