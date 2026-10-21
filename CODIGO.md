# Tailwind Play — 8 Visual Challenges

**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**

Implementação dos 9 exercícios do *Tailwind Play — Board de Laboratórios*, com as
referências visuais do Figma **Tailwind Play — 8 Visual Challenges**.

| Exercício | Conceitos | Figma |
|---|---|---|
| 01 — Profile Card | Utility-first, spacing, sizing, typography, colors, borders, shadows, flexbox | `node-id=1-4` |
| 02 — Product Grid | Grid, responsive, hover, focus, active, disabled | `node-id=1-25` |
| 03 — Theme Lab | Dark mode, `@theme`, `@custom-variant`, `@layer`, `@apply`, design tokens | `node-id=1-59` |
| 04 — Login Form | Utility-first, spacing, sizing, typography, colors, borders, focus, responsive | `node-id=1-90` |
| 05 — Pricing Cards | Utility-first, spacing, typography, colors, borders, shadows, flexbox, grid | `node-id=1-112` |
| 06 — Settings Toggle | Utility-first, flexbox, borders, colors, focus, responsive, `peer`/`checked` | `node-id=1-145` |
| 07 — FAQ Accordion | Utility-first, spacing, typography, borders, colors, `details`/`open` | `node-id=1-166` |
| 08 — Dashboard Summary | Utility-first, grid, flexbox, responsive, spacing, sizing, typography, colors, borders | `node-id=1-184` |
| 09 — Theme Toggle Button | Utility-first, dark mode, `@theme`, `@custom-variant`, design tokens, hover, focus | `node-id=5-2` |

---

## 1. Setup


### `package.json`

```json
{
  "name": "tailwind-play",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "react": "^19.3.1",
    "react-dom": "^19.3.1",
    "tailwindcss": "^4.3.3"
  },
  "devDependencies": {
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "@vitejs/plugin-react": "^6.1.2",
    "oxlint": "^1.88.0",
    "vite": "^8.3.4"
  }
}
```


### `vite.config.js`

```js
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```


### `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind Play — Visual Challenges</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```


---

## 2. Tokens, tema e camada de componentes

O arquivo abaixo é o coração da aula: `@theme inline` registra os tokens
semânticos, `@custom-variant` liga o dark mode por classe, e `@layer components`
reúne as classes escritas com `@apply`.


### `src/index.css`

```css
@import 'tailwindcss';

/*
 * Modo escuro por classe (e não por `prefers-color-scheme`).
 * A variante `dark:` só é aplicada dentro de `.dark` ou de `.dark *`.
 */
@custom-variant dark (&:where(.dark, .dark *));

/*
 * Tokens semânticos. Os valores ficam em variáveis CSS para que o mesmo
 * nome de utility (`bg-surface`, `text-muted`...) resolva para cores
 * diferentes em Light e Dark mode.
 */
@theme inline {
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-panel: var(--panel);
  --color-subtle: var(--subtle);
  --color-foreground: var(--foreground);
  --color-body: var(--body);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-primary: var(--primary);
  --color-primary-strong: var(--primary-strong);
  --color-chestnut: var(--chestnut);
  --color-chestnut-dark: var(--chestnut-dark);
}

:root {
  --background: #f1f5f9;
  --surface: #ffffff;
  --panel: #f1f5f9;
  --subtle: #f8fafc;
  --foreground: #0f172a;
  --body: #475569;
  --muted: #64748b;
  --border: #e2e8f0;
  --primary: #2563eb;
  --primary-strong: #1d4ed8;
  --chestnut: #8b4a2f;
  --chestnut-dark: #b5795f;
}

.dark {
  --background: #0b1020;
  --surface: #151b34;
  --panel: #1a2140;
  --subtle: #0d1226;
  --foreground: #f1f5f9;
  --body: #cbd5e1;
  --muted: #a5b0c9;
  --border: #2a3358;
  --primary: #3b82f6;
  --primary-strong: #60a5fa;
  --chestnut: #b5795f;
  --chestnut-dark: #8b4a2f;
}

/*
 * Camada de componentes: aqui vivem as classes semânticas reaproveitadas
 * por todos os exercícios, escritas com `@apply`.
 */
@layer components {
  .card {
    @apply rounded-2xl border border-border bg-surface p-6 shadow-sm;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center rounded-lg bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900;
  }
}
```


