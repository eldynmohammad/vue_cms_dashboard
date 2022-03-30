<template>
	<div class="dashboard-content">
		<div class="content-header">
			<h2 class="text__title">Posts</h2>
			<el-button size=small @click="$router.push('/create-post')"><i class="ri-add-line"></i> Add new post</el-button>
		</div>
		<table class="table">
			<thead class="table-head">
				<tr>
					<th class="table-head-td">#</th>
					<th class="table-head-td">Post Title</th>
					<th class="table-head-td">Categories</th>
					<th class="table-head-td">Tags</th>
					<th class="table-head-td">Action</th>
				</tr>
			</thead>
			<tbody class="table-body">
				<!-- Post -->
				<tr v-for="(blog, i) in tableData" :key="i">
					<td>{{ i+1 }}</td>
					<td class="table-title">{{ blog.postName }}</td>
					<td>
						<span v-for="(c, j) in blog.categories" :key="j" class="tag-flex-wrap">
							<el-tag size="small">{{ c.categoryName }}</el-tag>
						</span>
					</td>
					<td>
						<span v-for="(t, k) in blog.tags" :key="k" class="tag-flex-wrap">
							<el-tag size="small">{{ t.tagName }}</el-tag>
						</span>
						</td>
					<td>
						<el-button plain size="mini" type="info">Visit Link</el-button>
						<el-button size="mini">Edit</el-button>
						<el-button size="mini" type="danger">Delete</el-button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
.el-tag {
	border-radius: 1rem !important;
	margin-left: .25rem;
	margin-top: .25rem;
}

table {
	border-radius: 1rem !important;
}
</style>

<script>
export default({
	data() {
		return {
			tableData: [
				{
					no: '1',
					postName: 'Lorem Ipsum',
					categories: [
						{
							categoryName:'Web Development'
						},
						{
							categoryName:'Programming'
						}
					],
					tags: [
						{
							tagName:'HTML'
						},
						{
							tagName:'CSS'
						},
						{
							tagName:'Vue JS'
						},
					],
				},
				{
					no: '1',
					postName: 'Another Lorem Ipsum',
					categories: [
						{
							categoryName:'Programming'
						}
					],
					tags: [
						{
							tagName:'HTML'
						},
						{
							tagName:'CSS'
						},],
				},
			]
		}
	},
})
</script>