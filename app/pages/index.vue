<template>
    <section
        class="bg-gradient-to-br from-primary from-15% to-secondary w-full min-h-dvh flex flex-col md:flex-row px-4 md:px-8 py-32"
    >
        <div class="flex flex-col md:w-1/2">
            <h1
                class="text-foreground-invert text-4xl md:text-5xl lg:text-6xl font-bold"
            >
                Conectando pessoas por um planeta mais sustentável
            </h1>
            <p class="text-foreground-invert/90 text-xl mt-6">
                Troque, doe e receba itens recicláveis em sua comunidade.
                Juntos, podemos reduzir o desperdício e construir um futuro mais
                verde.
            </p>
            <div class="mt-12 flex gap-6">
                <NuxtLink class="btn-2" to="/register">Começar Agora</NuxtLink>
                <NuxtLink class="btn-3" to="#features">Saiba Mais</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="js">
    definePageMeta({
        layout: false,
        colorMode: 'light'
    })
</script>
