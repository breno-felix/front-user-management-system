<template>
    <div class="not-found">
      <div class="error">
        <h1>404</h1>
        <h2>Página não encontrada</h2>
      </div>
      <div class="message">
        <p>Desculpe-nos, mas a página que você está procurando não foi encontrada.</p>
        <router-link to="/">Voltar para a página inicial</router-link>
      </div>
    </div>
  </template>

<script>
export default {

}
</script>

<style scoped>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.error {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
}

h1 {
    font-size: 8rem;
    color: #f1356d;
    margin-right: 1rem;
    animation: pulse 1.5s infinite;
}

h2 {
    font-size: 3rem;
    color: #333;
}

.message {
    text-align: center;
    margin-bottom: 4rem;
}

p {
    font-size: 1.2rem;
    color: #777;
    margin-bottom: 2rem;
}

router-link {
    background-color: #f1356d;
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    text-decoration: none;
    font-size: 1.2rem;
    border-radius: 2rem;
    transition: all 0.3s ease;
}

router-link:hover {
    background-color: #f74687;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>