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
                           localStorage.setItem('tortu_userData', response.data.userData)
                           if (response.data.userData.roles[0].id === 1){
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
    }
}
