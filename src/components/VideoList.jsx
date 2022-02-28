import React from 'react';
import VideoListItem from './VideoListItem';
import styles from '../styles/VideoList.module.css';

const VideoList = ({ videos, handleVideoClick }) => {
  return (
    <main className={styles.videos}>
      {videos.map((video) => (
        <VideoListItem
          key={video.id.videoId ? video.id.videoId : video.id}
          videoId={video.id.videoId ? video.id.videoId : video.id}
          snippet={video.snippet}
          handleVideoClick={handleVideoClick}
        />
      ))}
    </main>
  );
};

export default VideoList;
