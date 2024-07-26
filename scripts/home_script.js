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

const search = document.getElementById('search');
const searchInput = document.getElementById('search-input');

const newsletterBtn = document.getElementById('newsletter-btn');
const newsletterInput = document.getElementById('newsletter-input');

// hebert classes clicking events
const changePlayerRight = document.getElementById('change-player-right');
const changePlayerLeft = document.getElementById('change-player-left');


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

const hebertImage = document.getElementById('hebert-image');
const shanasImage = document.getElementById('shanas-image');
const hebertPlayerInfo = document.getElementById('hebert-player-info');
const shanasPlayerInfo = document.getElementById('shanas-player-info');
const hebertText = document.getElementById('hebert-text');
const shanasText = document.getElementById('shanas-text');


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


// hebert player classes
hebertImage.classList.add('hidden');
hebertPlayerInfo.classList.add('hidden');
hebertText.classList.add('hidden');



// appling clicking event
currency.addEventListener('click' , function() {
    currencyContent.classList.toggle('hidden');
    languageContent.classList.add('hidden');
    shoppingContainer.classList.add('hidden');
    searchInput.style = 'border: 1px solid transparent';
    newsletterInput.style = 'border: 1px solid transparent';
});

language.addEventListener('click' , function() {    
    languageContent.classList.toggle('hidden');
    currencyContent.classList.add('hidden');
    shoppingContainer.classList.add('hidden');
    searchInput.style = 'border: 1px solid transparent';
    newsletterInput.style = 'border: 1px solid transparent';
});


market.addEventListener('click' , function() {
    shoppingContainer.classList.toggle('hidden');
    subMenu.classList.add('hidden');
    playersContent.classList.add('hidden');
    currencyContent.classList.add('hidden');
    languageContent.classList.add('hidden');
    searchInput.style = 'border: 1px solid transparent';
    newsletterInput.style = 'border: 1px solid transparent';
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
    searchInput.style = 'border: 1px solid transparent';
    newsletterInput.style = 'border: 1px solid transparent';
});

menuDisplayIcon.addEventListener('click' , function() {
    menuContainer.classList.toggle('sliding-left-content');
    layer.classList.toggle('hidden');
});


// hebert shanas functionnality
changePlayerRight.addEventListener('click' , function() {
    shanasImage.classList.add('hidden');
    hebertImage.classList.remove('hidden');
    hebertPlayerInfo.classList.remove('hidden');
    shanasPlayerInfo.classList.add('hidden');
    hebertText.classList.remove('hidden');
    shanasText.classList.add('hidden');
});

changePlayerLeft.addEventListener('click' , function() {
    shanasImage.classList.remove('hidden');
    hebertImage.classList.add('hidden');
    hebertPlayerInfo.classList.add('hidden');
    shanasPlayerInfo.classList.remove('hidden');
    hebertText.classList.add('hidden');
    shanasText.classList.remove('hidden');
});


newsletterBtn.addEventListener('click' , function(e) {
    e.preventDefault();
    searchInput.style = 'border: 1px solid transparent';
    shoppingContainer.classList.add('hidden');
    currencyContent.classList.add('hidden');
    languageContent.classList.add('hidden');

    if (newsletterInput.value) {
        newsletterInput.style = 'border: 1px solid transparent';
    }
    else {
        newsletterInput.style = 'border: 1px solid red';
    }
});


search.addEventListener('click' , function() {
    newsletterInput.style = 'border: 1px solid transparent';
    shoppingContainer.classList.add('hidden');
    currencyContent.classList.add('hidden');
    languageContent.classList.add('hidden');

    if (searchInput.value) {
        searchInput.style = 'border: 1px solid transparent';
    }
    else {
        searchInput.style = 'border: 1px solid red';
        search.style = 'padding-bottom: 12px';
    }
});