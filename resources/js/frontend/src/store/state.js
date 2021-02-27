/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import $ from "jquery";

let _token = $('meta[name="csrf-token"]').attr('content');

// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////
const state = {
    token: _token,
    isLoggedIn : false,
}

export default state
