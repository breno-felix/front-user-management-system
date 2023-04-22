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

            <div class="user-info">
                <span>Breno Felix</span>
                <span>brenodev.felix@gmail.com</span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        showLink() {
            return this.$route.path === '/register-user';
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
    width: 18vw;
    height: 5.86vh;
    background: #4763E4;
    border-radius: 40px;
}

.user-info span {
    font-size: 9px;
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
</style>