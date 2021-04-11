export default {
    SET_CURRENT_LANG_ID(state, payload){
        state.current_lang_id = payload
    },
    SET_LANGUAGE_LIST(state, payload){
        state.lang = payload
    },
    SET_COURSE_LIST(state, payload){
        state.courses = payload;
    }
}
