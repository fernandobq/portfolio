<script lang="ts">
import { RouterLink } from 'vue-router'
import type { LinkAttributes } from '../../utils/types'
interface NavigationMobileProps {
    links: LinkAttributes[]
}
</script>

<script lang="ts" setup>
defineProps<NavigationMobileProps>()
</script>

<template>
    <div class="max-w-1440 grid grid-cols-12 mx-auto gap-x-8 py-5">
        <div class="col-span-1 col-end-3 hover:scale-105 transition-all">
            <RouterLink to="/">
                <img alt="Vue logo" class="logo-init" src="@/assets/images/logo.svg" />
            </RouterLink>
        </div>
    </div>
</template>
