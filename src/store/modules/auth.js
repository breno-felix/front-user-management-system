import axios from 'axios'
import jwt from 'jsonwebtoken';

export default {
    state: {
        token: '',
        isAuthenticated: false,
        userRole: null,
        userName: null,
        userEmail: null
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
        },
        getUserName(state) {
            return state.userName;
        },
        getUserEmail(state) {
            return state.userEmail;
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_IS_AUTHENTICATED(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated;
        },
        SET_USER_ROLE(state, role) {
            state.userRole = role;
        },
        SET_USER_NAME(state, name) {
            state.userName = name;
        },
        SET_USER_EMAIL(state, email) {
            state.userEmail = email;
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

                        commit('SET_IS_AUTHENTICATED', true)

                        const { role, name, email } = jwt.decode(token)
                        commit('SET_USER_ROLE', role)
                        localStorage.setItem('userRole', role);
                        commit('SET_USER_NAME', name)
                        commit('SET_USER_EMAIL', email)

                        resolve(response)
                    })
                    .catch(error => {
                        commit('SET_TOKEN', '')
                        localStorage.removeItem('token')

                        commit('SET_IS_AUTHENTICATED', false)

                        commit('SET_USER_ROLE', null)
                        localStorage.removeItem('userRole')
                        commit('SET_USER_NAME', null)
                        commit('SET_USER_EMAIL', null)

                        reject(error)
                    })
            })
        },
        logout({ commit }) {
            const token = localStorage.getItem('token')
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:3010/auth/logout', null, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(() => {
                    commit('SET_TOKEN', '')
                    localStorage.removeItem('token')

                    commit('SET_IS_AUTHENTICATED', false)

                    commit('SET_USER_ROLE', null)
                    localStorage.removeItem('userRole')
                    commit('SET_USER_NAME', null)
                    commit('SET_USER_EMAIL', null)
                    resolve()
                }).catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        }
    }
}