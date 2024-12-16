let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

// Get the menu icon and navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle the 'active' class on the navbar when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
