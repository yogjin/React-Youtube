import React, { useEffect, useState } from 'react';
import Video from './Video';
import styles from '../styles/Videos.module.css';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const Videos = (props) => {
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
    <main className={styles.videos}>
      {list.map((video) => (
        <Video key={video.id} snippet={video.snippet} />
      ))}
    </main>
  );
};

export default Videos;
