# Exercício 08 — Dashboard Summary — Grid e composição

**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**

**Referência visual:** [Figma — Exercise 08: Dashboard Summary — Grid e composição](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-184)

**Conceitos:** Utility-first, grid, flexbox, responsive, spacing, sizing, typography, colors, borders

**Figma node-id:** `1-184`

---

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

