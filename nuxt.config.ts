export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    future: {
        compatibilityVersion: 4,
    },
    site: {
        name: 'ECOmunidade',
        defaultLocale: 'pt-BR',
    },
    supabase: {
        redirect: false,
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_PUBLISHABLE_KEY,
    },
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
    css: ['~/assets/css/theme.css'],
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@nuxtjs/seo',
        '@nuxtjs/supabase',
    ],
});
