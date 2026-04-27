<script setup lang="ts">
import projectsData from '@/assets/data/projects.json'
import type { ProjectAttributes } from '@/utils/types'

const emit   = defineEmits<{ 'open-project': [project: ProjectAttributes] }>()
const items  = projectsData as ProjectAttributes[]

const spans = [
    { col: 'span 8', row: 'span 2' },
    { col: 'span 4', row: 'span 1' },
    { col: 'span 4', row: 'span 1' },
    { col: 'span 6', row: 'span 1' },
    { col: 'span 6', row: 'span 2' },
    { col: 'span 6', row: 'span 1' },
    { col: 'span 4', row: 'span 1' },
    { col: 'span 4', row: 'span 1' },
    { col: 'span 4', row: 'span 1' },
]

const isLarge = (colSpan: string) => colSpan === 'span 8' || colSpan === 'span 6'
</script>

<template>
    <div class="bento-grid">
        <button
            v-for="(p, i) in items"
            :key="p.id"
            class="bento-card"
            :style="{
                gridColumn: spans[i % spans.length].col,
                gridRow:    spans[i % spans.length].row,
            }"
            @click="emit('open-project', p)"
        >
            <img
                :src="p.image"
                :alt="p.name"
                class="bento-img"
            />
            <div class="bento-gradient"></div>
            <div class="bento-content">
                <div class="bento-meta mono">0{{ i + 1 }} / {{ p.year }}</div>
                <div class="bento-foot">
                    <div class="bento-name serif" :class="{ large: isLarge(spans[i % spans.length].col) }">
                        {{ p.name }}
                    </div>
                    <div class="bento-tags mono">{{ p.tags.slice(0, 3).join(' · ') }}</div>
                </div>
            </div>
        </button>
    </div>
</template>

<style scoped>
.bento-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 190px;
    gap: 14px;
}

.bento-card {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius);
    border: 1px solid var(--line-strong);
    background: var(--bg-elev);
    cursor: pointer;
    padding: 0;
    color: inherit;
    text-align: left;
    transition: transform 400ms cubic-bezier(.2,.7,.2,1);
}
.bento-card:hover { transform: translateY(-3px); }

.bento-img {
    position: absolute;
    inset: 0; width: 100%; height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
    transition: transform 600ms cubic-bezier(.2,.7,.2,1), filter 300ms;
}
.bento-card:hover .bento-img {
    transform: scale(1.05);
    filter: brightness(0.65);
}

.bento-gradient {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(11,7,22,0.85) 100%);
}

.bento-content {
    position: absolute; inset: 0;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.bento-meta {
    font-size: 10px;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.bento-name {
    font-size: 22px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    margin-bottom: 5px;
}
.bento-name.large { font-size: 34px; }

.bento-tags {
    font-size: 11px;
    color: rgba(255,255,255,0.6);
}

/* Responsive: collapse to 2 columns on mobile */
@media (max-width: 720px) {
    .bento-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 160px;
    }
    .bento-card {
        grid-column: span 1 !important;
        grid-row:    span 1 !important;
    }
    .bento-name.large { font-size: 22px; }
}
@media (max-width: 440px) {
    .bento-grid { grid-template-columns: 1fr; }
}
</style>
