import state from './moduleLessonState.js'
import getters from './moduleLessonGetteres.js'
import mutations from './moduleLessonMutations.js'
import actions from './moduleLessonActions.js'

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
