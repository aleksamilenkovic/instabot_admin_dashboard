import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import BotScrapper from "@/views/BotScrapper";
import Analyze from "@/views/Analyze";
import Login from "./views/Login";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/BotScrapper',
            name: 'BotScrapper',
            component: BotScrapper
        },
        {
            path: '/Analyze/:username',
            name: 'analyze',
            component: Analyze
        }
    ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});