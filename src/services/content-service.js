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
    getNewProfile(username, toLike, toFollow){
        return axios.post(API.BASEURL + API.GETNEWPROFILE, {username: username, toLike: toLike, toFollow: toFollow},{headers: authHeader()})
    }
}

export default new ContentService();