### `src/main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```


### `src/App.jsx`

```jsx
import { useState } from 'react';

import Exercise01ProfileCard from './components/exercises/Exercise01ProfileCard.jsx';
import Exercise02ProductGrid from './components/exercises/Exercise02ProductGrid.jsx';
import Exercise03ThemeLab from './components/exercises/Exercise03ThemeLab.jsx';
import Exercise04LoginForm from './components/exercises/Exercise04LoginForm.jsx';
import Exercise05PricingCards from './components/exercises/Exercise05PricingCards.jsx';
import Exercise06SettingsToggle from './components/exercises/Exercise06SettingsToggle.jsx';
import Exercise07FaqAccordion from './components/exercises/Exercise07FaqAccordion.jsx';
import Exercise08DashboardSummary from './components/exercises/Exercise08DashboardSummary.jsx';
import Exercise09ThemeToggle from './components/exercises/Exercise09ThemeToggle.jsx';

const NAV = [
  { id: '01', label: 'Profile Card' },
  { id: '02', label: 'Product Grid' },
  { id: '03', label: 'Theme Lab' },
  { id: '04', label: 'Login Form' },
  { id: '05', label: 'Pricing Cards' },
  { id: '06', label: 'Settings Toggle' },
  { id: '07', label: 'FAQ Accordion' },
  { id: '08', label: 'Dashboard Summary' },
  { id: '09', label: 'Theme Toggle' },
];

export default function App() {
  const [isDark, setIsDark] = useState(false);

  /**
   * Aplica o tema no <html>, que é o elemento que concentra a classe `.dark`.
   * A partir daí todas as utilities semânticas (`bg-surface`, `text-foreground`)
   * resolvem para os valores do tema ativo.
   */
  function changeTheme(nextDark) {
    setIsDark(nextDark);
    document.documentElement.classList.toggle('dark', nextDark);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div>
            <p className="text-xs font-bold tracking-wide text-blue-600 uppercase">
              Aula 10 · Tailwind CSS 4.3
            </p>
            <h1 className="text-lg font-bold">Tailwind Play — Visual Challenges</h1>
          </div>

          <button
            type="button"
            onClick={() => changeTheme(!isDark)}
            className="shrink-0 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            {isDark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>

        <nav aria-label="Exercícios" className="mx-auto max-w-6xl px-4 pb-3 sm:px-6">
          <ul className="flex gap-2 overflow-x-auto">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#exercicio-${item.id}`}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-body transition-colors hover:border-blue-300 hover:text-blue-600"
                >
                  <span className="text-blue-600">{item.id}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6">
        <Exercise01ProfileCard />
        <Exercise02ProductGrid />
        <Exercise03ThemeLab />
        <Exercise04LoginForm />
        <Exercise05PricingCards />
        <Exercise06SettingsToggle />
        <Exercise07FaqAccordion />
        <Exercise08DashboardSummary />
        <Exercise09ThemeToggle isDark={isDark} onThemeChange={changeTheme} />
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 text-center text-xs text-muted sm:px-6">
        React 19 · Vite 8 · Tailwind CSS 4.3
      </footer>
    </div>
  );
}
```


### `src/components/ExerciseFrame.jsx`

```jsx
/**
 * Casca visual usada por todos os exercícios.
 * Reproduz o frame do Figma: badge, título, subtítulo e régua divisória.
 */
export default function ExerciseFrame({ number, title, subtitle, children }) {
  return (
    <section
      id={`exercicio-${number}`}
      className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
    >
      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold tracking-wide text-blue-600 uppercase">
        Exercise {number}
      </span>

      <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      <p className="mt-1 text-sm text-muted">{subtitle}</p>

      <hr className="my-6 border-border" />

      {children}
    </section>
  );
}
```


---

## 3. Exercícios


### Exercício 01 — Profile Card — entendendo Utility-First

Referência visual: [Figma — Exercise 01: Profile Card — entendendo Utility-First](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-4)  ·  Conceitos: Utility-first, spacing, sizing, typography, colors, borders, shadows, flexbox


### `src/components/exercises/Exercise01ProfileCard.jsx`

```jsx
import ExerciseFrame from '../ExerciseFrame.jsx';

