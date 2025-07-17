<template>
    <div
        class="bg-surface px-2 py-5 w-100 max-w-90vw rounded-md border-(highlight 1)"
    >
        <form>
            <div>
                <label for="email">E-mail</label>
                <input
                    v-model="form.email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="O e-mail usado no cadastro"
                    required
                />
            </div>
            <div>
                <label for="password">Senha</label>
                <div class="relative">
                    <input
                        v-model="form.password"
                        :type="showPassword ? 'text' : 'password'"
                        name="password"
                        id="password"
                        placeholder="Digite sua senha"
                        required
                    />
                    <button
                        type="button"
                        :class="
                            showPassword
                                ? 'i-lucide:eye'
                                : 'i-lucide:eye-closed'
                        "
                        class="absolute right-2 top-1/2 -translate-y-1/2"
                        @click="showPassword = !showPassword"
                    />
                </div>
            </div>
            <div class="mt-5">
                <button
                    type="submit"
                    @click.prevent="handleLogin()"
                >
                    Fazer Login
                </button>
            </div>
        </form>
    </div>
</template>

<script setup lang="js">
    const { loginWithPassword } = useAuth()
    const showPassword = ref(false)

    const form = ref({
        email: '',
        password: ''
    })

    const handleLogin = async () => {
        try {
            console.log("[Login Page] Logging in...")
            await loginWithPassword({
                email: form.value.email,
                password: form.value.password
            })
        } catch(error) {
            console.error("[Login Page] Error logging in", error)
        }
    }
</script>

<style scoped>
    form {
        --at-apply: 'flex flex-col gap-2 items-start justify-center';

        div {
            --at-apply: 'flex flex-col w-full';
        }
    }

    input {
        --at-apply: 'w-full h-7 bg-highlight rounded-sm px-2 py-1 focus:outline-(2 primary)';
    }

    button {
        --at-apply: 'bg-primary hover:bg-primary-alt rounded-sm transition-colors px-2 py-1';
    }
</style>
