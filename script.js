// Resume button click
const resumeBtn = document.querySelector(".resume-btn");

resumeBtn.addEventListener("click", function () {
    alert("Opening resume...");
});


// Navbar links → scroll to sections
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // stop default jump

        const targetSection = this.getAttribute("href");

        if (targetSection) {
            document.querySelector(targetSection).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
