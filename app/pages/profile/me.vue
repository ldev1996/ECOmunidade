<template>
    <main
        v-if="store.me"
        class="w-full flex flex-col items-center justify-center"
    >
        <h1 class="text-(3xl foreground) self-baseline mb-5">Meu Perfil</h1>
        <section class="flex gap-2">
            <Skeleton
                w="5rem"
                h="5rem"
                r="rounded-full"
            />
            <div>
                <div
                    v-if="!isEditing"
                    class="flex flex-col items-baseline justify-start"
                >
                    <h2 class="text-(2xl foreground) mb-2">
                        {{ store.me.full_name }}
                    </h2>
                    <p class="text-(md foreground)">
                        Gênero: {{ store.me.gender || 'Não definido' }}
                    </p>
                    <p class="text-(md foreground)">
                        Idade: {{ store.me.age || 'Não definido' }}
                    </p>
                </div>
                <!-- <form v-else>
                    <div></div>
                </form> -->
            </div>
        </section>
        <section>
            <h2 class="text-(2xl foreground) mb-2">Comunidades</h2>
            <div class="flex gap-2">
                <NuxtLink
                    v-for="community in store.me.communities"
                    :key="community.name"
                    :to="`/community/${community.slug})`"
                    class="px-2 py-1 bg-primary hover:bg-primary-alt rounded-md text-(md foreground)"
                >
                    {{ community.name }}
                </NuxtLink>
            </div>
        </section>
    </main>
</template>

<script setup lang="js">
    import { useProfileStore } from '~/store/useProfileStore'
    const isEditing = ref(false)
    const store = useProfileStore()

    onMounted(async () => {
        if(!store.me) await store.fetchProfile()
    })
</script>

<style scoped>
    section {
        --at-apply: 'px-4 py-3 bg-surface border-(1 highlight) rounded-xl w-full mb-5';
    }
</style>
