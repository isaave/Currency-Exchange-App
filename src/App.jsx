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
