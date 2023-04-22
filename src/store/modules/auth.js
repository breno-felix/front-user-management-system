import axios from 'axios'
import jwt from 'jsonwebtoken';

export default {
    state: {
        token: '',
        isAuthenticated: !!localStorage.getItem('token'),
        userRole: null
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        getIsAuthenticated(state) {
            return state.isAuthenticated;
        },
        getUserRole(state) {
            return state.userRole;
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER_ROLE(state, role) {
            state.userRole = role;
        }
    },
    actions: {
        login({ commit }, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:3010/auth/login', credentials)
                    .then(response => {
                        const token = response.data.accessToken
                        commit('SET_TOKEN', token)
                        localStorage.setItem('token', token);

                        const {role} = jwt.decode(token)
                        commit('SET_USER_ROLE', role)
                        localStorage.setItem('userRole', role);

                        resolve(response)
                    })
                    .catch(error => {
                        commit('SET_TOKEN', '')
                        localStorage.removeItem('token')

                        commit('SET_USER', null)
                        localStorage.removeItem('user')

                        reject(error)
                    })
            })
        },
    }
};