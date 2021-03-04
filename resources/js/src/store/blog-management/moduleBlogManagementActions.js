import axios from '../../http/axios'

export default {
    index({commit}){
        return new Promise((resolve, reject) => {
            axios.get('/api/post')
                .then(res => {
                    if (res.data.dataList){
                        commit('SET_DATALIST', res.data.dataList);
                        resolve()
                    } else reject(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    store({commit}, payload){
        const { data, config } = payload
        return new Promise((resolve, reject)=> {
            axios.post('/api/post', data, config)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
}
