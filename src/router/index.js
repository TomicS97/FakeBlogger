import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../components/login.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',																//routes for aplication
			component: login
		},
		{
			path: '/home',
			component: () => import('../views/Home.vue')
		},
	],
})

export default router