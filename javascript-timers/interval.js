let count = 4;
let countdownId = null;
const $countdownDisplay = document.querySelector('.countdown-display');

function countdown() {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownId);
  }
}

countdownId = setInterval(countdown, 1000);
