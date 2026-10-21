# Exercício 02 — Product Grid — estados e responsividade

**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**

**Referência visual:** [Figma — Exercise 02: Product Grid — estados e responsividade](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-25)

**Conceitos:** Grid, responsive, hover, focus, active, disabled, flexbox, utility-first

**Figma node-id:** `1-25`

---

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

