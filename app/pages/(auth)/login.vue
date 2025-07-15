<template>
    <div
        class="bg-surface px-2 py-5 min-w-100 max-w-90vw rounded-md border-(highlight 1)"
    >
        <form>
            <div>
                <label for="email">E-mail</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                />
            </div>
            <div>
                <label for="password">Senha</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                />
            </div>
            <div class="mt-5">
                <button type="submit">Fazer Login</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="js"></script>

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
