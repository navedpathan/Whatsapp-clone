import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://whatsapp-c-mern.herokuapp.com'
});

export default instance