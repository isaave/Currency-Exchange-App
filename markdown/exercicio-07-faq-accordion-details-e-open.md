# Exercício 07 — FAQ Accordion — details e open

**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**

**Referência visual:** [Figma — Exercise 07: FAQ Accordion — details e open](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-166)

**Conceitos:** Utility-first, spacing, typography, borders, colors

**Figma node-id:** `1-166`

---

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

