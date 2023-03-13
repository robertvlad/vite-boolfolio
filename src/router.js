import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import Portfolio from './pages/Portfolio.vue';
import SinglePost from './pages/SinglePost.vue';

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
        {
            path: '/portfolio/:slug',
            name: 'single-post',
            component: SinglePost
        }

    ]
});

export { router };