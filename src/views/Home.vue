<template>
	<div class="dashboard-home grid">
		<div class="home__card" v-for="(data, i) in cardData" :key="i">
			<div>
				<div class="home__card-number">{{ data.number }}</div>
				<div class="home__card-title">{{ data.label }}</div>
			</div>
			<div class="home__card-icon">
				<i :class="data.icon"></i>
			</div>
		</div>
	</div>
	<div class="another-card grid">
		<div class="home__content-1"></div>
		<div class="home__content-2">
			<div class="content-header">
				<h2 class="text__title">Latest Comments</h2>
			</div>
			<div class="home__content-card grid" v-for="(comment, i) in comments" :key="i">
				<el-avatar size="large" :src="comment.url"></el-avatar>
				<div class="home__content-card-details">
					<p class="home__content-card-name">{{ comment.name }}</p>
					<p class="home__content-card-comment">"{{ comment.text }}"</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	data() {
		return {
			circleUrl: 'https://i.pravatar.cc/300',
			cardData :[
				{
					number: '18',
					label: "Total Post",
					icon: 'ri-newspaper-line'
				},
				{
					number: '256',
					label: "Total views",
					icon: 'ri-eye-2-line'
				},
				{
					number: '88',
					label: "Total Likes",
					icon: 'ri-thumb-up-line'
				},
				{
					number: '44',
					label: "Comments",
					icon: 'ri-chat-1-line'
				},
			],
			comments: [
				{
					url: 'https://i.pravatar.cc/300?img=8',
					name: 'John Doe',
					text: "Nice Post!"
				},
				{
					url: 'https://i.pravatar.cc/300?img=6',
					name: 'Glane',
					text: "Wow I dont believe this. Sick man!"
				},
				{
					url: 'https://i.pravatar.cc/300?img=1',
					name: 'Monica',
					text: "Thanks for sharing :)"
				},
			]
		}
	},
	components: {
	}
}
</script>
