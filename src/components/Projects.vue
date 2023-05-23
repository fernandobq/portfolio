<script setup lang="ts">
import SingleProject from './SingleProject.vue'
import projects from '../assets/data/projects.json'
</script>

<template>
    <section class="bg-haiti px-5 py-20 text-white">
        <h3 class="text-3xl font-medium">Projects</h3>
        <div class="mt-10 flex flex-col gap-8">
            <SingleProject v-for="project in projects" :project="project" :key="project.id" />
        </div>
    </section>
</template>
