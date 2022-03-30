<template>
	<div class="topbar">
		<div class="topbar__left">
			<el-button type="text" class="topbar__toggle" @click="toggleNav.setIsOpened(!toggleNav.isOpened)">
				<i class="ri-menu-fill" id="toggle-menu"></i>
			</el-button>
			<div class="topbar__search">
					<i class="ri-search-line"></i>
					<input type="text" class="topbar__search-input" placeholder="Search...">
			</div>
		</div>
		<div class="topbar__user">
			<span class="topbar__user-greeting">Hi,</span>
			<span class="topbar__user-username">eldynmhmmd</span>
		</div>
	</div>
</template>

<script setup>
import { toggleNav } from '../../composables/useToggle';
</script>

<style>

</style>