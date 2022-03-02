import React, { useRef } from 'react';
import styles from './Header.module.css';

const Header = ({ query, onQueryChange, onSearchVideos }) => {
  return (
    <header className={styles.header}>
      <img
        src="/images/logo.png"
        alt="youtube-logo"
        className={styles.header__logo}
      />
      <span className={styles.header__name}>Youtube</span>
      <form
        className={styles['search-form']}
        action=""
        onSubmit={(e) => onSearchVideos(e)}
      >
        <input
          className={styles['search-form__input']}
          type="text"
          placeholder="검색"
          onChange={(e) => onQueryChange(e.target.value)}
          value={query}
        />
        <button className={styles['search-form__button']}>
          <img
            className={styles['search-form__img']}
            src="/images/search.png"
            alt=""
          />
        </button>
      </form>
    </header>
  );
};

export default Header;
