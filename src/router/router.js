import MainPage from '@/pages/MainPage'
import Projects from '@/pages/Projects'
import { createWebHistory, createRouter } from 'vue-router'
//import { createRouter } = require("vue-router")

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/projects',
        component: Projects
    }
]


const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;