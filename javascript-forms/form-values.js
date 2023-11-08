const $contact = document.querySelector('#contact-form');
$contact.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const name = $contact.elements.name.value;
  const email = $contact.elements.email.value;
  const message = $contact.elements.message.value;

  const obj = {
    name,
    email,
    message,
  };

  console.log('Obj:', obj);
  $contact.reset();
}
