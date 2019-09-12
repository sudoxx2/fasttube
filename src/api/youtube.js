import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: '[AIzaSyDGFilPORqsK9Db7wjBKXnafCqq8T7lsR0]'
  }
});