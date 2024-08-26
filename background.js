/*
chrome.alarms.onAlarm.addListener(
    () => {
        if (temp === "20min timer!"){
            chrome.notifications.create(
                {
                    type: 'basic',
                    iconUrl: 'eye2.png',
                    title: 'Eye-Break Reminder',
                    message: "It's been 20min! Time to start 20sec eye break!"
                },
                () => { }
                
            )
        } else if (temp === "20sec timer!") {
            chrome.notifications.create(
                {
                    type: 'basic',
                    iconUrl: 'eye.png',
                    title: 'Eye-Break Over!',
                    message: "It's been 20sec! Time to restart the 20min screen time!"
                },
                () => { }
                
            )
        }
        
    }
)
   

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.time === 1){
            create20min();
        }else {
            create20sec();
        }
    
    sendResponse({status: "timer set"});
});

var temp = "timer";

function create20min() {
    chrome.alarms.create(
        "20min timer!",
        {
          delayInMinutes: 1/3
        }
        
    );
    temp = "20min timer!";
}

function create20sec() {
    chrome.alarms.create(
        "20sec timer!",
        {
          delayInMinutes: 1/3
        }
        
    );
    temp = "20sec timer!";
}
*/

chrome.alarms.onAlarm.addListener(
    (alarm) => {  // Use 'alarm' parameter here
        console.log("Alarm triggered:", alarm.name); 
        if (alarm.name === "20min timer!") {
            chrome.notifications.create(
                {
                    type: 'basic',
                    iconUrl: 'eye2.png',
                    title: 'Eye-Break Reminder',
                    message: "It's been 20min! Time to start your 20sec eye break!"
                },
                () => { }
            );
        } else if (alarm.name === "20sec timer!") {
            chrome.notifications.create(
                {
                    type: 'basic',
                    iconUrl: 'eye.png',
                    title: 'Eye-Break Over!',
                    message: "It's been 20sec! Time to restart your 20min screen time!"
                },
                () => { }
            );
        }
    }
);

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.time === "1") {
            create20min();
        } else if (request.time === "2") {
            create20sec();
        }

        sendResponse({ status: "timer set" });
    }
);

function create20min() {
    chrome.alarms.create("20min timer!", {
        delayInMinutes: 20 // Corrected to 20 minutes for the 20min timer
    });
}

function create20sec() {
    chrome.alarms.create("20sec timer!", {
        delayInMinutes: 1/3  // 20 seconds
    });
}
