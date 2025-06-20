<template>
    <div class="w-full h-dvh flex items-center justify-center bg-base">
        <div
            class="flex items-center justify-center gap-2 p-4 bg-surface rounded-xl"
        >
            <ThemeSwitch />
            <button
                @click="confettiReward"
                id="confetti-btn"
                class="bg-primary hover:bg-primary-alt p-2 rounded cursor-pointer transition-colors"
            >
                Hora da Festa!
            </button>
        </div>
    </div>
</template>

<script setup lang="js">
    import { useReward } from 'vue-rewards'
    const { reward: confettiReward, isAnimating: isConfettiAnimating } =
        useReward('confetti-btn', 'confetti')
</script>
