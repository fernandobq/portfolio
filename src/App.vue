<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <header class='bg-teal-400 text-white-lilac'>
        <img alt="Vue logo" class="logo-init" src='@/assets/logo.svg' width="125" height="125" />

        <div class="wrapper bg-purple-heart text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <HelloWorld msg="You did it!" />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>