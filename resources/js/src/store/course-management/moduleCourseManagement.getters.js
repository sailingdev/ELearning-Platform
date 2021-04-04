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
                res.own = false
                res.to_learn = false
                lang.language_roles.filter(item => {
                    item.id === 1 ? res.own = true : res.to_learn = true
                })
            }
        }
        return res
    },
    dataList(state){
        return state.lang.filter(item => item.language_roles.length > 0)
    },
    all(state){
        return state.lang
    },
    courses(state){
        return state.courses
    }
}
