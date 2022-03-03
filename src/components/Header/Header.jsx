import React, { memo, useRef } from 'react';
import styles from './Header.module.css';

const Header = memo(({ onSearchVideos, onClickLogo }) => {
  const inputRef = useRef();
  return (
    <header className={styles.header}>
      <div className={styles.header__logoContainer} onClick={onClickLogo}>
        <img
          src="/images/logo.png"
          alt="youtube-logo"
          className={styles.header__logo}
        />
        <span className={styles.header__name}>Youtube</span>
      </div>
      <form
        className={styles['search-form']}
        action=""
        onSubmit={(e) => onSearchVideos(e, inputRef.current.value)}
      >
        <input
          className={styles['search-form__input']}
          type="text"
          placeholder="검색"
          ref={inputRef}
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
});

export default Header;
