import axios from 'axios'
import jwt from 'jsonwebtoken';

export default {
    state: {
        isAuthenticated: false,
    },
    getters: {
        getIsAuthenticated(state) {
            return state.isAuthenticated;
        }
    },
    mutations: {
        SET_IS_AUTHENTICATED(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated;
        }
    },
    actions: {
        login({ commit }, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:3010/auth/login', credentials)
                    .then(response => {
                        const token = response.data.accessToken
                        localStorage.setItem('token', token);

                        commit('SET_IS_AUTHENTICATED', true)

                        const { role, name, email } = jwt.decode(token)
                        localStorage.setItem('userRole', role);
                        localStorage.setItem('userName', name);
                        localStorage.setItem('userEmail', email);

                        resolve(response)
                    })
                    .catch(error => {
                        localStorage.removeItem('token')

                        commit('SET_IS_AUTHENTICATED', false)

                        localStorage.removeItem('userRole')
                        localStorage.removeItem('userName')
                        localStorage.removeItem('userEmail')

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
                    localStorage.removeItem('token')

                    commit('SET_IS_AUTHENTICATED', false)

                    localStorage.removeItem('userRole')
                    localStorage.removeItem('userName')
                    localStorage.removeItem('userEmail')

                    resolve()
                }).catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        }
    }
}