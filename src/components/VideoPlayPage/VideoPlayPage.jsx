import React, { useEffect } from 'react';
import styles from './VideoPlayPage.module.css';
import VideoList from '../VideoList/VideoList.jsx';

const VideoPlayPage = ({ videos, video, handleVideoClick }) => {
  const { videoId, title, description, channelTitle } = video;
  console.log(video);
  return (
    <main className={styles['video-playpage']}>
      <div className={styles['video-container']}>
        <div className={styles.video}>
          <iframe
            id="player"
            type="text/html"
            width="640"
            height="390"
            src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
            frameborder="0"
          ></iframe>
        </div>
        <div className={styles.metadata}>
          <span className={styles.metadata__title}>{title}</span>
          <span className={styles.metadata__channelTitle}>{channelTitle}</span>
        </div>
      </div>
      <ul className={styles.list}>
        <VideoList videos={videos} handleVideoClick={handleVideoClick} />
      </ul>
    </main>
  );
};

export default VideoPlayPage;
