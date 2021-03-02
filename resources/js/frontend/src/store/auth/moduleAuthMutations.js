import axios from '../../http/axios/index.js'
export default {
    SET_BEARER(state, accessToken){
        axios.defaults.headers.common['Authorization'] =  `Bearer ${accessToken}`
    },
    SET_LOGGEDIN(state, val){
        state.isLoggedIn = val;
    }
}
