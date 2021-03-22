import axios from '../../http/axios'
export default {
    indexLanguage({commit}){
        return new Promise((resolve, reject) => {
            axios.get('/api/language')
                .then(res => {
                    commit('SET_LANGUAGE_LIST', res.data.dataList)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
        })
    },
    async updateLanguage({commit}, payload){
        const { is_own, is_to_learn } = payload
      return new Promise((resolve, reject)=> {
          axios.put(`/api/language/${payload.id}`, {is_own, is_to_learn})
              .then(res => {
                  if (res.status === 201){
                      commit('SET_LANGUAGE_LIST', res.data.dataList)
                      resolve()
                  } else reject(res.data.message)
              })
              .catch(err => {
                  reject(err)
              })
      })
    },
    destroyLanguage({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.delete(`/api/language/${payload.id}`)
                .then(res=>{
                    if (res.status === 200){
                        commit('SET_LANGUAGE_LIST', res.data.dataList)
                        resolve()
                    } else reject(res.data.message)
                })
                .catch(err => reject(err))
        })
    }
}
