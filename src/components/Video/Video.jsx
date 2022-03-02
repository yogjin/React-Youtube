import React from 'react';
import styles from './Video.module.css';

const Video = ({ videoId, snippet, handleVideoClick, display }) => {
  const { publishedAt, title, description, thumbnails, channelTitle } = snippet;
  const displayType = display === 'list' ? styles.list : styles.grid;

  return (
    <article
      className={`${styles.video} ${displayType}`}
      onClick={() =>
        handleVideoClick({ videoId, title, description, channelTitle })
      }
    >
      <img
        className={`${styles.video__thumbnails} ${displayType}`}
        src={thumbnails.medium.url}
        alt="thumbnails"
      />
      <div className={`${styles.video__metadata} ${displayType}`}>
        <span className={styles.video__title}>{title}</span>
        <span className={styles.video__channelTitle}>{channelTitle}</span>
      </div>
    </article>
  );
};

export default Video;
