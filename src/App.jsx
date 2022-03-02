import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import VideoPlayPage from './components/VideoPlayPage/VideoPlayPage.jsx';
import Videos from './components/Videos/Videos.jsx';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState(''); // 검색 text
  const [clickedVideo, setClickedVideo] = useState(false); // 클릭한 video 정보(object)

  useEffect(() => {
    youtube.mostPopular().then(setVideos);
  }, []);
  const onSearchVideos = (e) => {
    e.preventDefault();
    youtube
      .search(query) //
      .then(setVideos);
    setQuery('');
    setClickedVideo('');
  };
  const handleQueryChange = (query) => {
    setQuery(query);
  };
  const handleVideoClick = (videoInfo) => {
    // videoInfo = { videoId, title, description, channelTitle }
    setClickedVideo(videoInfo);
  };
  return (
    <>
      <Header
        query={query} //
        onQueryChange={handleQueryChange}
        onSearchVideos={onSearchVideos}
      />
      {clickedVideo ? (
        <VideoPlayPage
          videos={videos}
          video={clickedVideo}
          handleVideoClick={handleVideoClick}
        />
      ) : (
        <Videos videos={videos} handleVideoClick={handleVideoClick} />
      )}
    </>
  );
}

export default App;
