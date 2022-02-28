import React, { useRef } from 'react';
import styles from '../styles/Header.module.css';

const Header = ({
  query,
  setVideos,
  setQuery,
  onQueryChange,
  setClickedVideo,
}) => {
  const searchVideos = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyBs8Sv9Ix-HQ6pgs1-yhfhBby3TPbjUTls`,
      requestOptions
    )
      .then((response) => response.json())
      .then((videos) => setVideos(videos.items))
      .catch((error) => console.log('error', error));
    setQuery('');
    setClickedVideo('');
  };

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
        onSubmit={(e) => searchVideos(e)}
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
