import Axios from 'axios';
import {API_BASE_URL} from '../constants/api';

export const client = Axios.create({baseURL: API_BASE_URL});
