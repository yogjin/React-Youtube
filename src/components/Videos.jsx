import React from 'react';
import Video from './Video';
import styles from '../styles/Videos.module.css';

const Videos = ({ list }) => {
  return (
    <main className={styles.videos}>
      {list.map((video) => (
        <Video key={video.id} snippet={video.snippet} />
      ))}
    </main>
  );
};

export default Videos;
