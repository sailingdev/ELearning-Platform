import axios from '../../http/axios'

export default {
    add_new({commit}, payload){
        const { data, config } = payload
        return new Promise((resolve, reject)=> {
            axios.post('/api/blog', data, config)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },

}
