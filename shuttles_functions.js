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
let shuttle_nasa = document.getElementById('shuttle_nasa');
let satelit = document.getElementById('satelit');
//let station = document.getElementById('station');


window.addEventListener('scroll', function()
{
    let value = window.scrollY;
  
   text.style.top = value * -0.1 + 50 + '%';
   header.style.top= value * -0.05 + 'px'; 
   //station.style.top = value * -1.25 + 'px';
   //station.style.left = value * 0.5 + 'px';
   shuttle_nasa.style.top = value * -3 + 'px';
   shuttle_nasa.style.left = value * 1.5 + 'px';
   satelit.style.top = value * 0.75 + 'px';
   satelit.style.left = value * -1.25 + 'px';
});