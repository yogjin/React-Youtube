import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import VideoPlayPage from './components/VideoPlayPage';
import Videos from './components/Videos';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

function App() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState(''); // 검색 text
  const [clickedVideo, setClickedVideo] = useState(false); // 클릭한 video 정보(object)

  useEffect(() => {
    const fetchVideos = () =>
      fetch(
        'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBs8Sv9Ix-HQ6pgs1-yhfhBby3TPbjUTls',
        requestOptions
      )
        .then((response) => response.json())
        .then((videos) => setVideos(videos.items))
        .catch((error) => console.log('error', error));
    fetchVideos();
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
