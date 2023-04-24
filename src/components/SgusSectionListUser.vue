<template>
    <section>
        <h1>Usuários</h1>
        <div class="container">

            <div class="row">
                <h2>Lista de Cadastros</h2>
                <router-link class="new-user" to="/register-user" tag="button">Novo Cadastro ＋</router-link>
            </div>

            <input type="text" id="search" name="search" placeholder="🔎 Pesquisar">
            <div class="wrap">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Permissão</th>
                            <th>Status</th>
                            <th>Data</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in this.users" :key="index">
                            <td>{{ user._id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>
                                <select v-model="user.role" @change="selectedRole(user._id, $event.target.value)">
                                    <option :value="user.role" :selected="true">{{ user.role }}</option>
                                    <option v-for="role in roles" :value="role.name" :key="role.id">{{ role.name }}
                                    </option>
                                </select>
                            </td>
                            <td>{{ isOnline(user._id) ? 'online' : 'offline' }}</td>
                            <td>{{ dayLog(user._id) }}</td>
                            <td>{{ hourLog(user._id) }}</td>
                            <td>
                                <button class="trash" @click="removeUser(user._id)">
                                    <img src="../assets/Lixo.svg" alt="trash">
                                </button>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <p class="counter">5 Usuários</p>

            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios'

export default {
    async beforeCreate() {
        try {
            await this.$store.dispatch('findAllUsers')

            const token = localStorage.getItem('token');
            const { data: sessions } = await axios.get(`http://localhost:3010/sessions`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            this.sessions = sessions
            this.usersOnline = sessions.map(session => session.userId)
        } catch (error) {
            console.error(error)
        }
    },
    data() {
        return {
            sessions: [],
            usersOnline: [],
        }
    },
    computed: {
        ...mapGetters({
            users: 'getUsers',
        }),
        roles() {
            return [
                { id: 1, name: 'super-admin' },
                { id: 2, name: 'admin' },
                { id: 3, name: 'user' },
                { id: 4, name: 'guest' },
            ]
        }
    },
    methods: {
        isOnline(userId) {
            let on = false
            if (this.usersOnline.includes(userId)) {
                this.sessions.map(session => {
                    if (session.userId === userId) {
                        const log = new Date(session.createdAt);
                        const diffDays = ((new Date() - log) / (1000 * 60 * 60 * 24));

                        if (diffDays <= 1) {
                            on = true
                        }
                    }
                })
            }
            return on
        },
        dayLog(userId) {
            let day = '-'
            if (this.usersOnline.includes(userId)) {
                this.sessions.map(session => {
                    if (session.userId === userId) {
                        const log = new Date(session.createdAt);
                        const diffDays = ((new Date() - log) / (1000 * 60 * 60 * 24));

                        if (diffDays <= 1) {
                            day = new Date(log).toLocaleDateString()
                        }
                    }
                })
            }
            return day
        },
        hourLog(userId) {
            let hour = '-'
            if (this.usersOnline.includes(userId)) {
                this.sessions.map(session => {
                    if (session.userId === userId) {
                        const log = new Date(session.createdAt);
                        const diffDays = ((new Date() - log) / (1000 * 60 * 60 * 24));

                        if (diffDays <= 1) {
                            hour = new Date(session.createdAt).toLocaleTimeString()
                        }
                    }
                })
            }
            return hour
        },
        removeUser(userId) {
            this.$store.dispatch('removeUser', userId)
                .then(() => {
                    location.reload()
                }).catch(error => {
                    console.error(error)
                })
        },
        selectedRole(userId, role) {
            console.log(`${userId} - ${role}`)

            this.$store.dispatch('updateRoleUser', { userId, role })
                .then(() => {
                    location.reload()
                }).catch(error => {
                    console.error(error)
                })
        }
    }
}
</script>

<style scoped>
* {
    font-family: 'Inter';
    font-weight: 400;
}

h1 {
    padding-left: 80px;
    margin-top: 50px;
    margin-bottom: 42px;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
}

.container {
    width: 88.8vw;
    min-height: 67vh;
    height: auto;
    background: #FFFFFF;
    margin-bottom: 12.3vh;
    margin: 0 auto;
}

.row {
    display: flex;
    flex-direction: row;
    padding: 3.6vh 8.333vw;
}

button.new-user {
    margin-left: auto;

    width: 133px;
    height: 33px;
    background: #4763E4;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
}

button.trash {
    border: none;
    cursor: pointer;
    background: none;
}

.row h2 {
    font-size: 18px;
    line-height: 22px;
    color: #27272A;
}

input {
    width: 72vw;
    height: 4vh;
    background: #FFFFFF;
    border: 1px solid rgba(71, 99, 228, 0.5);
    border-radius: 10px;
    margin: 0 8.333vw 64px 8.333vw;
    padding-left: 20px;
}

thead tr th {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #A1A1AA;
    padding: 10px;
}

table {
    margin: 0 auto;
    font-size: 14px;
    line-height: 17px;
    color: #27272A;
}

td {
    padding: 10px;
    border-bottom: 1px solid #E3E2E2;

}

p.counter {
    font-size: 16px;
    line-height: 24px;
    color: #4763E4;
    margin: 90px 0 30px 0;
    /* width: 100%; */
}

.wrap {
    text-align: center;
}
</style>