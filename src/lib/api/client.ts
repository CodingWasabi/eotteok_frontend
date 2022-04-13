import axios from 'axios';
import Cookies from 'universal-cookie';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const client = axios.create();

const cookies = new Cookies();

const J_SESSION_ID = cookies.get('JSESSIONID');

document.cookie = `JSESSIONID=${J_SESSION_ID}`;

client.defaults.baseURL = SERVER_URL;
client.defaults.withCredentials = true;

export default client;
