<script setup lang="ts">
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'
gsap.registerPlugin(ScrollTrigger)
const square = ref()
const homeElement = ref()


onMounted(() => {
    gsap.to(square.value, {
        x: 700,
        scrollTrigger: {
            trigger: square.value,
            start: "top 600",
            end: "top 400",
            markers: true,
            scrub: 1,
        }
    })
})
</script>

<template>
    <main class="trigger h-screen">
        <div ref="trigger" class="square w-20 h-20 bg-green">Cuadro2</div>
    </main>
    <main ref="homeElement" class="home bg-purple-heart h-screen">
        <div ref="square" class="square w-20 h-20 bg-green mt-auto">Cuadro</div>
    </main>
</template>
