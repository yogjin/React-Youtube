import React, { useEffect } from 'react';
import styles from '../styles/VideoPlayPage.module.css';
import VideoList from './VideoList';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const VideoPlayPage = ({ videos, video, handleVideoClick }) => {
  const { videoId, title, description, channelTitle, embedHtml } = video;
  console.log(video);
  return (
    <main className={styles['video-playpage']}>
      <div className={styles['video-container']}>
        <div
          className={styles.video}
          dangerouslySetInnerHTML={{ __html: embedHtml }}
        ></div>
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
