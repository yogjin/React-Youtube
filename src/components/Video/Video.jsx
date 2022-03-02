import React from 'react';
import styles from './Video.module.css';

const Video = ({ videoId, snippet, handleVideoClick }) => {
  const { publishedAt, title, description, thumbnails, channelTitle } = snippet;

  return (
    <article
      className={styles.video}
      onClick={() =>
        handleVideoClick({ videoId, title, description, channelTitle })
      }
    >
      <img
        className={styles.video__thumbnails}
        src={thumbnails.medium.url}
        alt="thumbnails"
      />
      <div className={styles.video__metadata}>
        <span className={styles.video__title}>{title}</span>
        <span className={styles.video__channelTitle}>{channelTitle}</span>
      </div>
    </article>
  );
};

export default Video;
