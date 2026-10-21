# Referência de Design — Tailwind Play: 8 Visual Challenges

Especificação extraída do arquivo Figma usado como referência visual da Aula 10.

**Arquivo Figma:** [Tailwind Play — 8 Visual Challenges](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-4)

> Cada frame do Figma mede **720 × 520** e é rotulado como `Exercise NN — Nome`.
> O objetivo de cada exercício é reproduzir o frame **a partir de HTML sem
> estilização**, usando apenas utilities Tailwind.

---

## Mapa do arquivo

| Frame | node-id | Exercício | Conceitos |
|---|---|---|---|
| Exercise 01 — Profile Card | [`1-4`](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-4) | Profile Card | Utility-first, spacing, sizing, typography, colors, borders, shadows, flexbox |
| Exercise 02 — Product Grid | [`1-25`](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-25) | Product Grid | Grid, responsive, hover, focus, active, disabled, flexbox |
| Exercise 03 — Theme Lab | [`1-59`](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-59) | Theme Lab | Dark mode, `@theme`, `@custom-variant`, `@layer`, `@apply`, design tokens |
| Exercise 04 — Login Form | [`1-90`](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-90) | Login Form | Utility-first, spacing, sizing, typography, colors, borders, focus, responsive |
| Exercise 05 — Pricing Cards | [`1-112`](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-112) | Pricing Cards | Utility-first, spacing, typography, colors, borders, shadows, flexbox, grid |
| Exercise 06 — Settings Toggle | [`1-145`](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-145) | Settings Toggle | Utility-first, flexbox, borders, colors, focus, responsive |
| Exercise 07 — FAQ Accordion | [`1-166`](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-166) | FAQ Accordion | Utility-first, spacing, typography, borders, colors |
| Exercise 08 — Dashboard Summary | [`1-184`](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-184) | Dashboard Summary | Utility-first, grid, flexbox, responsive, spacing, sizing, typography, colors, borders |
| Exercise 09 — Theme Toggle Button | [`5-2`](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=5-2) | Theme Toggle Button | Utility-first, dark mode, `@theme`, `@custom-variant`, design tokens, hover, focus |

---

## Paleta e tokens

O design usa uma paleta enxuta. As duas únicas cores de marca são o **azul**
(primary) e o **roxo** (destaque). O par **chestnut** existe só para exercitar
os tokens semânticos no Theme Lab.

| Papel no Figma | Valor | Token no projeto |
|---|---|---|
| Primary / ação principal | `#2563eb` | `--primary` · `bg-primary` |
| Primary hover | `#1d4ed8` | `--primary-strong` |
| Badge azul (fundo) | `#eff6ff` | `bg-blue-50` |
| Badge roxo (fundo) | `#f5f3ff` | `bg-violet-50` |
| Texto de destaque roxo | `#7c3aed` | `text-violet-600` |
| Borda padrão | `#e2e8f0` | `--border` · `border-border` |
| Painel de fundo | `#f1f5f9` | `--panel` · `bg-panel` |
| Superfície (card) | `#ffffff` | `--surface` · `bg-surface` |
| Texto principal | `#0f172a` | `--foreground` · `text-foreground` |
| Texto secundário | `#64748b` | `--muted` · `text-muted` |
| Chestnut (tema claro) | `#8b4a2f` | `--chestnut` · `bg-chestnut` |
| Chestnut (tema escuro) | `#b5795f` | `--chestnut-dark` · `bg-chestnut-dark` |
| Superfície (tema escuro) | `#151b34` | `--surface` sob `.dark` |
| Gradiente ciano | `#22d3ee → #06b6d4` | `from-cyan-400 to-cyan-500` |
| Gradiente roxo | `#8b5cf6 → #7c3aed` | `from-violet-500 to-violet-600` |
| Gradiente navy | `#334155 → #0f172a` | `from-slate-700 to-slate-900` |
| Botão "Light mode" | `#fcd34d` | `bg-amber-300` |

---

## Detalhes por frame

### Exercise 01 — Profile Card
Avatar circular azul com as iniciais, badge `FRONT-END` em azul claro, nome em
peso bold, linha de metadados, parágrafo e dois botões (primário azul e
secundário cinza).

