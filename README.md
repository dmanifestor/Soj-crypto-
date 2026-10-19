# Meridian Bancorp — Private Wealth & Institutional Digital Custody

A high-performance institutional banking portal rewritten in standalone **vanilla HTML, CSS, and modern ES6+ JavaScript**, backed by Node.js, Express, and an SQLite treasury database.

## Architecture & Structure

- `index.html`: Standalone semantic HTML5 layout with dark-mode institutional banking portal, navigation router, and modular views.
- `styles.css`: Complete vanilla stylesheet implementing high-frequency trading theme, responsive mobile-first grid, depth visualizers, and dark gold accents.
- `script.js`: Clean ES6+ modular JavaScript handling reactive state, HTML5 Canvas candlestick charting, live order books, trade streams, token swapping, and API calls.
- `server.ts`: Express backend serving the standalone application and handling persistent SQLite endpoints (`/api/users`, `/api/requests`, `/api/login`, `/api/register`, `/api/health`).
- `userData.db`: SQLite database storing user accounts and transaction/refund requests.

## Key Features

1. **Institutional Landing Page**: Overview of digital custody, MPC cold-storage vaults, live volume statistics, and key architecture pillars.
2. **Private Client Dashboard**: Real-time available reserve balances ($47,986.00), required settlement fee accounting ($5,960.00), multi-network custody wallets (TRC-20, BEP-20, ERC-20), and searchable historical tranches ledger.
3. **High-Frequency Trading Terminal (Spot & Perps)**:
   - High-DPI HTML5 Canvas Candlestick Chart with 7 timeframe intervals (1m, 5m, 15m, 1H, 4H, 1D, 1W), EMA(20), Volume histogram, and line chart toggles.
   - Real-time Order Book with dynamic depth visualization and spread calculations.
   - Limit, Market, and Stop order execution with leverage sliders and quick balance fill buttons.
   - Open positions and orders tracking with real-time PnL and 1-click position settlement.
4. **Markets Screener**: Live market metrics, category filtering (Layer 1, AI & Data, Infra, Meme), search bar, and 7-day trend sparklines.
5. **Portfolio & Treasury**: Consolidated net worth calculations, visual asset allocation breakdown, and holding balances.
6. **Requests & Refund Manager**: Submission of slippage/fee claims and balance withdrawals, with dedicated compliance controls (Approve, Reject, Notes, Delete) for authorized administrators.
7. **Interactive REST API Explorer**: Live query execution panel testing backend endpoints against the SQLite database.
8. **Client Authentication**: Multi-role support (`admin` and `user`), password hashing, and instant 1-click demo accounts.

## Running Locally

Run directly with Node.js:
```bash
npm run dev
```
Navigate to `http://localhost:3000` or open `index.html` in any browser.
