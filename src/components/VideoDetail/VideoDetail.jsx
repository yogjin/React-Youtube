import React from 'react';
import styles from './VideoDetail.module.css';
const VideoDetail = ({ video }) => {
  const { videoId, title, description, channelTitle } = video;

  return (
    <>
      <div className={styles.video}>
        <iframe
          id="player"
          type="text/html"
          src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
        ></iframe>
        <div className={styles.metadata}>
          <span className={styles.metadata__title}>{title}</span>
          <span className={styles.metadata__channelTitle}>{channelTitle}</span>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
