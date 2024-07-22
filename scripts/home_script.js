"use strick"

// selecting elements to apply click
const currency = document.getElementById('currency');
const language = document.getElementById('language');

const shoppingContainer = document.querySelector('.shopping-container');
const market = document.querySelector('.market');
const matchesLink = document.getElementById('matches-link');
const subMenu = document.getElementById('sub-menu');
const playersContent = document.querySelector('.players-content');
const playersLink = document.getElementById('players-link');


// selecting elements to hidden waiting for click
const currencyContent = document.getElementById('currency-content');
const languageContent = document.getElementById('language-content');


// reseting values in HTML
currencyContent.classList.add('hidden');
languageContent.classList.add('hidden');

shoppingContainer.classList.add('hidden');
subMenu.classList.add('hidden');
playersContent.classList.add('hidden');


// appling clicking event
currency.addEventListener('click' , function() {
    currencyContent.classList.toggle('hidden');
    languageContent.classList.add('hidden');
});

language.addEventListener('click' , function() {    
    languageContent.classList.toggle('hidden');
    currencyContent.classList.add('hidden');
});


market.addEventListener('click' , function() {
    shoppingContainer.classList.toggle('hidden');
    subMenu.classList.add('hidden');
    playersContent.classList.add('hidden');
});

matchesLink.addEventListener('click' , function(e) {
    e.preventDefault();
    subMenu.classList.toggle('hidden');
    playersContent.classList.add('hidden');
    shoppingContainer.classList.add('hidden');
});

playersLink.addEventListener('click' , function(e) {
    e.preventDefault();
    playersContent.classList.toggle('hidden');
    subMenu.classList.add('hidden');
    shoppingContainer.classList.add('hidden');
});