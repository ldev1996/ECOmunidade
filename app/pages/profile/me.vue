<template>
    <main
        v-if="store.me"
        class="w-full flex flex-col items-center justify-center"
    >
        <section class="flex gap-2 px-4 py-3">
            <Skeleton
                w="5rem"
                h="5rem"
                r="rounded-full"
            />
            <div class="flex flex-col items-baseline justify-start">
                <h1 class="text-(3xl foreground)">{{ store.me.full_name }}</h1>
            </div>
        </section>
    </main>
</template>

<script setup lang="js">
    import { useProfileStore } from '~/store/useProfileStore';
    const store = useProfileStore()
    onMounted(async () => {
        if(!store.me) await store.fetchProfile()
    })
</script>

<style scoped>
    section {
        --at-apply: 'bg-surface border-(1 highlight) rounded-xl w-full mb-10';
    }
</style>
