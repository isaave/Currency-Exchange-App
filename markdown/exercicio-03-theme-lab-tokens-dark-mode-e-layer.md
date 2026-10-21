# Exercício 03 — Theme Lab — tokens, dark mode e @layer

**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**

**Referência visual:** [Figma — Exercise 03: Theme Lab — tokens, dark mode e @layer](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-59)

**Conceitos:** Dark mode, @theme, @custom-variant, @layer, @apply, design tokens, colors, utility-first

**Figma node-id:** `1-59`

---

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

