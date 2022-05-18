const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarizedButton = document.getElementById('solarized');
const body = document.body;


const theme = localStorage.getItem('theme');
if (theme){
    body.classList.add(theme);
}

darkButton.onclick = () =>{
    if (body.classList.contains('light'))
    {
        body.classList.replace('light', 'dark');
    }
    else if(body.classList.contains('solarized'))
    {
        body.classList.replace('solarized', 'dark');
    }
    localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () =>{
    if (body.classList.contains('dark'))
    {
        body.classList.replace('dark', 'light');
    }
    else if(body.classList.contains('solarized'))
    {
        body.classList.replace('solarized', 'light');
    }
    localStorage.setItem('theme', 'light');
};

solarizedButton.onclick = () =>{
    if (body.classList.contains('light'))
    {
        body.classList.replace('light', 'solarized');
    }
    else if(body.classList.contains('dark'))
    {
        body.classList.replace('dark', 'solarized');
    }
    localStorage.setItem('theme', 'solarized');
};

let text = document.getElementById('text');
let ufo = document.getElementById('ufo');
let alien_par = document.getElementById('alien_par');
let header = document.getElementById('header');

window.addEventListener('scroll', function()
{
    let value = window.scrollY;

    text.style.top = value * -0.1 + 50 + '%';
    ufo.style.top = value * -1.5 + 'px';
    ufo.style.left = value * 2 + 'px';
    alien_par.style.top=value*1.75 + 'px';
    alien_par.style.left=value*-1.5 + 'px';
    header.style.top=value*-0.05+'px';
});
