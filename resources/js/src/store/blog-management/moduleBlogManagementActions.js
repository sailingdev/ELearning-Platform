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
    show({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.get(`/api/post/${payload}`)
                .then( res => {
                    resolve(res.data.post)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    update({commit}, payload){
        const { config, id, data } = payload
        return new Promise((resolve, reject) => {
            axios.post(`/api/post/${id}`, data, config)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    destroy({commit}, payload){
        const {ids} = payload
        return new Promise((resolve, reject)=> {
            axios.delete(`/api/post/${ids}`)
                .then(res => {
                    commit('SET_DATALIST', res.data.dataList)
                    resolve()
                })
                .catch(err => reject())
        })
    }
}
