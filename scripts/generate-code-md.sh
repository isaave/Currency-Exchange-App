#!/usr/bin/env bash
# Gera CODIGO.md concatenando o código real do projeto (sem transcrição manual).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/CODIGO.md"

emit_file() {
  local path="$1" lang="$2" title="$3"
  local BT='```'
  {
    echo ""
    echo "### \`$path\`"
    echo ""
    echo "${BT}${lang}"
    cat "$ROOT/$path"
    echo "${BT}"
    echo ""
  } >> "$OUT"
}

cat > "$OUT" <<'HEADER'
# Tailwind Play — 8 Visual Challenges

**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**

Implementação dos 9 exercícios do *Tailwind Play — Board de Laboratórios*, com as
referências visuais do Figma **Tailwind Play — 8 Visual Challenges**.

| Exercício | Conceitos | Figma |
|---|---|---|
| 01 — Profile Card | Utility-first, spacing, sizing, typography, colors, borders, shadows, flexbox | `node-id=1-4` |
| 02 — Product Grid | Grid, responsive, hover, focus, active, disabled | `node-id=1-25` |
| 03 — Theme Lab | Dark mode, `@theme`, `@custom-variant`, `@layer`, `@apply`, design tokens | `node-id=1-59` |
| 04 — Login Form | Utility-first, spacing, sizing, typography, colors, borders, focus, responsive | `node-id=1-90` |
| 05 — Pricing Cards | Utility-first, spacing, typography, colors, borders, shadows, flexbox, grid | `node-id=1-112` |
| 06 — Settings Toggle | Utility-first, flexbox, borders, colors, focus, responsive, `peer`/`checked` | `node-id=1-145` |
| 07 — FAQ Accordion | Utility-first, spacing, typography, borders, colors, `details`/`open` | `node-id=1-166` |
| 08 — Dashboard Summary | Utility-first, grid, flexbox, responsive, spacing, sizing, typography, colors, borders | `node-id=1-184` |
| 09 — Theme Toggle Button | Utility-first, dark mode, `@theme`, `@custom-variant`, design tokens, hover, focus | `node-id=5-2` |

---

## 1. Setup

HEADER

emit_file "package.json" "json" "package.json"
emit_file "vite.config.js" "js" "vite.config.js"
emit_file "index.html" "html" "index.html"

cat >> "$OUT" <<'MID'

---

## 2. Tokens, tema e camada de componentes

O arquivo abaixo é o coração da aula: `@theme inline` registra os tokens
semânticos, `@custom-variant` liga o dark mode por classe, e `@layer components`
reúne as classes escritas com `@apply`.

MID

emit_file "src/index.css" "css" "src/index.css"
emit_file "src/main.jsx" "jsx" "src/main.jsx"
emit_file "src/App.jsx" "jsx" "src/App.jsx"
emit_file "src/components/ExerciseFrame.jsx" "jsx" "src/components/ExerciseFrame.jsx"

cat >> "$OUT" <<'MID2'

---

## 3. Exercícios

MID2

for entry in \
  "01|Exercise01ProfileCard.jsx|Profile Card — entendendo Utility-First" \
  "02|Exercise02ProductGrid.jsx|Product Grid — estados e responsividade" \
  "03|Exercise03ThemeLab.jsx|Theme Lab — tokens, dark mode e @layer" \
  "04|Exercise04LoginForm.jsx|Login Form — focus e acessibilidade" \
  "05|Exercise05PricingCards.jsx|Pricing Cards — composição e hierarquia" \
  "06|Exercise06SettingsToggle.jsx|Settings Toggle — peer e checked" \
  "07|Exercise07FaqAccordion.jsx|FAQ Accordion — details e open" \
  "08|Exercise08DashboardSummary.jsx|Dashboard Summary — Grid e composição" \
  "09|Exercise09ThemeToggle.jsx|Theme Toggle Button — Light / Dark"
do
  num="${entry%%|*}"; rest="${entry#*|}"
  file="${rest%%|*}"; title="${rest#*|}"
  {
    echo ""
    echo "### Exercício $num — $title"
    echo ""
  } >> "$OUT"
  emit_file "src/components/exercises/$file" "jsx" "src/components/exercises/$file"
done

cat >> "$OUT" <<'FOOTER'

---

## 4. Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # serve o build de produção
npm run lint     # oxlint
```

## 5. Conceitos aplicados

### Utility-first
Cada elemento é estilizado com classes utilitárias pequenas e compostas, no
próprio JSX — sem CSS separado e sem nomes de classe arbitrários.

### Design tokens e `@theme`
`@theme inline` registra os nomes semânticos (`surface`, `foreground`, `muted`,
`border`, `primary`, `chestnut`). O `inline` é essencial: ele faz a utility
usar `var(--surface)` diretamente, resolvendo no escopo do elemento — sem ele
o valor seria congelado no `:root` e o dark mode não funcionaria.

### Dark mode com `@custom-variant`
```css
@custom-variant dark (&:where(.dark, .dark *));
```
A variante `dark:` só aplica dentro de `.dark`. Aplicar `class="dark"` num
subtree cria um escopo local de tokens, como no Exercício 03.

### Camada de componentes com `@apply`
```css
@layer components {
  .card { @apply rounded-2xl border border-border bg-surface p-6 shadow-sm; }
  .btn-primary { @apply inline-flex items-center justify-center rounded-lg bg-primary ...; }
}
```

### Variante `peer`
O `peer` estiliza irmãos **depois** dele no mesmo pai. Por isso o `<input>`
do switch vem antes do elemento visual e reage a `peer-checked:`.

### Variante `open:`
Com `<details>` nativo, `open:` aplica o estado expandido sem JavaScript:
```jsx
<details className="rounded-xl border border-border bg-surface open:border-blue-500 open:bg-blue-50/60">
```

### Responsividade mobile-first
As utilities base atendem ao mobile; os breakpoints (`sm:`, `md:`, `lg:`)
expandem para telas maiores.
FOOTER

echo "CODIGO.md gerado: $(wc -l < "$OUT") linhas"
