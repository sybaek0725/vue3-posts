import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

// 페이지 정보를 담음
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
];

// 페이지 이동
const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
