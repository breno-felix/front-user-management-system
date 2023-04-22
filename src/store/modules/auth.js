import axios from 'axios'

export default {
    state: {
        token: '',
        isAuthenticated: false,
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        getIsAuthenticated(state) {
            return state.isAuthenticated;
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_AUTHENTICATED(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated
        },
    },
    actions: {
        login({ commit }, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:3010/auth/login', credentials)
                    .then(response => {
                        const token = response.data.token
                        commit('SET_TOKEN', token)
                        commit('SET_AUTHENTICATED', true)
                        localStorage.setItem('token', token)
                        resolve(response)
                    })
                    .catch(error => {
                        commit('SET_TOKEN', '')
                        commit('SET_AUTHENTICATED', false)
                        localStorage.removeItem('token')
                        reject(error)
                    })
            })
        },
    }
};