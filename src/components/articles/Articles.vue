<template>
	<div>
		<h2>Ini Article</h2>
        <transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'Articles',
	}
</script>