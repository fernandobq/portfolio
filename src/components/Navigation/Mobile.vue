<script lang="ts">
import { RouterLink } from 'vue-router'
import type { LinkAttributes } from '../../utils/types'
import {ref} from 'vue'

interface NavigationMobileProps {
    links: LinkAttributes[]
}
</script>

<script lang="ts" setup>
defineProps<NavigationMobileProps>()
const menuOverlay = ref()
const handleOpenMenu = () => {
    menuOverlay.value.classList.toggle('translate-x-full')
}
</script>

<template>
    <div class="max-w-1440 grid grid-cols-4 mx-auto gap-x-8 py-5 px-5 items-center">
        <div class="col-span-1 hover:scale-105 transition-all">
            <RouterLink to="/">
                <img alt="Vue logo" class="logo-init" src="@/assets/images/logo.svg" />
            </RouterLink>
        </div>
        <div class="col-span-1 col-end-5">
            <button @click="handleOpenMenu" class="group/hamburguer w-10 h-10 ml-auto grid place-content-center rounded-md hover:bg-meteorite outline-none">
                <div class="hamburguer w-8 ml-auto flex flex-col gap-y-1">
                    <div v-for="index in 3" :key="index" class="w-full bg-meteorite h-1 group-hover/hamburguer:bg-white rounded-md"></div>
                </div>
            </button>
        </div>
        <div ref="menuOverlay" class="menu-options-overley absolute w-screen h-screen bg-meteorite right-0 translate-x-full ease-in-out transition-all duration-300 flex top-0">
            <button class="w-10 h-10 bg-black">Hola</button>
            <div class="w-10 h-10 bg-slate-50"></div>
        </div>
    </div>
</template>
