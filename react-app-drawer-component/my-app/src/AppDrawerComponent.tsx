// import { FaBars } from 'react-icons/fa6';
// import './AppDrawerComponent.css';
// import { useState } from 'react';

// type Props = {
//   items: string[];
// };

// export function AppDrawerComponent({ items }: Props) {
//   const [openMenu, setOpenMenu] = useState(false);

//   function handleClick() {
//     setOpenMenu(!openMenu);
//   }

//   return (
//     <div>
//       <Drawer onClick={handleClick} />
//       <MenuComponent onClick={handleClick} openMenu={openMenu} />
//       <div className={openMenu ? 'menu-shade is-drawn' : 'menu-shade'}></div>
//     </div>
//   );
// }

// type DrawerProps = {
//   onClick: () => void;
// };

// function Drawer({ onClick }: DrawerProps) {
//   return (
//     <div onClick={onClick} className="menu-icon">
//       <FaBars />
//     </div>
//   );
// }

// type MenuComponentProps = {
//   openMenu: boolean;
//   onClick: () => void;
// };

// function MenuComponent({ openMenu, onClick }: MenuComponentProps) {
//   const [openLink, setOpenLink] = useState(0);

//   function handleClickPage() {
//     setOpenLink(openLink);
//   }
//   return (
//     <div
//       onClick={onClick}
//       className={openMenu ? 'menu-drawer is-open' : 'menu-drawer'}>
//       <h2 className="menu-heading">Choose a Game</h2>
//       <p onClick={handleClickPage} className="menu-item">
//         The Legend of Zelda
//       </p>
//       <p className="menu-item">A Link to the Past</p>
//       <p className="menu-item">Ocarina of Time</p>
//       <p className="menu-item">The Wind Waker</p>
//       <p className="menu-item">Breath of the Wild</p>
//     </div>
//   );
// }
