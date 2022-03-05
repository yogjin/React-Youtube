// youtube API fetch module
import axios from 'axios';

export default class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key },
    });
  }
  // 첫 화면 인기동영상
  async mostPopular() {
    const response = await this.youtube
      .get('videos', {
        params: { part: 'snippet', chart: 'mostPopular', maxResults: 28 },
      })
      .catch((error) => console.log(`${error} | ${new Date()}`));
    return response.data.items;
  }

  // 검색
  async search(query) {
    const response = await this.youtube
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 28,
          q: query,
        },
      })
      .catch((error) => console.log(`${error} | ${new Date()}`));
    return response.data.items;
  }
}
