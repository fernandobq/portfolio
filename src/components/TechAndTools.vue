<script setup lang="ts">
import { ref } from 'vue'
import technologies from '@/assets/data/technologies.json'
import svgs from './utils/svgs.vue'

const pastOpenModal = ref<HTMLElement | null>()

const halfOfArray = Math.ceil(technologies.length / 2)

const toggleModal = (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement
    const description = targetElement.nextSibling as HTMLElement

    if (pastOpenModal.value) {
        pastOpenModal.value.classList.remove('open-modal')
        const pastSiblingElement = pastOpenModal.value.previousElementSibling as HTMLElement
        pastSiblingElement.children[pastSiblingElement.children.length - 1].classList.remove(
            'open-button'
        )

        if (pastOpenModal.value.dataset.name !== targetElement.dataset.name) {
            ;(description as HTMLElement).classList.add('open-modal')
            targetElement.children[targetElement.children.length - 1].classList.add('open-button')
            pastOpenModal.value = description
        } else {
            pastOpenModal.value = null
        }
    } else {
        ;(description as HTMLElement).classList.add('open-modal')
        targetElement.children[targetElement.children.length - 1].classList.add('open-button')
        pastOpenModal.value = description
    }
}
</script>

<template>
    <section
        class="bg-haiti text-white xl:mt-[320px] lg:mt-[270px] md:mt-[220px] mt-[150px] tech-section"
    >
        <div class="max-w-1440 mx-auto px-5 md:px-20">
            <h3 id="tech" class="text-3xl lg:text-5xl font-medium">
                Languages, Technolgies & Tools
            </h3>
            <div
                class="flex flex-col mt-5 md:mt-16 md:flex-row relative md:after:content-[''] md:after:h-full md:after:absolute md:after:w-[3px] md:after:bg-white md:after:top-0 md:after:right-1/2 md:after:translate-x-1/2"
            >
                <div class="firstColumn">
                    <div
                        class="w-full border-b px-3 py-5 normal-transition"
                        v-for="tech in technologies.slice(0, halfOfArray)"
                        :key="tech.name"
                    >
                        <div
                            class="flex items-center gap-2 cursor-pointer"
                            @click="toggleModal"
                            :data-name="tech.name"
                        >
                            <div
                                v-for="icon in tech.icons"
                                :key="icon"
                                class="flex items-center w-10 h-10 pointer-events-none"
                            >
                                <svgs class="w-full h-auto" :name="icon" />
                            </div>
                            <p class="text-lg font-medium pointer-events-none">
                                {{ tech.name }}
                            </p>
                            <button
                                class="w-5 h-5 relative ml-auto flex items-center pointer-events-none"
                            >
                                <div class="h-px bg-white w-full absolute moving-part"></div>
                                <div class="h-px bg-white w-full absolute"></div>
                            </button>
                        </div>
                        <div
                            class="max-h-0 opacity-0 pointer-events-none normal-transition flex flex-col gap-5"
                            :data-name="tech.name"
                        >
                            <div
                                class="text-xs px-3 py-1 lg:text-white-70 md:text-sm md:px-4 md:py-2 bg-meteorite rounded-[40px] border border-white-10 w-fit"
                            >
                                Since {{ tech.yearsOfExperience }}
                            </div>
                            <p class="pr-10">{{ tech.description }}</p>
                        </div>
                    </div>
                </div>
                <div class="secondColumn">
                    <div
                        class="w-full border-b px-3 py-5 normal-transition"
                        v-for="tech in technologies.slice(halfOfArray)"
                        :key="tech.name"
                    >
                        <div
                            class="flex items-center gap-2 cursor-pointer"
                            @click="toggleModal"
                            :data-name="tech.name"
                        >
                            <div
                                v-for="icon in tech.icons"
                                :key="icon"
                                class="flex items-center w-10 h-10 pointer-events-none"
                            >
                                <svgs class="w-full h-auto" :name="icon" />
                            </div>
                            <p class="text-lg font-medium pointer-events-none">
                                {{ tech.name }}
                            </p>
                            <button
                                class="w-5 h-5 relative ml-auto flex items-center pointer-events-none group"
                            >
                                <div class="h-px bg-white w-full absolute moving-part"></div>
                                <div class="h-px bg-white w-full absolute"></div>
                            </button>
                        </div>
                        <div
                            class="max-h-0 opacity-0 pointer-events-none normal-transition flex flex-col gap-5 px-5"
                            :data-name="tech.name"
                        >
                            <div
                                class="text-xs px-3 py-1 lg:text-white-70 md:text-sm md:px-4 md:py-2 bg-meteorite rounded-[40px] border border-white-10 w-fit"
                            >
                                Since {{ tech.yearsOfExperience }}
                            </div>
                            <p>{{ tech.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
div,
button {
    -webkit-tap-highlight-color: transparent;
}

.open-button .moving-part {
    transform: rotate(0deg);
}

.moving-part {
    transition: 300ms ease-in-out;
    transform: rotate(90deg);
}
</style>
