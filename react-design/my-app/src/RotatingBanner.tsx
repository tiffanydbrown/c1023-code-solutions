import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handlePrev = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Banner item={items[currentItemIndex]} />
      <Prev onClick={handlePrev} />
      <Numbers
        count={items.length}
        onClick={(index: number) => setCurrentItemIndex(index)}
        selectedIndex={currentItemIndex}
      />
      <Next onClick={handleNext} />
    </div>
  );
}

function Banner({ item }) {
  return (
    <div className="banner">
      <p className="animals">{item}</p>
    </div>
  );
}

function Prev({ onClick }) {
  return (
    <div className="previous">
      <button onClick={onClick}>Prev</button>
    </div>
  );
}

function Numbers({ count, onClick, selectedIndex }) {
  return (
    <div className="numbers">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          style={{
            backgroundColor: selectedIndex === index ? 'lightblue' : 'white',
          }}>
          {index}
        </button>
      ))}
    </div>
  );
}

function Next({ onClick }) {
  return (
    <div className="next">
      <button onClick={onClick}>Next</button>
    </div>
  );
}
