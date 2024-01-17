import { useState } from 'react';
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';

export function StopWatch() {
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();

  function handleClick() {
    if (play) {
      clearInterval(intervalID);
      setIntervalID(undefined);
    } else {
      const ID = setInterval(() => setCount((count) => count + 1), 1000);
      setIntervalID(ID);
    }
    setPlay(!play);
  }

  function handleNextClick() {
    if (!play) setCount(0);
  }

  return (
    <>
      <div className="card">
        <button className="watch" onClick={handleNextClick}>
          {count}
        </button>
      </div>
      <div className="play" onClick={handleClick}>
        {play ? <FaPause /> : <FaPlay />}
      </div>
    </>
  );
}
