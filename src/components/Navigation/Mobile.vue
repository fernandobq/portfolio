<script lang="ts">
import { RouterLink } from 'vue-router'
import type { LinkAttributes } from '../../utils/types'
import { ref } from 'vue'

interface NavigationMobileProps {
    links: LinkAttributes[]
}
</script>

<script lang="ts" setup>
defineProps<NavigationMobileProps>()
const menuOverlay = ref()
const handleToggleMenu = (delay = false) => {
    if (delay){
        setTimeout(() => {
            menuOverlay.value.classList.toggle('translate-x-full')
        },500)
    } else {
        menuOverlay.value.classList.toggle('translate-x-full')
    }
}
</script>

<template>
    <div class="max-w-1440 grid grid-cols-4 mx-auto gap-x-8 py-5 px-5 items-center">
        <div class="col-span-1 hover:scale-105 transition-all">
            <RouterLink to="/">
                <img alt="Vue logo" class="logo-init w-[90px] mx-auto" src="@/assets/images/logo.svg" />
            </RouterLink>
        </div>
        <div class="col-span-1 col-end-5">
            <button
                @click="handleToggleMenu(false)"
                class="group/hamburguer w-10 h-10 ml-auto grid place-content-center rounded-md hover:bg-meteorite outline-none"
            >
                <div class="hamburguer w-8 ml-auto flex flex-col gap-y-1">
                    <div
                        v-for="index in 3"
                        :key="index"
                        class="w-full bg-meteorite h-1 group-hover/hamburguer:bg-white rounded-md"
                    ></div>
                </div>
            </button>
        </div>
        <div
            ref="menuOverlay"
            class="menu-options-overley absolute w-screen h-screen bg-meteorite right-0 translate-x-full top-0 normal-transition p-5"
        >
            <button
            @click="handleToggleMenu(false)"
                class="w-10 h-10 bg-meteorite relative flex justify-center items-center group/close rounded-md hover:bg-white ml-auto"
            >
                <div
                    class="w-8 bg-white h-1 group-hover/close:bg-meteorite rounded-md rotate-45 absolute"
                ></div>
                <div
                    class="w-8 bg-white h-1 group-hover/close:bg-meteorite rounded-md rotate-[135deg] absolute"
                ></div>
            </button>
            <div class="flex flex-col mt-6">
                <RouterLink
                @click="handleToggleMenu(true)"
                class="text-2xl mr-10 h-fit hover:text-white normal-transition py-4 px-8 rounded-md text-center w-full text-white"
                v-for="link in links"
                :key="link.id"
                :to="link.link"
                >{{ link.name }}
                </RouterLink>
            </div>
        </div>
    </div>
</template>
