// youtube API fetch module

class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }
  // 첫 화면 인기동영상
  mostPopular() {}

  // 검색
  search(query) {}
}
