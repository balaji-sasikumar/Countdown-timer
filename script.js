const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondssEl = document.getElementById('seconds');

console.log(daysEl);

const newyear = "1 Jan 2021";

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

function countdown(){
    const newyeardate = new Date(newyear);
    const curdate = new Date();
    
    const totsec = (newyeardate-curdate)/1000;
    const days = Math.floor(totsec/3600/24);
    const hours = Math.floor(totsec/3600)%24;
    const mins = Math.floor(totsec/60)%60;
    const seconds = Math.floor(totsec)%60;
    
    console.log(days,hours,mins,seconds);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondssEl.innerHTML = formatTime(seconds);

}

countdown();

setInterval(countdown,1000);
