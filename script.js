const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark mode styling
function darkMode() {
    nav.style.backgroundColor = 'rgba(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgba(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark'); // Apply dark mode styling immediately after theme change in local storage is detected.
}

// Light mode styling
function lightMode() {
    nav.style.backgroundColor = 'rgba(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgba(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light'); // Apply light mode styling immediately after theme change in local storage is detected.
}

// Check if theme is saved in local storage
if (localStorage.getItem('theme') === 'dark') {
    toggleSwitch.checked = true;
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode(); // Apply dark mode styling immediately after theme change in local storage is detected.
} else {
    toggleSwitch.checked = false;
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode(); // Apply light mode styling immediately after theme change in local storage is detected.
}

// Function to switch between light and dark mode
function switchTheme(event) {
    if (event.target.checked) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// Event Lister for switching between light and dark mode
toggleSwitch.addEventListener('change', switchTheme);
