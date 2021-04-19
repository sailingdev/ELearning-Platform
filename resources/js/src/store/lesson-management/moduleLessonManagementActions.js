import axios from '../../http/axios'

export default {
    show({commit}, payload){
        return new Promise((resolve, reject) => {
            const {itemId, notify} = payload;
            axios.get(`/api/lesson/${itemId}`).then(res => {
                resolve(res.data.lesson_parts);
            }).catch (err => {
                notify({
                    time: 2500,
                    title: `${err.response.status} error`,
                    text: err.response.statusText,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
                reject();
            })


        });
    },
    store({commit}, payload){
        const {notify, data} = payload;
        return new Promise((resolve, reject) => {
            axios.post('/api/lesson', data)
                .then(res => {
                    if (res.status === 201){
                        commit('ADD_LESSON', res.data);
                        notify({
                            time: 2500,
                            title: `success`,
                            text: 'A lesson has been created successfully.',
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'success'
                        });
                        resolve(201);
                    }
                }).catch(err => {
                    notify({
                        time: 2500,
                        title: `${err.response.status} error`,
                        text: err.response.statusText,
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'danger'
                    });
                    reject();
            })
        })
    },
    update({commit}, payload){
        console.log(payload)
        const {id, name, notify} = payload;
        return new Promise((resolve, reject) => {
           axios.put(`/api/lesson/${id}`, {name}).then(res => {
               if (res.status === 204){
                   commit('UPDATE_LESSON', payload);
                   notify({
                       time: 2500,
                       title: `success`,
                       text: 'Selected lesson has been updated successfully.',
                       iconPack: 'feather',
                       icon: 'icon-alert-circle',
                       color: 'success'
                   });
               }
               resolve(204);
           }).catch(err => {
               notify({
                   time: 2500,
                   title: `${err.response.status} error`,
                   text: err.response.statusText,
                   iconPack: 'feather',
                   icon: 'icon-alert-circle',
                   color: 'danger'
               });
               reject();
           })
        });
    },
    async destroy({commit}, payload){
        const {itemId, notify} = payload;
        return new Promise((resolve, reject)=> {
            axios.delete(`/api/lesson/${itemId}`)
                .then(res => {
                    resolve();
                    notify({
                        time: 2500,
                        title: `success`,
                        text: 'Selected Lesson has been removed successfully.',
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'success'
                    });
                }).catch(err => {
                    reject();
                notify({
                    time: 2500,
                    title: `${err.response.status} error`,
                    text: err.response.statusText,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
            })

        });
    },
    storePart({commit}, payload){
        const {data, notify} = payload;
        return new Promise((resolve, reject) => {
            axios.post('/api/lesson-part', data)
                .then(res => {
                    if (res.status === 201){
                        notify({
                            time: 2500,
                            title: `success`,
                            text: 'A lesson part has been created successfully.',
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'success'
                        });
                        resolve(201);
                    }
                }).catch(err => {
                notify({
                    time: 2500,
                    title: `${err.response.status} error`,
                    text: err.response.statusText,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
                reject(err.response.status);
            })
        });
    },
    updatePart({commit}, payload){
        const {data, notify} = payload;
        return new Promise((resolve, reject)=> {
            axios.put(`/api/lesson-part/${data.id}`, data)
                .then(res => {

                }).catch(err => {
                notify({
                    time: 2500,
                    title: `${err.response.status} error`,
                    text: err.response.statusText,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
                reject(err.response.status);
            })
        });
    },
};

