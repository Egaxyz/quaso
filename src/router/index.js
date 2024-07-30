import { createRouter, createWebHistory } from 'vue-router';
import Layouts from '../layouts/Layouts.vue';
import Dashboard from '../views/Dashboard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Layouts,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: Dashboard
                }
            ]
        }
    ]
});

export default router;