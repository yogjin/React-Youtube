import React from 'react';
import styles from '../styles/VideoPlayPage.module.css';

const VideoPlayPage = ({ videos, video }) => {
  const { title, channelTitle } = videos.snippet;
  return (
    <main className={styles['video-playpage']}>
      <div
        className={styles.video}
        dangerouslySetInnerHTML={{ __html: video }}
      ></div>
      <div className={styles.metadata}>
        <span className={styles.metadata__title}>{title}</span>
        <span className={styles.metadata__channelTitle}>{channelTitle}</span>
      </div>
      <ul className={styles.list}></ul>
    </main>
  );
};

export default VideoPlayPage;
