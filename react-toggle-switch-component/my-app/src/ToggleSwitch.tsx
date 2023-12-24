import { useState } from 'react';
import './App.css';

type Prop = {
  color: string;
  text: string;
};

export function ToggleSwitch({ color, text }: Prop) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className={`toggle-switch ${toggle ? 'is-on' : ''}`}>
      <div className="slider">
        <div
          className="switch"
          onClick={handleToggle}
          style={{
            backgroundColor: toggle ? 'green' : color,
          }}>
          <p>{toggle ? '' : text}</p>
        </div>
      </div>
      <div className="state-label">{toggle ? 'ON' : 'OFF'}</div>
    </div>
  );
}
