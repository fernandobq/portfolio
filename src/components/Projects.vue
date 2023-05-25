<script setup lang="ts">
import SingleProject from './SingleProject.vue'
import projects from '../assets/data/projects.json'
</script>

<template>
    <section class="bg-haiti text-white projects-section">
        <div class="max-w-1440 mx-auto px-5 py-20 md:px-20">
            <h3 id="projects" class="text-3xl lg:text-5xl font-medium">Projects</h3>
            <div class="mt-10 flex flex-col gap-8 lg:grid lg:grid-cols-4">
                <SingleProject
                    v-for="project in projects"
                    :project="project"
                    :key="project.id"
                    class="lg:col-span-2"
                />
            </div>
        </div>
    </section>
</template>
