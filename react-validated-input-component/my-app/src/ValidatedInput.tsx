import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  function checkPassword(password: string): boolean {
    const pw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (pw.test(password)) {
      console.log('passed');
      return true;
    } else {
      console.log('failed');
      return false;
    }
  }

  const isPasswordValid = checkPassword(password);
  let message;

  if (password.length === 0) {
    message = 'A password is required.';
  } else if (password.length > 0 && password.length < 8) {
    message = 'Your password is too short.';
  } else if (password.length > 8) {
    message = '';
  } else if (!isPasswordValid) {
    message =
      'Password needs to contain a digit, a capital letter, and a special character.';
  }
  return (
    <label>
      Password:
      <br></br>
      <input
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        type="password"
        className={isPasswordValid ? 'valid' : 'invalid'}
      />
      <a>
        {message ? (
          <FaTimes className="error" />
        ) : (
          <FaCheck className="correct" />
        )}
      </a>
      <p className="enter">{message}</p>
    </label>
  );
}
