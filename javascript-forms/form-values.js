const $contact = document.querySelector('#contact-form');
$contact.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const obj = {
    name: $contact.elements.name.value,
    // email: $contact.elements.email.value
    // message: $contact.elements.message.value
  };
  const obj2 = {
    email: $contact.elements.email.value,
  };
  const obj3 = {
    message: $contact.elements.message.value,
  };

  console.log(obj, obj2, obj3);
}
