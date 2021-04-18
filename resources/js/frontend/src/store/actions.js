/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import axios from 'axios/index.js';
const actions = {

    // /////////////////////////////////////////////
    // COMPONENTS
    // /////////////////////////////////////////////

    // Vertical NavMenu
    updateVerticalNavMenuWidth({ commit }, width) {
      commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
    },

    // VxAutoSuggest
    updateStarredPage({ commit }, payload) {
      commit('UPDATE_STARRED_PAGE', payload)
    },

    // The Navbar
    arrangeStarredPagesLimited({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_MORE', list)
    },

    // /////////////////////////////////////////////
    // UI
    // /////////////////////////////////////////////

    toggleContentOverlay({ commit }) {
      commit('TOGGLE_CONTENT_OVERLAY')
    },
    updateTheme({ commit }, val) {
      commit('UPDATE_THEME', val)
    },

    // /////////////////////////////////////////////
    // User/Account
    // /////////////////////////////////////////////

    updateUserInfo({ commit }, payload) {
      commit('UPDATE_USER_INFO', payload)
    },

    ////////////////////////////////////////////////
    // Blog page
    ////////////////////////////////////////////////
    getPosts({ commit }){
        return new Promise((resolve, reject) => {
            axios.get('/api/blog').then(res => {
                if (res.status === 200){
                    commit('SET_POSTS', res.data.dataList);
                    resolve();
                }
            }).catch(err => {
                console.log(err)
                reject();
            });
        })
    },
    showPost({commit}, payload){
        return new Promise((resolve, reject)=>{
            axios.get(`/api/blog/${payload}`).then(res => {
                commit('SET_CURRENT_POST', res.data.dataList);
                resolve();
            }).catch(err => {
                console.log(err);
                reject();
            });
        })
    },
    setFavoritePost({commit}, payload){
        const {id, favorites} = payload;
        return new Promise((resolve, reject) => {
            axios.put(`/api/blog/${id}`, {favorites}).then(res=>{
                if (res.status === 204)
                commit('SET_CURRENT_POST_FAVORITES', favorites);
                resolve();
            }).catch(err => {
                console.log(err);
                reject();
            });
        })
    }
}

export default actions
