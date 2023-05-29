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
        <Teleport to="body">
            <Transition>
                <div
                    @click="handleModalClick"
                    id="outerModal"
                    class="fixed z-40 top-0 left-0 w-screen h-screen after:content-[''] after:z-[1] after:inset-0 after:rounded-xl after:w-full after:h-full after:absolute after:bg-white-lilac-10 after:backdrop-blur-sm"
                    v-if="modalClicked === project.name"
                >
                    <div
                        class="modal-card fixed z-20 max-h-[60%] overflow-y-auto top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-mobile-modal bg-haiti text-white rounded-xl px-8 py-10 md:w-[500px] md:max-h-[70% lg:w-[650px] lg:px-12 lg:py-14 xl:w-[800px] xl:max-h-[80%] xl:px-14 xl:py-16"
                    >
                        <button
                            @click="toggleModal"
                            class="w-8 h-8 bg-haiti flex justify-center items-center group/close rounded-md hover:bg-white sticky top-0 ml-auto translate-x-4 -translate-y-4 lg:translate-x-6 lg:-translate-y-6 xl:translate-x-8 xl:-translate-y-8"
                        >
                            <div
                                class="w-6 bg-white h-1 group-hover/close:bg-meteorite rounded-md rotate-45 absolute"
                            ></div>
                            <div
                                class="w-6 bg-white h-1 group-hover/close:bg-meteorite rounded-md rotate-[135deg] absolute"
                            ></div>
                        </button>
                        <p class="text-2xl font-bold -mt-8 lg:text-3xl xl:text-4xl">
                            {{ project.name }}
                        </p>
                        <p class="text-lg font-medium mt-4 lg:text-xl lg:mt-8 xl:text-2xl">About</p>
                        <p class="text-sm mt-1 lg:text-base lg:mt-2 xl:text-lg">
                            {{ project.description }}
                        </p>
                        <img
                            class="rounded-lg mt-4 lg:mt-8"
                            :src="project.image"
                            :alt="project.name"
                        />
                        <p class="text-lg font-medium mt-4 lg:text-xl lg:mt-8 xl:text-2xl">Role</p>
                        <p class="text-sm mt-1 lg:text-base lg:mt-2 xl:text-lg">
                            {{ project.workDone }}
                        </p>
                        <p class="text-lg font-medium mt-4 lg:text-xl lg:mt-8 xl:text-2xl">
                            Technologies
                        </p>
                        <div class="mt-1 flex gap-2 lg:mt-2">
                            <p
                                v-for="tag in project.technologies"
                                :key="tag"
                                class="text-xs px-3 py-1 lg:text-white-70 md:text-sm md:px-4 md:py-2 bg-meteorite rounded-[40px] border border-white-10"
                            >
                                {{ tag }}
                            </p>
                        </div>
                        <p
                            v-if="project.github || project.link"
                            class="text-lg font-medium mt-4 lg:text-xl lg:mt-8 xl:text-2xl"
                        >
                            Links
                        </p>
                        <div
                            v-if="project.github || project.link"
                            class="flex gap-3 items-center mt-1 lg:mt-2"
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

.modal-card::-webkit-scrollbar {
    display: none;
}

.modal-card {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
