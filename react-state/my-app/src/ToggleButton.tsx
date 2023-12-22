import { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export function ToggleButton({ text, color }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('This is the value returned by useState:', isClicked);

  function handleClick() {
    console.log('This is the value before calling the setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('This is the value after calling the setter:', isClicked);
  }
  if (isClicked) {
    return (
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        {' '}
        {text}{' '}
      </button>
    );
  }

  return (
    <button onClick={handleClick} className={color}>
      {' '}
      {text}{' '}
    </button>
  );
}
