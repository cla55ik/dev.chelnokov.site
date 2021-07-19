import MainPage from '@/pages/MainPage'
import ProjectsList from '@/pages/ProjectsList'
import Admin from '@/pages/admin/Admin'
import AdminProjects from '@/pages/admin/AdminProjects'
import TestPage from '@/pages/TestPage'

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
    },
    {
        path: '/test',
        component: TestPage
    }
        

]


const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;