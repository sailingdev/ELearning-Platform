import auth from '../../http/request/auth'
import axios from 'axios/index.js'
import router from '../../router.js'
export default {
    register ({commit}, payload) {
        return new Promise((resolve, reject) => {
        auth.register(payload)
            .then((response => {
                router.push(router.currentRoute.query.to || '/login')
                resolve()
            }))
            .catch((err) => {
                reject(err)
            })
        })
    },
    login({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-token').then( res => {
                auth.login(payload)
                    .then((response) => {
                       if (response.data.userData){
                           localStorage.setItem('tortu_accessToken', response.data.accessToken)
                           localStorage.setItem('tortu_userData', JSON.stringify(response.data.userData))
                           commit('SET_LOGGEDIN', true)
                           if (response.data.userData.role === "admin"){
                               window.location.href = "/admin/dashboard"
                           } else {

                           }
                       } else {
                           reject({message: "Wrong Email or Password."})
                       }
                    })
                    .catch((err) => {
                        reject({message: "Wrong Email or Password."})
                    })
                }
            )
        })
    },
    forgot_password({commit}, payload){
        return new Promise((resolve, reject) => {
            auth.forgot_password(payload)
                .then((response) => {
                    console.log(response)
                    resolve()
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
    logout({commit}, payload){
        commit('SET_BEARER', localStorage.getItem('tortu_accessToken'))
        return new Promise((resolve, reject) => {
            auth.logout(payload)
                .then((response) => {
                    localStorage.removeItem('tortu_userData')
                    localStorage.removeItem('tortu_accessToken')
                    commit('SET_LOGGEDIN', false)
                    resolve()
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}
