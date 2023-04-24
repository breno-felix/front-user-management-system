<template>
    <div>
        <div class="container">
            <h1> SGUS </h1>
            <h2> Sistema Gerenciador de Usuários</h2>
            <form @submit.prevent="onSubmit">
                <label for="email">Usuário:</label>
                <input type="text" id="email" name="email" placeholder="user@mail.com" v-model="email" required>
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" placeholder="********" v-model="password" required>
                <p class="forgot-password"><a href="#">Esqueceu sua senha?</a></p>
                <button type="submit">Acessar →</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
            const credentials = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login', credentials)
                .then(() => {
                    this.$router.push('/')
                }).catch(error => {
                    console.error(error)
                })
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #000000;
    box-sizing: border-box;
}

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    width: 36%;
    height: 32.25%;
}

form {
    display: flex;
    flex-direction: column;
}

h1 {
    width: 207px;
    height: 90px;
    font-family: 'Gacor Personal Use';
    font-weight: 400;
    font-size: 48px;
    line-height: 90px;
    color: #4763E4;
    margin-bottom: 4.2vh;
}

h2 {
    width: 319px;
    height: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 3.9vh;
}

label {
    width: 58px;
    height: 19px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 0.8vh;
}

form p {
    text-align: center;
}

p {
    width: 100%;
    height: 19px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 1.5vh;
}

button {
    width: 520px;
    height: 48px;
    background: #4763E4;
    border-radius: 12px;
    border: none;
    cursor: pointer;

    font-family: 'Inter';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
}

input {
    width: 520px;
    height: 49px;
    border-radius: 12px;
    margin-bottom: 1.2vh;
    border: 1px solid #E4E4E7;

    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding-left: 1.1vw;
}

input:focus {
    border: 1px solid #5C73DB;
}
</style>