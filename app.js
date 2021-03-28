// Selecting DOM elements
const buttons = document.querySelectorAll('[data-time]');
const timerDisplay = document.querySelector('.display_time');
const endTime = document.querySelector('.display_time_back');


// Functions
 function timer(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
        timerDisplay.textContent = `${hours}:${minutes < 10 ? '0': ''}${minutes}:${seconds}`;
    
}

setInterval(() => {timer();}, 1000);


// Event Listeners