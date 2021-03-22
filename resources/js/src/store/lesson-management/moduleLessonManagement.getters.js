export default {
    currentLang(state) {
        let list = state.lang
        let res = null
        if (state.current_lang_id != null){
            let lang = list.filter(item=> item.id === state.current_lang_id)[0]
            if (Object.keys(lang).length > 0){
                res = {}
                res.label = lang.name
                res.value = lang.id
            }
        }
        return res
    },
    dataList(state){
        return state.lang.filter(item => item.language_roles.length > 0)
    },
    all(state){
        return state.lang
    }
}
