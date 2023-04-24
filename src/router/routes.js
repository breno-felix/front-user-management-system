import Vue from "vue";
import VueRouter from "vue-router";

import ListUser from "../components/SgusSectionListUser";
import ListUserRealTime from "../components/SgusSectionListUserRealTime";
import RegisterUser from "../components/SgusSectionRegisterUser";
import Login from "../components/SgusLogin";
import NotFound from "../components/Sgus404";

Vue.use(VueRouter)

const router = new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: ListUserRealTime,
        name: 'home',
        beforeEnter: (to, from, next) => {
            const role = localStorage.getItem('userRole');
            if (role !== 'super-admin') {
                next({ name: 'login' });
            } else {
                next();
            }
        }
    }, {
        path: '/list-user',
        component: ListUser,
        name: 'list-user',
        beforeEnter: (to, from, next) => {
            const role = localStorage.getItem('userRole');
            if (role !== 'super-admin') {
                next({ name: 'login' });
            } else {
                next();
            }
        }
    },
    {
        path: '/register-user',
        component: RegisterUser,
        name: 'register-user',
        beforeEnter: (to, from, next) => {
            const role = localStorage.getItem('userRole');
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

router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !localStorage.getItem('token')) {
        next({ name: 'login' });
    } else {
        next();
    }
});

export default router