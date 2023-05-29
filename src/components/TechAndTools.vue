<script setup lang="ts">
import { ref } from 'vue'
import technologies from '@/assets/data/technologies.json'
import svgs from './utils/svgs.vue'
import Modal from './Modal.vue'
import type { TechnologyAttributes } from '@/utils/types'

const openModal = ref<boolean>(false)
const selectedTechnologie = ref<TechnologyAttributes>()

const handleOpenModal = (technologie: TechnologyAttributes) => {
    selectedTechnologie.value = technologie
    openModal.value = true
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
            <div class="grid mt-14 relative grid-cols-4 gap-x-4 gap-y-8 md:grid-cols-5 lg:grid-cols-8">
                <div
                    class="normal-transition col-span-1"
                    v-for="tech in technologies"
                    :key="tech.name"
                    @click="handleOpenModal(tech)"
                >
                    <div class="flex items-center gap-2 cursor-pointer flex-col w-fit mx-auto hover:bg-white-10 rounded-md p-1 md:p-2 lg:p-3 xl:p-4 normal-transition">
                        <div class="flex items-center w-10 h-10 pointer-events-none md:w-12 md:h-12 lg:w-14 lg:h-14">
                            <svgs class="w-full h-full" :name="tech.icon" />
                        </div>
                        <p>{{ tech.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <Modal
            :open-modal="openModal"
            modal-classes="max-h-[60%] overflow-y-auto top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-mobile-modal bg-haiti text-white rounded-xl px-8 py-10 md:w-[500px] md:max-h-[70%] lg:w-[650px] lg:px-12 lg:py-14 xl:max-h-[80%] xl:px-14 xl:py-16"
            @closeModal="() => (openModal = false)"
        >
            <div v-if="selectedTechnologie">
                <div class="flex items-center gap-5">
                    <div class="flex items-center w-10 h-10 pointer-events-non md:w-14 md:h-14 lg:w-16 lg:h-16">
                        <svgs class="w-full h-full" :name="selectedTechnologie.icon" />
                    </div>
                    <h3 class="text-2xl font-medium">
                        {{ selectedTechnologie.name }}
                    </h3>
                </div>
                <div class="mt-5">
                    <p
                        class="text-xs px-3 py-1 lg:text-white-70 md:text-sm md:px-4 md:py-2 bg-meteorite rounded-[40px] border border-white-10 w-fit"
                    >
                        Since {{ selectedTechnologie.yearsOfExperience }}
                    </p>
                    <p class="mt-5 text-lg">{{ selectedTechnologie.description }}</p>
                </div>
            </div>
        </Modal>
    </section>
</template>

<style scoped>
div,
button {
    -webkit-tap-highlight-color: transparent;
}
</style>
