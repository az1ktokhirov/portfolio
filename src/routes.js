import { createRouter, createWebHashHistory } from 'vue-router';

import Contacts from './pages/Contacts.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import Header from './components/Header.vue';

const routes = [
    {
        path: '/',
        name: 'header',
        component: Header,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;


