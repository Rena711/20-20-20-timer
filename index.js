var timerElement = document.getElementById('timer');
var timer;
const breakElement = document.querySelector('.twenty-second-break');
const containerElement = document.getElementById('timer-container');
document.getElementById("startButten").addEventListener("click", start);
document.getElementById("start20sButten").addEventListener("click", start20s);

function start(){
    containerElement.innerHTML = `
        <h3 class="text">Timer started...</h3>
        <button id="stopButten" >stop</button>  
    `;
    document.getElementById("stopButten").addEventListener("click", stop);
    chrome.runtime.sendMessage({ time: "1"}, function (response){
        console.log(response);
    })
    clearInterval(timer); // Stop the timer
    return; // Exit the setInterval callback
    
    
}

function stop(){
    clearInterval(timer);
    sec = 0;
    min = 0;
    containerElement.innerHTML = `
        <div class="play-pause">
           <h3 class="text">START:</h3>
        </div>
        <div class="twenty-minutes">
            <button id="startButten" >20 min screen time</button>
            <button id="start20sButten" >20 sec eye-break</button> 
        </div>
    `;
    document.getElementById("startButten").addEventListener("click", start);
    document.getElementById("start20sButten").addEventListener("click", start20s);
}

function startTimer() {
    twentyElement.innerHTML = `
        <h3 class="text">Start 20min screen time?</h3>
        <button id="startButten" >start</button>  
    `;
    
    document.getElementById("startButten").addEventListener("click", start);

}

function start20s(){
    containerElement.innerHTML = `
        <h3 class="text">Timer started...</h3>
        <button id="stopButten" >stop</button>  
    `;
    
        chrome.runtime.sendMessage({ time: "2"}, function (response){
            console.log(response);
        })
        clearInterval(timer); // Stop the timer
        return;
}
