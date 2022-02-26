import React from 'react';
const searchBarStyle = { display: 'flex' }; // 렌더링 한번만
const SearchBar = (props) => {
  return (
    <div className="search-bar" style={searchBarStyle}>
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
