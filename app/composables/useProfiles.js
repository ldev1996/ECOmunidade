export const useProfiles = () => {
    const client = useSupabaseClient()
    const user = useSupabaseUser().value

    const fetchUserProfile = async () => {
        const { data, error } = await client
            .from('profiles')
            .select(`full_name, gender, age, communities (name, slug)`)
            .eq('id', user.id)
            .single()

        if (error) throw error
        return data
    }

    const upsertUserProfile = async ({ gender, age }) => {
        const { data, error } = await client
            .from('profiles')
            .upsert({
                id: user.id,
                gender: gender,
                age: age,
            })
            .select()

        if (error) throw error
        return data
    }

    return { fetchUserProfile, upsertUserProfile }
}
