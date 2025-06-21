<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="js">
    const appConfig = useAppConfig()

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} - ${appConfig.appName}` : `${appConfig.appName}`;
        }
    })
</script>
