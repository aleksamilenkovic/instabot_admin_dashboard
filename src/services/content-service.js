import axios from 'axios';
import authHeader from './auth-header';
import {API} from "./destination";


class ContentService {
    getAllProfiles() {
        return axios.get(API.BASEURL + API.GETPROFILES, {headers: authHeader()});
    }
    getProfileStats(username){
        return axios.get(API.BASEURL + API.GETPROFILESTATS + username, {headers: authHeader()})
    }
}

export default new ContentService();