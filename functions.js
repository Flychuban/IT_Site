const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarizedButton = document.getElementById('solarized');
const body = document.body;

darkButton.onclick = () =>{
    body.classList.replace('light', 'dark');
};

lightButton.onclick = () =>{
    body.classList.replace('dark', 'light');
};