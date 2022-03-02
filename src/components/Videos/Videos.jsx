import React from 'react';
import Video from '../Video/Video.jsx';
import styles from './Videos.module.css';

const Videos = ({ videos, handleVideoClick, display }) => {
  return (
    <section className={styles.container}>
      {videos.map((video) => (
        <Video
          key={video.id.videoId ? video.id.videoId : video.id}
          videoId={video.id.videoId ? video.id.videoId : video.id}
          snippet={video.snippet}
          handleVideoClick={handleVideoClick}
          display={display}
        />
      ))}
    </section>
  );
};

export default Videos;
