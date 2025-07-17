export const useProfiles = () => {
    const client = useSupabaseClient()

    const fetchUserProfile = async () => {
        const user = useSupabaseUser()
        const { data, error } = await client
            .from('profiles')
            .select('*')
            .eq('id', user.value.id)
            .single()

        if (error) throw error
        return data
    }

    return { fetchUserProfile }
}
