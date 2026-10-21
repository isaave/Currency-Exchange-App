# Exercício 09 — Theme Toggle Button — Light / Dark

**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**

**Referência visual:** [Figma — Exercise 09: Theme Toggle Button — Light / Dark](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=5-2)

**Conceitos:** Utility-first, dark mode, @theme, @custom-variant, design tokens, colors, hover, focus

**Figma node-id:** `5-2`

---

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

