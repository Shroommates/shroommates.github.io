if (!checkValid(localStorage.getItem('isLight'))) {
    localStorage.setItem('isLight', 1); // Set initial value of isLight if invalid
}

let lightMode = localStorage.getItem('isLight');
// console.log('lightMode set to ' + lightMode);

// Set up initial theme
if (lightMode == 1) {
    // console.log('Setting up page with light theme');
    setLightTheme();
    document.getElementById('toggle').checked = 0; // Make sure checkbox is (un)checked appropriately
} else if (lightMode == 0) {
    // console.log('Setting up page with dark theme');
    setDarkTheme();
    document.getElementById('toggle').checked = 1; // Make sure checkbox is (un)checked appropriately
} else {
    console.log('lightMode is ' + lightMode + ', you shouldn\'t be here wtf');
}

// Toggle theme when switch pressed
function toggleMode() {
    if (lightMode == 0) {
        // console.log('Switching to light theme');
        setLightTheme();
        lightMode = 1;
        localStorage.setItem('isLight', lightMode);
    } else if (lightMode == 1) {
        // console.log('Switching to dark theme');
        setDarkTheme();
        lightMode = 0;
        localStorage.setItem('isLight', lightMode);
    }
}

// Checks if isLight exists and is a valid value
function checkValid(item) {
    if (item === null || (item != 1 && item != 0)) {
        // console.log('isLight does not exist or does not have a valid value');
        return false;
    } else {
        // console.log('isLight does exist and has a valid value');
        return true;
    }
}

function setLightTheme() {
    document.body.style.backgroundColor="#eee";
    document.getElementById('nameTitle').style.color="#333";
    document.getElementById('header').style.backgroundColor="#333";
    document.getElementById('header').classList.remove('darker-header');
    document.getElementById('header').classList.add('dark-header');
    document.getElementById('wrapper').style.color="#333";
    document.getElementById('wrapper').style.backgroundColor="#eee";
    let notes = document.getElementsByClassName('projectNote');
    for (let i = 0; i < notes.length; i++) {
      notes[i].style.color="#535353";
    }
}

function setDarkTheme() {
    document.body.style.backgroundColor="#333";
    document.getElementById('nameTitle').style.color="#eee";
    document.getElementById('header').style.backgroundColor="#222";
    document.getElementById('header').classList.remove('dark-header');
    document.getElementById('header').classList.add('darker-header');
    document.getElementById('wrapper').style.color="#eee";
    document.getElementById('wrapper').style.backgroundColor="#333";
    let notes = document.getElementsByClassName('projectNote');
    for (let i = 0; i < notes.length; i++) {
      notes[i].style.color="#bbb";
    }
}
