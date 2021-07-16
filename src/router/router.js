import MainPage from '@/pages/MainPage'
import ProjectsList from '@/pages/ProjectsList'
import TestForm from '@/pages/TestForm'
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
    },{
        path: '/testform',
        component: TestForm
    }
]


const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;