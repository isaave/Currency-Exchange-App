# Exercício 01 — Profile Card — entendendo Utility-First

**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**

**Referência visual:** [Figma — Exercise 01: Profile Card — entendendo Utility-First](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-4)

**Conceitos:** Utility-first, spacing, sizing, typography, colors, borders, shadows, flexbox

**Figma node-id:** `1-4`

---

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

