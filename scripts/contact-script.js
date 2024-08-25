"use strick"

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

const sendBtn = document.getElementById('send-btn');
const firstName = document.getElementById('first-name'); 
const lastName = document.getElementById('last-name'); 
const phoneNumber = document.getElementById('phone-number'); 
const email = document.getElementById('email'); 
const contactMessage = document.getElementById('contact-message'); 
const contactErrorMessageF = document.querySelector('.contact-error-message-first');
const contactErrorMessageL = document.querySelector('.contact-error-message-last');
const contactErrorMessageNumber = document.querySelector('.contact-error-message-number');
const contactErrorMessageEmail = document.querySelector('.contact-error-message-email');
const contactErrorMessageMessage = document.querySelector('.contact-error-message-message');
const contactErrorMessageSuccess = document.querySelector('.contact-error-message-success');

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


// rate selecting El
const rateContainer = document.querySelector('.rate-container');
const rate = document.getElementById('rate');
const rateBtn = document.getElementById('rate-btn');
const rateLatter = document.getElementById('rate-latter');
const rateLayer = document.querySelector('.rate-layer');

rateContainer.classList.toggle('rate--hidden');



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

contactErrorMessageF.classList.add('hidden');
contactErrorMessageL.classList.add('hidden');
contactErrorMessageNumber.classList.add('hidden');
contactErrorMessageEmail.classList.add('hidden');
contactErrorMessageMessage.classList.add('hidden');
contactErrorMessageSuccess.classList.add('hidden');

const loader = document.querySelector('.loader');


window.addEventListener('load' , function() {
    window.setTimeout(function() {
        loader.classList.add('hidden--delay');
    }  , 6000);
});


// appling clicking event
currency.addEventListener('click' , function(e) {
    e.preventDefault();
    subMenu.classList.add('hidden');
    playersContent.classList.add('hidden');
    currencyContent.classList.toggle('hidden');
    languageContent.classList.add('hidden');
    shoppingContainer.classList.add('hidden');
    searchInput.style = 'border: 1px solid transparent';
    newsletterInput.style = 'border: 1px solid transparent';
});

language.addEventListener('click' , function(e) {
    e.preventDefault(); 
    subMenu.classList.add('hidden');
    playersContent.classList.add('hidden');   
    languageContent.classList.toggle('hidden');
    currencyContent.classList.add('hidden');
    shoppingContainer.classList.add('hidden');
    searchInput.style = 'border: 1px solid transparent';
    newsletterInput.style = 'border: 1px solid transparent';
});


market.addEventListener('click' , function(e) {
    e.preventDefault();
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
    languageContent.classList.add('hidden');
    currencyContent.classList.add('hidden');
    subMenu.classList.toggle('hidden');
    playersContent.classList.add('hidden');
    shoppingContainer.classList.add('hidden');
});

