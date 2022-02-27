import React from 'react';
import styles from '../styles/Video.module.css';

const Video = ({ snippet }) => {
  const { publishedAt, title, description, thumbnails, channelTitle } = snippet;
  return (
    <article className={styles.video}>
      <img src={thumbnails.high.url} alt="thumbnails" />
      <span className={styles.video__title}>{title}</span>
      <span className={styles.video__channelTitle}>{channelTitle}</span>
    </article>
  );
};

export default Video;
