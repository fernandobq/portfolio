<script setup lang="ts">
import profileImg from '@/assets/images/Profile.jpg'
</script>

<template>
    <div class="about-grid">
        <!-- Photo -->
        <div class="about-photo reveal">
            <div class="photo-frame">
                <img :src="profileImg" alt="Fernando Barraza Quintero" class="photo-img" />
                <div class="photo-overlay"></div>
                <div class="photo-caption mono">
                    <div>Fernando Barraza Quintero</div>
                    <div class="photo-caption-sub">· Mexico · he/him</div>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="about-content reveal">
            <p class="about-bio serif">
                I'm a fullstack developer with six years building products for the web, mobile apps, marketing sites, and the occasional internal tool. I like work where design and engineering have to talk to each other often.
            </p>

            <div class="about-facts">
                <div class="about-fact">
                    <div class="eyebrow">Approach</div>
                    <p>Collaborative by default. I bring opinions, but I value what the rest of the room sees that I don't.</p>
                </div>
                <div class="about-fact">
                    <div class="eyebrow">Currently</div>
                    <p>Working as a Software Development Engineer at Zillow Group specifically in <a href="https://www.followupboss.com/" target="_blank">FollowUpBoss</a>.</p>
                </div>
                <div class="about-fact">
                    <div class="eyebrow">Looking for</div>
                    <p>Product teams that take craft seriously. Open to fullstack and frontend-leaning roles.</p>
                </div>
                <div class="about-fact">
                    <div class="eyebrow">Off the clock</div>
                    <p>Football, indie games, and working on my own <a href="https://weallpadel.mx" target="_blank">padel app</a>.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-grid {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 80px;
    align-items: start;
}
@media (max-width: 900px) {
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
}

.photo-frame {
    position: relative;
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--line-strong);
    aspect-ratio: 4 / 5;
    max-width: 380px;
}
@media (max-width: 900px) { .photo-frame { max-width: 240px; } }

.photo-img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    filter: saturate(0.85) contrast(1.05);
}
.photo-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, transparent 50%, rgba(11,7,22,0.5));
}
.photo-caption {
    position: absolute; left: 16px; bottom: 16px;
    font-size: 12px; color: #fff;
}
.photo-caption-sub { opacity: 0.7; font-size: 11px; margin-top: 2px; }

.about-bio {
    font-size: clamp(20px, 2.2vw, 30px);
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.01em;
    margin: 0 0 48px;
    color: var(--ink);
}

.about-facts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
}
@media (max-width: 500px) { .about-facts { grid-template-columns: 1fr; } }

.about-fact .eyebrow { margin-bottom: 10px; }
.about-fact p {
    margin: 0;
    font-size: 14px;
    line-height: 1.65;
    color: var(--muted);
}
</style>
