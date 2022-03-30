<template>
	<div class="navbar__link">
		<router-link :to="to" class="navbar__link-content">
			<!-- <div class="navbar__link-icon"></div> -->
			<i class="navbar__link-icon"
			:class="icon"></i>
			<p class="navbar__link-label">{{ label }}</p>
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			required: true
		},
		to: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: true
		}
	}
}
</script>

<style>

</style>