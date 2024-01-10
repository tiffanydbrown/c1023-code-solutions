import { useCallback, useEffect, useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState(0);

  const getData = useCallback(() => {
    //fetch data
    console.log('clicks', clicks);
    return { foo: 'bar' };
  }, [clicks]);

  useEffect(() => {
    getData();
    setCounter((prev) => prev + 1);
  }, [getData]);

  return (
    <div onClick={() => setClicks(clicks + 1)}>
      Fetching {counter} times with {clicks} clicks
    </div>
  );
}
