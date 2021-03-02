import axios from '../../axios'

export default {
    config(){
      let token = localStorage.getItem('tortu_accessToken')
      let config = {
          headers: {
              'X-XSRF-TOKEN': token
          }
      }
      return config
    },
    register(payload){
        const { name, email, password, password_confirmation } = payload
        return axios.post('/api/register', {
            name,
            email,
            password,
            password_confirmation
        })
    },
    login (payload){
        const { email, password } = payload
        return axios.post('/api/login', {
            email,
            password
        })
    },
    forgot_password(payload){
        const { email } = payload
        return axios.post('/api/password/email', {
            email
        })
    },
    logout(payload){
        return axios.post('/api/logout', {
        })
    }
}
