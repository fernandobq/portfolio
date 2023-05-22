<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Navigation/Header.vue'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
    <Header />
    <main class="mt-[105px]">
        <RouterView />
    </main>
    <Footer />
</template>
