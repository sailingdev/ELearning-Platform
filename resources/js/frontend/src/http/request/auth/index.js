import axios from '../../axios'

export default {
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
    }
}
