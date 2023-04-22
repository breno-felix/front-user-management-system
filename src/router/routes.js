import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/SgusSectionListUser";
import RegisterUser from "../components/SgusSectionRegisterUser";
import Login from "../components/SgusLogin";
import NotFound from "../components/Sgus404";

Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: Home,
        name: 'home',
        beforeEnter: (to, from, next) => {
            const role  = localStorage.getItem('userRole');
            if (role !== 'super-admin') {
                next({ name: 'login' });
            } else {
                next();
            }
        }
    }, {
        path: '/register-user',
        component: RegisterUser,
        name: 'register-user',
        beforeEnter: (to, from, next) => {
            const role  = localStorage.getItem('userRole');
            if (role !== 'super-admin') {
                next({ name: 'login' });
            } else {
                next();
            }
        }
    }, {
        path: '/login',
        component: Login,
        name: 'login'
    }, {
        path: '*',
        component: NotFound
    }]
})