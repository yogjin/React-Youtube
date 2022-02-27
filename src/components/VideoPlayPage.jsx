import React from 'react';

const VideoPlayPage = ({ video }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: video }}></div>
    </>
  );
};

export default VideoPlayPage;
