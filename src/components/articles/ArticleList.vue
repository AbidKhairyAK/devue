<template>
	<div>
		<ul>
			<li v-for="n in 10" :key="n">Article {{ n }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'ArticleList',
	}
</script>