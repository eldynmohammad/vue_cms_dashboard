<template>
	<div class="dashboard-content">
		<div class="content-header">
			<h2 class="text__title">Categories</h2>
			<el-button size=small @click="dialogVisible = true"><i class="ri-add-line"></i> Add new category</el-button>
		</div>
		<table class="table">
			<thead class="table-head">
				<tr>
					<th class="table-head-td">#</th>
					<th class="table-head-td">Category Name</th>
					<th class="table-head-td">Actions</th>
				</tr>
			</thead>
			<tbody class="table-body">
				<!-- Post -->
				<tr v-for="(category, i) in categories" :key="i">
					<td>{{ i+1 }}</td>
					<td class="table-title">{{ category.categoryName }}</td>
					<td>
						<el-button size="mini" @click="openEdit(category, i)">Edit</el-button>
						<el-button size="mini" type="danger">Delete</el-button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<el-dialog title="Add" v-model="dialogVisible" width="30%" :before-close="handleClose">
		<div class="input__content">
			<label class="input__label">Category Name</label>
			<el-input v-model="data.categoryName" placeholder="Example: Web Design"/>
		</div>
		<template #footer>
			<span class="dialog-footer">
			<el-button @click="dialogVisible = false">Cancel</el-button>
			<el-button type="primary" @click="add">Confirm</el-button>
			</span>
		</template>
	</el-dialog>
	<el-dialog title="Edit" v-model="dialogEdit" width="30%" :before-close="handleClose">
		<div class="input__content">
			<label class="input__label">Category Name</label>
			<el-input v-model="editData.categoryName" placeholder="Example: Web Development"/>
		</div>
		<template #footer>
			<span class="dialog-footer">
			<el-button @click="dialogEdit = false">Cancel</el-button>
			<el-button type="primary" @click="edit">Confirm</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script>
	export default {
		data() {
			return {
				data: {
					categoryName:'',
				},
				editData: {
					categoryName:'',
				},
				dialogAdd: false,
				dialogEdit: false,
				index : -1,
				categories: [
					{
						categoryName: 'Web Development'
					},
					{
						categoryName: 'Data Science'
					},
					{
						categoryName: 'Programming'
					},
				]
			}
		},
		methods: {
			add() {
				if (this.data.categoryName.trim() == '') return this.errorNotice('Category name is required');
				let newObj = {
					categoryName: this.data.categoryName
				};
				this.categories.push(newObj);
				// this.successNotice ('Tag has been added succesfully')
				this.dialogVisible = false
				this.data.categoryName = ''
				
			},
			openEdit(val, index) {
				let obj = {
					categoryName : val.categoryName
				}
				this.editData = obj
				this.dialogEdit = true
				this.index = index
			},
			edit() {
				this.categories[this.index].categoryName = this.editData.categoryName
				this.dialogEdit = false
			}
		}
	}
</script>