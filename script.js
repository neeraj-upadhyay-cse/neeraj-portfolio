
// ==========================================
// NEERAJ PORTFOLIO - JAVASCRIPT
// ==========================================


// 1. TYPING ANIMATION

const typingElement = document.querySelector(".hero h2 span");

const roles = [
    "Software Developer",
    "Java Developer",
    "Problem Solver",
    "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    typeEffect();
}


// 2. MOBILE HAMBURGER MENU

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const mobileNavLinks = document.querySelectorAll("#main-navigation a");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navbar.classList.toggle("nav-open");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close menu after clicking any navigation link

    mobileNavLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("nav-open");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

    // Close menu when clicking outside navbar

    document.addEventListener("click", (event) => {

        if (!navbar.contains(event.target)) {

            navbar.classList.remove("nav-open");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}


// 3. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .info-card, " +
    ".skill-card, .project-card, .contact-content"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);
            }
        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// 4. ACTIVE NAVBAR LINK

const navLinks = document.querySelectorAll(".navbar nav a");

const pageSections = document.querySelectorAll(
    "section[id]"
);

const sectionObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },
    {
        rootMargin: "-30% 0px -60% 0px"
    }
);

pageSections.forEach(section => {
    sectionObserver.observe(section);
});


// 5. SCROLL TO TOP BUTTON

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.className = "scroll-top";
topButton.setAttribute("aria-label", "Scroll to top");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 6. CURRENT YEAR IN FOOTER

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} NEERAJ. All Rights Reserved.`;
}


// 7. PAGE LOADED

window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});

console.log("NEERAJ Portfolio JavaScript Loaded Successfully!");
