<template>
	<v-navigation-drawer dark :value="drawer" app>

		<v-toolbar color="success darken-1" class="hidden-md-and-down">
			<v-toolbar-title>Pondok Al-Madinah</v-toolbar-title>
		</v-toolbar>

		<v-img :aspect-ratio="16/9" src="https://i.pinimg.com/originals/98/ea/2c/98ea2c33dfb9aa0ee6e88c2c946edaf3.jpg">
			<v-layout pa-2 column fill-height class="lightbox white--text">
				<v-spacer></v-spacer>
				<v-flex shrink>
					<div class="subheading">Jonathan Lee</div>
					<div class="body-1">heyfromjonathan@gmail.com</div>
				</v-flex>
			</v-layout>
		</v-img>

		<v-list>

			<v-list-group prepend-icon="description" active-class="success--text" no-action> 
				<template #activator>
					<v-list-tile>
						<v-list-tile-title>Articles</v-list-tile-title>
					</v-list-tile>
				</template>

				<v-list-tile ripple active-class="success--text" to="/articles/list">
					<v-list-tile-action>
						<v-icon>navigate_next</v-icon>
					</v-list-tile-action>
					<v-list-tile-title>Article List</v-list-tile-title>
				</v-list-tile>

				<v-list-tile ripple active-class="success--text" to="/articles/create">
					<v-list-tile-action>
						<v-icon>navigate_next</v-icon>
					</v-list-tile-action>
					<v-list-tile-title>Create New</v-list-tile-title>
				</v-list-tile>

			</v-list-group>

			<v-list-tile ripple active-class="success--text" to="/categories">
				<v-list-tile-action>
					<v-icon>widgets</v-icon>
				</v-list-tile-action>
				<v-list-tile-title>Categories</v-list-tile-title>
			</v-list-tile>

			<v-list-tile ripple active-class="success--text" to="/users">
				<v-list-tile-action>
					<v-icon>group</v-icon>
				</v-list-tile-action>
				<v-list-tile-title>Users</v-list-tile-title>
			</v-list-tile>

		</v-list>
	</v-navigation-drawer>
</template>

<script>
	export default {
		name: 'Sidebar',
		props: ['drawer']
	}
</script>

<style>
	.lightbox {
		box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
		background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
	}
</style>