<template>
    <section>
        <h1>Novo Cadastro</h1>
        <div class="container">
            <form action="#" method="post">
                <label for="user-name">Name</label>
                <input type="text" id="user-name" name="user-name" placeholder="Usuário" required>
                <label for="user-email">Email</label>
                <input type="text" id="user-email" name="user-email" placeholder="user@mail.com" required>
                <label for="user-role">Permissão</label>
                <select id="user-role" name="user-role" required>
                    <option value="">Selecione uma permissão</option>
                    <option value="super-admin">Super Admin</option>
                    <option value="admin">Admin</option>
                    <option value="user">Usuário</option>
                    <option value="guest">Visitante</option>
                </select>
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" placeholder="********" required>
                <button type="submit">Criar</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {

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
    display: flex;
    justify-content: center;
    width: 88.8vw;
    min-height: 67vh;
    height: auto;
    background: #FFFFFF;
    margin-bottom: 12.3vh;
    margin: 0 auto;
}

form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 520px;
}

input {
    width: 520px;
    height: 49px;

    border: 1px solid #5C73DB;
    border-radius: 12px;
    margin-bottom: 25px;
    padding-left: 16px;
}

label {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 19px;
}

button {
    width: 520px;
    height: 48px;

    background: #4763E4;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    margin-top: 42px;

    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
}

select {
    width: 520px;
    height: 49px;

    background: #FFFFFF;
    border: 1px solid #5C73DB;
    border-radius: 12px;
    margin-bottom: 25px;
    padding-left: 16px;
}
</style>