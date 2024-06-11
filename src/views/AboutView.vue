<template>
	<div>
		<h2>About View</h2>
		<div>{{ $route.path }}</div>
		<button class="btn btn-primary" @click="$router.push('/')">
			Home으로 이동
		</button>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
