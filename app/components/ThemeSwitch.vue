<template>
    <label class="flex items-center gap-2 text-sm text-foreground">
        Theme
        <select
            class="bg-highlight rounded-lg py-1 px-2 cursor-pointer text-foreground"
            v-model="mode"
        >
            <option
                v-for="[key, value] in Object.entries(themes)"
                :key="key"
                :value="value"
            >
                {{ key }}
            </option>
        </select>
    </label>
</template>

<script setup lang="js">
    const themes = useAppConfig().themes
    const mode = useColorMode({ modes: themes, initialValue: 'Auto' })
</script>
