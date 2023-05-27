<script setup lang="ts">
import Desktop from './Desktop.vue'
import Mobile from './Mobile.vue'
import links from '@/assets/data/navigation.json'
</script>

<template>
    <header class="w-full fixed top-8 z-30 normal-transition">
        <Desktop class="desktop hidden md:grid" :links="links" />
        <Mobile class="mobile md:hidden" :links="links" />
    </header>
</template>