/**
 * Exercise 01 — Profile Card
 * Conceitos: utility-first, spacing, sizing, typography, colors, borders, flexbox.
 */
export default function Exercise01ProfileCard() {
  return (
    <ExerciseFrame
      number="01"
      title="Profile Card"
      subtitle="Utility-first · spacing · flex · typography"
    >
      <article className="rounded-2xl border border-border bg-surface p-6">
        <div className="flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
            FC
          </span>

          <div className="min-w-0">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-bold tracking-wide text-blue-600 uppercase">
              Front-End
            </span>
            <h3 className="mt-1.5 truncate text-lg font-bold text-foreground">
              Florisponfildo Mello Costa
            </h3>
            <p className="text-sm text-muted">Dev · React · SPA</p>
          </div>
        </div>

        <p className="mt-5 text-sm text-body">
          Estudando como pequenas utilities podem ser combinadas para construir
          interfaces.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Seguir
          </button>
          <button
            type="button"
            className="rounded-lg bg-panel px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Perfil
          </button>
        </div>
      </article>
    </ExerciseFrame>
  );
}
```


### Exercício 02 — Product Grid — estados e responsividade

Referência visual: [Figma — Exercise 02: Product Grid — estados e responsividade](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-25)  ·  Conceitos: Grid, responsive, hover, focus, active, disabled, flexbox, utility-first


### `src/components/exercises/Exercise02ProductGrid.jsx`

```jsx
import ExerciseFrame from '../ExerciseFrame.jsx';

const PLANS = [
  {
    number: '01',
    label: 'Starter',
    labelClass: 'text-cyan-600',
    title: 'UI Foundations',
    header: 'bg-gradient-to-br from-cyan-400 to-cyan-500',
    button: 'bg-cyan-500 hover:bg-cyan-600',
  },
  {
    number: '02',
    label: 'Intermediate',
    labelClass: 'text-violet-600',
    title: 'Responsive UI',
    header: 'bg-gradient-to-br from-violet-500 to-violet-600',
    button: 'bg-violet-600 hover:bg-violet-700',
  },
  {
    number: '03',
    label: 'Locked',
    labelClass: 'text-muted',
    title: 'Advanced UI',
    header: 'bg-gradient-to-br from-slate-700 to-slate-900',
    button: 'bg-slate-200 text-muted cursor-not-allowed',
    disabled: true,
  },
];

/**
 * Exercise 02 — Product Grid
 * Conceitos: grid responsivo, group-hover, estados (disabled).
 */
