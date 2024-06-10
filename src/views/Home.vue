<template>
    <div>
        <h2>Home View</h2>
        <div>{{ $route.path }}</div>
        <div>{{ $route.name }}</div>
        <button class="btn btn-primary" @click="goToAbout">About으로 이동</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goToAbout = () => {
    router.push('/about')
}
</script>

<style lang="scss" scoped></style>
