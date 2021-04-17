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
    updateLanguage({commit}, payload){
        const { id, data, config } = payload
        return new Promise((resolve, reject)=> {
              axios.post(`/api/language/${id}`, data, config)
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
    },

    indexCourse({commit}){
        return new Promise((resolve, reject) => {
            axios.get('/api/course').then(res=>{
                if (res.status === 200){
                    commit('SET_COURSE_LIST', res.data.dataList)
                    resolve()
                } else reject(res.data.message)
            }).catch(err => reject(err))
        })
    },
    showCourse({commit}){

    }
}
