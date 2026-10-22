# Currency Exchange — Projeto 02

**Conversão e análise de moedas** em uma Single Page Application construída com
**React** e consumindo a API aberta **Frankfurter**.

A aplicação permite converter valores entre moedas com taxas em tempo real,
visualizar a evolução histórica da taxa de câmbio e exportar o histórico de
conversões em CSV.

## Stack

| Tecnologia | Versão |
|---|---|
| React | 19 |
| Vite | 8 |
| Tailwind CSS | 4 |
| Recharts | 3 |
| API Frankfurter | `https://api.frankfurter.dev/v1` |

## Funcionalidades

- **Conversor de moedas** — valor, moeda de origem e moeda de destino com
  cotação em tempo real (API Frankfurter) e botão de converter.
- **Taxa de cotação** — exibição da taxa (1 USD = X BRL) e valor convertido,
  com a data da cotação.
- **Gráfico de evolução** — linha com a taxa histórica (últimos 30 dias) para a
  paridade selecionada.
- **Histórico de conversões** — registro de conversões realizadas (estado
  controlado no `App`, custom hook `useConversions`).
- **Filtros e ordenação** — ordenação clicável nas colunas do histórico e
  filtro por texto.
- **Exportação CSV** — download do histórico (filtro/ordenação aplicados) em
  arquivo `conversoes.csv`.

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # serve o build de produção
npm run lint     # oxlint
```

## Estrutura do projeto

```
src/
├── api/
│   └── frankfurter.js      # funções de consumo da API (fetch + async/await)
├── components/
│   ├── Header.jsx
│   ├── Converter.jsx       # conversor + cotação em tempo real
│   ├── ExchangeChart.jsx  # gráfico de evolução da taxa
│   └── HistoryTable.jsx   # histórico, filtros, ordenação e CSV
├── hooks/
│   ├── useCurrencies.js        # custom hook: lista de moedas
│   ├── useExchangeRate.js      # custom hook: taxa mais recente
│   ├── useHistoricalRates.js  # custom hook: histórico de taxas
│   └── useConversions.js       # custom hook: estado do histórico
├── utils/
│   ├── csv.js             # conversão para CSV + download
│   ├── dates.js           # helpers de data ISO
│   └── format.js          # formatação de moeda/taxa/data
├── App.jsx                # shell, estado da paridade e do histórico (lifting state up)
└── main.jsx
```

## API Frankfurter

- **Cotações em tempo real:** `GET /v1/latest?base=USD&symbols=BRL`
- **Histórico em período:** `GET /v1/{start_date}..{end_date}?base=USD&symbols=BRL`
- **Histórico de um dia:** `GET /v1/{date}?base=USD&symbols=BRL`
- **Moedas disponíveis:** `GET /v1/currencies`

Documentação completa: <https://frankfurter.dev>

## Coleção Postman

A collection consumindo os endpoints da API está em
[`postman/currency-exchange.postman_collection.json`](./postman/currency-exchange.postman_collection.json).

## Conceitos trabalhados

- React e JSX
- Componentização e props
- Eventos
- `useState` e `useEffect`
- Lifting State Up
- Custom Hooks
- Consumo de API com `fetch` e `async/await`
- Manipulação de arrays e objetos
- Gráficos
- Filtros e ordenação
- Exportação CSV
- Git e GitHub

## Entrega

Checklist da entrega do Projeto 02:

- [x] Repositório público no GitHub
- [x] Aplicação funcionando
- [x] Documentação do projeto
- [ ] Protótipos no Figma
- [ ] Collection do Postman
- [x] Histórico de commits demonstrando a evolução do desenvolvimento
- [ ] Data final de entrega: 27/10/2026
