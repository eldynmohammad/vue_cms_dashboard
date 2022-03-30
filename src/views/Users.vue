<template>
	<div class="dashboard-content">
		<div class="content-header">
			<h2 class="text__title">Users</h2>
			<el-button size=small @click="dialogAdd = true"><i class="ri-add-line"></i> Add new user</el-button>
		</div>
		<table class="table">
			<thead class="table-head">
				<tr>
					<th class="table-head-td">#</th>
					<th class="table-head-td">Username</th>
					<th class="table-head-td">Email</th>
					<th class="table-head-td">Role</th>
					<th class="table-head-td">Actions</th>
				</tr>
			</thead>
			<tbody class="table-body">
				<!-- Post -->
				<tr v-for="(user, i) in users" :key="i">
					<td>{{ i+1 }}</td>
					<td class="table-title">{{ user.username }}</td>
					<td class="table-title">{{ user.email }}</td>
					<td class="table-title">{{ user.role }}</td>
					<td>
						<el-button size="mini" @click="openEdit(user, i)">Edit</el-button>
						<el-button size="mini" type="danger">Delete</el-button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<!-- Dialog add user -->
	<el-dialog title="Add" v-model="dialogAdd" width="30%" :before-close="handleClose">
		<div class="input__content">
			<label class="input__label">Full Name</label>
			<el-input v-model="data.fullName" placeholder="John Doe"/>
		</div>
		<div class="input__content">
			<label class="input__label">Username</label>
			<el-input v-model="data.username" placeholder="john_doe"/>
		</div>
		<div class="input__content">
			<label class="input__label">Email</label>
			<el-input type="email" v-model="data.email" placeholder="johndoe@example.com"/>
		</div>
		<div class="input__content">
			<label class="input__label">Password</label>
			<div class="input__password-group">
				<el-input :type="passwordFieldType" v-model="data.password" placeholder="johndoe@example.com"/>
				<i @click="switchVisibility" :class="passwordShow" class="input__password-icon"></i>
			</div>
		</div>
		<div class="input__content">
			<label class="input__label">Role</label>
			<el-select placeholder="Select" v-model="data.role">
				<el-option v-for="item in roles" :key="item.value" :label="item.label" :value="item.value" >
				</el-option>
			</el-select>
		</div>
		<template #footer>
			<span class="dialog-footer">
			<el-button @click="dialogVisible = false">Cancel</el-button>
			<el-button type="primary" @click="add">Confirm</el-button>
			</span>
		</template>
	</el-dialog>
	<!-- Dialog edit user -->
	<el-dialog title="Edit" v-model="dialogEdit" width="30%" :before-close="handleClose">
		<div class="input__content">
			<label class="input__label">Full Name</label>
			<el-input v-model="editData.fullName" placeholder="John Doe"/>
		</div>
		<div class="input__content">
			<label class="input__label">Username</label>
			<el-input v-model="editData.username" placeholder="john_doe"/>
		</div>
		<div class="input__content">
			<label class="input__label">Email</label>
			<el-input type="email" v-model="editData.email" placeholder="johndoe@example.com"/>
		</div>
		<div class="input__content">
			<label class="input__label">Password</label>
			<div class="input__password-group">
				<el-input :type="passwordFieldType" v-model="editData.password" placeholder="johndoe@example.com"/>
				<i @click="switchVisibility" :class="passwordShow" class="input__password-icon"></i>
			</div>
		</div>
		<div class="input__content">
			<label class="input__label">Role</label>
			<el-select placeholder="Select" v-model="editData.role">
				<el-option v-for="item in roles" :key="item.value" :label="item.label" :value="item.value" >
				</el-option>
			</el-select>
		</div>
		<template #footer>
			<span class="dialog-footer">
			<el-button @click="dialogVisible = false">Cancel</el-button>
			<el-button type="primary" @click="add">Confirm</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script>
export default({
	data() {
		return {
			data: {
				fullName:'',
				username:'',
				email:'',
				password:'',
				role: ''
			},
			editData: {
				fullName:'',
				username:'',
				email:'',
				password:'',
				role: ''
			},
			dialogAdd: false,
			dialogEdit: false,
			users: [
				{
					fullName: 'Eldyn Mohammad Q',
					username: 'eldynmhmmd',
					email: 'emq578@gmail.com',
					password: 'ketoprak',
					role: 'Admin',
				},
				{
					fullName: 'Vale',
					username: 'Valeeed',
					email: 'delvaa@gmail.com',
					password: 'karedok',
					role: 'Editor',
				},
			],
			roles: [
				{
					value: 'admin',
					label: 'Admin',
				},
				{
					value: 'editor',
					label: 'Editor',
				},
				{
					value: 'moderator',
					label: 'Moderator',
				},
				{
					value: 'viewer',
					label: 'Viewer',
				},
				
			],
			passwordFieldType : 'password',
			passwordShow : 'ri-eye-fill',
		}
	},
	methods: {
		switchVisibility() {
			this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
			this.passwordShow = this.passwordShow === 'ri-eye-fill' ? 'ri-eye-off-fill' : 'ri-eye-fill';
		},
		add() {
			if (this.data.categoryName.trim() == '') return this.errorNotice('Category name is required');
			let newObj = {
				fullName: this.data.fullName,
				username: this.data.username,
				email: this.data.email,
				password: this.data.password,
				role: this.data.role,
			};
			this.users.push(newObj);
			// this.successNotice ('Tag has been added succesfully')
			this.dialogVisible = false
			this.data.fullName = ''
			this.data.username = ''
			this.data.email = ''
			this.data.password = ''
			this.data.role = ''
			
		},
		openEdit(val, index) {
			let obj = {
				fullName: val.fullName,
				username: val.username,
				email: val.email,
				password: val.password,
				role: val.role,
			}
			this.editData = obj
			this.dialogEdit = true
			this.index = index
		},
		edit() {
			this.users[this.index].fullName = this.editData.fullName
			this.users[this.index].username = this.editData.username
			this.users[this.index].email = this.editData.email
			this.users[this.index].password = this.editData.password
			this.users[this.index].role = this.editData.role
			this.dialogEdit = false
		}
	},
})
</script>
