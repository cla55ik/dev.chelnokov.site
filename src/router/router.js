import MainPage from '@/pages/MainPage'
import ProjectsList from '@/pages/ProjectsList'
import { createWebHistory, createRouter } from 'vue-router'
//import { createRouter } = require("vue-router")

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/projects',
        component: ProjectsList
    }
]


const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;