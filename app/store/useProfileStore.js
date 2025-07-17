export const useProfileStore = defineStore('profiles', {
    state: () => ({ me: null }),
    actions: {
        async fetchProfile() {
            const { fetchUserProfile } = useProfiles()
            try {
                console.log('[Profile Store] Fetching profile...')
                this.me = await fetchUserProfile()
            } catch (error) {
                console.error('[Profile Store] Error fetching profile', error)
            }
        },
    },
})
