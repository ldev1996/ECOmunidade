<template>
    <div
        class="flex flex-col items-center justify-center gap-2 p-4 bg-surface rounded-xl border border-highlight"
    >
        <div class="w-full flex gap-4">
            <div class="self-baseline">
                <h1 class="text-foreground text-2xl">Nuxt Rocket</h1>
                <p class="text-foreground-muted">
                    Edit this page in
                    <span
                        class="bg-primary text-foreground p-0.5 italic rounded-sm"
                    >
                        pages/index.vue
                    </span>
                </p>
            </div>
        </div>
        <div class="flex gap-2">
            <button
                @click="confettiReward"
                id="confetti-btn"
                class="bg-primary hover:bg-primary-alt text-foreground p-2 rounded-lg cursor-pointer transition-colors flex items-center justify-center"
            >
                Let's Party with Confetti!
            </button>
            <button
                class="bg-primary hover:bg-primary-alt text-foreground p-2 rounded-lg cursor-pointer transition-colors"
                @click="isModalOpen = true"
            >
                Open Modal
            </button>
            <Modal
                v-model:open="isModalOpen"
                title="Nuxt Rocket is Amazing!"
            >
                <p>Click outside this modal to close it.</p>
            </Modal>
        </div>
        <div class="flex gap-2">
            <ThemeSwitch />
            <Skeleton
                w="10rem"
                h="3rem"
                r="rounded-md"
            />
        </div>
        <Selector
            v-model="selected"
            :options="[
                { label: 'NuxtJS', value: 'nuxtjs' },
                { label: 'Rockets', value: 'rockets' },
                { label: 'Functions', value: 'functions' },
            ]"
            placeholder="Select a topic"
        />
    </div>
</template>

<script setup lang="js">
    import { useReward } from 'vue-rewards'
    const { reward: confettiReward } =
        useReward('confetti-btn', 'confetti')
    const isModalOpen = ref(false)
    const selected = ref('')
</script>
