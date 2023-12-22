import { useState } from 'react';

type Props = {
  text: string;
};

export function HotButton({ text }: Props) {
  const [clicked, setClicked] = useState(0);
  let color;

  function handleClick() {
    setClicked(clicked + 1);
  }

  if (clicked <= 3) {
    color = 'indigo';
  } else if (clicked > 3 && clicked <= 6) {
    color = 'purple';
  } else if (clicked > 6 && clicked <= 9) {
    color = 'IndianRed';
  } else if (clicked > 9 && clicked <= 12) {
    color = 'orange';
  } else if (clicked > 12 && clicked <= 15) {
    color = 'yellow';
  } else if (clicked > 15) {
    color = 'white';
  }

  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
