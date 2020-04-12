import axios from 'axios'
import {API} from "./destination";

class AuthService {
     login(user) {
        return axios
            .post(API.BASEURL + API.SIGNIN, {
                username: user.username,
                password: user.password
            }, {
                timeout: 3000
            })
            .then(response => {
                if (response.data.accessToken)
                    localStorage.setItem('user', JSON.stringify(response.data));
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API.BASEURL + API.REGISTER, {
            username: user.username,
            password: user.password
        });
    }
}

export default new AuthService();