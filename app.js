window.addEventListener("DOMContentloaded", showCurrentTime());
// Show current time
 function showCurrentTime()
{
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
let meridian ="AM";


if(hours == 0)
{
    hours = 12;
}

if(hours > 12)
{
    hours = hours - 12;
    meridian = "PM";
}

// Set hours
hours = hours < 10 ? (hours = "0" + hours) : hours;

// Set minutes
minutes = minutes < 10 ? (minutes = "0" + minutes) : minutes;

// Set seconds
seconds = seconds < 10 ? (seconds = "0" + seconds) : seconds;

// Time String

const time = `${hours}:${minutes}:<small>${seconds}|${meridian}</small>`;

document.getElementById("displayClock").innerHTML = time;
setTimeout(showCurrentTime, 1000);



// Background and User
let bg;
const userName = "DaRkSoUL";
const user = document.getElementById("User");

if (hours >= 4 && hours <= 8 && meridian === "AM")
{
    bg = `url(./images/morning.jpg)`;
    user.innerHTML = `Good Morning, ${userName}`;
}

else if (hours > 8 && hours < 12 && meridian === "AM")
{
    bg = `url(./images/day.jpg)`
    user.innerHTML = `Good Day, ${userName}`;
}

else if (hours >= 1 && hours <= 5 && meridian === "PM")
{
    bg = `url(./images/afternoon.jpg)`
    user.innerHTML = `Good Afternoon, ${userName}`;
}

else if ( hours <= 10 && meridian === "PM")
{
    bg = `url(./images/evening.jpg)`
    user.innerHTML = `Good Evening, ${userName}`;
}

else
{
    bg= `url(./images/night.jpg)`
    user.innerHTML = `Good Night, ${userName}`;
}

const body = document.querySelector("body");
body.style.background = `${bg} center/cover`;


};