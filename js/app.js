const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const body = document.querySelector('body');
const header = document.querySelector('#header');
const overlay = document.querySelector('.overlay');
const fadeAnime = document.querySelectorAll('.fade');
const fadeText = document.querySelectorAll('.fade-text');
hamburger.addEventListener('click', () => {
    //open
    document.querySelector('.btn-hamburger').style.visibility = 'hidden';
    document.querySelector('.btn-close').style.visibility = 'visible';
    fadeAnime.forEach(function(element) {
        element.classList.add('fade-in');
        element.classList.remove('fade-out');
    });
    fadeText.forEach((element) => {
        element.classList.add('fadeIn');
    });

});
//close
close.addEventListener('click', () => {
    document.querySelector('.btn-close').style.visibility = 'hidden';
    document.querySelector('.btn-hamburger').style.visibility = 'visible';
    fadeAnime.forEach(function(element) {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
    fadeText.forEach((element) => {
        element.classList.remove('fadeIn');
    });

});