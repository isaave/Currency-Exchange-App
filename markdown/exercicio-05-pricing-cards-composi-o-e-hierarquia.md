# Exercício 05 — Pricing Cards — composição e hierarquia

**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**

**Referência visual:** [Figma — Exercise 05: Pricing Cards — composição e hierarquia](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-112)

**Conceitos:** Utility-first, spacing, typography, colors, borders, shadows, flexbox, grid, responsive

**Figma node-id:** `1-112`

---

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

