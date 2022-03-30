<template>
	<div class="dashboard-content">
		<div class="content-header">
			<h2 class="text__title">Tags</h2>
			<el-button size=small @click="dialogAdd = true"><i class="ri-add-line"></i> Add new tag</el-button>
		</div>
		<table class="table">
			<thead class="table-head">
				<tr>
					<th class="table-head-td">#</th>
					<th class="table-head-td">Tag Name</th>
					<th class="table-head-td">Actions</th>
				</tr>
			</thead>
			<tbody class="table-body">
				<!-- Post -->
				<tr v-for="(tag, i) in tags" :key="i">
					<td>{{ i+1 }}</td>
					<td class="table-title">{{ tag.tagName }}</td>
					<td>
						<el-button size="mini" @click="openEdit(tag, i)">Edit</el-button>
						<el-button size="mini" type="danger">Delete</el-button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<el-dialog title="Add" v-model="dialogAdd" width="30%" height="20px" :before-close="handleClose">
		<div class="input__content">
			<label class="input__label">Tag Name</label>
			<el-input v-model="data.tagName" placeholder="Example: Vue"/>
		</div>
		<template #footer>
			<span class="dialog-footer">
			<el-button @click="dialogAdd = false">Cancel</el-button>
			<el-button type="primary" @click="add"
				>Confirm</el-button
			>
			</span>
		</template>
	</el-dialog>
	<el-dialog title="Edit" v-model="dialogEdit" width="30%" height="20px" :before-close="handleClose">
		<div class="input__content">
			<label class="input__label">Tag Name</label>
			<el-input v-model="editData.tagName" placeholder="Example: Vue"/>
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
					tagName:'',
				},
				editData: {
					tagName:'',
				},
				dialogAdd: false,
				dialogEdit: false,
				index : -1,
				tags: [
					{
						tagName: 'HTML'
					},
					{
						tagName: 'CSS'
					},
					{
						tagName: 'Vue JS'
					},
					{
						tagName: 'Laravel'
					},
				]
			}
		},
		methods: {
			add() {
				if (this.data.tagName.trim() == '') return this.errorNotice('Tag name is required');
				let newObj = {
					tagName: this.data.tagName
				};
				this.tags.push(newObj);
				this.dialogAdd = false
				this.data.tagName = ''
				
			},
			openEdit(val, index) {
				let obj = {
					tagName : val.tagName
				}
				this.editData = obj
				this.dialogEdit = true
				this.index = index
			},
			edit() {
				this.tags[this.index].tagName = this.editData.tagName
				this.dialogEdit = false
			}
		}
	}
</script>
