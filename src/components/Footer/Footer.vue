<script setup lang="ts">
import Logo from '@/components/Logo.vue'
</script>

<template>
    <footer class="site-footer">
        <div class="wrap">
            <div class="footer-grid">
                <div>
                    <h2 class="footer-headline serif">
                        Have a project?<br />
                        <em>Let's build it.</em>
                    </h2>
                    <a href="mailto:febaquidev@gmail.com" class="footer-email serif">
                        febaquidev@gmail.com
                    </a>
                </div>
                <div class="footer-social">
                    <a
                        href="https://www.linkedin.com/in/fernando-barraza-quintero-76b974197/"
                        target="_blank" rel="noreferrer"
                        class="btn"
                    >LinkedIn ↗</a>
                    <a
                        href="https://github.com/fernandobq"
                        target="_blank" rel="noreferrer"
                        class="btn"
                    >GitHub ↗</a>
                </div>
            </div>

            <div class="footer-bottom">
                <Logo />
                <div class="mono footer-copy dim">
                    © 2026 · Hand-coded with care · v3.0
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.site-footer {
    border-top: 1px solid var(--line);
    margin-top: 100px;
    padding: 72px 0 48px;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: end;
    margin-bottom: 72px;
}
@media (max-width: 720px) {
    .footer-grid { grid-template-columns: 1fr; gap: 32px; }
}

.footer-headline {
    font-size: clamp(40px, 7vw, 100px);
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.035em;
    margin: 0 0 32px;
    color: var(--ink);
}
.footer-headline em {
    color: var(--primary);
    font-style: normal;
}

.footer-email {
    font-size: clamp(18px, 2.2vw, 32px);
    font-weight: 500;
    color: var(--accent);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 8px;
    display: inline-block;
    transition: color 200ms;
}
.footer-email:hover { color: var(--primary); }

.footer-social {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 12px;
}
@media (max-width: 720px) {
    .footer-social { flex-direction: row; align-items: flex-start; }
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    border-top: 1px solid var(--line);
}
.footer-copy { font-size: 11px; letter-spacing: 0.06em; }
</style>
