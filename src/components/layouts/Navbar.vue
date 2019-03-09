<template>
	<v-toolbar dark color="success" app>
		<slot></slot>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>notifications</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>search</v-icon>
		</v-btn>

	</v-toolbar>
</template>

<script>
	export default {
		name: 'Navbar',
	}
</script>