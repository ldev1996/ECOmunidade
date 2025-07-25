<template>
    <h1 class="text-(3xl foreground) self-baseline mb-5">Criar Oferta</h1>
    <form
        method="post"
        class="bg-surface border-(1 highlight) rounded-xl px-4 py-3"
    >
        <div class="form-section">
            <label for="name">Nome do item</label>
            <input
                v-model="form.name"
                type="text"
                name="name"
                placeholder="Insira um nome para a oferta"
                required
                class="h-7"
            />
        </div>
        <div class="form-section relative">
            <label for="description">Descrição</label>
            <textarea
                v-model="form.description"
                type="text"
                name="description"
                placeholder="Descreva o estado do item"
                required
                class="h-32"
                maxlength="350"
            />
            <span
                class="text-(foreground-muted sm) absolute bottom-1 right-1 z-5"
            >
                {{ form.description.length }}/350
            </span>
        </div>
        <div class="form-section">
            <label for="type">Tipo de Material</label>
            <Selector
                v-model="form.type"
                placeholder="Escolha o tipo de material adequado"
                :options="itemTypeOptions"
            />
        </div>
        <div class="flex w-full justify-between">
            <div class="w-48%">
                <label for="amount">Quantidade</label>
                <input
                    v-model="form.amount"
                    type="number"
                    name="amount"
                    placeholder="Informe a quantidade"
                    required
                    min="1"
                />
            </div>
            <div class="w-48%">
                <label for="amount_type">Unidade de medida</label>
                <Selector
                    v-model="form.amount_type"
                    placeholder="Em qual unidade está a quantidade?"
                    required
                    :options="amountTypeOptions"
                />
            </div>
        </div>
        <div class="mt-5">
            <button
                type="submit"
                @click.prevent="handleCreate()"
            >
                Publicar oferta
            </button>
        </div>
    </form>
</template>

<script setup lang="js">
    const { createItem } = useItems()

    const form = ref({
        name: '',
        description: '',
        type: '',
        amount: 1,
        amount_type: 'unity'
    })

    const itemTypeOptions = [
        { label: 'Plástico', value: 'plastic' },
        { label: 'Papel ou Papelão', value: 'paper/cardboard' },
        { label: 'Vidro', value: 'glass' }
    ]

    const amountTypeOptions = [
        { label: 'Kilo(s)', value: 'kg' },
        { label: 'Unidade(s)', value: 'unity' },
        { label: 'Litro(s)', value: 'l' }
    ]

    const handleCreate = async () => {
        try {
            console.time("[New Item] Create an item")
            await createItem({
                name: form.value.name,
                description: form.value.description,
                type: form.value.type,
                amount: form.value.amount,
                amount_type: form.value.amount_type
            })
            console.timeEnd("[New Item] Create an item")
        } catch(error) {
            console.error("[New Item] Error creating an item", error)
        }
    }
</script>

<style scoped>
    form {
        --at-apply: 'flex flex-col gap-2 items-start justify-center';

        .form-section {
            --at-apply: 'flex flex-col w-full';
        }
    }

    label {
        --at-apply: 'text-foreground';
    }

    input,
    textarea {
        --at-apply: 'w-full bg-highlight rounded-sm px-2 py-1 focus:outline-(2 primary) text-foreground placeholder:text-foreground-muted';
    }

    button {
        --at-apply: 'bg-primary hover:bg-primary-alt rounded-sm transition-colors px-2 py-1';
    }
</style>
