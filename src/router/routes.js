import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/SgusSectionListUser";
import RegisterUser from "../components/SgusSectionRegisterUser";
import Login from "../components/SgusLogin";
import NotFound from "../components/Sgus404";

Vue.use(VueRouter)

export default new VueRouter ({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/register-user',
        component: RegisterUser
    }, {
        path: '/login',
        component: Login
    }, {
        path: '*',
        component: NotFound
    }]
})