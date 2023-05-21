<script lang="ts">
import { RouterLink } from 'vue-router'
import type { LinkAttributes } from '../../utils/types'
interface NavigationDesktopProps {
    links: LinkAttributes[]
}
</script>

<script lang="ts" setup>
defineProps<NavigationDesktopProps>()
</script>

<template>
    <div class="max-w-1440 grid grid-cols-12 mx-auto gap-x-8 py-5">
        <div class="col-span-1 col-end-3 hover:scale-105 transition-all">
            <RouterLink to="/">
                <img alt="Vue logo" class="logo-init" src="@/assets/images/logo.svg" />
            </RouterLink>
        </div>
        <nav
            ref="navigation"
            class="w-full col-span-6 col-end-13 flex justify-end items-center font-light"
        >
            <RouterLink
                class="text-2xl mr-10 h-fit hover:text-white transition-all ease-in-out duration-300 py-4 px-8 rounded-md"
                v-for="link in links"
                :key="link.id"
                :to="link.link"
                >{{ link.name }}</RouterLink
            >
        </nav>
    </div>
</template>
