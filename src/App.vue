<script setup lang="ts">
import Header from './components/Navigation/Header.vue'
import Footer from './components/Footer/Footer.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
    <Header />
    <main class="mt-[125px]">
        <HomeView />
    </main>
    <Footer />
</template>
