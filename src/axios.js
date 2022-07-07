import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-tinder-back.herokuapp.com/',
})
// http://localhost:8001 --> local host URL.

export default instance;