<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation/Navigation.vue'
</script>

<template>
    <header class="bg-white-lilac w-full">
        <Navigation />
    </header>
    <main>
        <RouterView />
    </main>
    <footer>This is the footer</footer>
</template>
