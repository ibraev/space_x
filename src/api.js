import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.spacexdata.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});