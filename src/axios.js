import axios from 'axios';

const instance = axios.create({
    baseURL: "https://koalityblog.firebaseio.com/"
});

export default instance;