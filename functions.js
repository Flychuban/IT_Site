const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarizedButton = document.getElementById('solarized');
const navbar = document.navbar;

darkButton.onclick = () =>{
    navbar.classList.replace('light', 'dark');
};

lightButton.onclick = () =>{
    navbar.classList.replace('dark', 'light');
};