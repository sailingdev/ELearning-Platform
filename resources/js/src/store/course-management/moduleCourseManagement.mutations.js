export default {
    SET_CURRENT_LANG_ID(state, payload){
        state.current_lang_id = payload
    },
    SET_LANGUAGE_LIST(state, payload){
        state.lang = payload
    },
    SET_COURSE_LIST(state, payload){
        // let dataList = [];
        //
        // payload.filter(res => {
        //     let el = {};
        //     let children = [];
        //     el.text = res.name;
        //     res.courses.filter(course => {
        //         let item = {};
        //         item.text = course.name;
        //         item.id = course.id;
        //         item.type = 'course'
        //         children.push(item);
        //     });
        //     el.children = children;
        //     dataList.push(el);
        // });
        state.courses = payload;
    }
}
