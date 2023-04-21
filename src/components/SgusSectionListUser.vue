<template>
    <section>
        <h1>Usuários</h1>
        <div class="container">

            <div class="row">
                <h2>Lista de Cadastros</h2>
                <button class="new-user" @click.prevent="$emit('component-register-users')">Novo Cadastro ＋</button>
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
                        <tr>
                            <td>6169817c82a3174b4f4f4c2d</td>
                            <td>João Carlos da Silva</td>
                            <td>joao@mail.com</td>
                            <td>admin</td>
                            <td>ativo</td>
                            <td>20/04/2023</td>
                            <td>10:30</td>
                            <td><img src="../assets/Lixo.svg" alt="trash"></td>
                        </tr>
                        <tr>
                            <td>6169817c82a3174b4f4f4c2d</td>
                            <td>Maria</td>
                            <td>maria@mail.com</td>
                            <td>user</td>
                            <td>inativo</td>
                            <td>19/04/2023</td>
                            <td>15:45</td>
                            <td><img src="../assets/Lixo.svg" alt="trash"></td>
                        </tr>
                        <tr>
                            <td>6169817c82a3174b4f4f4c2d</td>
                            <td>José</td>
                            <td>jose@mail.com</td>
                            <td>admin</td>
                            <td>ativo</td>
                            <td>18/04/2023</td>
                            <td>08:20</td>
                            <td><img src="../assets/Lixo.svg" alt="trash"></td>
                        </tr>
                    </tbody>

                </table>
                <p class="counter">5 Usuários</p>

            </div>
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