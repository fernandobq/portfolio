<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Desktop from './Desktop.vue'
import Mobile from './Mobile.vue'
const direction = ref(0)
const positionY = ref(0)
const startY = ref(0)
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

const update = () => {
    positionY.value = window.scrollY
    direction.value = positionY.value === 0 ? 0 : positionY.value > startY.value ? 1 : -1
    startY.value = positionY.value
}

onMounted(() => {
    window.addEventListener('scroll', update)
})
onUnmounted(() => {
    window.removeEventListener('scroll', update)
})
</script>

<template>
    <header
        class="w-full fixed top-5 z-10 normal-transition"
        :class="
            positionY > 125 && direction === 1
                ? 'translate-y-[-115%]'
                : direction === -1
                ? 'translate-y-0'
                : ''
        "
    >
        <Desktop class="desktop hidden md:grid" :links="links" />
        <Mobile class="mobile md:hidden" :links="links" />
    </header>
</template>
