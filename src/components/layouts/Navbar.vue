<template>
	<div class="navbar-mobile" :class="{'navbar-mobile-opened': toggleNav.isOpened}">
		<div class="navbar__content">
			<div class="navbar__logo">
				<i class="ri-ancient-gate-fill"></i>
			</div>
			<div class="navbar__list">
				<div v-for="(item, i) in navbaritems" :key="i" >
					<NavbarLink :icon="item.icon" :to="item.href" :label="item.name"/>
				</div>
				<div class="navbar__link">
					<a href="/logout" class="navbar__link-content">
						<!-- <div class="navbar__link-icon"></div> -->
						<i class="ri-logout-box-fill"></i>
						<p class="navbar__link-label">Logout</p>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="navbar-desktop" :class="{'navbar-desktop-hidden': toggleNav.isOpened}">
		<div class="navbar__content">
			<div class="navbar__logo">
				<i class="ri-ancient-gate-fill"></i>
			</div>
			<div class="navbar__list">
				<div v-for="(item, i) in navbaritems" :key="i" >
					<NavbarLink :icon="item.icon" :to="item.href" :label="item.name"/>
				</div>
				<div class="navbar__link">
					<a href="/logout" class="navbar__link-content">
						<!-- <div class="navbar__link-icon"></div> -->
						<i class="ri-logout-box-fill"></i>
						<p class="navbar__link-label">Logout</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { toggleNav } from '../../composables/useToggle';
import NavbarLink from './NavbarLink.vue';

const	navbaritems = [
				{
					icon: 'ri-home-3-fill',
					href: '/',
					name: 'Dashboard'
				},
				{
					icon: 'ri-pencil-fill',
					href: '/create-post',
					name: 'Create a Post'
				},
				{
					icon: 'ri-checkbox-multiple-fill',
					href: '/posts',
					name: 'Post'
				},
				{
					icon: 'ri-price-tag-3-fill',
					href: '/tags',
					name: 'Tags'
				},
				{
					icon: 'ri-apps-2-fill',
					href: '/categories',
					name: 'Categories'
				},
				{
					icon: 'ri-user-3-fill',
					href: '/users',
					name: 'Users'
				},
			]
</script>

<style>

</style>