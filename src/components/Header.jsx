import React from 'react';
import styles from '../styles/Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="/images/logo.png" alt="youtube-logo" className="header__logo" />
      <span>Youtube</span>
      <form className="header__search" action="">
        <input type="text" placeholder="검색" />
        <button>검색</button>
      </form>
    </header>
  );
};

export default Header;
