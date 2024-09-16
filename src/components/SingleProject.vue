<script lang="ts" setup>
export type ProjectPropsT = {
    id: number
    name: string
    technologies: string[]
    link: string
    image: string
    workDone: string
    github: string | null
    description: string
}

type ProjectEmitT = {
    (e: 'selectProject', value: ProjectPropsT): void
}

interface ProjectProps {
    project: ProjectPropsT
}
defineProps<ProjectProps>()
defineEmits<ProjectEmitT>()
</script>

<template>
    <article
        :id="project.name"
        @click="$emit('selectProject', project)"
        class="w-full h-[400px] flex items-end px-8 py-5 relative after:content-[''] after:z-[1] after:inset-0 after:rounded-xl after:w-full after:h-full after:absolute lg:cursor-pointer group/card lg:overflow-hidden after:bg-gradient-to-b from-black-0 from-0% to-haiti-90 to-90%"
    >
        <img
            class="rounded-xl absolute h-full w-full object-cover inset-0"
            :src="project.image"
            :alt="project.name"
        />
        <div class="z-10 relative pointer-events-none">
            <p class="text-lg font-bold lg:text-2xl">{{ project.name }}</p>
            <p
                class="text-xs mt-1 lg:text-base lg:opacity-0 lg:max-h-0 lg:mt-0 normal-transition group-hover/card:opacity-100 group-hover/card:max-h-60 group-hover/card:mt-4"
            >
                {{ project.description }}
            </p>
            <div
                class="mt-3 flex flex-wrap gap-2 lg:opacity-0 lg:max-h-0 lg:mt-0 normal-transition group-hover/card:opacity-100 group-hover/card:max-h-60 group-hover/card:mt-4"
            >
                <p
                    v-for="tag in project.technologies"
                    :key="tag"
                    class="text-xs px-3 py-1 lg:text-white-70 md:text-sm md:px-4 md:py-2 bg-meteorite rounded-[40px] border border-white-10"
                >
                    {{ tag }}
                </p>
            </div>
        </div>
    </article>
</template>
