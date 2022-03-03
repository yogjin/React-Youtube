import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import VideoDetail from './components/VideoDetail/VideoDetail';
import Videos from './components/Videos/Videos.jsx';
import styles from './App.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [clickedVideo, setClickedVideo] = useState(false); // 클릭한 video 정보(object)

  useEffect(() => {
    youtube.mostPopular().then(setVideos);
  }, []);

  const onClickLogo = () => {
    setClickedVideo('');
  };

  const onSearchVideos = useCallback((e, query) => {
    e.preventDefault();
    youtube
      .search(query) //
      .then(setVideos);
    setClickedVideo('');
  }, []);

  const handleVideoClick = useCallback((videoInfo) => {
    // videoInfo = { videoId, title, description, channelTitle }
    setClickedVideo(videoInfo);
  }, []);

  return (
    <>
      <Header onSearchVideos={onSearchVideos} onClickLogo={onClickLogo} />
      <main className={styles.content}>
        {clickedVideo && (
          <div className={styles['video-detail']}>
            <VideoDetail video={clickedVideo} />
          </div>
        )}
        <div className={styles['video-list']}>
          <Videos
            videos={videos}
            handleVideoClick={handleVideoClick}
            display={clickedVideo ? 'list' : 'grid'}
          />
        </div>
      </main>
    </>
  );
}

export default App;
