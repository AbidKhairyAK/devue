<template>
	<div>
		<h5>ini Categories</h5>
		<ul>
			<li v-for="n in 10" :key="n">category {{n}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Categories',
	}
</script>