# Exercício 06 — Settings Toggle — peer e checked

**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**

**Referência visual:** [Figma — Exercise 06: Settings Toggle — peer e checked](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-145)

**Conceitos:** Utility-first, flexbox, borders, colors, focus, responsive

**Figma node-id:** `1-145`

---

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

