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
    <div class="max-w-1440 grid grid-cols-12 mx-auto gap-x-8 py-5 px-10 lg:px-20">
        <div class="col-span-2 col-start-1 hover:scale-105 transition-all">
            <RouterLink class="w-fit" to="/">
                <img
                    alt="Vue logo"
                    class="logo-init w-[90px] mx-auto"
                    src="@/assets/images/logo.svg"
                />
            </RouterLink>
        </div>
        <nav
            ref="navigation"
            class="w-full col-span-7 col-end-13 flex justify-end items-center font-light"
        >
            <RouterLink
                class="xl:text-2xl xl:ml-7 xl:py-4 xl:px-8 lg:text-xl lg:ml-5 lg:py-3 lg:px-6 md:text-l md:ml-3 md:py-2 md:px-4 h-fit hover:text-white normal-transition rounded-md"
                v-for="(link, index) in links"
                :key="link.id"
                :to="link.link"
                >{{ link.name }}</RouterLink
            >
        </nav>
    </div>
</template>
