import { IconMenu2, IconX } from '@tabler/icons-react';
import { cn } from '../../utils/cn';
import { ActionButton } from '../elements';

import { useState } from 'react';
import logo from '/logo.svg';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header id="header" className="menu md:h-full">
      <div className="container relative w-full max-w-content-width mx-auto md:p-5 md:flex md:flex-row md:justify-between md:items-center">
        <nav
          className={cn(
            'transition-[left] absolute top-0 left-[-250px] h-screen bg-white w-[250px] p-5 z-50 shadow-2xl md:bg-transparent md:static md:w-fit md:h-[unset] md:p-0',
            open ? 'left-0 fixed' : ''
          )}
        >
          <div className="list-container relative h-full flex flex-col justify-between">
            <ul className="menu-items-list p-0 m-0 h-[120px] flex flex-col justify-between list-none uppercase md:h-[unset] md:gap-[30px] md:flex-row">
              <li className="menu-item">Our menu</li>
              <li className="menu-item">Our mission</li>
              <li className="menu-item">Outpost</li>
            </ul>
            <IconX
              onClick={() => setOpen(false)}
              className="absolute right-0 top-0 cursor-pointer md:hidden"
            />
            <div className="header-actions-mobile flex w-full gap-5 md:hidden">
              <ActionButton variant="primary">Sign in</ActionButton>
              <ActionButton variant="secondary">Order</ActionButton>
            </div>
          </div>
        </nav>
        <div className="header-fixed relative p-5 md:p-0 flex justify-center items-center">
          <IconMenu2
            className="absolute left-5 cursor-pointer md:hidden"
            onClick={() => setOpen(true)}
          />
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-actions-desktop hidden md:flex">
          <ActionButton variant="primary">Sign in</ActionButton>
          <ActionButton variant="secondary">Order</ActionButton>
        </div>
      </div>
    </header>
  );
}
