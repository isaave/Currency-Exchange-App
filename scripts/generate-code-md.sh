#!/usr/bin/env bash
# Gera o código do projeto em Markdown:
#   - CODIGO.md          (documento único com tudo)
#   - markdown/*.md      (um arquivo por exercício, para entregar separado)
# Sempre a partir dos fontes reais — sem transcrição manual.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/CODIGO.md"
OUTDIR="$ROOT/markdown"
BT='```'

mkdir -p "$OUTDIR"

# ---------------------------------------------------------------- helpers
emit_block() {
  # $1 = caminho relativo, $2 = linguagem
  printf '\n### `%s`\n\n%s%s\n%s\n%s\n\n' "$1" "$BT" "$2" "$(cat "$ROOT/$1")" "$BT"
}

emit_block_to() {
  # $1 = arquivo de destino, $2 = caminho relativo, $3 = linguagem
  printf '\n### `%s`\n\n%s%s\n%s\n%s\n\n' "$2" "$BT" "$3" "$(cat "$ROOT/$2")" "$BT" >> "$1"
}

# ---------------------------------------------------------------- tabela
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

emit_block "package.json" "json" >> "$OUT"
emit_block "vite.config.js" "js" >> "$OUT"
emit_block "index.html" "html" >> "$OUT"

cat >> "$OUT" <<'MID'

---

## 2. Tokens, tema e camada de componentes

O arquivo abaixo é o coração da aula: `@theme inline` registra os tokens
semânticos, `@custom-variant` liga o dark mode por classe, e `@layer components`
reúne as classes escritas com `@apply`.

MID

emit_block "src/index.css" "css" >> "$OUT"
emit_block "src/main.jsx" "jsx" >> "$OUT"
emit_block "src/App.jsx" "jsx" >> "$OUT"
emit_block "src/components/ExerciseFrame.jsx" "jsx" >> "$OUT"

cat >> "$OUT" <<'MID2'

---

## 3. Exercícios

MID2

# ---------------------------------------------------------------- por exercício
EXERCISES=(
  "01|Exercise01ProfileCard.jsx|Profile Card — entendendo Utility-First|1-4|Utility-first, spacing, sizing, typography, colors, borders, shadows, flexbox"
  "02|Exercise02ProductGrid.jsx|Product Grid — estados e responsividade|1-25|Grid, responsive, hover, focus, active, disabled, flexbox, utility-first"
  "03|Exercise03ThemeLab.jsx|Theme Lab — tokens, dark mode e @layer|1-59|Dark mode, @theme, @custom-variant, @layer, @apply, design tokens, colors, utility-first"
  "04|Exercise04LoginForm.jsx|Login Form — focus e acessibilidade|1-90|Utility-first, spacing, sizing, typography, colors, borders, focus, responsive"
  "05|Exercise05PricingCards.jsx|Pricing Cards — composição e hierarquia|1-112|Utility-first, spacing, typography, colors, borders, shadows, flexbox, grid, responsive"
  "06|Exercise06SettingsToggle.jsx|Settings Toggle — peer e checked|1-145|Utility-first, flexbox, borders, colors, focus, responsive"
  "07|Exercise07FaqAccordion.jsx|FAQ Accordion — details e open|1-166|Utility-first, spacing, typography, borders, colors"
  "08|Exercise08DashboardSummary.jsx|Dashboard Summary — Grid e composição|1-184|Utility-first, grid, flexbox, responsive, spacing, sizing, typography, colors, borders"
  "09|Exercise09ThemeToggle.jsx|Theme Toggle Button — Light / Dark|5-2|Utility-first, dark mode, @theme, @custom-variant, design tokens, colors, hover, focus"
)

FIGMA_FILE="https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges"

for entry in "${EXERCISES[@]}"; do
  IFS='|' read -r num file title node concepts <<< "$entry"
  link="$FIGMA_FILE?node-id=$node"

  # --- documento único
  {
    echo ""
    echo "### Exercício $num — $title"
    echo ""
    echo "Referência visual: [Figma — Exercise $num: $title]($link)  ·  Conceitos: $concepts"
    echo ""
  } >> "$OUT"
  emit_block "src/components/exercises/$file" "jsx" >> "$OUT"

  # --- arquivo individual
  slug="$(printf '%s' "$title" | LC_ALL=C tr -cs 'a-zA-Z0-9' '-' | tr 'A-Z' 'a-z' | sed 's/-\+/-/g; s/^-//; s/-$//')"
  one="$OUTDIR/exercicio-$num-$slug.md"
  {
    echo "# Exercício $num — $title"
    echo ""
    echo "**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**"
    echo ""
    echo "**Referência visual:** [Figma — Exercise $num: $title]($link)"
    echo ""
    echo "**Conceitos:** $concepts"
    echo ""
    echo "**Figma node-id:** \`$node\`"
    echo ""
    echo "---"
  } > "$one"
  emit_block_to "$one" "src/components/exercises/$file" "jsx"
done

# ---------------------------------------------------------------- conceituos
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

echo "CODIGO.md: $(wc -l < "$OUT") linhas"
echo "markdown/: $(ls "$OUTDIR" | wc -l | tr -d ' ') arquivos"
