"use strick"

// selecting elements to apply click
const currency = document.getElementById('currency');
const language = document.getElementById('language');

const shoppingContainer = document.querySelector('.shopping-container');
const market = document.querySelector('.market');
const matchesLink = document.getElementById('matches-link');
const subMenu = document.getElementById('sub-menu');
const playersLink = document.getElementById('players-link');
const menuPlayersLink = document.getElementById('menu-players-link');
const menuTopPlayerLink = document.getElementById('menu-top-player-link');

const menuDisplayIcon = document.getElementById('menu-display-icon');
const layer = document.getElementById('layer');
const displayNav = document.getElementById('display-nav');


// selecting elements to hidden waiting for click
const playersContent = document.querySelector('.players-content');

const currencyContent = document.getElementById('currency-content');
const languageContent = document.getElementById('language-content');

const menuMatchesContent = document.getElementById('menu-matches-content');
const menuMatchesLink = document.getElementById('menu-matches-link');
const menRecentContent = document.getElementById('menu-recent-content');
const menuRecentWinLink = document.getElementById('menu-recent-win-link');
const menuPlayersContent = document.getElementById('menu-players-content');
const menuTopPlayersContent = document.getElementById('menu-top-players-content');

const menuContainer = document.querySelector('.menu-container');


// reseting values in HTML
currencyContent.classList.add('hidden');
languageContent.classList.add('hidden');

shoppingContainer.classList.add('hidden');
subMenu.classList.add('hidden');
playersContent.classList.add('hidden');

menuMatchesContent.classList.add('hidden');
menRecentContent.classList.add('hidden');
menuPlayersContent.classList.add('hidden');
menuTopPlayersContent.classList.add('hidden');

menuContainer.classList.add('sliding-left-content');
layer.classList.add('hidden');



// appling clicking event
currency.addEventListener('click' , function() {
    currencyContent.classList.toggle('hidden');
    languageContent.classList.add('hidden');
    shoppingContainer.classList.add('hidden');
});

language.addEventListener('click' , function() {    
    languageContent.classList.toggle('hidden');
    currencyContent.classList.add('hidden');
    shoppingContainer.classList.add('hidden');
});


market.addEventListener('click' , function() {
    shoppingContainer.classList.toggle('hidden');
    subMenu.classList.add('hidden');
    playersContent.classList.add('hidden');
    currencyContent.classList.add('hidden');
    languageContent.classList.add('hidden');
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


// menu content functionnality
menuMatchesLink.addEventListener('click' , function(e) {
    e.preventDefault();
    menuMatchesContent.classList.toggle('hidden');
    menRecentContent.classList.add('hidden');
    menuPlayersContent.classList.add('hidden');
});

menuRecentWinLink.addEventListener('click' , function(e) {
    e.preventDefault();
    menRecentContent.classList.toggle('hidden');
});

menuPlayersLink.addEventListener('click' , function(e) {
    e.preventDefault();
    menuPlayersContent.classList.toggle('hidden');
    menuTopPlayersContent.classList.add('hidden');
    menuMatchesContent.classList.add('hidden');
});

menuTopPlayerLink.addEventListener('click' , function(e) {
    e.preventDefault();
    menuTopPlayersContent.classList.toggle('hidden');
});


// nav bar functionnality
displayNav.addEventListener('click' , function() {
    menuContainer.classList.toggle('sliding-left-content');
    layer.classList.toggle('hidden');
    shoppingContainer.classList.add('hidden');
    currencyContent.classList.add('hidden');
    languageContent.classList.add('hidden');
});

menuDisplayIcon.addEventListener('click' , function() {
    menuContainer.classList.toggle('sliding-left-content');
    layer.classList.toggle('hidden');
    menuMatchesContent.classList.add('hidden');
    menuPlayersContent.classList.add('hidden');
});