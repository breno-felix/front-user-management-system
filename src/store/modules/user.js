import axios from 'axios'

export default {
    state: {
        users: [],
    },
    getters: {
        getUsers(state) {
            return state.users;
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        }
    },
    actions: {
        async findAllUsers({ commit }) {
            const token = localStorage.getItem('token')
            try {
                const {data: users} = await axios.get('http://localhost:3010/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                commit('SET_USERS', users)
            } catch (error) {
                console.log(error)
            }
        }
    }
}