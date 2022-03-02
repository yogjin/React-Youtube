import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import VideoPlayPage from './components/VideoPlayPage/VideoPlayPage.jsx';
import Videos from './components/Videos/Videos.jsx';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState(''); // 검색 text
  const [clickedVideo, setClickedVideo] = useState(false); // 클릭한 video 정보(object)

  useEffect(() => {
    youtube.mostPopular().then(setVideos);
  }, []);
  const onSearch = (videos) => {
    setVideos(videos);
  };
  const handleQueryChange = (query) => {
    setQuery(query);
  };
  const handleVideoClick = (videoInfo) => {
    // videoInfo = { videoId, title, description, channelTitle }
    // Get iframe by VideoId
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=player&id=${videoInfo.videoId}&key=AIzaSyBs8Sv9Ix-HQ6pgs1-yhfhBby3TPbjUTls`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        videoInfo = {
          ...videoInfo,
          embedHtml: result.items[0].player.embedHtml,
        };
        setClickedVideo(videoInfo);
      })
      .catch((error) => console.log('error', error));
  };
  return (
    <>
      <Header
        query={query}
        setVideos={setVideos}
        setQuery={setQuery}
        onQueryChange={handleQueryChange}
        setClickedVideo={setClickedVideo}
      />
      {clickedVideo ? (
        <VideoPlayPage
          videos={videos}
          video={clickedVideo}
          handleVideoClick={handleVideoClick}
        />
      ) : (
        <Videos videos={videos} handleVideoClick={handleVideoClick} />
      )}
    </>
  );
}

export default App;
