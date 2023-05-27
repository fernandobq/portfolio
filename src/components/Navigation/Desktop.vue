<script lang="ts">
import type { LinkAttributes } from '../../utils/types'
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
            class="backdrop-blur-xl bg-white-lilac-10 gap-x-8 py-4 px-8 rounded-xl text-white flex justify-between"
        >
            <div class="hover:scale-105 transition-all">
                <button @click="scrollToTop()">
                    <img
                        alt="Vue logo"
                        class="logo-init h-[40px]"
                        src="@/assets/images/darkLogo.svg"
                    />
                </button>
            </div>
            <nav ref="navigation" class="flex justify-end items-center font-light">
                <button
                    class="text-base ml-2 py-2 px-4 h-fit hover:bg-purple-heart normal-transition rounded-md"
                    v-for="link in links"
                    :class="`${link.sectionId}-button`"
                    :key="link.id"
                    @click="handleScrollTo(link.sectionId)"
                >
                    {{ link.name }}
                </button>
            </nav>
        </div>
    </div>
</template>
