import { defineConfig, presetWind4, presetIcons } from 'unocss'

export default defineConfig({
    presets: [
        presetWind4({
            preflights: {
                reset: true,
                theme: true,
            },
        }),
        presetIcons(),
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: 'var(--color-primary)',
                alt: 'var(--color-primary-alt)',
            },
            secondary: {
                DEFAULT: 'var(--color-secondary)',
                alt: 'var(--color-secondary-alt)',
            },
            success: {
                DEFAULT: 'var(--color-success)',
                alt: 'var(--color-success-alt)',
            },
            warning: {
                DEFAULT: 'var(--color-warning)',
                alt: 'var(--color-warning-alt)',
            },
            danger: {
                DEFAULT: 'var(--color-danger)',
                alt: 'var(--color-danger-alt)',
            },
            base: 'var(--color-base)',
            surface: 'var(--color-surface)',
            highlight: 'var(--color-highlight)',
            foreground: {
                DEFAULT: 'var(--color-foreground)',
                muted: 'var(--color-foreground-muted)',
            },
        },
    },
})
