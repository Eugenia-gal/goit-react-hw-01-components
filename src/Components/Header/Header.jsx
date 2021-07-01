import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>
        Agricultural Fund "Horns and Hooves" - Bury money in the ground!
      </h1>
      <h2 className={s.page}>Investor's personal account</h2>
    </header>
  );
};

export default Header;
