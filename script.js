// 3D4U Website JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Custom order button
const orderButton = document.querySelector(".custom-orders button");

orderButton.addEventListener("click", function() {

    alert(
        "Thanks for your interest in 3D4U! Contact us with your idea, picture, or design and we will help create it."
    );

});
