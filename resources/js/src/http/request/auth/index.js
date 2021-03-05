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
    forgot_password(payload){
        const { email } = payload
        return axios.post('/api/password/email', {
            email
        })
    },
    logout(){
        return axios.post('/api/logout', {
        })
    }
}
