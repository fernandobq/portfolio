<script setup lang="ts">
import {gsap} from 'gsap'

gsap.to('.home', {
    x: 400,
    duration: 3,
    markers: true,
    start: "top top",
    end: "bottom bottom"
})
</script>

<template>
    <main ref="homeElement" class="home bg-purple-heart h-screen">Home</main>
</template>
