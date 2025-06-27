<template>
    <div :class="['bg-surface animate-pulse shadow', r]" :style="size" />
</template>

<script setup>
    const props = defineProps({
        w: {
            type: String,
        },
        h: {
            type: String,
        },
        r: {
            type: String,
            default: '',
            validator: (value) =>
                [
                    'rounded-sm',
                    'rounded-md',
                    'rounded-lg',
                    'rounded-xl',
                    'rounded-2xl',
                    'rounded-3xl',
                    'rounded-4xl',
                    'rounded-full',
                ].includes(value),
        },
    })

    const size = computed(() => ({
        width: props.w,
        height: props.h,
    }))
</script>
