<script lang="ts">
import { ref } from 'vue'
import svgs from './utils/svgs.vue'
import Svgs from './utils/svgs.vue'
const window = document.querySelector('html')
const modalClicked = ref<string>('')
interface ProjectProps {
    project: {
        id: number
        name: string
        technologies: string[]
        link: string
        image: string
        workDone: string
        github: string | null
        description: string
    }
}
</script>

<script lang="ts" setup>
defineProps<ProjectProps>()

const toggleModal = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    modalClicked.value = target.id
    window?.classList.toggle('overflow-hidden')
}

const handleModalClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.id === 'outerModal') {
        toggleModal(e)
    }
}
</script>

<template>
    <article
        @click="toggleModal"
        :id="project.name"
        class="w-full h-[400px] flex items-end px-8 py-5 relative after:content-[''] after:z-[1] after:inset-0 after:rounded-xl after:w-full after:h-full after:absolute"
    >
        <img
            class="rounded-xl absolute h-full w-full object-cover inset-0"
            :src="project.image"
            :alt="project.name"
        />
        <div class="z-10 relative pointer-events-none">
            <p class="text-lg font-bold">{{ project.name }}</p>
            <p class="text-sm mt-1">{{ project.description }}</p>
            <div class="mt-3 flex gap-2">
                <p
                    v-for="tag in project.technologies"
                    :key="tag"
                    class="text-xs px-2 py-1 bg-slate-500 rounded-xl"
                >
                    {{ tag }}
                </p>
            </div>
        </div>
        <Teleport to="body">
            <Transition>
                <div
                    @click="handleModalClick"
                    id="outerModal"
                    class="fixed z-40 top-0 left-0 w-screen h-screen after:content-[''] after:z-[1] after:inset-0 after:rounded-xl after:w-full after:h-full after:absolute after:bg-white-lilac-10 after:backdrop-blur-sm"
                    v-if="modalClicked === project.name"
                >
                    <div
                        class="fixed max-h-[60%] overflow-y-auto z-20 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-mobile-modal bg-haiti text-white rounded-xl px-8 py-10"
                    >
                        <button
                            @click="toggleModal"
                            class="w-8 h-8 bg-haiti flex justify-center items-center group/close rounded-md hover:bg-white absolute right-0 top-0 -translate-x-2 translate-y-2"
                        >
                            <div
                                class="w-6 bg-white h-1 group-hover/close:bg-meteorite rounded-md rotate-45 absolute"
                            ></div>
                            <div
                                class="w-6 bg-white h-1 group-hover/close:bg-meteorite rounded-md rotate-[135deg] absolute"
                            ></div>
                        </button>
                        <p class="text-2xl font-bold">{{ project.name }}</p>
                        <p class="text-lg font-medium mt-4">About</p>
                        <p class="text-sm mt-1">{{ project.description }}</p>
                        <img class="rounded-lg mt-4" :src="project.image" :alt="project.name" />
                        <p class="text-lg font-medium mt-4">Role</p>
                        <p class="text-sm mt-1">{{ project.workDone }}</p>
                        <p class="text-lg font-medium mt-4">Technologies</p>
                        <div class="mt-1 flex gap-2">
                            <p
                                v-for="tag in project.technologies"
                                :key="tag"
                                class="text-xs px-2 py-1 bg-slate-500 rounded-xl"
                            >
                                {{ tag }}
                            </p>
                        </div>
                        <p v-if="project.github || project.link" class="text-lg font-medium mt-4">
                            Links
                        </p>
                        <div
                            v-if="project.github || project.link"
                            class="flex gap-3 items-center mt-1"
                        >
                            <a v-if="project.github" :href="project.github" target="_blank">
                                <svgs name="github" class="w-8 h-8" />
                            </a>
                            <a v-if="project.link" :href="project.link" target="_blank">
                                <svgs v-if="project.link" name="world" class="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </article>
</template>

<style scoped>
article:after {
    background: linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 80%);
}
.v-enter-active,
.v-leave-active {
    transition: opacity 500ms ease;
    backdrop-filter: blur(4px) opacity(1);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    backdrop-filter: blur(4px) opacity(0);
}
</style>