export default function Exercise02ProductGrid() {
  return (
    <ExerciseFrame
      number="02"
      title="Product Grid"
      subtitle="Responsive grid · group-hover · states"
    >
      <div className="grid gap-4 rounded-2xl bg-panel p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <article
            key={plan.number}
            className="group flex flex-col overflow-hidden rounded-xl bg-surface shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
          >
            <div
              className={`flex h-32 items-center justify-center text-5xl font-bold text-white transition-transform duration-300 group-hover:scale-105 ${plan.header}`}
            >
              {plan.number}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className={`text-xs font-bold ${plan.labelClass}`}>{plan.label}</p>
              <h3 className="mt-1 text-lg font-bold text-foreground">{plan.title}</h3>
              <p className="mt-1 text-sm text-muted">
                Pratique utilities e estados.
              </p>

              <button
                type="button"
                disabled={plan.disabled}
                className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${plan.button} ${plan.disabled ? 'focus-visible:outline-none' : 'focus-visible:outline-blue-600'}`}
              >
                {plan.disabled ? 'Locked' : 'Escolher'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </ExerciseFrame>
  );
}
```


### Exercício 03 — Theme Lab — tokens, dark mode e @layer

Referência visual: [Figma — Exercise 03: Theme Lab — tokens, dark mode e @layer](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-59)  ·  Conceitos: Dark mode, @theme, @custom-variant, @layer, @apply, design tokens, colors, utility-first


### `src/components/exercises/Exercise03ThemeLab.jsx`

```jsx
import ExerciseFrame from '../ExerciseFrame.jsx';

/**
 * Exercise 03 — Theme Lab
 * Conceitos: design tokens, @theme, dark mode, @custom-variant, @layer e @apply.
 *
 * As duas colunas usam exatamente as mesmas utilities semânticas
 * (`bg-surface`, `text-foreground`, `text-muted`, `border-border`).
 * O que muda são os valores dos tokens.
 */
export default function Exercise03ThemeLab() {
  return (
    <ExerciseFrame
      number="03"
      title="Theme Lab"
      subtitle="@theme · dark mode · semantic tokens"
    >
      <div className="grid gap-5 rounded-2xl bg-panel p-5 md:grid-cols-2 md:p-6">
        {/* ---------------- Light ---------------- */}
        <article className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold tracking-wide text-blue-600 uppercase">
            Light
          </span>

          <h3 className="mt-4 text-xl font-bold text-foreground">Tema claro</h3>
          <p className="mt-1 text-sm text-muted">
            background · surface · muted · border
          </p>

          <div className="mt-5 rounded-xl bg-subtle p-4 ring-1 ring-border">
            <p className="font-bold text-foreground">Surface token</p>
            <p className="text-sm text-muted">Área semântica do tema</p>
          </div>

          <div className="mt-3 rounded-lg bg-chestnut py-2 text-center text-sm font-semibold text-white">
            Chestnut
          </div>

          <button type="button" className="btn-primary mt-3 w-full">
            Primary
          </button>
        </article>

        {/* ---------------- Dark ---------------- */}
        {/* A classe `dark` cria um novo escopo de tokens para este trecho. */}
        <article className="dark rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
          <span className="inline-flex items-center rounded-full bg-blue-500/15 px-2.5 py-1 text-xs font-bold tracking-wide text-blue-300 uppercase">
            Dark
          </span>

          <h3 className="mt-4 text-xl font-bold text-foreground">Tema escuro</h3>
          <p className="mt-1 text-sm text-muted">
            Mesmas utilities, outros valores
          </p>

          <div className="mt-5 rounded-xl bg-subtle p-4 ring-1 ring-white/10">
            <p className="font-bold text-foreground">Surface token</p>
            <p className="text-sm text-muted">Tokens alterados por .dark</p>
          </div>

          <div className="mt-3 rounded-lg bg-chestnut-dark py-2 text-center text-sm font-semibold text-white">
            Chestnut dark
          </div>

          <button type="button" className="btn-primary mt-3 w-full">
            Primary
          </button>
        </article>
      </div>
    </ExerciseFrame>
  );
}
```


### Exercício 04 — Login Form — focus e acessibilidade

Referência visual: [Figma — Exercise 04: Login Form — focus e acessibilidade](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-90)  ·  Conceitos: Utility-first, spacing, sizing, typography, colors, borders, focus, responsive


### `src/components/exercises/Exercise04LoginForm.jsx`

```jsx
import ExerciseFrame from '../ExerciseFrame.jsx';

/**
 * Exercise 04 — Login Form
 * Conceitos: focus, inputs e acessibilidade.
 */
export default function Exercise04LoginForm() {
  return (
    <ExerciseFrame
      number="04"
      title="Login Form"
      subtitle="Focus · inputs · accessibility"
    >
      <div className="mx-auto w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
        <h3 className="text-2xl font-bold text-foreground">Welcome back</h3>
        <p className="mt-1 text-sm text-muted">
          Entre na sua conta para continuar.
        </p>

        <form className="mt-6 space-y-5" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-body"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted hover:border-border focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-sm text-body"
            >
              Senha
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted hover:border-border focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-body">
              <input
                type="checkbox"
                name="lembrar"
                defaultChecked
                className="size-4 rounded border-border text-blue-600 accent-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              />
              Lembrar de mim
            </label>

            <a
              href="#esqueci"
              className="text-sm font-semibold text-blue-600 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Esqueci minha senha
            </a>
          </div>

          <button type="submit" className="btn-primary w-full">
            Sign in
          </button>
        </form>
      </div>
    </ExerciseFrame>
  );
}
```


### Exercício 05 — Pricing Cards — composição e hierarquia

Referência visual: [Figma — Exercise 05: Pricing Cards — composição e hierarquia](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-112)  ·  Conceitos: Utility-first, spacing, typography, colors, borders, shadows, flexbox, grid, responsive


### `src/components/exercises/Exercise05PricingCards.jsx`

```jsx
import ExerciseFrame from '../ExerciseFrame.jsx';

const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29',
    featured: true,
  },
  {
    name: 'Team',
    price: '$79',
    featured: false,
  },
];

/**
 * Exercise 05 — Pricing Cards
 * Conceitos: composição, hierarquia e cards responsivos.
 */
export default function Exercise05PricingCards() {
  return (
    <ExerciseFrame
      number="05"
      title="Pricing Cards"
      subtitle="Composition · hierarchy · responsive cards"
    >
      <div className="grid gap-4 rounded-2xl bg-panel p-5 md:grid-cols-3 md:p-6">
        {PLANS.map((plan) => (
          <article
            key={plan.name}
            className={
              plan.featured
                ? 'flex flex-col rounded-2xl bg-violet-50 p-6 ring-2 ring-violet-500'
                : 'flex flex-col rounded-2xl bg-surface p-6 ring-1 ring-border'
            }
          >
            {plan.featured && (
              <span className="text-xs font-bold tracking-wide text-violet-600 uppercase">
                Popular
              </span>
            )}

            <h3
              className={
                plan.featured
                  ? 'mt-2 text-lg font-bold text-foreground'
                  : 'text-lg font-bold text-foreground'
              }
            >
              {plan.name}
            </h3>

            <p className="mt-3 text-3xl font-bold text-foreground">{plan.price}</p>
            <p className="mt-1 text-sm text-muted">/ month</p>

            <ul className="mt-5 space-y-2 text-sm text-body">
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-muted">
                  ✓
                </span>
                Projects
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-muted">
                  ✓
                </span>
                Analytics
              </li>
            </ul>

            <button
              type="button"
              className={
                plan.featured
                  ? 'mt-6 w-full rounded-lg bg-violet-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600'
                  : 'mt-6 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              }
            >
              Choose
            </button>
          </article>
        ))}
      </div>
    </ExerciseFrame>
  );
}
```


### Exercício 06 — Settings Toggle — peer e checked

Referência visual: [Figma — Exercise 06: Settings Toggle — peer e checked](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-145)  ·  Conceitos: Utility-first, flexbox, borders, colors, focus, responsive


### `src/components/exercises/Exercise06SettingsToggle.jsx`

```jsx
import ExerciseFrame from '../ExerciseFrame.jsx';

const SETTINGS = [
  {
    id: 'email',
    title: 'Email notifications',
    description: 'Receive product updates',
    defaultChecked: true,
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Receive campaigns',
    defaultChecked: false,
  },
];

/**
 * Exercise 06 — Settings Toggle
 * Conceitos: variante `peer` reagindo ao estado `checked` de um checkbox.
 *
 * O `peer` só estiliza irmãos *depois* dele no mesmo pai, por isso o
 * `input` precisa vir antes do elemento visual do switch.
 */
function Toggle({ id, defaultChecked }) {
  return (
    <label htmlFor={id} className="relative inline-flex cursor-pointer items-center">
      <input
        id={id}
        type="checkbox"
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />
      <span className="h-6 w-11 rounded-full bg-slate-300 transition-colors peer-checked:bg-blue-600 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-600" />
      <span className="absolute left-0.5 size-5 rounded-full bg-surface shadow-sm transition-transform peer-checked:translate-x-5" />
    </label>
  );
}

/**
 * Exercise 06 — Settings Toggle
 * Conceitos: peer, checked state, form controls.
 */
export default function Exercise06SettingsToggle() {
  return (
    <ExerciseFrame
      number="06"
      title="Settings Toggle"
      subtitle="peer · checked state · form controls"
    >
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
        <h3 className="text-xl font-bold text-foreground">Notification Settings</h3>
        <p className="mt-1 text-sm text-muted">
          Controle preferências usando estados de formulário.
        </p>

        <div className="mt-6 space-y-3">
          {SETTINGS.map((setting) => (
            <div
              key={setting.id}
              className="flex items-center justify-between gap-4 rounded-xl bg-subtle p-4 ring-1 ring-border"
            >
              <div className="min-w-0">
                <p className="font-semibold text-foreground">{setting.title}</p>
                <p className="text-sm text-muted">{setting.description}</p>
              </div>

              <Toggle id={setting.id} defaultChecked={setting.defaultChecked} />
            </div>
          ))}
        </div>
      </div>
    </ExerciseFrame>
  );
}
```


### Exercício 07 — FAQ Accordion — details e open

Referência visual: [Figma — Exercise 07: FAQ Accordion — details e open](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-166)  ·  Conceitos: Utility-first, spacing, typography, borders, colors


### `src/components/exercises/Exercise07FaqAccordion.jsx`

```jsx
import ExerciseFrame from '../ExerciseFrame.jsx';

const FAQS = [
  {
    question: 'O que é utility-first?',
    answer: 'É uma abordagem baseada na composição de pequenas utilities.',
    open: true,
  },
  {
    question: 'Tailwind substitui CSS?',
    answer:
      'Não. Tailwind é CSS: só que as classes são utilitárias e ficam no HTML.',
  },
  {
    question: 'Como funciona dark mode?',
    answer:
      'Com tokens semânticos: a mesma utility aponta para valores diferentes em cada tema.',
  },
];

/**
 * Exercise 07 — FAQ Accordion
 * Conceitos: <details> nativo e a variante `open:`.
 */
export default function Exercise07FaqAccordion() {
  return (
    <ExerciseFrame
      number="07"
      title="FAQ Accordion"
      subtitle="details/open · borders · spacing"
    >
      <div className="mx-auto w-full max-w-2xl">
        <h3 className="text-xl font-bold text-foreground">
          Frequently Asked Questions
        </h3>

        <div className="mt-5 space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              open={faq.open}
              className="group rounded-xl border border-border bg-surface px-4 py-3.5 transition-colors open:border-blue-500 open:bg-blue-50/60"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground marker:hidden">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-muted group-open:hidden"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="hidden text-xl leading-none text-blue-600 group-open:block"
                >
                  −
                </span>
              </summary>

              <p className="mt-2 text-sm text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </ExerciseFrame>
  );
}
```


### Exercício 08 — Dashboard Summary — Grid e composição

Referência visual: [Figma — Exercise 08: Dashboard Summary — Grid e composição](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-184)  ·  Conceitos: Utility-first, grid, flexbox, responsive, spacing, sizing, typography, colors, borders


### `src/components/exercises/Exercise08DashboardSummary.jsx`

```jsx
import ExerciseFrame from '../ExerciseFrame.jsx';

const STATS = [
  { label: 'Revenue', value: '128k' },
  { label: 'Orders', value: '1,842' },
  { label: 'Conversion', value: '4.7%' },
];

const BARS = [
  { height: 'h-8', color: 'bg-slate-200' },
  { height: 'h-14', color: 'bg-slate-200' },
  { height: 'h-20', color: 'bg-slate-200' },
  { height: 'h-24', color: 'bg-slate-200' },
  { height: 'h-28', color: 'bg-slate-200' },
  { height: 'h-32', color: 'bg-blue-600' },
];

const ACTIVITY = ['New order', 'Payment approved', 'User created'];

/**
 * Exercise 08 — Dashboard Summary
 * Conceitos: Grid, layout responsivo e composição.
 */
export default function Exercise08DashboardSummary() {
  return (
    <ExerciseFrame
      number="08"
      title="Dashboard Summary"
      subtitle="Grid · responsive layout · composition"
    >
      <div className="rounded-2xl bg-panel p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-foreground">Overview</h3>
          <button
            type="button"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Export
          </button>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-surface p-4 ring-1 ring-border"
            >
              <p className="text-sm text-muted">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-xl bg-surface p-5 ring-1 ring-border">
            <p className="font-bold text-foreground">Performance</p>

            <div className="mt-6 flex h-32 items-end gap-4">
              {BARS.map((bar, index) => (
                <div
                  key={index}
                  className={`flex-1 rounded-lg ${bar.height} ${bar.color}`}
                />
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-surface p-5 ring-1 ring-border">
            <p className="font-bold text-foreground">Activity</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {ACTIVITY.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-muted">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ExerciseFrame>
  );
}
```


### Exercício 09 — Theme Toggle Button — Light / Dark

Referência visual: [Figma — Exercise 09: Theme Toggle Button — Light / Dark](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=5-2)  ·  Conceitos: Utility-first, dark mode, @theme, @custom-variant, design tokens, colors, hover, focus


### `src/components/exercises/Exercise09ThemeToggle.jsx`

```jsx
import ExerciseFrame from '../ExerciseFrame.jsx';

/**
 * Exercise 09 — Theme Toggle Button
 * Conceitos: classe `dark`, tokens, estado do toggle e o mesmo markup nos dois temas.
 */
export default function Exercise09ThemeToggle({ isDark, onThemeChange }) {
  return (
    <ExerciseFrame
      number="09"
      title="Theme Toggle Button"
      subtitle="dark class · tokens · toggle state · same markup"
    >
      <div className="grid gap-5 rounded-2xl bg-panel p-5 md:grid-cols-2 md:p-6">
        {/* ---------------- Light ---------------- */}
        <article className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-bold text-foreground">Theme Lab</h3>
            <button
              type="button"
              onClick={() => onThemeChange(true)}
              aria-pressed={isDark}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Dark mode
            </button>
          </div>

          <h4 className="mt-5 text-2xl font-bold text-foreground">Light mode</h4>
          <p className="mt-1 text-sm text-muted">
            The same tokens use light values.
          </p>

          <div className="mt-5 rounded-xl bg-subtle p-4 ring-1 ring-border">
            <p className="font-bold text-foreground">Surface token</p>
            <p className="text-sm text-muted">bg-surface · text-muted</p>
          </div>

          <p className="mt-4">
            <span className="rounded bg-chestnut px-1.5 py-0.5 text-xs font-semibold text-white">
              Chestnut
            </span>
          </p>
        </article>

        {/* ---------------- Dark ---------------- */}
        <article className="dark rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-bold text-foreground">Theme Lab</h3>
            <button
              type="button"
              onClick={() => onThemeChange(false)}
              aria-pressed={!isDark}
              className="rounded-lg bg-amber-300 px-4 py-2 text-sm font-semibold text-amber-950 transition-colors hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Light mode
            </button>
          </div>

          <h4 className="mt-5 text-2xl font-bold text-foreground">Dark mode</h4>
          <p className="mt-1 text-sm text-muted">
            The same tokens use dark values.
          </p>

          <div className="mt-5 rounded-xl bg-subtle p-4 ring-1 ring-white/10">
            <p className="font-bold text-foreground">Surface token</p>
            <p className="text-sm text-muted">bg-surface · text-muted</p>
          </div>

          <p className="mt-4">
            <span className="rounded bg-chestnut px-1.5 py-0.5 text-xs font-semibold text-white">
              Chestnut
            </span>
          </p>
        </article>
      </div>
    </ExerciseFrame>
  );
}
```


---

## 4. Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # serve o build de produção
npm run lint     # oxlint
```

## 5. Conceitos aplicados

### Utility-first
Cada elemento é estilizado com classes utilitárias pequenas e compostas, no
próprio JSX — sem CSS separado e sem nomes de classe arbitrários.

### Design tokens e `@theme`
`@theme inline` registra os nomes semânticos (`surface`, `foreground`, `muted`,
`border`, `primary`, `chestnut`). O `inline` é essencial: ele faz a utility
usar `var(--surface)` diretamente, resolvendo no escopo do elemento — sem ele
o valor seria congelado no `:root` e o dark mode não funcionaria.

### Dark mode com `@custom-variant`
```css
@custom-variant dark (&:where(.dark, .dark *));
```
A variante `dark:` só aplica dentro de `.dark`. Aplicar `class="dark"` num
subtree cria um escopo local de tokens, como no Exercício 03.

### Camada de componentes com `@apply`
```css
@layer components {
  .card { @apply rounded-2xl border border-border bg-surface p-6 shadow-sm; }
  .btn-primary { @apply inline-flex items-center justify-center rounded-lg bg-primary ...; }
}
```

### Variante `peer`
O `peer` estiliza irmãos **depois** dele no mesmo pai. Por isso o `<input>`
do switch vem antes do elemento visual e reage a `peer-checked:`.

### Variante `open:`
Com `<details>` nativo, `open:` aplica o estado expandido sem JavaScript:
```jsx
<details className="rounded-xl border border-border bg-surface open:border-blue-500 open:bg-blue-50/60">
```

### Responsividade mobile-first
As utilities base atendem ao mobile; os breakpoints (`sm:`, `md:`, `lg:`)
expandem para telas maiores.
