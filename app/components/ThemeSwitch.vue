<template>
    <label class="flex items-center gap-2 text-sm text-foreground">
        Tema
        <select
            v-model="colorMode.preference"
            class="bg-base border rounded p-1"
        >
            <option
                v-for="theme in appConfig.themes"
                :key="theme.label"
                :value="theme.value"
            >
                {{ theme.label }}
            </option>
        </select>
    </label>
</template>

<script setup lang="js">
    const colorMode = useColorMode()
    const appConfig = useNuxtApp().$appConfig
</script>
