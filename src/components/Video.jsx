import React from 'react';
import styles from '../styles/Video.module.css';

const Video = ({ snippet }) => {
  const { publishedAt, title, description, thumbnails, channelTitle } = snippet;
  return (
    <article className={styles.video}>
      <img
        className={styles.video__thumbnails}
        src={thumbnails.high.url}
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
