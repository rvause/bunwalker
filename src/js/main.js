window.onload = () => startTimer();

// 2021-11-19T09:00:00
const bunwalkerDate = new Date("2021-12-03T09:00:00").getTime();
let timerInt = null;
let timerEl = null;

function startTimer() {
    console.info("Timer started...");
    timerEl = document.getElementById("timer");
    updateTimer();
    timerInt = setInterval(updateTimer, 1000);

    selectBanner();
}

function getTime() {
    const diff = bunwalkerDate - (new Date().getTime());
    if (diff <= 0) {
        return null
    }
    return {
        seconds: Math.floor((diff / 1000) % 60),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    };
}

function updateTimer() {
    const current = getTime();
    const newEl = timerEl.cloneNode(false);
    if (current) {
        newEl.innerHTML = `${current.days} days<br>${current.hours} hours<br>${current.minutes} minutes<br>${current.seconds} seconds`;
    } else {
        newEl.innerHTML = "The wait is over!";
    }
    timerEl.parentNode.replaceChild(newEl, timerEl);
    timerEl = newEl;
}

function selectBanner() {
    const $recEl = document.getElementsByClassName("recruit")[0];
    $recEl.children[Math.floor(Math.random() * $recEl.children.length)].style = "display: initial;";
}
