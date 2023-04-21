<template>
    <header>
        <div class="container">
            <nav>
                <ul>
                    <li><a href="#">Gerenciamento</a></li>
                    <li><span>&gt;</span></li>
                    <li><a href="#">Cadastro</a></li>
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

li a {
    color: #71717A;
}

li:nth-child(3) a {
    color: blue;
}

ul {
    gap: 0.555vw
}
</style>