import { FaBars } from 'react-icons/fa6';
import './AppDrawerComponent.css';
import { useState } from 'react';

export type MenuItem = { label: string };

type Props = {
  header: string;
  items: MenuItem[];
  onSelect: (item: MenuItem) => void;
};

export function AppDrawerComponent({ header, items, onSelect }: Props) {
  const [openMenu, setOpenMenu] = useState(true);

  function handleSelect(item: MenuItem): void {
    setOpenMenu(false);
    onSelect(item);
  }

  return (
    <div>
      <MenuComponent
        onSelect={handleSelect}
        openMenu={openMenu}
        header={header}
        items={items}
        onOpen={() => setOpenMenu(true)}
      />
      <Shade isOpen={openMenu} onClick={() => setOpenMenu(false)} />
    </div>
  );
}

type MenuComponentProps = {
  openMenu: boolean;
  header: string;
  items: MenuItem[];
  onOpen: () => void;
  onSelect: (item: MenuItem) => void;
};

function MenuComponent({
  openMenu,
  header,
  items,
  onOpen,
  onSelect,
}: MenuComponentProps) {
  if (!openMenu) {
    return <FaBars onClick={onOpen} className="menu-icon" />;
  }

  return (
    <div className={`menu-drawer ${openMenu ? 'is-open' : ''}`}>
      <h2 className="menu-heading">{header}</h2>
      <ul className="menu-items">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              onSelect(item);
              onOpen();
            }}
            className="menu-item">
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

type ShadeProps = {
  isOpen: boolean;
  onClick: () => void;
};

function Shade({ isOpen, onClick }: ShadeProps) {
  return (
    <div
      onClick={onClick}
      className={`menu-shade ${isOpen ? 'is-drawn' : ''}`}></div>
  );
}
