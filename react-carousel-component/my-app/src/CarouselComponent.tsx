import { FaLessThan, FaGreaterThan, FaRegCircle } from 'react-icons/fa';
import { useState } from 'react';

export type Images = { src: string; alt: string };

type Props = {
  items: Images[];
};

export function Carousel({ items }: Props) {
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
    <div className="carousel">
      <PreviousButton onClick={handlePrev} />
      <PhotoImages item={items[currentItemIndex]} />
      <NextButton onClick={handleNext} />
      <div>
        <ProgressCircles
          count={items.length}
          onClick={(index: number) => setCurrentItemIndex(index)}
          selectedIndex={currentItemIndex}
        />
      </div>
    </div>
  );
}

function PreviousButton({ onClick }) {
  return (
    <div className="previous">
      <FaLessThan onClick={onClick} />
    </div>
  );
}

function NextButton({ onClick }) {
  return (
    <div className="next">
      <FaGreaterThan onClick={onClick} />
    </div>
  );
}

function PhotoImages({ item }) {
  const { src, alt } = item;
  return (
    <div className="photo">
      <img className="current-image" src={src} alt={alt} />
    </div>
  );
}

function ProgressCircles({ count, onClick, selectedIndex }) {
  return (
    <div className="circles">
      {Array.from({ length: count }).map((_, index) => (
        <FaRegCircle
          key={index}
          onClick={() => onClick(index)}
          className="fa-circle"
          style={{
            backgroundColor: selectedIndex === index ? 'black' : 'white',
          }}>
          <span>{index}</span>
        </FaRegCircle>
      ))}
    </div>
  );
}
