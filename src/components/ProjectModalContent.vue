<script setup lang='ts'>
import type { ProjectPropsT } from '@/components/SingleProject.vue'
import svgs from './utils/svgs.vue'

interface ProjectModalContentPropsT {
    selectedProject: ProjectPropsT
}
defineProps<ProjectModalContentPropsT>()
</script>

<template>
    <p class="text-2xl font-bold -mt-8 lg:text-3xl xl:text-4xl">
        {{ selectedProject.name }}
    </p>
    <p class="text-lg font-medium mt-4 lg:text-xl lg:mt-8 xl:text-2xl">About</p>
    <p class="text-sm mt-1 lg:text-base lg:mt-2 xl:text-lg">
        {{ selectedProject.description }}
    </p>
    <img
        class="rounded-lg mt-4 lg:mt-8"
        :src="selectedProject.image"
        :alt="selectedProject.name"
    />
    <p class="text-lg font-medium mt-4 lg:text-xl lg:mt-8 xl:text-2xl">Role</p>
    <p class="text-sm mt-1 lg:text-base lg:mt-2 xl:text-lg">
        {{ selectedProject.workDone }}
    </p>
    <p class="text-lg font-medium mt-4 lg:text-xl lg:mt-8 xl:text-2xl">
        Technologies
    </p>
    <div class="mt-1 flex gap-2 lg:mt-2 flex-wrap">
        <p
            v-for="tag in selectedProject.technologies"
            :key="tag"
            class="text-xs px-3 py-1 lg:text-white-70 md:text-sm md:px-4 md:py-2 bg-meteorite rounded-[40px] border border-white-10"
        >
            {{ tag }}
        </p>
    </div>
    <p
        v-if="selectedProject.github || selectedProject.link"
        class="text-lg font-medium mt-4 lg:text-xl lg:mt-8 xl:text-2xl"
    >
        Links
    </p>
    <div
        v-if="selectedProject.github || selectedProject.link"
        class="flex gap-3 items-center mt-1 lg:mt-2"
    >
        <a v-if="selectedProject.github" :href="selectedProject.github" target="_blank">
            <svgs name="github" class="w-8 h-8" />
        </a>
        <a v-if="selectedProject.link" :href="selectedProject.link" target="_blank">
            <svgs v-if="selectedProject.link" name="world" class="w-8 h-8" />
        </a>
    </div>
</template>