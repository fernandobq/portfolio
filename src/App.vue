<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="bg-white-lilac w-full">
        <div class="max-w-1440 grid grid-cols-12 mx-auto gap-x-8 py-5">
            <div class="col-span-1 col-end-3">
                <img
                alt="Vue logo"
                class="logo-init"
                src="@/assets/logo.svg"
            />
            </div>
            <nav class="w-full col-span-6 col-end-13 flex justify-center">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>
