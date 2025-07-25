export const useProfileStore = defineStore('profiles', {
    state: () => ({ me: null }),
    actions: {
        async fetchProfile() {
            const { fetchUserProfile } = useProfiles()
            try {
                console.time('[Profile Store] Fetch profile')
                this.me = await fetchUserProfile()
                console.timeEnd('[Profile Store] Fetch profile')
            } catch (error) {
                console.error('[Profile Store] Error fetching profile', error)
            }
        },
    },
})
