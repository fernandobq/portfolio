<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Logo from '@/components/Logo.vue'

const scrolled  = ref(false)
const menuOpen  = ref(false)

const sections = [
    { id: 'about',   label: 'About',   num: '01' },
    { id: 'tech',    label: 'Stack',   num: '02' },
    { id: 'work',    label: 'Work',    num: '03' },
    { id: 'contact', label: 'Contact', num: '04' },
]

function onScroll() { scrolled.value = window.scrollY > 20 }

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }

function scrollTo(id: string) {
    menuOpen.value = false
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
}

onMounted(()  => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
    <header class="site-header" :class="{ scrolled }">
        <div class="wrap nav-inner">
            <a href="#" class="logo-link" @click.prevent="scrollToTop">
                <Logo />
            </a>

            <!-- Desktop nav -->
            <nav class="desktop-nav">
                <a
                    v-for="(s, i) in sections"
                    :key="s.id"
                    href="#"
                    class="nav-link"
                    @click.prevent="scrollTo(s.id)"
                >
                    <span class="nav-num">0{{ i + 1 }}</span>{{ s.label }}
                </a>
                <a href="mailto:febaquidev@gmail.com" class="btn primary nav-cta">Let's talk →</a>
            </nav>

            <!-- Hamburger (mobile) -->
            <button
                class="hamburger"
                :class="{ open: menuOpen }"
                aria-label="Toggle menu"
                @click="menuOpen = !menuOpen"
            >
                <span /><span /><span />
            </button>
        </div>

        <!-- Mobile dropdown -->
        <Transition name="mobile-menu">
            <div v-if="menuOpen" class="mobile-menu">
                <a
                    v-for="(s, i) in sections"
                    :key="s.id"
                    href="#"
                    class="mobile-link"
                    @click.prevent="scrollTo(s.id)"
                >
                    <span class="nav-num">0{{ i + 1 }}</span>{{ s.label }}
                </a>
                <a href="mailto:febaquidev@gmail.com" class="btn primary mobile-cta">Let's talk →</a>
            </div>
        </Transition>
    </header>
</template>

<style scoped>
.site-header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 50;
    padding: 20px 0;
    border-bottom: 1px solid transparent;
    transition: padding 250ms cubic-bezier(.2,.7,.2,1),
                background 250ms cubic-bezier(.2,.7,.2,1),
                border-color 250ms;
}
.site-header.scrolled {
    padding: 12px 0;
    backdrop-filter: blur(16px) saturate(140%);
    -webkit-backdrop-filter: blur(16px) saturate(140%);
    background: color-mix(in srgb, var(--bg) 70%, transparent);
    border-bottom-color: var(--line);
}

.nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
}

.desktop-nav {
    display: flex;
    align-items: center;
    gap: 4px;
}
@media (max-width: 720px) { .desktop-nav { display: none; } }

.nav-link {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--muted);
    padding: 8px 14px;
    text-decoration: none;
    border-radius: 999px;
    transition: color 200ms, background 200ms;
    display: flex;
    align-items: center;
    gap: 6px;
}
.nav-link:hover { color: var(--ink); background: var(--line); }
.nav-num { color: var(--dim); }

.nav-cta { margin-left: 12px; padding: 8px 14px; font-size: 12px; }

/* Hamburger */
.hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 22px;
    height: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
}
@media (max-width: 720px) { .hamburger { display: flex; } }

.hamburger span {
    display: block;
    width: 100%;
    height: 1.5px;
    background: var(--ink);
    border-radius: 2px;
    transform-origin: center;
    transition: transform 250ms, opacity 250ms;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px 20px 20px;
    background: color-mix(in srgb, var(--bg) 95%, transparent);
    border-top: 1px solid var(--line);
}
.mobile-link {
    font-family: var(--mono);
    font-size: 14px;
    color: var(--muted);
    text-decoration: none;
    padding: 12px 0;
    border-bottom: 1px solid var(--line);
    display: flex;
    align-items: center;
    gap: 12px;
    transition: color 200ms;
}
.mobile-link:hover { color: var(--ink); }
.mobile-cta { margin-top: 12px; justify-content: center; }

/* Transition */
.mobile-menu-enter-active, .mobile-menu-leave-active { transition: opacity 200ms, transform 200ms; }
.mobile-menu-enter-from, .mobile-menu-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
