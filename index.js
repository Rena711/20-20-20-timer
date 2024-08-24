var timerElement = document.getElementById('timer');
var timer;
const breakElement = document.querySelector('.twenty-second-break');
const twentyElement = document.querySelector('.twenty-minutes');



function start(){
    var sec = 0;
    var min = 0;
    timer = setInterval(() => {
        // Format minutes and seconds with leading zeros if needed
        const formattedSec = sec < 10 ? `0${sec}` : sec;
        const formattedMin = min < 10 ? `0${min}` : min;
        
        timerElement.innerHTML = `${formattedMin}:${formattedSec}`
        sec++;
        if (sec === 60){
            sec = 0;
            min++;
        }
        if(min === 20){
            alert("Time to take an eye break!");
            clearInterval(timer); // Stop the timer
            breakTimer(); // Show break element
            return; // Exit the setInterval callback
        }


    }, 1000)
}

function pause(){
    clearInterval(timer);
}

function breakTimer() {
    twentyElement.innerHTML = `
        <h3>Ready for your 20s break?</h3>
        <button onclick='start20s()'>Start</button>
    `;

    timerElement.innerHTML = '00:00';
}

function startTimer() {
    twentyElement.innerHTML = `
        <button onclick='start()'>Start</button>
        <button onclick='pause()'>Pause</button>
    `;
    timerElement.innerHTML = '00:00';
}


function start20s(){
    var sec = 0;
    var min = 0;
    timer = setInterval(() => {
        // Format minutes and seconds with leading zeros if needed
        const formattedSec = sec < 10 ? `0${sec}` : sec;
        const formattedMin = min < 10 ? `0${min}` : min;
        
        timerElement.innerHTML = `${formattedMin}:${formattedSec}`
        sec++;
        if (sec === 20){
            alert("Break time over!");
            clearInterval(timer); // Stop the timer
            startTimer();
            return; // Exit the setInterval callback
        }


    }, 1000)
}