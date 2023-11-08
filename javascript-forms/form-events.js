const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('Focus Event: fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('Blur Event: fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

// console.log(handleInput(input));
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('input', handleInput);
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
