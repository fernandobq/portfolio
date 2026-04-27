<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import Header from './components/Navigation/Header.vue'
import Footer from './components/Footer/Footer.vue'
import HomeView from './views/HomeView.vue'

onMounted(async () => {
    await nextTick()
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal')
    const io = new IntersectionObserver(
        (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
        { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    )
    revealEls.forEach(el => io.observe(el))
})
</script>

<template>
    <!-- Fixed background layers -->
    <div class="bg-fx" aria-hidden="true" />
    <div class="bg-grid" aria-hidden="true" />

    <Header />

    <main>
        <HomeView />
    </main>
</template>
