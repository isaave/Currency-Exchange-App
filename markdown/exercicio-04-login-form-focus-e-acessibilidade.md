# Exercício 04 — Login Form — focus e acessibilidade

**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**

**Referência visual:** [Figma — Exercise 04: Login Form — focus e acessibilidade](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-90)

**Conceitos:** Utility-first, spacing, sizing, typography, colors, borders, focus, responsive

**Figma node-id:** `1-90`

---

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

