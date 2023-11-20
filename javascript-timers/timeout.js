const $message = document.querySelector('.message');

function helloThere() {
  $message.textContent = 'Hello There';
}

const timeoutID = setTimeout(helloThere, 2000);

console.log(timeoutID);
