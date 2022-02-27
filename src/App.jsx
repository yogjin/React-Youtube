import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Videos from './components/Videos';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchVideos = () =>
      fetch(
        'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBs8Sv9Ix-HQ6pgs1-yhfhBby3TPbjUTls',
        requestOptions
      )
        .then((response) => response.json())
        .then((videos) => setList(videos.items))
        .catch((error) => console.log('error', error));
    fetchVideos();
  }, []);

  return (
    <>
      <Header />
      <Videos list={list} />
    </>
  );
}

export default App;
