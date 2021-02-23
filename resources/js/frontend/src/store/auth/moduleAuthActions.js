import auth from '../../http/request/auth'

export default {
    register({commit}, payload){
        return new Promise((resolve, reject) => {
            auth.register(payload)
                .then((response => {
                    console.log(response)
                    resolve()
                }))
                .catch((err) => {
                    reject(err)
                })
        })
    },
    login({commit}, payload){
        return new Promise((resolve, reject) => {
            auth.login(payload)
                .then((resonse) => {
                    console.log(resonse)
                    resolve()
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}
