<template>
    <header>
        <div class="container">
            <nav>
                <ul>
                    <li><a href="#" class="link">Gerenciamento</a></li>
                    <li><span>&gt;</span></li>
                    <router-link to="/" class="link">Usuários</router-link>
                    <li v-if="showLink()"><span>&gt;</span></li>
                    <router-link v-if="showLink()" to="/register-user" class="link">Novo Cadastro</router-link>
                </ul>
            </nav>

            <div v-if="!showLogout" @click="toggleLogout" class="user-info">
                <span>{{ this.userName }}</span>
                <span>{{ this.userEmail }}</span>
            </div>

            <div v-if="showLogout" @click="toggleLogout" class="logout">
                <span>{{ this.userName }}</span>
                <span>{{ this.userEmail }}</span>
                <button class="logout-button" @click.stop="logout">Logout ⍈</button>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    data() {
        return {
            showLogout: false
        }
    },
    methods: {
        showLink() {
            return this.$route.path === '/register-user';
        },
        toggleLogout() {
            this.showLogout = !this.showLogout;
        },
        logout() {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/login')
                }).catch(error => {
                    console.error(error)
                })
        }
    },
    computed: {
        userName(){
            return localStorage.getItem('userName')
        },
        userEmail(){
            return localStorage.getItem('userEmail')
        }
    },
}
</script>

<style scoped>
* {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
}

header {
    width: 100vw;
    height: 7.812vh;
    background: #FFFFFF;
}

.container {
    display: flex;
    flex-direction: row;
    padding: 0 4.8vw;
    align-items: center;
    height: 100%;

}

nav ul {
    display: flex;
    flex-direction: row;
}

.user-info {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    justify-content: center;
    cursor: pointer;
    width: 18vw;
    height: 5.86vh;
    background: #4763E4;
    border-radius: 40px;
}

.logout {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    cursor: pointer;
    margin-top: 5.8vh;
    padding-top: 11px;

    width: 18vw;
    height: 11.72vh;
    background: #4763E4;
    border-radius: 40px 40px 40px 0px;
}

.user-info span {
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
    padding-left: 30px;
}

.logout span {
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
    padding-left: 30px;
}

.link {
    color: #71717A;
}

ul {
    gap: 0.555vw
}

.link-active {
    color: #4658AC;
}

.logout-button {
    width: 95px;
    height: 20px;
    background: #FFFFFF;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    margin-left: 30px;
    margin-top: 10px;

    font-size: 16px;
    line-height: 19px;
    color: #4763E4;
}
</style>