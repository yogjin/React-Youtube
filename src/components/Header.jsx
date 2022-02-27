import React from 'react';
import styles from '../styles/Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        src="/images/logo.png"
        alt="youtube-logo"
        className={styles.header__logo}
      />
      <span>Youtube</span>
      <div className={styles['search']}>
        <form className={styles.search__form} action="">
          <input
            className={styles.search__input}
            type="text"
            placeholder="검색"
          />
          <button className={styles.search__button}>
            <img
              className={styles.search__img}
              src="/images/search.png"
              alt=""
            />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
