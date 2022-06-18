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
let header = document.getElementById('header');
let mars = document.getElementById('mars');
let saturn = document.getElementById('saturn');
let jupiter = document.getElementById('jupiter');


window.addEventListener('scroll', function()
{
    let value = window.scrollY;
  
   text.style.top = value * -0.1 + 50 + '%';
   header.style.top= value * -0.05 + 'px'; 
   mars.style.top = value * -0.5 + 'px';
   mars.style.left = value * -0.8 + 'px';
   saturn.style.top = value * 1 + 'px';
   saturn.style.left = value * 1.5 + 'px';
   jupiter.style.top = value * -0.75 + 'px';
   jupiter.style.left = value * 0.5 + 'px';
});