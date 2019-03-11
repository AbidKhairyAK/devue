<template>
	<v-card>
		<v-card-title primary-title>
			<v-layout row wrap justify-space-between>
					<span class="display-1 font-weight-light">User List</span>
					<v-btn color="success" @click.stop="openForm(false)">Create New</v-btn>
			</v-layout>
			
			<v-dialog v-model="dialog" persistent max-width="600px">
				<v-card>
					<v-card-title primary-title>
						<span class="headline">Create User</span>
					</v-card-title>
					<v-card-text>
						<v-container grid-list-md>
							<v-layout wrap>
								<v-flex xs12 md8>
									<v-text-field label="Name" v-model="form.name" required></v-text-field>
								</v-flex>
								<v-flex xs12 md4>
									<v-autocomplete label="Role" :items="roles" v-model="form.role" required></v-autocomplete>
								</v-flex>
								<v-flex xs12>
									<v-text-field label="Email" type="email" v-model="form.email" required></v-text-field>
								</v-flex>
								<v-flex xs12 md6>
									<v-text-field v-if="!this.editState" label="Password" type="password" v-model="form.password" required></v-text-field>
								</v-flex>
								<v-flex xs12 md6>
									<v-text-field v-if="!this.editState" label="Retype Password" type="password" v-model="form.password_confirmation" required></v-text-field>
								</v-flex>
							</v-layout>
						</v-container>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="gray" @click="closeForm()">Close</v-btn>
						<v-btn color="success" @click="submitData(form.id)">{{ this.editState ? 'Save' : 'Submit' }}</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>

		</v-card-title>
		<v-card-text>
			
			<v-data-table
				:headers="headers"
				:items="items"
				:loading="loading"
			>
				<template #items=props>
					<td>
						<v-btn icon small color="secondary--text" style="margin: 0" @click.stop="openForm(props.item)">
							<v-icon>edit</v-icon>
						</v-btn>
						<v-btn icon small color="secondary--text" style="margin: 0" @click="deleteData(props.item.id)">
							<v-icon>delete</v-icon>
						</v-btn>
					</td>
					<td>{{ props.item.name }}</td>
					<td>{{ props.item.email }}</td>
					<td>{{ props.item.role }}</td>
					<td>{{ props.item.created_at }}</td>
				</template>
			</v-data-table>

		</v-card-text>
	</v-card>
</template>

<script>
	export default {
		name: 'Users',
		data: () => ({
			headers: [
				{text: 'Actions', searchable: false, sortable: false},
				{text: 'Username', value: 'name'},
				{text: 'Email', value: 'email'},
				{text: 'Role', value: 'role'},
				{text: 'Registered Since', value: 'created_at'},
			],
			items: [],
			roles: ['super admin', 'admin', 'author', 'editor'],
			dialog: false,
			loading: 'success',
			editState: false,
			form: {
				id: '',
				name: '',
				role: '',
				email: '',
				password: '',
				password_confirmation: '',
			},
			defaultForm: {
				id: "",
				name: "",
				role: "",
				email: "",
				password: "",
				password_confirmation: "",
			},
		}),
		methods: {
			getData() {
				this.$axios.get(`${this.$url}/users`).then(({data}) => {
					this.items = data;
					this.loading = false;
				});
			},
			submitData(id) {
				const config = {
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/x-www-form-urlencoded',
					}
				}

				let url_target = this.editState 
				? `${this.$url}/users/${id}/update`  
				: `${this.$url}/users/create`;

				this.$axios.post(url_target, this.$qs.stringify(this.form), config).then(() => {
					this.dialog = false;
					this.form = Object.assign({}, this.defaultForm);
					this.getData();
				});
			},
			deleteData(id) {
				this.$axios.delete(`${this.$url}/users/${id}/delete`).then(() => {
					this.getData();
				});
			},
			openForm(item) {
				this.form = item ? item : Object.assign({}, this.defaultForm);
				this.editState = item ? true : false;
				this.dialog = true;
			},
			closeForm() {
				this.form = Object.assign({}, this.defaultForm);
				this.dialog = false;
			}
		},
		created() {
			this.getData();
		}
	}
</script>

<style scoped>
	tr td:first-child {
		width: 105px;
		min-width: 105px;
	}
	tr td:nth-child(2) {
		min-width: 150px;
	}
	tr td:nth-child(3) {
		min-width: 200px;
	}
	tr td:last-child {
		min-width: 200px;
	}
</style>