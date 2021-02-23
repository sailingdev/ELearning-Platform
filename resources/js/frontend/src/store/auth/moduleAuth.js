import state from './moduleAuthStates'
import getters from './moduleAuthGetters'
import actions from './moduleAuthActions'
import mutations from './moduleAuthMutations'

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