playersLink.addEventListener('click' , function(e) {
    e.preventDefault();
    languageContent.classList.add('hidden');
    currencyContent.classList.add('hidden');
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
displayNav.addEventListener('click' , function(e) {
    e.preventDefault;
    menuContainer.classList.toggle('sliding-left-content');
    layer.classList.toggle('hidden');
    shoppingContainer.classList.add('hidden');
    currencyContent.classList.add('hidden');
    languageContent.classList.add('hidden');
    searchInput.style = 'border: 1px solid transparent';
    newsletterInput.style = 'border: 1px solid transparent';
});

menuDisplayIcon.addEventListener('click' , function(e) {
    e.preventDefault;
    menuContainer.classList.toggle('sliding-left-content');
    layer.classList.toggle('hidden');
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


searchInput.addEventListener('click' , function() {
    newsletterInput.style = 'border: 1px solid transparent';
    shoppingContainer.classList.add('hidden');
    currencyContent.classList.add('hidden');
    languageContent.classList.add('hidden');
});


newsletterInput.addEventListener('click' , function() {
    newsletterInput.style = 'border: 1px solid transparent';
    shoppingContainer.classList.add('hidden');
    currencyContent.classList.add('hidden');
    languageContent.classList.add('hidden');
});



sendBtn.addEventListener ('click' , function(e) {
    e.preventDefault();
    contactErrorMessageSuccess.classList.add('hidden');
    if (firstName.value) {
        console.log('working');
        contactErrorMessageF.classList.add('hidden');
        firstName.style = 'border-bottom: 1px solid white';
    }
    else {
        console.log('not working');
        contactErrorMessageF.classList.remove('hidden');
        firstName.style = 'border-bottom: 1px solid red';
    }

    if (lastName.value) {
        console.log('working');
        contactErrorMessageL.classList.add('hidden');
        lastName.style = 'border-bottom: 1px solid white';
    }
    else {
        console.log('not working');
        contactErrorMessageL.classList.remove('hidden');
        lastName.style = 'border-bottom: 1px solid red';
    }

    if (phoneNumber.value) {
        console.log('working');
        contactErrorMessageNumber.classList.add('hidden');
        phoneNumber.style = 'border-bottom: 1px solid white';
    }
    else {
        console.log('not working');
        contactErrorMessageNumber.classList.remove('hidden');
        phoneNumber.style = 'border-bottom: 1px solid red';
    }

    if (email.value) {
        console.log('working');
        contactErrorMessageEmail.classList.add('hidden');
        email.style = 'border-bottom: 1px solid white';
    }
    else {
        console.log('not working');
        contactErrorMessageEmail.classList.remove('hidden');
        email.style = 'border-bottom: 1px solid red';
    }

    if (contactMessage.value) {
        console.log('working');
        contactErrorMessageMessage.classList.add('hidden');
        contactMessage.style = 'border-bottom: 1px solid white';
    }
    else {
        console.log('not working');
        contactErrorMessageMessage.classList.remove('hidden');
        contactMessage.style = 'border: 1px solid red';
    }

    if (firstName.value && lastName.value && phoneNumber.value && email.value && contactMessage.value) {
        contactErrorMessageSuccess.classList.remove('hidden');
        firstName.value = '';
        lastName.value = '';
        phoneNumber.value = '';
        email.value = '';
        contactMessage.value = '';
    }
});




// rating javascript functionnality


window.setTimeout(function () {
    rateContainer.classList.toggle('rate--bring');
} , 7000);

rate.addEventListener('click' , function(e) {
    e.preventDefault();
    rateContainer.classList.toggle('rate--bring');
    rateContainer.classList.remove('rate--remove');
});

rateBtn.addEventListener('click' , function(e) {
    e.preventDefault();
    rateContainer.classList.toggle('rate--bring');
    rateContainer.classList.remove('rate--remove');
});

rateLayer.addEventListener('click' , function (e) {
  e.preventDefault();
  rateContainer.classList.toggle('rate--bring');
});

rateBtn.addEventListener('click' , function (e) {
  e.preventDefault();
  // rateContainer.classList.toggle('rate--remove');
  const rateResult = confirm("Thanks for Rating!\nAre you sure that's your rating?\nCancel --> No\nOK --> Yes");

  if (rateResult) {
      rateContainer.classList.toggle('rate--remove');
      alert('Thanks for the Rate!');
  }
  else {
      rateContainer.classList.toggle('rate--hidden');
  }

});

rateLayer.addEventListener('click' , function (e) {
  e.preventDefault();
  rateContainer.classList.toggle('rate--remove');
});

rateLatter.addEventListener('click' , function (e) {
  e.preventDefault();
  rateContainer.classList.toggle('rate--remove');
});

window.addEventListener('keydown' , (e) => {
  e.preventDefault();
  if (e.key === 'Escape') {
    rateContainer.classList.add('rate--remove');
    alert('Your rate has not been save!');
  }

  else if (e.key === 'r' && e.shiftKey) {
    rateContainer.classList.toggle('rate--hidden');
  }
});

