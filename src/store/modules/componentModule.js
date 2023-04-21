export default {
    state: {
        currentComponent: 'SgusSectionListUser'
    },
    getters: {
        getCurrentComponent(state) {
            return state.currentComponent;
        }
    },
    mutations: {
        setCurrentComponent(state, newValue) {
            state.currentComponent = newValue;
        }
    }
};