import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    future: {
        compatibilityVersion: 4,
    },
    ssr: false,
    routeRules: {
        '/': {
            ssr: true,
        },
    },
    devtools: { enabled: true },
    pages: { pattern: ['**/*.vue', '!**/components/**'] },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
        {
            path: '~/pages',
            pattern: '**/components/**',
            pathPrefix: false,
        },
    ],
    css: ['~/assets/css/main.css'],
    vite: { plugins: [tailwindcss()] },
    modules: ['@nuxtjs/color-mode', '@nuxt/icon'],
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        storage: 'localStorage', // or 'sessionStorage' or 'cookie'
        storageKey: 'nuxt-color-mode',
    },
})
