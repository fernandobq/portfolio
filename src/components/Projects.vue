<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/Modal.vue'
import SingleProject from './SingleProject.vue'
import projects from '../assets/data/projects.json'
import type { ProjectPropsT } from '@/components/SingleProject.vue'
import ProjectModalContent from '@/components/ProjectModalContent.vue'

const openModal = ref<boolean>(false)
const selectedProject = ref<ProjectPropsT>()

const handleOpenModal = (technology: ProjectPropsT) => {
    selectedProject.value = technology
    openModal.value = true
}
</script>

<template>
    <section
        class="bg-haiti text-white projects-section xl:mt-[320px] lg:mt-[270px] md:mt-[220px] mt-[150px]"
    >
        <div class="max-w-1440 mx-auto px-5 md:px-20">
            <h3 id="projects" class="text-3xl lg:text-5xl font-medium">Projects</h3>
            <div class="mt-10 flex flex-col gap-7 lg:grid lg:grid-cols-4">
                <SingleProject
                    v-for="project in projects"
                    :project="project"
                    :key="project.id"
                    class="lg:col-span-2"
                    @select-project="(val) => handleOpenModal(val)"
                />
            </div>
        </div>
        <Modal
            :open-modal="openModal"
            modal-classes="max-h-[60%] overflow-y-auto top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-mobile-modal bg-haiti text-white rounded-xl px-8 py-10 md:w-[500px] md:max-h-[70%] lg:w-[650px] lg:px-12 lg:py-14 xl:max-h-[80%] xl:px-14 xl:py-16"
            @closeModal="() => (openModal = false)"
        >
            <div v-if="selectedProject">
                <ProjectModalContent :selected-project="selectedProject" />
            </div>
        </Modal>
    </section>
</template>
