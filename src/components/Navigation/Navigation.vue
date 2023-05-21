<script setup lang="ts">
import Desktop from './Desktop.vue'
import Mobile from './Mobile.vue'
const links = [
    {
        link: '/',
        name: 'Home',
        id: 1
    },
    {
        link: '/about',
        name: 'About',
        id: 2
    },
    {
        link: '/projects',
        name: 'Projects',
        id: 3
    },
    {
        link: '/contact',
        name: 'Contact',
        id: 4
    }
]
</script>

<template>
    <Desktop class="desktop hidden lg:grid" :links="links" />
    <Mobile class="mobile lg:hidden" :links="links" />
</template>
