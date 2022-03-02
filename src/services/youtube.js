// youtube API fetch module

export default class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }
  // 첫 화면 인기동영상
  async mostPopular() {
    return fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=28&key=AIzaSyBs8Sv9Ix-HQ6pgs1-yhfhBby3TPbjUTls',
      this.requestOptions
    )
      .then((response) => response.json())
      .then((videos) => videos.items)
      .catch((error) => console.log('error', error));
  }

  // 검색
  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyBs8Sv9Ix-HQ6pgs1-yhfhBby3TPbjUTls`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((videos) => videos.items)
      .catch((error) => console.log('error', error));
  }
}
