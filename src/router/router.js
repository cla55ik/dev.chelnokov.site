import MainPage from '@/pages/MainPage'
import ProjectsList from '@/pages/ProjectsList'
import Admin from '@/pages/Admin'
import AdminProjects from '@/pages/AdminProjects'

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
    },
    {
        path: '/ivan',
        component: Admin
    },
    {
        path: '/ivan/projects',
        component: AdminProjects
    }
        

]


const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;