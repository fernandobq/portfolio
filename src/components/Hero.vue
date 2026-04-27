<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const roles    = ['Frontend', 'Backend', 'Fullstack']
const roleIdx  = ref(0)
const prevIdx  = ref(0)
const animKey  = ref(0)

let interval: ReturnType<typeof setInterval>

function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
}

onMounted(() => {
    interval = setInterval(() => {
        prevIdx.value = roleIdx.value
        roleIdx.value = (roleIdx.value + 1) % roles.length
        animKey.value++
    }, 2400)
})

onUnmounted(() => clearInterval(interval))
</script>

<template>
    <section class="hero">
        <div class="wrap">
            <!-- Eyebrow -->
            <div class="eyebrow hero-eyebrow reveal">
                <span class="dot-accent"></span>
                Available for new projects
            </div>

            <!-- Shell prompt -->
            <div class="hero-prompt mono reveal">
                <span class="dim">~/portfolio</span>
                <span class="hero-dollar">&nbsp;$&nbsp;</span>whoami
            </div>

            <!-- Name -->
            <h1 class="hero-name reveal">
                Fernando<br />
                Barraza Quintero<span class="hero-dot">.</span>
            </h1>

            <!-- Role rotator -->
            <div class="hero-role mono reveal">
                <span class="dim">role:</span>
                <span class="role-slot">
                    <Transition name="role-slide" mode="out-in">
                        <span :key="animKey" class="role-word">{{ roles[roleIdx] }}</span>
                    </Transition>
                </span>
                <span class="hero-role-suffix">Software Engineer</span>
            </div>

            <!-- Bio -->
            <p class="hero-bio reveal">
                Six years building products for the web, from
                <span class="ink">Wing</span> (an Alphabet company) to
                <span class="ink">Tebra</span>, <span class="ink">AppFire</span>,
                and <span class="ink">Brownkind</span>. Vue, React, Next, Laravel, PHP, whatever the job calls for.
            </p>

            <!-- CTAs -->
            <div class="hero-ctas reveal">
                <a href="#work" class="btn primary" @click.prevent="scrollTo('work')">See selected work →</a>
                <a href="mailto:febaquidev@gmail.com" class="btn">febaquidev@gmail.com ↗</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    padding-top: 160px;
    padding-bottom: 100px;
}

.hero-eyebrow {
    margin-bottom: 28px;
}
.dot-accent {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 12px var(--accent);
    flex-shrink: 0;
}

.hero-prompt {
    font-size: 14px;
    color: var(--muted);
    margin-bottom: 16px;
}
.hero-dollar { color: var(--accent); }

.hero-name {
    font-family: var(--serif);
    font-size: clamp(56px, 11vw, 168px);
    font-weight: 700;
    line-height: 0.92;
    letter-spacing: -0.04em;
    margin: 0 0 36px;
    color: var(--ink);
}
.hero-dot { color: var(--primary); }

.hero-role {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    font-size: clamp(18px, 2.2vw, 26px);
    margin-bottom: 36px;
}
.role-slot {
    display: inline-flex;
    min-width: 6em;
    color: var(--primary);
    overflow: hidden;
    position: relative;
}
.role-word { display: inline-block; }
.hero-role-suffix { color: var(--ink); }

.hero-bio {
    max-width: 560px;
    font-size: 18px;
    line-height: 1.6;
    color: var(--muted);
    margin: 0 0 40px;
}

.hero-ctas {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

/* Role word transition */
.role-slide-enter-active { animation: slideUp 400ms cubic-bezier(.2,.7,.2,1); }
.role-slide-leave-active  { animation: slideUp 300ms cubic-bezier(.2,.7,.2,1) reverse; }

@media (max-width: 480px) {
    .hero { padding-top: 120px; padding-bottom: 60px; }
    .hero-role { font-size: 16px; }
    .hero-bio { font-size: 16px; }
}
</style>
