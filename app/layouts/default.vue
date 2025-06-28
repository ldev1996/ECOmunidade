<template>
    <header class="px-4 md:px-8 py-3 md:py-6 w-full bg-base/90 shadow-lg z-10 fixed left-0 top-0 flex justify-between items-center">
        <NuxtLink to="/"><Logo class="md:text-3xl"/></NuxtLink>
        <nav>
            <NuxtLink
                v-for="link in navLinks"
                :to="link.to"
                :key="link.label"
                class="text-foreground hover:text-primary transition-colors md:text-lg"
            >
                {{ link.label }}
            </NuxtLink>
        </nav>
    </header>
    <main>
        <slot />
    </main>
</template>

<script setup lang="js">
    const navLinks = [
        {
            label: 'Como Funciona',
            to: '#features'
        }
    ]
</script>
