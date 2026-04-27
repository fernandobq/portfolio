<script setup lang="ts">
import { ref } from 'vue'
import Hero         from '@/components/Hero.vue'
import About        from '@/components/About.vue'
import Stack        from '@/components/Stack.vue'
import Projects     from '@/components/Projects.vue'
import ProjectModal from '@/components/ProjectModal.vue'
import Footer       from '@/components/Footer/Footer.vue'
import projectsData from '@/assets/data/projects.json'
import techData     from '@/assets/data/technologies.json'
import type { ProjectAttributes } from '@/utils/types'

const modalProject = ref<ProjectAttributes | null>(null)
const projectCount = projectsData.length
const techCount    = techData.length
</script>

<template>
    <!-- (01) Hero -->
    <Hero />

    <!-- (02) About -->
    <section id="about" class="section-wrapper">
        <div class="wrap">
            <div class="section-head reveal">
                <span class="num">(02)</span>
                <h2>About<em>.</em></h2>
                <span class="num">/about</span>
            </div>
            <About />
        </div>
    </section>

    <!-- (03) Stack -->
    <section id="tech" class="section-wrapper">
        <div class="wrap">
            <div class="section-head reveal">
                <span class="num">(03)</span>
                <h2>The <em>stack</em>.</h2>
                <span class="num">{{ techCount }} tools</span>
            </div>
            <Stack />
        </div>
    </section>

    <!-- (04) Work -->
    <section id="work" class="section-wrapper">
        <div class="wrap">
            <div class="section-head reveal">
                <span class="num">(04)</span>
                <h2>Selected <em>work</em>.</h2>
                <span class="num">{{ projectCount }} projects</span>
            </div>
            <Projects @open-project="modalProject = $event" />
        </div>
    </section>

    <!-- (05) Contact / Footer -->
    <section id="contact">
        <Footer />
    </section>

    <!-- Modal -->
    <ProjectModal :project="modalProject" @close="modalProject = null" />
</template>
