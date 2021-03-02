import axios from '../../http/axios'

export default {
    add_new({commit}, payload){
        const { data, config } = payload
        return new Promise((resolve, reject)=> {
            axios.post('/api/blog', data, config)
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
