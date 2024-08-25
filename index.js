var timerElement = document.getElementById('timer');
var timer;
const breakElement = document.querySelector('.twenty-second-break');
const twentyElement = document.querySelector('.twenty-minutes');
document.getElementById("startButten").addEventListener("click", start);
document.getElementById("pauseButten").addEventListener("click", pause);

function start(){
    var sec = 0;
    var min = 0;
    clearInterval(timer); // Clear any existing timer
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
    }, 10)
}

function pause(){
    clearInterval(timer);
}

function breakTimer() {
    twentyElement.innerHTML = `
        <h3>Ready for your 20s break?</h3>
        <button id="start20sButton">Start</button>
    `;

    document.getElementById("start20sButton").addEventListener("click", start20s);
    timerElement.innerHTML = '00:00';
}

function startTimer() {
    twentyElement.innerHTML = `
        <button id="startButten">Start</button>
        <button id="pauseButten">Pause</button>
    `;
    timerElement.innerHTML = '00:00';
    
    document.getElementById("startButten").addEventListener("click", start);
    document.getElementById("pauseButten").addEventListener("click", pause);
}

function start20s(){
    startTimer();
    var sec = 0;
    clearInterval(timer); // Clear any existing timer
    timer = setInterval(() => {
        // Format minutes and seconds with leading zeros if needed
        const formattedSec = sec < 10 ? `0${sec}` : sec;
        
        timerElement.innerHTML = `00:${formattedSec}`
        sec++;
        if (sec === 20){
            alert("Break time over!");
            clearInterval(timer); // Stop the timer
            return; // Exit the setInterval callback
        }
    }, 1000)
}
