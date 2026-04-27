<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue'
import type { ProjectAttributes } from '@/utils/types'

const props = defineProps<{ project: ProjectAttributes | null }>()
const emit  = defineEmits<{ close: [] }>()

function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') emit('close')
}

watch(() => props.project, (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
}, { immediate: true })

onMounted(()  => window.addEventListener('keydown', onKey))
onUnmounted(() => {
    window.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
})
</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="project" class="modal-backdrop" @click="emit('close')">
                <div class="modal-box" @click.stop>
                    <!-- Sticky header -->
                    <div class="modal-header">
                        <span class="mono modal-path dim">
                            case-study/{{ project.name.toLowerCase().replace(/\s+/g, '-') }}
                        </span>
                        <button class="btn ghost modal-close" @click="emit('close')">Close ✕</button>
                    </div>

                    <!-- Body -->
                    <div class="modal-body">
                        <div class="mono modal-client" style="color: var(--primary)">
                            {{ project.client }} · {{ project.year }}
                        </div>
                        <h2 class="modal-title serif">{{ project.name }}</h2>
                        <p class="modal-desc muted">{{ project.description }}</p>

                        <div class="modal-chips">
                            <span v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</span>
                        </div>

                        <div class="modal-image">
                            <img :src="project.image" :alt="project.name" />
                        </div>

                        <div class="modal-work">
                            <div class="eyebrow modal-work-label">What I did</div>
                            <p class="modal-work-text">{{ project.work }}</p>
                        </div>

                        <div class="modal-actions">
                            <a :href="project.link" target="_blank" rel="noreferrer" class="btn primary">
                                Visit live site ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.modal-backdrop {
    position: fixed; inset: 0; z-index: 100;
    padding: 24px;
    background: rgba(11,7,22,0.88);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-box {
    max-width: 1080px; width: 100%;
    max-height: calc(100vh - 48px);
    overflow-y: auto;
    background: var(--bg-elev);
    border-radius: var(--radius);
    border: 1px solid var(--line-strong);
}

.modal-header {
    position: sticky; top: 0; z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 24px;
    border-bottom: 1px solid var(--line);
    background: var(--bg-elev);
}
.modal-path { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; }
.modal-close { padding: 4px 12px; font-size: 12px; }

.modal-body { padding: 40px 48px 56px; }
@media (max-width: 600px) { .modal-body { padding: 24px 20px 40px; } }

.modal-client {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 12px;
}
.modal-title {
    font-size: clamp(40px, 6vw, 72px);
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.03em;
    margin: 0 0 20px;
    color: var(--ink);
}
.modal-desc {
    font-size: 17px;
    line-height: 1.6;
    max-width: 680px;
    margin: 0 0 24px;
}
.modal-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }

.modal-image {
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--line);
    margin-bottom: 40px;
}
.modal-image img { width: 100%; display: block; }

.modal-work {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 24px;
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--line);
}
@media (max-width: 600px) { .modal-work { grid-template-columns: 1fr; gap: 12px; } }

.modal-work-label { align-self: start; padding-top: 2px; }
.modal-work-text { margin: 0; font-size: 16px; line-height: 1.65; color: var(--ink); }

/* Transitions */
.modal-enter-active { animation: fadeIn 250ms; }
.modal-leave-active { animation: fadeIn 200ms reverse; }
.modal-enter-active .modal-box { animation: slideUpMd 350ms cubic-bezier(.2,.7,.2,1); }
</style>
