const myBtn= document.querySelector('#menu-btn');
const nav= document.querySelector('#menu');

function navToggle(){
    myBtn.classList.toggle('open');
    nav.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
}


myBtn.addEventListener('click', navToggle);