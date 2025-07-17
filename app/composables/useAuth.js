export const useAuth = () => {
    const client = useSupabaseClient()

    const loginWithPassword = async ({ email, password }) => {
        const { data, error } = await client.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (error) throw error
        return data
    }

    return { loginWithPassword }
}
