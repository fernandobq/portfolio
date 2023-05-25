<script lang="ts">
import type { LinkAttributes, SocialMediaAttributes } from '../../utils/types'
import svgs from '@/components/utils/svgs.vue'
import { onMounted, onUnmounted } from 'vue'
interface NavigationDesktopProps {
    links: LinkAttributes[]
    socialMedia: SocialMediaAttributes[]
}
</script>

<script lang="ts" setup>
import useScroll from '@/utils/useScroll'
const { handleScrollTo, scrollToTop } = useScroll()
defineProps<NavigationDesktopProps>()

const updateScroll = () => {}

onMounted(() => {
    window.addEventListener('scroll', updateScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
})
</script>

<template>
    <div
        class="max-w-1440 grid grid-cols-4 md:grid-cols-12 mx-auto gap-x-8 p-10 px-10 lg:px-20 md:pt-20 md:pb-10"
    >
        <div
            class="md:col-span-2 md:col-start-1 col-span-4 hover:scale-105 transition-all h-fit self-center flex flex-col items-center"
        >
            <button class="w-fit" @click="scrollToTop()">
                <svgs name="greenLogo" class="logo-init w-[90px] mx-auto h-fit" />
            </button>
            <p class="text-center mt-4 text-sm">Fernando Barraza Quintero</p>
        </div>
        <nav
            ref="navigation"
            class="w-full md:col-span-7 md:col-end-13 md:flex-row md:justify-end md:mt-0 col-span-4 flex flex-col-reverse items-center font-light text-center mt-10"
        >
            <ul class="inner-links flex flex-col gap-y-5">
                <li v-for="link in links" :key="link.id">
                    <button
                        class="text-lg py-2 px-4 rounded-md hover:text-green normal-transition"
                        @click="handleScrollTo(link.sectionId)"
                    >
                        {{ link.name }}
                    </button>
                </li>
            </ul>
            <div class="separator md:h-full md:w-[1px] bg-white md:mx-10 h-[1px] w-1/2 my-5"></div>
            <ul class="social-media flex gap-x-6">
                <li v-for="link in socialMedia" :key="link.id" class="group/social">
                    <a :href="link.link" target="_blank">
                        <svgs class="w-10 h-10" :name="link.name" hover-color="green" />
                    </a>
                </li>
            </ul>
        </nav>
        <p
            class="md:col-end-13 md:col-span-5 col-span-4 text-right md:mt-20 mt-10 md:text-sm text-xs"
        >
            © 2023 febaqui. ALL RIGHTS RESERVED
        </p>
    </div>
</template>
