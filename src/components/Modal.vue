<script lang="ts" setup>
import { watch } from 'vue'

interface ModalProps {
    openModal: boolean
    modalClasses: string
}

const props = defineProps<ModalProps>()
const window = document.querySelector('html')
const emit = defineEmits(['closeModal'])

const toggleModal = () => {
    emit('closeModal')
}

const handleModalClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.id === 'outerModal') {
        toggleModal()
    }
}
watch(
    () => props.openModal,
    () => window?.classList.toggle('overflow-y-hidden')
)
</script>

<template>
    <Teleport to="body">
        <Transition>
            <div
                v-if="openModal"
                @click="handleModalClick"
                id="outerModal"
                class="fixed z-40 top-0 left-0 w-screen h-screen after:content-[''] after:z-[1] after:inset-0 after:rounded-xl after:w-full after:h-full after:absolute after:bg-white-lilac-10 after:backdrop-blur-sm"
            >
                <div class="modal-card fixed z-20" :class="modalClasses">
                    <button
                        @click="toggleModal"
                        class="w-8 h-8 bg-haiti flex justify-center items-center group/close rounded-md hover:bg-white sticky top-0 ml-auto translate-x-4 -translate-y-4 lg:translate-x-6 lg:-translate-y-6 xl:translate-x-8 xl:-translate-y-8"
                    >
                        <div
                            class="w-6 bg-white h-1 group-hover/close:bg-meteorite rounded-md rotate-45 absolute"
                        ></div>
                        <div
                            class="w-6 bg-white h-1 group-hover/close:bg-meteorite rounded-md rotate-[135deg] absolute"
                        ></div>
                    </button>
                    <div class="-mt-8">
                        <slot />
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 500ms ease;
    backdrop-filter: blur(4px) opacity(1);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    backdrop-filter: blur(4px) opacity(0);
}

.modal-card::-webkit-scrollbar {
    display: none;
}

.modal-card {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
