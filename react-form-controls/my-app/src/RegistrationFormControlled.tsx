import { ChangeEvent } from 'react';
import { useState } from 'react';

export function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(userName, password);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        User Name:
        <input
          value={userName}
          onChange={(e) => setUserName(e.currentTarget.value)}
          type="text"
        />
      </label>
      <label>
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          type="password"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
