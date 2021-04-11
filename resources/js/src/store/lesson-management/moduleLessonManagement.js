import state from './moduleLessonManagementState'
import getters from './moduleLessonManagementGetters'
import actions from './moduleLessonManagementActions'
import mutations from './moduleLessonManagementMutations'

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
