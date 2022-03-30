<template>
	<div class="flex">
    <Navbar />
    <div class="right__section">
      <Topbar />
      <div class="wrapper" id="wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar.vue'
import Topbar from '@/components/layouts/Topbar.vue'

export default {
	components: {
		Navbar,
		Topbar
	}
}
</script>