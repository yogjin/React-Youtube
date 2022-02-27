import React from 'react';
import Video from './Video';
import styles from '../styles/Videos.module.css';

const Videos = ({ videos }) => {
  return (
    <main className={styles.videos}>
      {videos.map((video) => (
        <Video
          key={video.id.videoId ? video.id.videoId : video.id}
          snippet={video.snippet}
        />
      ))}
    </main>
  );
};

export default Videos;
