
const mainNav = document.querySelector('.main-nav');
const date = document.querySelector('.date');
const weather = document.querySelector('.weather');
const signInButton = document.querySelector('.sign-in-button');
const subscribeButton = document.querySelector('.subscribe-button');
const subContainer = document.querySelector('.sign-in-subscribe-container');
const hamburgerLink = document.querySelector('.hamburger-link');
const hamburger = document.querySelector('.hamburger');
const searchContainer = document.querySelector('.search-container');
const searchButton = document.querySelector('.search-button');
const dateContainer = document.querySelector('.nav-date-weather-container');


function checkPosition() {
    let scrollPos = 0;
    let windowY = window.scrollY;
    if (scrollPos < windowY) {
        mainNav.classList.add('main-nav-shrink');
        mainNav.classList.add('nav-shadow');
        date.classList.add('hide');
        weather.classList.add('hide');
        subContainer.classList.add('hide');
        dateContainer.classList.add('hide');
        signInButton.classList.add('hide');
        subscribeButton.classList.add('hide');
        hamburgerLink.classList.add('show');
        hamburger.classList.add('big-button');
        searchButton.classList.add('big-button');
        searchContainer.classList.add('show');
        searchContainer.classList.add('big-button');
    }
    scrollPos = windowY;
    if (windowY === 0) {
        mainNav.classList.remove('main-nav-shrink');
        mainNav.classList.remove('nav-shadow');
        date.classList.remove('hide');
        weather.classList.remove('hide');
        subContainer.classList.remove('hide');
        dateContainer.classList.add('hide');
        signInButton.classList.remove('hide');
        subscribeButton.classList.remove('hide');
        hamburgerLink.classList.remove('show');
        hamburger.classList.remove('big-button');
        searchContainer.classList.remove('show');
        searchButton.classList.remove('big-button');
        dateContainer.classList.remove('hide');
        searchContainer.classList.remove('big-button');
    }
}

window.addEventListener('scroll', checkPosition);



const now = new Date();

const day = now.getDay();
const month = now.getMonth();
const dateNumber = now.getDate();
const year = now.getFullYear();


let dayName = "Sunday";
let monthName = "January";
let yearName = "1999";
let dateString = "";


const getDayName = (day) => {
    switch (day) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
    }
    dayName = dayName.slice(0, 3);
    return dayName;
}

const getMonthName = (month) => {
    switch (month) {
        case 0:
            monthName = "January";
            break;
        case 1:
            monthName = "February";
            break;
        case 2:
            monthName = "March";
            break;
        case 3:
            monthName = "April";
            break;
        case 4:
            monthName = "May";
            break;
        case 5:
            monthName = "June";
            break;
        case 6:
            monthName = "July";
            break;
        case 7:
            monthName = "August";
            break;
        case 8:
            monthName = "September";
            break;
        case 9:
            monthName = "October";
            break;
        case 10:
            monthName = "November";
            break;
        case 11:
            monthName = "December";
            break;
    }
    monthName = monthName.slice(0, 3);
    return monthName;
}

getDayName(day);
getMonthName(month);

const formattedDate = dayName + ", " + monthName + " " + dateNumber + ", " + year;

date.textContent = formattedDate;