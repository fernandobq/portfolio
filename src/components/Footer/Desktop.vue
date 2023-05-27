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
</script>

<template>
    <div class="max-w-1440 mx-auto py-16 px-10 flex flex-col items-center">
        <div class="hover:scale-105 transition-all h-fit flex flex-col items-center">
            <button class="w-fit" @click="scrollToTop()">
                <img
                    src="@/assets/images/darkLogo.svg"
                    alt="darkLogo"
                    class="logo-init h-[40px] mx-auto"
                />
            </button>
        </div>

        <ul class="social-media flex gap-x-6 mt-6">
            <li v-for="link in socialMedia" :key="link.id" class="group/social">
                <a :href="link.link" target="_blank">
                    <svgs
                        class="w-6 h-6 opacity-50 group-hover/social:opacity-100"
                        :name="`${link.name}-square`"
                    />
                </a>
            </li>
        </ul>
        <p class="mt-8 text-white-50">Fernando Barraza Quintero</p>
        <p class="text-white-50 mt-4">© 2023 febaqui. ALL RIGHTS RESERVED</p>
    </div>
</template>
