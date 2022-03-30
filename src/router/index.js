import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreatePost from '../views/CreatePost.vue'
import Tags from '../views/Tags.vue'
import Categories from '../views/Categories.vue'
import Users from '../views/Users.vue'
import Posts from '../views/Posts.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/create-post',
		name: 'CreatePost',
		component: CreatePost
	},
	{
		path: '/tags',
		name: 'Tags',
		component: Tags
	},
	{
		path: '/categories',
		name: 'Categories',
		component: Categories
	},
	{
		path: '/users',
		name: 'Users',
		component: Users
	},
	{
		path: '/posts',
		name: 'Posts',
		component: Posts
	},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
