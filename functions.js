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