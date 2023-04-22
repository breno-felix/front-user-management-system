import axios from 'axios'

export default {
    state: {
        token: '',
        isAuthenticated: !!localStorage.getItem('token'),
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
    },
    actions: {
        login({ commit }, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:3010/auth/login', credentials)
                    .then(response => {
                        const token = response.data.accessToken
                        commit('SET_TOKEN', token)
                        localStorage.setItem('token', token)
                        resolve(response)
                    })
                    .catch(error => {
                        commit('SET_TOKEN', '')
                        localStorage.removeItem('token')
                        reject(error)
                    })
            })
        },
    }
};