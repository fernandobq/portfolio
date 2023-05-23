<script lang="ts" setup>
import Desktop from './Desktop.vue'
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

const socialMedia = [
    {
        link: 'https://www.linkedin.com/in/fernando-barraza-quintero-76b974197/',
        name: 'linkedin',
        id: 1
    },
    {
        link: 'https://github.com/fernandobq',
        name: 'github',
        id: 2
    },
    {
        link: 'mailto:febaqui1008@gmail.com',
        name: 'email',
        id: 3
    }
]
</script>

<template>
    <footer class="bg-purple-heart w-full text-white">
        <Desktop :links="links" :social-media="socialMedia" />
    </footer>
</template>
