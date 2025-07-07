<template>
    <Teleport to="body">
        <Transition name="modal">
            <div
                v-if="open"
                class="bg-black/50 fixed left-0 top-0 w-full h-full flex items-center justify-center z-99"
            >
                <div
                    class="bg-surface rounded-md px-6 py-3"
                    ref="modal"
                >
                    <div class="flex items-center justify-between mb-2 gap-2">
                        <slot name="title">
                            <span
                                class="font-bold text-size-lg text-foreground text-lg"
                            >
                                {{ props.title }}
                            </span>
                        </slot>
                        <button
                            class="cursor-pointer text-foreground"
                            @click="closeModal()"
                        >
                            X
                        </button>
                    </div>
                    <div class="text-foreground w-full h-full">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="js">
    import { onClickOutside } from '@vueuse/core'

    const modal = ref(null)
    const props = defineProps({
        open: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        }
    })

    const emit = defineEmits(['update:open'])
    const closeModal = () => {
        emit('update:open', false)
    }
    onClickOutside(modal, () => (closeModal()))
</script>

<style>
    .modal-enter-active,
    .modal-leave-active {
        transition: all 0.25s ease;
    }

    .modal-enter-from,
    .modal-leave-to {
        opacity: 0;
        transform: scale(1.1);
    }
</style>
