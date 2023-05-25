<script lang="ts">
import type { LinkAttributes } from '../../utils/types'
import { ref } from 'vue'
import svgs from '../utils/svgs.vue'

interface NavigationMobileProps {
    links: LinkAttributes[]
}
</script>

<script lang="ts" setup>
import useScroll from '@/utils/useScroll'
const { handleScrollTo, scrollToTop } = useScroll()
defineProps<NavigationMobileProps>()
const menuOverlay = ref()
const window = document.querySelector('html')
const handleToggleMenu = (delay = false, sectionId = '') => {
    window?.classList.toggle('overflow-hidden')
    menuOverlay.value.classList.toggle('translate-x-full')
    if (delay) {
        setTimeout(() => {
            if (sectionId) {
                handleScrollTo(sectionId, 140)
            }
        }, 300)
    }
}
</script>

<template>
    <div
        class="backdrop-blur-md bg-white-lilac-10 w-mobile-modal grid grid-cols-4 mx-auto gap-x-8 py-5 px-5 items-center rounded-xl relative"
    >
        <div class="col-span-1 hover:scale-105 transition-all">
            <button @click="scrollToTop()">
                <img
                    alt="Vue logo"
                    class="logo-init w-[90px] mx-auto"
                    src="@/assets/images/darkLogo.svg"
                />
            </button>
        </div>
        <div class="col-span-1 col-end-5">
            <button
                @click="handleToggleMenu(false)"
                class="group/hamburguer w-10 h-10 ml-auto grid place-content-center rounded-md hover:bg-white outline-none"
            >
                <div class="hamburguer w-8 ml-auto flex flex-col gap-y-1">
                    <div
                        v-for="index in 3"
                        :key="index"
                        class="w-full bg-meteorite h-1 group-hover/hamburguer:bg-meteorite rounded-md"
                    ></div>
                </div>
            </button>
        </div>
        <div
            ref="menuOverlay"
            class="menu-options-overley absolute w-screen h-screen bg-haiti right-[-20px] translate-x-full top-[-20px] normal-transition p-5"
        >
            <button
                @click="handleToggleMenu(false)"
                class="w-10 h-10 bg-haiti relative flex justify-center items-center group/close rounded-md hover:bg-white ml-auto"
            >
                <div
                    class="w-8 bg-white h-1 group-hover/close:bg-meteorite rounded-md rotate-45 absolute"
                ></div>
                <div
                    class="w-8 bg-white h-1 group-hover/close:bg-meteorite rounded-md rotate-[135deg] absolute"
                ></div>
            </button>
            <div class="flex flex-col mt-6">
                <button
                    @click="handleToggleMenu(true, link.sectionId)"
                    class="text-2xl mr-10 h-fit hover:bg-purple-heart focus:bg-purple-heart active:bg-purple-heart normal-transition py-4 px-8 rounded-md text-center w-full text-white"
                    v-for="link in links"
                    :key="link.id"
                >
                    {{ link.name }}
                </button>
                <div class="flex gap-5 justify-center absolute bottom-20 left-1/2 -translate-x-1/2">
                    <a
                        href="https://www.linkedin.com/in/fernando-barraza-quintero-76b974197/"
                        target="_blank"
                        ><svgs class="w-10 h-10" name="linkedin" />
                    </a>
                    <a href="https://github.com/fernandobq" target="_blank"
                        ><svgs class="w-10 h-10" name="github"
                    /></a>
                    <a href="mailto:febaqui1008@gmail.com"
                        ><svgs class="w-10 h-10" name="email"
                    /></a>
                </div>
            </div>
        </div>
    </div>
</template>
