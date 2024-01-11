import { useState } from 'react';
import './App.css';
import { AppDrawerComponent, MenuItem } from './AppDrawerComponent';
import logo from './hylian-emblem.svg';

function App() {
  const menuItems: MenuItem[] = [
    { label: 'The Legend of Zelda' },
    { label: 'A Link to the Past' },
    { label: 'Ocarina of Time' },
    { label: 'The Wind Waker' },
    { label: 'Breath of the Wild' },
  ];

  const [currentTitle, setCurrentTitle] = useState('');

  const handleSelect = (item: MenuItem) => {
    console.log(`Selected item: ${item.label}`);
    setCurrentTitle(item.label);
  };
  return (
    <div>
      <AppDrawerComponent
        items={menuItems}
        header="Pick a Game"
        onSelect={handleSelect}
      />
      <div className="logo">
        <h2>{currentTitle}</h2>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default App;
