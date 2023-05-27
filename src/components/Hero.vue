<script setup lang="ts">
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'
import svgs from './utils/svgs.vue'
gsap.registerPlugin(ScrollTrigger)
const heroElement = ref()
const frontEnd = ref()
const backEnd = ref()
const fullStack = ref()
const newSetOrder = new Set()
let newArrayOrder: number[] = []
const frontEndtechnologies = [
    'html',
    'css',
    'js',
    'typescript',
    'vue',
    'react',
    'sass',
    'tailwind',
    'foundation',
    'npm'
]

const backEndTechnologies = [
    'node',
    'php',
    'laravel',
    'express',
    'mongo',
    'mysql',
    'strapi',
    'wordpress',
    'statamic',
    'algolia'
]

const randomNumber = (arrayLength: number): number => {
    return Math.floor(Math.random() * arrayLength)
}

const createRandomList = () => {
    while (newSetOrder.size < backEndTechnologies.length) {
        newSetOrder.add(randomNumber(backEndTechnologies.length))
    }
    newArrayOrder = [...newSetOrder] as number[]
}

createRandomList()

onMounted(() => {
    const tl = gsap.timeline({
        repeat: -1,
        yoyo: true
    })

    const tl2 = gsap.timeline({
        repeat: -1,
        yoyo: true
    })

    tl.to(frontEnd.value, { opacity: 1, y: 0, duration: 1 })
        .to(frontEnd.value, { opacity: 0, y: -100, duration: 1 / 2 })
        .to(backEnd.value, { opacity: 1, translateY: 0, duration: 1 / 2 })
        .to(backEnd.value, { opacity: 1, translateY: 0, duration: 1 })
        .to(backEnd.value, { opacity: 0, y: -100, duration: 1 / 2 })
        .to(fullStack.value, { opacity: 1, translateY: 0, duration: 1 / 2 })
        .to(fullStack.value, { opacity: 1, translateY: 0, duration: 1 })

    tl2.to('.frontend', { opacity: 1, y: 0, duration: 1 })
        .to('.frontend', { opacity: 0, y: -100, duration: 1 / 2 })
        .to('.backend', { opacity: 1, translateY: 0, duration: 1 / 2 })
        .to('.backend', { opacity: 1, translateY: 0, duration: 1 })
        .set('.frontend', { y: 0, opacity: 1 })

    frontEndtechnologies.forEach((tech) => {
        tl2.set(`.${tech}`, { opacity: 0 })
    })

    newArrayOrder.forEach((order: number) => {
        tl2.to(`.${backEndTechnologies[order]}`, { opacity: 0, duration: 1 / 5 }).to(
            `.${frontEndtechnologies[order]}`,
            { opacity: 1, duration: 1 / 5 },
            '<'
        )
    })
})
</script>

<template>
    <section
        ref="heroElement"
        class="home bg-haiti text-purple-heart lg:mt-[300px] md:mt-[250px] mt-[200px]"
    >
        <div
            class="max-w-1440 w-full mx-auto h-full px-5 md:px-20 lg:flex lg:justify-between lg:flex-wrap lg:gap-y-10 text-center lg:text-left"
        >
            <div class="title lg:w-fit">
                <h2 class="name text-xl lg:text-2xl font-light text-slate-300">
                    Hi, I am Fernando Barraza Quintero
                </h2>
                <div
                    class="text-5xl md:text-6xl lg:text-[80px] font-medium lg:w-[400px] h-[72px] lg:h-[100px] relative overflow-hidden lg:mt-6 md:mt-3 mx-auto w-[200px] lg:mx-0 md:w-[250px]"
                >
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
                <h1
                    class="text-5xl md:text-6xl lg:text-[80px] h-fit font-medium web-dev text-white"
                >
                    Web Developer
                </h1>
            </div>
            <div
                class="flex flex-col lg:w-[360px] mt-10 lg:mt-0 relative justify-end min-h-[136px] w-[280px] mx-auto lg:mx-0"
            >
                <div class="flex flex-wrap w-full gap-x-2 gap-y-2 frontend absolute">
                    <svgs
                        class="w-12 lg:w-16 h-fit self-center max-h-12 lg:max-h-16"
                        :class="icon"
                        v-for="(icon, index) in frontEndtechnologies"
                        :key="index"
                        :name="icon"
                    />
                </div>
                <div
                    class="flex flex-wrap w-full gap-x-2 gap-y-2 absolute backend translate-y-[100px] bottom-0 left-0 opacity-0"
                >
                    <svgs
                        class="w-12 lg:w-16 h-fit self-center max-h-12 lg:max-h-16"
                        :class="icon"
                        v-for="(icon, index) in backEndTechnologies"
                        :key="index"
                        :name="icon"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
