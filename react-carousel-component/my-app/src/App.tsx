import { Carousel } from './CarouselComponent';
import './App.css';

function App() {
  const images = [
    {
      src: '/images/fushiguro.webp',
      alt: 'Megumi Fushiguro',
    },
    {
      src: '/images/inumaki.webp',
      alt: 'Toge Inumaki',
    },
    {
      src: '/images/itadori.webp',
      alt: 'Yuji Itadori',
    },
    {
      src: '/images/kugisaki.webp',
      alt: 'Nobara Kugisaki',
    },
    {
      src: '/images/panda.webp',
      alt: 'Panda',
    },
    {
      src: '/images/zen-in.webp',
      alt: "Maki Zen'in",
    },
  ];

  return (
    <div>
      <Carousel items={images} />
    </div>
  );
}

export default App;
