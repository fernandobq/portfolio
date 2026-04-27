<script setup lang="ts">
withDefaults(defineProps<{
    variant?: 'wordmark' | 'monogram' | 'glyph'
    size?: number
}>(), {
    variant: 'wordmark',
    size: 28,
})
</script>

<template>
    <!-- Wordmark: ~$ febaqui.dev▌ -->
    <span v-if="variant === 'wordmark'" class="logo-wordmark" :style="{ fontSize: size * 0.55 + 'px' }">
        <span class="logo-prompt">~</span>
        <span class="logo-dollar">$</span>
        <span class="logo-name">febaqui</span>
        <span class="logo-tld">.dev</span>
        <span class="cursor logo-cursor"></span>
    </span>

    <!-- Monogram: [fbq].dev -->
    <span v-else-if="variant === 'monogram'" class="logo-mono" :style="{ fontSize: size * 0.55 + 'px' }">
        <span class="logo-bracket">[</span>
        <span>fbq</span>
        <span class="logo-bracket">]</span>
        <span class="logo-tld-dim">.dev</span>
    </span>

    <!-- Glyph: carved F in box + text -->
    <span v-else class="logo-glyph">
        <svg :width="size" :height="size" viewBox="0 0 32 32" fill="none">
            <rect x="1" y="1" width="30" height="30" rx="7" stroke="currentColor" stroke-width="1.5" />
            <path d="M9 8 L9 24 M9 8 L21 8 M9 15 L18 15" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" />
            <circle cx="22" cy="22" r="2" fill="var(--accent)" />
        </svg>
        <span class="logo-glyph-text" :style="{ fontSize: size * 0.5 + 'px' }">
            febaqui<span class="logo-tld-dim">.dev</span>
        </span>
    </span>
</template>

<style scoped>
.logo-wordmark {
    display: inline-flex;
    align-items: center;
    gap: 0;
    font-family: var(--mono);
    font-weight: 600;
    color: currentColor;
    letter-spacing: -0.02em;
    line-height: 1;
}
.logo-prompt { color: var(--primary); margin-right: 4px; }
.logo-dollar { opacity: 0.5; }
.logo-name   { margin-left: 8px; }
.logo-tld    { color: var(--accent); }
.logo-cursor { background: var(--primary); height: 0.9em; width: 0.45em; margin-left: 3px; vertical-align: -0.15em; }

.logo-mono {
    display: inline-flex;
    align-items: center;
    gap: 0;
    font-family: var(--mono);
    font-weight: 700;
    line-height: 1;
}
.logo-bracket { color: var(--primary); }
.logo-tld-dim { opacity: 0.5; font-weight: 400; font-size: 0.85em; margin-left: 4px; }

.logo-glyph {
    display: inline-flex;
    align-items: center;
    gap: 10px;
}
.logo-glyph-text {
    font-family: var(--mono);
    font-weight: 600;
    letter-spacing: -0.01em;
}
</style>
