<script lang="ts">
import type { LinkAttributes } from '../../utils/types'
import socialMedia from '@/assets/data/socialMedia.json'
import svgs from '../utils/svgs.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)
interface NavigationDesktopProps {
    links: LinkAttributes[]
}
</script>

<script lang="ts" setup>
import useScroll from '@/utils/useScroll'
const { handleScrollTo, scrollToTop } = useScroll()
const props = defineProps<NavigationDesktopProps>()
onMounted(() => {

    props.links.forEach((link) => {
        ScrollTrigger.create({
            trigger: `.${link.sectionId}-section`,
            start: 'top bottom-=300',
            end: 'bottom bottom-=300',
            toggleClass: { targets: `.${link.sectionId}-button`, className: 'bg-purple-heart' }
        })
    })
})
</script>

<template>
    <div class="max-w-1440 mx-auto px-5 md:px-20">
        <div
            class="backdrop-blur-md bg-white-lilac-10 grid grid-cols-12 gap-x-8 py-5 px-10 lg:px-20 rounded-xl text-white"
        >
            <div class="col-span-2 col-start-1 hover:scale-105 transition-all">
                <button class="w-fit" @click="scrollToTop()">
                    <img
                        alt="Vue logo"
                        class="logo-init w-[90px] mx-auto"
                        src="@/assets/images/darkLogo.svg"
                    />
                </button>
            </div>
            <nav
                ref="navigation"
                class="w-full col-span-7 col-end-13 flex justify-end items-center font-light"
            >
                <button
                    class="xl:text-2xl xl:ml-7 xl:py-4 xl:px-8 lg:text-xl lg:ml-5 lg:py-3 lg:px-6 md:text-l md:ml-3 md:py-2 md:px-4 h-fit hover:bg-purple-heart normal-transition rounded-md"
                    v-for="link in links"
                    :class="`${link.sectionId}-button`"
                    :key="link.id"
                    @click="handleScrollTo(link.sectionId)"
                >
                    {{ link.name }}
                </button>
                <div class="flex gap-5 justify-center xl:ml-7 lg:ml-5 md:ml-3">
                    <a
                        v-for="link in socialMedia"
                        :href="link.link"
                        target="_blank"
                        class="p-1 hover:bg-purple-heart rounded-md"
                    >
                        <svgs class="w-4 h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7" :name="link.name"
                    /></a>
                </div>
            </nav>
        </div>
    </div>
</template>
