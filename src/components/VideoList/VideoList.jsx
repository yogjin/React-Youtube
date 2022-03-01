import React from 'react';
import VideoListItem from '../VideoListItem/VideoListItem.jsx';

const VideoList = ({ videos, handleVideoClick }) => {
  return (
    <>
      {videos.map((video) => (
        <VideoListItem
          key={video.id.videoId ? video.id.videoId : video.id}
          videoId={video.id.videoId ? video.id.videoId : video.id}
          snippet={video.snippet}
          handleVideoClick={handleVideoClick}
        />
      ))}
    </>
  );
};

export default VideoList;
