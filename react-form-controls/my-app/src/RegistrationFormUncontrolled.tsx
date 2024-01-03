import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        User Name:
        <input type="text" name="userName" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
