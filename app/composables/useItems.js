export const useItems = () => {
    const client = useSupabaseClient()

    const createItem = async ({
        name,
        description,
        type,
        amount,
        amount_type,
    }) => {
        const user = useSupabaseUser()
        const { data, error } = await client
            .from('items')
            .insert({
                name: name,
                description: description,
                type: type,
                amount: amount,
                amount_type: amount_type,
                owner_id: user.value.id,
            })
        
        if (error) throw error
        return data
    }

    return { createItem }
}
