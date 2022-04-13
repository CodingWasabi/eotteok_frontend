import axios from 'axios';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const client = axios.create();

client.defaults.baseURL = SERVER_URL;
client.defaults.withCredentials = true;

export default client;
