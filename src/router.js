import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import BotScrapper from "@/views/BotScrapper";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/BotScrapper',
            name: 'BotScrapper',
            component: BotScrapper
        }
    ]
});