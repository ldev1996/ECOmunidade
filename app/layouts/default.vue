<template>
    <div class="w-full h-dvh bg-base grid grid-cols-5">
        <aside
            class="bg-surface col-(start-1 end-2) h-full flex flex-col px-3 py-2 justify-between"
        >
            <div>
                <Logo />
                <nav class="mt-5 w-full">
                    <NuxtLink
                        v-for="page in pages"
                        :to="page.page"
                        class="page-link flex items-center gap-2"
                    >
                        <div
                            class="size-5"
                            :class="page.icon"
                        />
                        {{ page.label }}
                    </NuxtLink>
                </nav>
            </div>
            <div>
                <ThemeSwitch />
            </div>
        </aside>
        <div class="col-(start-2 end-6) h-full px-10 pt-10">
            <slot />
        </div>
    </div>
</template>

<script setup lang="js">
    const pages = [
        {
            page: '/',
            label: 'Início',
            icon: 'i-lucide-home'
        },
        {
            page: '/item/new',
            label: 'Criar Oferta',
            icon: 'i-lucide-circle-plus'
        },
        {
            page: '/profile/me',
            label: 'Meu Perfil',
            icon: 'i-lucide-circle-user-round'
        }
    ]
</script>

<style scoped>
    .page-link {
        --at-apply: 'px-2 py-1 text-(foreground lg) bg-transparent hover:(text-primary bg-highlight pl-4) transition-colors rounded-md';
    }
</style>
