# 🚀 Nuxt Rocket

**Nuxt Rocket** é um ponto de partida opinativo para projetos Nuxt 3 modernos.

A proposta é simples: eliminar o setup repetitivo, padronizar o essencial e criar uma base sólida que valoriza performance, experiência do usuário e manutenção a longo prazo.

O foco vai além do técnico — acessibilidade e boas práticas de UX são prioridades desde o início. O projeto também valoriza o que os game designers chamam de **"suco"**: microinterações visuais e feedbacks instantâneos que fazem o usuário sentir que está usando algo bem feito.

## 🌱 Princípios do Nuxt Rocket

-   ⚡ Velocidade no desenvolvimento e no carregamento

-   ♿ Acessibilidade pensada desde o início

-   🧃 UX com suco, não só com layout

-   🔧 Padronização mínima para ajudar times a fluírem

-   🧼 Simplicidade pragmática, sem overengineering

## ✅ Features

### 📦 Core

-   🧬 [Nuxt 3](https://nuxt.com)
-   ✨ [TailwindCSS 4](https://tailwindcss.com)
-   🗃️ [Pinia](https://pinia.vuejs.org)
-   🌗 [Nuxt Color Mode](https://color-mode.nuxtjs.org)
-   ⚙️ Configuração global simplificada em `config/app.config.js`

### 🎨 UI e Experiência

-   🧃 [Vue Rewards](https://vuejsexamples.com/add-micro-interactions-to-your-app-and-rewards-users-with-the-rain-of-confetti-emoji-or-balloons)
-   🌈 Cores de tema customizáveis (primary, background, etc.)

### 🛠️ Dev Experience

-   ✍️ [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
-   ⚙️ `.vscode/settings.json` com padrões de equipe

## 🛠️ Setup

1.  Escolha seu gerenciador de pacotes preferido:

### Usando **npm**

```bash
npm install
```

### Usando **pnpm**

```bash
pnpm install
```

### Usando **yarn**

```bash
yarn install
```

### Usando **bun**

```bash
bun install
```

2.  Adicione as configurações do seu projeto em `config/app.config.js` — diversos componentes pré-configurados usam essas configurações, então você não precisa editar um por um caso queira mudar algo.

3.  Altere as cores em `app/assets/css/main.css` para condizerem com as cores do tema do seu projeto.

4.  Se você usa a extensão **Code Spell Checker**, palavras específicas do projeto podem ser adicionadas em `.vscode/words.txt`

## 📌 TODO

### Principal

-   [x] ✨ Adicionar TailwindCSS
-   [x] 🗃️ Adicionar estado global (store)
-   [ ] 🧩 Composables úteis
-   [ ] 🧱 Componentes globais básicos
-   [x] 🌙 Suporte a modo escuro
-   [ ] 🌐 Suporte a internacionalização (i18n)
-   [x] 🧃 "Suco" com Vue Rewards
-   [ ] 🔍 SEO básico
-   [ ] 🔐 Sistema de autenticação base

### Extras

-   [x] 🌈 Cores de tema (`primary`, `background`)
-   [ ] 🗃️ Stores padrão (`ui`, `settings`)
-   [ ] 🧹 Linter + Formatter
-   [ ] 📱 Suporte a PWA

---

Feito com ☕ por quem prefere rocket-starts ao boilerplate infinito.
