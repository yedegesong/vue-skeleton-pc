
const AppMutation = {
    namespaced: true,
    state: {
        homeList: [
            
        ]
    },
    actions: {
        gProgress({commit,dispatch}, params) {
            dispatch('rootIncrement', {name:'as'}, { root: true })
        },
        ['queryList']({ commit, state }, params) {
            
        }
    },
    mutations: {
        
    }
}

export default AppMutation