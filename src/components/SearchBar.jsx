import React from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar = (props) => {
  return (
    <div className={styles.search}>
      <img src="/images/logo.png" alt="youtube-logo" className="logo" />
      <span>Youtube</span>
      <form className="search-input" action="">
        <input type="text" placeholder="검색" />
        <button>검색</button>
      </form>
    </div>
  );
};

export default SearchBar;
