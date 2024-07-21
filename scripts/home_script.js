"use strick"

// selecting elements to apply click
const currency = document.getElementById('currency');
const language = document.getElementById('language');

// selecting elements to hidden waiting for click
const currencyContent = document.getElementById('currency-content');
const languageContent = document.getElementById('language-content');


currencyContent.classList.add('hidden');
languageContent.classList.add('hidden');

currency.addEventListener('click' , function() {
    currencyContent.classList.toggle('hidden');
});

language.addEventListener('click' , function() {    
    languageContent.classList.toggle('hidden');
});