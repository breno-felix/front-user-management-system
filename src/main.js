import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/routes'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.getters.getIsAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
