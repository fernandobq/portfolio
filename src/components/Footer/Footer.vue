<script lang="ts" setup>
import Desktop from './Desktop.vue'
import navigationData from '@/assets/data/navigation.json'
import socialMediaData  from '@/assets/data/socialMedia.json'
const links = navigationData
const socialMedia = socialMediaData
</script>

<template>
    <footer class="bg-purple-heart w-full text-white">
        <Desktop :links="links" :social-media="socialMedia" />
    </footer>
</template>
