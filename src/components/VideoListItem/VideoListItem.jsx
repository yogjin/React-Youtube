import React from 'react';
import styles from './VideoListItem.module.css';

const VideoListItem = ({ videoId, snippet, handleVideoClick }) => {
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
        src={thumbnails.high.url}
        alt="thumbnails"
        style={{ width: '50%' }}
      />
      <div className={styles.video__metadata}>
        <span className={styles.video__title}>{title}</span>
        <span className={styles.video__channelTitle}>{channelTitle}</span>
      </div>
    </article>
  );
};

export default VideoListItem;