```jsx
<div className="flex items-center gap-4">
  <span className="flex size-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">FC</span>
  ...
</div>
```

### Exercise 02 — Product Grid
Três cards em grade. Cada card tem um cabeçalho colorido com o número em
`text-5xl`, rótulo colorido, título, descrição e botão de largura total. O
terceiro está desabilitado (`Locked`, cinza, `cursor-not-allowed`).

```jsx
<div className="grid gap-4 rounded-2xl bg-panel p-4 sm:grid-cols-2 lg:grid-cols-3">
```

### Exercise 03 — Theme Lab
Dois cards lado a lado com **o mesmo layout**. O da direita escurece via
`class="dark"`, o que cria um escopo local de tokens. Dentro de cada um: badge
`LIGHT`/`DARK`, título, linha de tokens, caixa de superfície, barra `Chestnut`
e botão `Primary`.

```jsx
<article className="dark rounded-2xl bg-surface p-6 ring-1 ring-border">
```

### Exercise 04 — Login Form
Card centralizado, título `Welcome back`, dois campos com label acima,
checkbox + link de recuperação na mesma linha, botão azul em largura total.
O foco do input é o ponto principal do exercício.

```jsx
className="... focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
```

### Exercise 05 — Pricing Cards
Três planos. O do meio (`Pro`) é o destaque: fundo `violet-50`, borda
`ring-2 ring-violet-500`, badge `POPULAR` e botão roxo. Os outros dois ficam
em branco com botão azul.

```jsx
'flex flex-col rounded-2xl bg-violet-50 p-6 ring-2 ring-violet-500'
```

### Exercise 06 — Settings Toggle
Card com duas linhas de configuração. Cada linha tem um switch montado com
checkbox `sr-only` + `peer`, e o trilho muda de `bg-slate-300` para
`bg-blue-600` via `peer-checked:`. A knob é um círculo branco que translada
com `peer-checked:translate-x-5`.

```jsx
<input type="checkbox" className="peer sr-only" />
<span className="h-6 w-11 rounded-full bg-slate-300 peer-checked:bg-blue-600" />
<span className="absolute left-0.5 size-5 rounded-full bg-white peer-checked:translate-x-5" />
```

### Exercise 07 — FAQ Accordion
Três `<details>`. O primeiro vem aberto, com borda azul (`open:border-blue-500`),
fundo azul translúcido (`open:bg-blue-50/60`) e ícone **−**. Os fechados têm
borda cinza e ícone **+**. O ícone alterna com `group-open:`.

```jsx
<details className="group rounded-xl border border-border bg-surface open:border-blue-500 open:bg-blue-50/60">
```

### Exercise 08 — Dashboard Summary
Painel cinza com cabeçalho `Overview` e botão `Export` escuro. Três cards de
indicador, abaixo um card largo de `Performance` (gráfico de barras — a última
barra em azul) e ao lado um card `Activity` com três itens.

```jsx
<div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
```

### Exercise 09 — Theme Toggle Button
Dois cards com markup idêntico, um em cada tema. O botão do card claro é
`Dark mode` (escuro) e o do card escuro é `Light mode` (âmbar). Ambos
acionam o mesmo toggle, que aplica `.dark` no `<html>`.

```jsx
document.documentElement.classList.toggle('dark', nextDark);
```

---

## Regras que valem para todos os frames

1. **Mobile-first** — o layout base é de uma coluna; `sm:`, `md:` e `lg:`
   expandem para telas maiores.
2. **Sem CSS customizado** — tudo com utilities. Onde o padrão se repete
   (`card`, `btn-primary`, `btn-secondary`), a regra vive em `@layer components`
   com `@apply`.
3. **Estados de foco visíveis** — `focus-visible:outline-2` +
   `focus-visible:outline-offset-2` em todo elemento interativo.
4. **Tokens semânticos** — sempre que o exercí­cio é sobre tema, usar
   `bg-surface` / `text-foreground` / `text-muted` / `border-border` em vez de
   cores literais.

---

## Código-fonte

A implementação está em [`src/components/exercises/`](../src/components/exercises/),
e o código completo em Markdown está em [`CODIGO.md`](../CODIGO.md) e na pasta
[`markdown/`](../markdown/).
