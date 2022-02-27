import React from 'react';
import styles from '../styles/Video.module.css';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const Video = ({ videoId, snippet, handleVideoClick }) => {
  const { publishedAt, title, description, thumbnails, channelTitle } = snippet;
  const onVideoClick = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=player&id=${videoId}&key=AIzaSyBs8Sv9Ix-HQ6pgs1-yhfhBby3TPbjUTls`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => handleVideoClick(result.items[0].player.embedHtml))
      .catch((error) => console.log('error', error));
  };
  return (
    <article className={styles.video} onClick={onVideoClick}>
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
