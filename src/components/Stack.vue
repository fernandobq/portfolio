<script setup lang="ts">
import { ref, computed } from 'vue'
import stackData from '@/assets/data/technologies.json'
import type { TechnologyAttributes } from '@/utils/types'

const CATS = ['Languages', 'Frontend', 'Styling', 'Animation', 'Backend', 'Data', 'CMS', 'Tools']
const active = ref('all')
const items  = stackData as TechnologyAttributes[]

const visible = computed(() =>
    active.value === 'all' ? items : items.filter(s => s.cat === active.value)
)
</script>

<template>
    <!-- Marquee strip -->
    <div class="marquee-wrap reveal">
        <div class="marquee">
            <div class="marquee-track" aria-hidden="false">
                <span v-for="s in items" :key="s.name + '-a'" class="marquee-item serif">
                    {{ s.name }}<span class="marquee-dot">✦</span>
                </span>
            </div>
            <div class="marquee-track" aria-hidden="true">
                <span v-for="s in items" :key="s.name + '-b'" class="marquee-item serif">
                    {{ s.name }}<span class="marquee-dot">✦</span>
                </span>
            </div>
        </div>
    </div>

    <!-- Filter tabs -->
    <div class="stack-filters reveal">
        <button
            :class="['chip', { solid: active === 'all' }]"
            @click="active = 'all'"
        >All ({{ items.length }})</button>
        <button
            v-for="cat in CATS"
            :key="cat"
            :class="['chip', { solid: active === cat }]"
            @click="active = cat"
        >{{ cat }}</button>
    </div>

    <!-- Card grid -->
    <TransitionGroup tag="div" name="card" class="stack-grid">
        <div
            v-for="s in visible"
            :key="s.name"
            class="stack-card"
        >
            <div class="stack-card-head">
                <span class="stack-name serif">{{ s.name }}</span>
                <span class="stack-since mono dim">since {{ s.since }}</span>
            </div>
            <div class="stack-cat mono">{{ s.cat }}</div>
            <p class="stack-blurb muted">{{ s.blurb }}</p>
        </div>
    </TransitionGroup>
</template>

<style scoped>
.marquee-wrap {
    margin-bottom: 64px;
    padding: 20px 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
}
.marquee-item {
    font-size: 30px;
    color: var(--muted);
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 48px;
    font-weight: 400;
}
.marquee-dot { color: var(--primary); }

.stack-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 32px;
}
@media (max-width: 720px) {
    .stack-filters {
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        padding-bottom: 4px;
    }
    .stack-filters::-webkit-scrollbar { display: none; }
    .stack-filters .chip { flex-shrink: 0; }
}

.stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
}

.stack-card {
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 20px;
    background: var(--bg-elev);
    transition: border-color 200ms, transform 200ms;
    cursor: default;
}
.stack-card:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
}

.stack-card-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 6px;
}
.stack-name { font-size: 20px; font-weight: 600; line-height: 1; }
.stack-since { font-size: 11px; }

.stack-cat {
    font-size: 10px;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 12px;
}

.stack-blurb {
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
}

/* Filter transition */
.card-enter-active {
    transition: opacity 250ms ease, transform 250ms cubic-bezier(.2,.7,.2,1);
}
.card-leave-active {
    transition: opacity 150ms ease, transform 150ms ease;
    position: absolute;
}
.card-enter-from { opacity: 0; transform: translateY(10px); }
.card-leave-to   { opacity: 0; transform: translateY(-6px); }
.card-move       { transition: transform 300ms cubic-bezier(.2,.7,.2,1); }
</style>
