import appConfig from '@@/config/app.config'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('appConfig', appConfig)
})
