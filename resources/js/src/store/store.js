/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

import moduleBlogManagement from './blog-management/moduleBlogManagement'
import moduleUserManagement from './user-management/moduleUserManagement'
import moduleCourseManagement from './course-management/moduleCourseManagement'

Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        blog: moduleBlogManagement,
        user: moduleUserManagement,
        course: moduleCourseManagement
    },
    strict: process.env.NODE_ENV !== 'production'
})
