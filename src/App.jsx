import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Videos from './components/Videos';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

function App() {
  const [videos, setVideos] = useState([]);

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
  return (
    <>
      <Header videos={videos} />
      <Videos videos={videos} />
    </>
  );
}

export default App;
