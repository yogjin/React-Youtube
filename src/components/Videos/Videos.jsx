import React from 'react';
import Video from '../Video/Video.jsx';
import styles from './Videos.module.css';

const Videos = ({ videos, handleVideoClick }) => {
  return (
    <main className={styles.videos}>
      {videos.map((video) => (
        <Video
          key={video.id.videoId ? video.id.videoId : video.id}
          videoId={video.id.videoId ? video.id.videoId : video.id}
          snippet={video.snippet}
          handleVideoClick={handleVideoClick}
        />
      ))}
    </main>
  );
};

export default Videos;
