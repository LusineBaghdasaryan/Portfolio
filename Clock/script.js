const hours = document.querySelector('.hours_p');
const minutes = document.querySelector('.minutes_p');
const seconds = document.querySelector('.seconds_p');
const stop = document.querySelector('.stop-button');
const start = document.querySelector('.start-button');
const auto = document.querySelector('.auto-button');


let currentTime = {
    hours: 23,
    minutes: 59,
    seconds: 47
};

let timer = null;
initTime();

hours.innerText = currentTime.hours;
minutes.innerText = currentTime.minutes;
seconds.innerText = currentTime.seconds;


startTimer();

function startTimer() {
    timer = setInterval(() => {
        
        if (currentTime.seconds === 59) {
            currentTime.seconds = 0;
            
            if (currentTime.minutes === 59) {
                currentTime.minutes = 0;
                
                if (currentTime.hours === 23) {
                    currentTime.hours = 0;
                }
                else {
                    currentTime.hours++;
                }
                hours.innerText = currentTime.hours < 10 ? '0' + currentTime.hours : currentTime.hours;
                
            }
            else {
                currentTime.minutes++;
            }
            minutes.innerText = currentTime.minutes < 10 ? '0' + currentTime.minutes : currentTime.minutes;
        }
        
        else {
            currentTime.seconds++;
        }
        seconds.innerText = currentTime.seconds < 10 ? '0' + currentTime.seconds : currentTime.seconds;
    }, 1000);
}

stop.addEventListener('click', stopTimer);

function stopTimer() {
    clearInterval(timer);
}

start.addEventListener('click', startTimer);

function initTime() {
    hours.innerText = currentTime.hours;
    minutes.innerText = currentTime.minutes;
    seconds.innerText = currentTime.seconds;
}

auto.onclick = function () {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    currentTime = {
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds
    };
    initTime();
    
};

