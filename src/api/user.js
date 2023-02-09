import axios from '../config/axios.js';

class UserApi {
  login(user) {
    return axios
      .post('auth/local', {
        identifier: user.username,
        password: user.password
      })
      .then(response => {
        console.log(response.data)
          const userData={
            accessToken:response.data.jwt,
            ...response.data.user
          }
          localStorage.setItem('user', JSON.stringify(userData));
          console.log( localStorage.getItem('user'))

          //retrieve user profile and 
          return userData;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'auth/local/register', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new UserApi();
