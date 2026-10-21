# Tailwind Play — 8 Visual Challenges

**Aula 10 · Tailwind CSS 4.3 + React 19 + Vite 8**

Implementação dos 9 exercícios do *Tailwind Play — Board de Laboratórios*,
reproduzindo as referências visuais do Figma
**Tailwind Play — 8 Visual Challenges**.

## Exercícios

| # | Desafio | Conceitos | Figma |
|---|---|---|---|
| 01 | Profile Card | Utility-first, spacing, sizing, typography, colors, borders, shadows, flexbox | `node-id=1-4` |
| 02 | Product Grid | Grid, responsive, hover, focus, active, disabled | `node-id=1-25` |
| 03 | Theme Lab | Dark mode, `@theme`, `@custom-variant`, `@layer`, `@apply`, design tokens | `node-id=1-59` |
| 04 | Login Form | Utility-first, spacing, sizing, typography, colors, borders, focus, responsive | `node-id=1-90` |
| 05 | Pricing Cards | Utility-first, spacing, typography, colors, borders, shadows, flexbox, grid | `node-id=1-112` |
| 06 | Settings Toggle | Utility-first, flexbox, borders, colors, focus, responsive, `peer`/`checked` | `node-id=1-145` |
| 07 | FAQ Accordion | Utility-first, spacing, typography, borders, colors, `details`/`open` | `node-id=1-166` |
| 08 | Dashboard Summary | Utility-first, grid, flexbox, responsive, spacing, sizing, typography, colors, borders | `node-id=1-184` |
| 09 | Theme Toggle Button | Utility-first, dark mode, `@theme`, `@custom-variant`, design tokens, hover, focus | `node-id=5-2` |

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # serve o build de produção
npm run lint     # oxlint
```

## Estrutura

```
src/
├── components/
│   ├── ExerciseFrame.jsx          # casca visual comum aos exercícios
│   └── exercises/
│       ├── Exercise01ProfileCard.jsx
│       ├── Exercise02ProductGrid.jsx
│       ├── Exercise03ThemeLab.jsx
│       ├── Exercise04LoginForm.jsx
│       ├── Exercise05PricingCards.jsx
│       ├── Exercise06SettingsToggle.jsx
│       ├── Exercise07FaqAccordion.jsx
│       ├── Exercise08DashboardSummary.jsx
│       └── Exercise09ThemeToggle.jsx
├── index.css                     # @theme, @custom-variant, tokens e @layer components
├── App.jsx                       # shell, navegação e toggle global de tema
└── main.jsx
```

## O ponto central: tokens semânticos

O `src/index.css` registra os tokens com `@theme inline`. O `inline` é
essencial — ele faz a utility usar `var(--surface)` diretamente, resolvendo no
escopo do elemento. Sem ele o valor seria congelado no `:root` e o dark mode
não funcionaria dentro de um subtree.

```css
@theme inline {
  --color-surface: var(--surface);
}

:root { --surface: #ffffff; }
.dark { --surface: #151b34; }
```

E o dark mode por classe:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

O Exercício 03 aplica `class="dark"` em um único card para criar um escopo
local de tokens — as mesmas utilities, outros valores.

## Código em Markdown

[`CODIGO.md`](./CODIGO.md) reúne todo o código do projeto em blocos de
Markdown, pronto para entrega. É gerado automaticamente a partir dos fontes:

```bash
./scripts/generate-code-md.sh
```

## Referências

- Notion: [Aula 10 — Tailwind CSS 4.3 + React + Vite 8](https://deluxe-blue-bc1.notion.site/Aula-10-Tailwind-CSS-4-3-React-Vite-8-Guia-Completo-3f1dfca74d8d80e1acdde3b83c701491)
- Figma: [Tailwind Play — 8 Visual Challenges](https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo/Tailwind-Play-%E2%80%94-8-Visual-Challenges?node-id=1-4)
