importScripts('index.js');

chrome.alarms.create("myTimer", {
    delayInMinutes: 20
});

chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === 'myTimer') {
        alert("Time to take an eye break!"); // Alert after 20 minutes
        console.log("alarm running at " + new Date().getSeconds());
    }
});