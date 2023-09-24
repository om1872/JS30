let timer_id;
const timeLeft = document.querySelector('.display__time-left');
const endtime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {
    const currtime = Date.now();
    const endtime = currtime + seconds * 1000;
    clearInterval(timer_id);
    displayTimeLeft(seconds);
    displayEndTime(endtime);

    timer_id = setInterval(function () {
        const time = Date.now();
        const rem = Math.round((endtime - time) / 1000);
        if (rem < 0) {
            clearInterval(timer_id);
            return;
        }
        displayTimeLeft(rem);
    }, 1000);

}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timeLeft.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endtime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time)*60;
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const seconds=this.minutes.value*60;
    timer(seconds);
    this.reset();
})