const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

themeButton.addEventListener('click', () => {
    // Toggle the class on the body
    document.body.classList.toggle(darkTheme)
    // Toggle the icon appearance
    themeButton.classList.toggle(iconTheme)
    
    // Save the preference
    localStorage.setItem('selected-theme', document.body.classList.contains(darkTheme) ? 'dark' : 'light')
})


/*=============== CUSTOM CURSOR JS ===============*/
/*=============== THEME-AWARE TRAIL JS ===============*/

// Colors for Dark Mode (Deep neons and rich blues)
const darkThemeColors = [
    "#1e3a8a", "#312e81", "#4c1d95", "#581c87", 
    "#701a75", "#064e3b", "#0f172a", "#1d4ed8"
];

// Colors for Light Mode (Solid darks, grays, and blacks)
const lightThemeColors = [
    "#9c10ff58", "#14e7ffb5", "#256affd4", "#1463e2a5"
];

let lastEmitTime = 0;

document.addEventListener("mousemove", function(e) {
    const now = Date.now();
    if (now - lastEmitTime < 25) return;
    
    lastEmitTime = now;
    createDynamicParticle(e.pageX, e.pageY);
});

function createDynamicParticle(x, y) {
    const particle = document.createElement("div");
    particle.classList.add("cursor-particle");
    
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    
    // Check if the body has the 'dark-theme' class
    const isDark = document.body.classList.contains("dark-theme");
    const palette = isDark ? darkThemeColors : lightThemeColors;
    
    // Pick a random color from the appropriate palette
    const randomColor = palette[Math.floor(Math.random() * palette.length)];
    particle.style.backgroundColor = randomColor;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 1200);
}



const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener("submit", async function(event) {
    event.preventDefault(); // Stay on the portfolio page
    
    const data = new FormData(event.target);
    
    try {
        const response = await fetch(event.target.action, {
            method: contactForm.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            formStatus.innerHTML = "Thanks! Your message has been sent successfully. ✔️";
            formStatus.style.color = "var(--first-color)";
            contactForm.reset(); // Clear the form fields
        } else {
            formStatus.innerHTML = "Oops! There was a problem submitting your form.";
            formStatus.style.color = "red";
        }
    } catch (error) {
        formStatus.innerHTML = "Oops! Connection error. Please try again later.";
    }
});

/*=============== UNIFIED SCROLL REVEAL (FIXED) ===============*/
/*=============== REPEATING SLIDING EFFECT ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    delay: 200,
    reset: true // This ensures the animation happens every time you scroll
});

/* Home Section */
sr.reveal('.home__data', {origin: 'left'});
sr.reveal('.home__image', {origin: 'right', delay: 500});

/* --- ABOUT ME SECTION --- */
sr.reveal('.about__img', {origin: 'left'});
sr.reveal('.about__data', {origin: 'right', delay: 500});


// Slide HackerRank from left and LeetCode from right
sr.reveal('.coding__card:nth-child(1), .hacker-rank-card', {origin: 'left'});
sr.reveal('.coding__card:nth-child(2), .leet-code-card', {origin: 'right'});

/* --- SKILLS SECTION --- */
sr.reveal('.skills__header', {origin: 'top'});
sr.reveal('.skills__content', {interval: 100, origin: 'bottom'}); // Slides skill icons up

/* --- PROJECTS (WORK) --- */
sr.reveal('.work__card:nth-child(odd)', {origin: 'left'});
sr.reveal('.work__card:nth-child(even)', {origin: 'right'});

/* --- CERTIFICATES --- */
sr.reveal('.certificate__card', {interval: 100, origin: 'bottom'});

/* Skills Section */
sr.reveal('.skills__content:nth-child(1)', {origin: 'left'});
sr.reveal('.skills__content:nth-child(2)', {origin: 'right'});

/* Projects - Alternating Horizontal Slide */
sr.reveal('.work__card:nth-child(odd)', {origin: 'left'});
sr.reveal('.work__card:nth-child(even)', {origin: 'right'});

/* Certificates - Balanced Sliding */
sr.reveal('.certificate__card:nth-child(1)', {origin: 'left'});   // Simplilearn C cert
sr.reveal('.certificate__card:nth-child(2)', {origin: 'bottom'}); // CISCO CCNA cert
sr.reveal('.certificate__card:nth-child(3)', {origin: 'right'});  // Geekster Java cert

/* Contact Section */
sr.reveal('.contact__content', {origin: 'left'});
sr.reveal('.contact__form', {origin: 'right'});