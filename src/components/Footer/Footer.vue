<script lang="ts" setup>
import Desktop from './Desktop.vue'
import navigationData from '@/assets/data/navigation.json'
import socialMediaData from '@/assets/data/socialMedia.json'
const links = navigationData
const socialMedia = socialMediaData
</script>

<template>
    <footer
        class="bg-haiti w-full text-white xl:mt-[200px] lg:mt-[150px] mt-[100px] border-t border-t-white-10"
    >
        <Desktop :links="links" :social-media="socialMedia" />
    </footer>
</template>
