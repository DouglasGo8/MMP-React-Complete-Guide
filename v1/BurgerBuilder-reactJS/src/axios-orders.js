import axios from 'axios';

/**
 * @author dbatista
 */
const vertxAxiosInstance = axios.create({
    baseURL: 'http://localhost:12334/api'
});

export default vertxAxiosInstance;