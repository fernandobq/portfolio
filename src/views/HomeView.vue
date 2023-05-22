<script setup lang="ts">
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'
gsap.registerPlugin(ScrollTrigger)
const homeElement = ref()
const frontEnd = ref()
const backEnd = ref()
const fullStack = ref()

onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: homeElement.value,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: true,
            snap: 1 / 2
        }
    })

    tl.to(frontEnd.value, { opacity: 1, y: 0, duration: 1 })
        .to(frontEnd.value, { opacity: 0, y: -100, duration: 1 })
        .to(backEnd.value, { opacity: 1, translateY: 0, duration: 1 })
        .to(backEnd.value, { opacity: 1, translateY: 0, duration: 1 })
        .to(backEnd.value, { opacity: 0, y: -100, duration: 1 })
        .to(fullStack.value, { opacity: 1, translateY: 0, duration: 1 })
        .to(fullStack.value, { opacity: 1, translateY: 0, duration: 1 })
})
</script>

<template>
    <section ref="homeElement" class="home bg-purple-heart h-screen text-white-lilac">
        <div class="max-w-1440 w-full mx-auto h-full flex items-center px-20">
            <div>
                <div class="text-9xl font-bold w-[530px] h-[150px] relative overflow-hidden">
                    <span ref="frontEnd" class="absolute bottom-0 left-0">Frontend</span>
                    <span ref="backEnd" class="absolute opacity-0 bottom-0 left-0 translate-y-full"
                        >Backend</span
                    >
                    <span
                        ref="fullStack"
                        class="absolute opacity-0 bottom-0 left-0 translate-y-full"
                        >Fullstack</span
                    >
                </div>
                <h1 class="text-9xl h-fit font-bold">Web Developer</h1>
            </div>
        </div>
    </section>
</template>
