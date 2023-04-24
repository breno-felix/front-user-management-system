import axios from 'axios'

export default {
    state: {
        users: [],
        message: ''
    },
    getters: {
        getUsers(state) {
            return state.users;
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_MESSAGE(state, message) {
            state.message = message;
        }
    },
    actions: {
        async findAllUsers({ commit }) {
            const token = localStorage.getItem('token')
            try {
                const { data: users } = await axios.get('http://localhost:3010/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                commit('SET_USERS', users)
            } catch (error) {
                console.log(error)
            }
        },
        async removeUser({ commit }, userId) {
            const token = localStorage.getItem('token')
            try {
                await axios.delete(`http://localhost:3010/users/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                commit('SET_MESSAGE', `the userId: ${userId} has been removed.`)
            } catch (error) {
                console.log(error)
            }
        },
        async updateRoleUser({ commit }, { userId, role }) {
            const token = localStorage.getItem('token')
            try {
                await axios.patch(`http://localhost:3010/users/${userId}`, { role }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                commit('SET_MESSAGE', `the userId: ${userId} now has role: ${role}.`)
            } catch (error) {
                console.log(error)
            }
        },

    }
}