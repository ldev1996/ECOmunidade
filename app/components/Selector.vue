<template>
    <ClientOnly>
        <VueSelect
            class="rocket__selector"
            :options="options"
            :placeholder="placeholder"
        ></VueSelect>
    </ClientOnly>
</template>

<script setup lang="js">
    import VueSelect from 'vue3-select-component'

    const props = defineProps({
        options: {
            type: Array,
            required: true
        },
        placeholder: {
            type: String,
            default: 'Select an option'
        }
    })
</script>

<style>
    .rocket__selector {
        --vs-width: 100%;
        --vs-min-height: 38px;
        --vs-padding: 4px 8px;
        --vs-border: 1px solid var(--color-highlight);
        --vs-border-radius: 4px;
        --vs-font-size: 16px;
        --vs-font-weight: 400;
        --vs-font-family: inherit;
        --vs-text-color: var(--color-foreground);
        --vs-line-height: 1.5;
        --vs-placeholder-color: var(--color-foreground-muted);
        --vs-background-color: var(--color-surface);
        --vs-disabled-background-color: var(--color-base);
        --vs-outline-width: 1px;
        --vs-outline-color: var(--color-primary);

        --vs-menu-offset-top: 8px;
        --vs-menu-height: 200px;
        --vs-menu-border: var(--vs-border);
        --vs-menu-background-color: var(--vs-background-color);
        --vs-menu-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        --vs-menu-z-index: 2;

        --vs-option-width: 100%;
        --vs-option-padding: 8px 12px;
        --vs-option-cursor: pointer;
        --vs-option-font-size: var(--vs-font-size);
        --vs-option-font-weight: var(--vs-font-weight);
        --vs-option-text-align: -webkit-auto;
        --vs-option-text-color: var(--vs-text-color);
        --vs-option-hover-text-color: var(--vs-text-color);
        --vs-option-focused-text-color: var(--vs-text-color);
        --vs-option-selected-text-color: var(--vs-text-color);
        --vs-option-disabled-text-color: var(--color-foreground-muted);
        --vs-option-background-color: var(--vs-menu-background);
        --vs-option-hover-background-color: var(--color-highlight);
        --vs-option-focused-background-color: var(
            --vs-option-hover-background-color
        );
        --vs-option-selected-background-color: var(--color-primary);
        --vs-option-disabled-background-color: var(--color-base);
        --vs-option-opacity-menu-open: 0.4;

        --vs-multi-value-margin: 2px;
        --vs-multi-value-border: 0px;
        --vs-multi-value-border-radius: 2px;
        --vs-multi-value-background-color: var(--color-highlight);

        --vs-multi-value-label-padding: 4px 4px 4px 8px;
        --vs-multi-value-label-font-size: 12px;
        --vs-multi-value-label-font-weight: 400;
        --vs-multi-value-label-line-height: 1;
        --vs-multi-value-label-text-color: var(--color-foreground);

        --vs-multi-value-delete-padding: 0 3px;
        --vs-multi-value-delete-hover-background-color: var(--color-danger);
        --vs-multi-value-xmark-size: 16px;
        --vs-multi-value-xmark-cursor: pointer;
        --vs-multi-value-xmark-color: var(--vs-multi-value-label-text-color);
        --vs-multi-value-xmark-hover-color: var(--color-foreground);

        --vs-indicators-gap: 0px;
        --vs-indicator-icon-size: 20px;
        --vs-indicator-icon-color: var(--vs-text-color);
        --vs-indicator-icon-cursor: pointer;
        --vs-indicator-dropdown-icon-transition: transform 0.2s ease-out;

        --vs-spinner-color: var(--vs-text-color);
        --vs-spinner-size: 16px;
    }
</style>
