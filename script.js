/**
 * ============================================================================
 * MERIDIAN BANCORP — Institutional Wealth & Digital Custody
 * Standalone Vanilla JavaScript Application (Complete & Robust)
 * ============================================================================
 */

// ============================================================================
// SECTION 1: GLOBAL DATA CONSTANTS & INITIAL STATE
// ============================================================================

const INITIAL_MARKETS = [
  {
    id: 'BTC-USDT',
    symbol: 'BTC/USDT',
    baseAsset: 'BTC',
    quoteAsset: 'USDT',
    name: 'Bitcoin',
    price: 89450.00,
    change24h: 3.42,
    high24h: 90210.00,
    low24h: 86120.00,
    volume24h: 2845620180,
    fundingRate: 0.0100,
    category: 'Layer 1',
    precision: 2,
    sparkline: [86100, 86450, 87200, 86900, 88100, 87800, 88900, 89200, 89450],
  },
  {
    id: 'ETH-USDT',
    symbol: 'ETH/USDT',
    baseAsset: 'ETH',
    quoteAsset: 'USDT',
    name: 'Ethereum',
    price: 3415.50,
    change24h: 4.85,
    high24h: 3480.00,
    low24h: 3240.20,
    volume24h: 1423890400,
    fundingRate: 0.0085,
    category: 'Layer 1',
    precision: 2,
    sparkline: [3240, 3270, 3310, 3290, 3350, 3380, 3420, 3400, 3415],
  },
  {
    id: 'SOL-USDT',
    symbol: 'SOL/USDT',
    baseAsset: 'SOL',
    quoteAsset: 'USDT',
    name: 'Solana',
    price: 194.75,
    change24h: 7.62,
    high24h: 198.50,
    low24h: 179.30,
    volume24h: 984500120,
    fundingRate: 0.0125,
    category: 'Layer 1',
    precision: 2,
    sparkline: [179, 182, 185, 183, 189, 191, 196, 193, 194.75],
  },
  {
    id: 'RENDER-USDT',
    symbol: 'RENDER/USDT',
    baseAsset: 'RENDER',
    quoteAsset: 'USDT',
    name: 'Render Network',
    price: 7.82,
    change24h: 12.40,
    high24h: 8.15,
    low24h: 6.90,
    volume24h: 312400900,
    fundingRate: 0.0150,
    category: 'AI & Data',
    precision: 3,
    sparkline: [6.9, 7.1, 7.0, 7.3, 7.5, 7.4, 7.7, 7.9, 7.82],
  },
  {
    id: 'SUI-USDT',
    symbol: 'SUI/USDT',
    baseAsset: 'SUI',
    quoteAsset: 'USDT',
    name: 'Sui Network',
    price: 3.28,
    change24h: -1.84,
    high24h: 3.45,
    low24h: 3.19,
    volume24h: 420950300,
    fundingRate: 0.0075,
    category: 'Layer 1',
    precision: 3,
    sparkline: [3.35, 3.40, 3.42, 3.38, 3.31, 3.25, 3.22, 3.26, 3.28],
  },
  {
    id: 'LINK-USDT',
    symbol: 'LINK/USDT',
    baseAsset: 'LINK',
    quoteAsset: 'USDT',
    name: 'Chainlink',
    price: 18.64,
    change24h: 5.12,
    high24h: 19.10,
    low24h: 17.65,
    volume24h: 198750400,
    fundingRate: 0.0090,
    category: 'Infra',
    precision: 2,
    sparkline: [17.6, 17.9, 18.2, 18.0, 18.4, 18.5, 18.8, 18.7, 18.64],
  },
  {
    id: 'AVAX-USDT',
    symbol: 'AVAX/USDT',
    baseAsset: 'AVAX',
    quoteAsset: 'USDT',
    name: 'Avalanche',
    price: 34.20,
    change24h: 2.15,
    high24h: 35.10,
    low24h: 33.15,
    volume24h: 165400200,
    fundingRate: 0.0060,
    category: 'Layer 1',
    precision: 2,
    sparkline: [33.2, 33.5, 33.8, 33.6, 34.0, 34.3, 34.5, 34.1, 34.2],
  },
  {
    id: 'PEPE-USDT',
    symbol: 'PEPE/USDT',
    baseAsset: 'PEPE',
    quoteAsset: 'USDT',
    name: 'Pepe',
    price: 0.00001245,
    change24h: 15.80,
    high24h: 0.00001320,
    low24h: 0.00001050,
    volume24h: 580400100,
    fundingRate: 0.0210,
    category: 'Meme',
    precision: 8,
    sparkline: [0.0000105, 0.000011, 0.0000115, 0.0000112, 0.000012, 0.0000122, 0.0000128, 0.0000126, 0.00001245],
  }
];

const CLIENT_DESTINATION_WALLETS = [
  {
    network: 'Trc-20',
    title: 'TRC-20 (Tron Network)',
    address: 'TK4HkBbHm2ZaPMYE3PY93WGXb667xheFb5',
    tag: 'USDT-TRC20 / TRX',
  },
  {
    network: 'Bep-20',
    title: 'BEP-20 (BNB Smart Chain)',
    address: '0xc0c2ef5c5c6eab62e4d2593846035ae0b09edee4',
    tag: 'USDT-BEP20 / BNB',
  },
  {
    network: 'ERC-20',
    title: 'ERC-20 (Ethereum Network)',
    address: '0xc0c2ef5c5c6eab62e4d2593846035ae0b09edee4',
    tag: 'USDT-ERC20 / ETH',
  },
];

const SETTLEMENT_HISTORY_DATA = [
  {
    id: 'inv-1',
    date: 'March 8, 2019',
    investedAmount: 5000.00,
    withdrawalAmount: 11750.00,
    profitAmount: 6750.00,
    feePaid: 1586.00,
    status: 'completed',
    notes: 'Initial account investment deposit & withdrawal',
  },
  {
    id: 'inv-2',
    date: 'October 29, 2019',
    investedAmount: 4000.00,
    withdrawalAmount: 12000.00,
    profitAmount: 8000.00,
    feePaid: 1264.00,
    status: 'completed',
    notes: 'Automated yield cycle return',
  },
  {
    id: 'inv-3',
    date: 'January 6, 2020',
    investedAmount: 500.00,
    withdrawalAmount: 2000.00,
    profitAmount: 1500.00,
    feePaid: 300.00,
    status: 'completed',
    notes: 'Micro-allocation tranche withdrawal',
  },
  {
    id: 'inv-4',
    date: 'July 14, 2020',
    investedAmount: 7000.00,
    withdrawalAmount: 16000.00,
    profitAmount: 9000.00,
    feePaid: 2000.00,
    status: 'completed',
    notes: 'Mid-year growth portfolio settlement',
  },
  {
    id: 'inv-5',
    date: 'February 10, 2021',
    investedAmount: 1000.00,
    withdrawalAmount: 4000.00,
    profitAmount: 3000.00,
    feePaid: 700.00,
    status: 'completed',
    notes: 'Q1 investment cycle distribution',
  },
  {
    id: 'inv-6',
    date: 'September 20, 2021',
    investedAmount: 10000.00,
    withdrawalAmount: 31000.00,
    profitAmount: 21000.00,
    feePaid: 3900.00,
    status: 'completed',
    notes: 'High-tier allocation settlement',
  },
  {
    id: 'inv-7',
    date: 'January 5, 2022',
    investedAmount: 6000.00,
    withdrawalAmount: 14000.00,
    profitAmount: 8000.00,
    feePaid: 1800.00,
    status: 'completed',
    notes: 'Annual rollover distribution',
  },
  {
    id: 'inv-8',
    date: 'April 12, 2022',
    investedAmount: 4000.00,
    withdrawalAmount: 0,
    profitAmount: 12000.00,
    feePaid: 0,
    status: 'reinvested',
    notes: 'Profit of $12,000 reinvested into portfolio on July 7, 2022',
  },
];

// ============================================================================
// SECTION 1B: CLIENT PROFILES & MULTI-USER ISOLATION REGISTRY
// ============================================================================

const CLIENT_PROFILES = {
  'testing-test-2': {
    username: 'testing-test-2',
    name: 'Testing Account 2',
    accountNumber: 'MB-992104',
    role: 'user',
    standing: 'Private Client Tier 1 (Verified)',
    availableBalance: 38500.00,
    requiredFee: 3850.00,
    totalProfits: 42100.00,
    activeRequestId: 'REQ-1092',
    wallets: [
      {
        network: 'Trc-20',
        title: 'TRC-20 (Tron Network - Private)',
        address: 'TK4HkBbHm2ZaPMYE3PY93WGXb667xheFb5',
        tag: 'USDT-TRC20 / TRX',
      },
      {
        network: 'ERC-20',
        title: 'ERC-20 (Ethereum Settlement Vault)',
        address: '0x71C802a884E4912908129034F182098481234e89',
        tag: 'USDT-ERC20 / ETH',
      }
    ],
    tranches: [
      { id: 'TRN-101', date: 'January 14, 2024', investedAmount: 10000.00, withdrawalAmount: 22000.00, profitAmount: 12000.00, feePaid: 2200.00, status: 'completed', notes: 'Algorithmic delta-neutral treasury tranche distribution' },
      { id: 'TRN-102', date: 'May 20, 2024', investedAmount: 5000.00, withdrawalAmount: 14500.00, profitAmount: 9500.00, feePaid: 1450.00, status: 'completed', notes: 'Q2 digital asset custody distribution' },
      { id: 'TRN-103', date: 'October 10, 2024', investedAmount: 15000.00, withdrawalAmount: 35600.00, profitAmount: 20600.00, feePaid: 3560.00, status: 'completed', notes: 'Institutional staking yield distribution' },
    ]
  },
  'alex_vance': {
    username: 'alex_vance',
    name: 'Alex Vance',
    accountNumber: 'MB-884102',
    role: 'user',
    standing: 'Private High-Tier Custody',
    availableBalance: 47986.00,
    requiredFee: 5960.00,
    totalProfits: 71250.00,
    activeRequestId: 'REQ-1088',
    wallets: CLIENT_DESTINATION_WALLETS,
    tranches: SETTLEMENT_HISTORY_DATA
  },
  'sarah_crypto': {
    username: 'sarah_crypto',
    name: 'Sarah Lin',
    accountNumber: 'MB-763401',
    role: 'user',
    standing: 'Institutional Liquidity Vault',
    availableBalance: 64200.00,
    requiredFee: 6200.00,
    totalProfits: 89400.00,
    activeRequestId: 'REQ-1075',
    wallets: [
      {
        network: 'ERC-20',
        title: 'ERC-20 (Ethereum Network)',
        address: '0x88F0129038481234e8971C802a884E4912908129',
        tag: 'ETH / USDT Custodial Vault',
      },
      {
        network: 'Bep-20',
        title: 'BEP-20 (BNB Smart Chain)',
        address: '0xc0c2ef5c5c6eab62e4d2593846035ae0b09edee4',
        tag: 'BNB / USDT',
      }
    ],
    tranches: [
      { id: 'SL-01', date: 'February 18, 2023', investedAmount: 20000.00, withdrawalAmount: 48000.00, profitAmount: 28000.00, feePaid: 4800.00, status: 'completed', notes: 'High-frequency liquidity provisioning yield' },
      { id: 'SL-02', date: 'August 24, 2023', investedAmount: 15000.00, withdrawalAmount: 39500.00, profitAmount: 24500.00, feePaid: 3950.00, status: 'completed', notes: 'Perpetual contract hedging settlement' },
      { id: 'SL-03', date: 'March 11, 2024', investedAmount: 25000.00, withdrawalAmount: 61900.00, profitAmount: 36900.00, feePaid: 6190.00, status: 'completed', notes: 'Private institutional custody release' }
    ]
  },
  'joeldan228@gmail.com': {
    username: 'joeldan228@gmail.com',
    name: 'Joel Dan (Admin)',
    accountNumber: 'MB-ADM-HQ01',
    role: 'admin',
    standing: 'Operations Desk (Executive Clearance)',
    availableBalance: 2450000.00,
    requiredFee: 0.00,
    totalProfits: 1280000.00,
    activeRequestId: 'REQ-2233',
    wallets: CLIENT_DESTINATION_WALLETS,
    tranches: SETTLEMENT_HISTORY_DATA
  }
};

function getActiveProfileData() {
  const currentUser = appState.currentUser;
  if (!currentUser) {
    return CLIENT_PROFILES['alex_vance'];
  }

  // If Admin: authorized to access other users' profiles via inspector
  if (currentUser.role === 'admin') {
    const targetUser = appState.inspectedClientUsername || currentUser.username;
    if (CLIENT_PROFILES[targetUser]) {
      return CLIENT_PROFILES[targetUser];
    }
    return {
      username: targetUser,
      name: targetUser.includes('@') ? targetUser.split('@')[0] : targetUser,
      accountNumber: 'MB-' + Math.floor(100000 + Math.random() * 900000),
      role: 'user',
      standing: 'Verified Client Profile (Inspected by Admin)',
      availableBalance: 52000.00,
      requiredFee: 5200.00,
      totalProfits: 68000.00,
      wallets: CLIENT_DESTINATION_WALLETS,
      tranches: SETTLEMENT_HISTORY_DATA
    };
  }

  // Standard Client: STRICT ISOLATION - only access their own profile!
  const myUsername = currentUser.username;
  if (CLIENT_PROFILES[myUsername]) {
    return CLIENT_PROFILES[myUsername];
  }

  // Dynamic profile for newly registered client
  return {
    username: myUsername,
    name: currentUser.name || myUsername,
    accountNumber: 'MB-77' + (currentUser.id ? String(currentUser.id).padStart(4, '0') : '8192'),
    role: 'user',
    standing: 'Private Client Tier 1 (Isolated Custody)',
    availableBalance: 32500.00,
    requiredFee: 3250.00,
    totalProfits: 28400.00,
    activeRequestId: currentUser.requestId || null,
    wallets: CLIENT_DESTINATION_WALLETS,
    tranches: [
      { id: 'INV-NEW-1', date: 'Current Cycle', investedAmount: 15000.00, withdrawalAmount: 26000.00, profitAmount: 11000.00, feePaid: 2600.00, status: 'completed', notes: 'Initial institutional vault allocation' }
    ]
  };
}

// App State Container
const appState = {
  markets: [...INITIAL_MARKETS],
  activePair: INITIAL_MARKETS[0],
  activeTab: 'home',
  timeframe: '15m',
  chartType: 'candles',
  showEMA: true,
  showVolume: true,
  candles: [],
  orderBook: { bids: [], asks: [], spread: 0 },
  trades: [],
  currentUser: null,
  inspectedClientUsername: null,
  requestFilterStatus: 'all',
  requestSearchQuery: '',
  wallet: {
    totalUsd: 78450.25,
    availableUsd: 42800.00,
    balances: {
      USDT: { free: 42800.00, locked: 1250.00, usd: 44050.00 },
      BTC: { free: 0.285, locked: 0.02, usd: 27282.25 },
      ETH: { free: 1.84, locked: 0, usd: 6284.52 },
      SOL: { free: 4.25, locked: 0, usd: 827.69 },
      RENDER: { free: 150.0, locked: 0, usd: 1173.00 },
      LINK: { free: 45.0, locked: 0, usd: 838.80 },
      SUI: { free: 250.0, locked: 0, usd: 820.00 },
      AVAX: { free: 15.0, locked: 0, usd: 513.00 },
      PEPE: { free: 1000000, locked: 0, usd: 12.45 },
    }
  },
  positions: [
    {
      id: 'pos-1',
      pair: 'BTC/USDT',
      side: 'long',
      entryPrice: 88120.00,
      markPrice: 89450.00,
      size: 0.5,
      margin: 4406.00,
      leverage: 10,
      pnl: 665.00,
      pnlPercent: 15.09,
      liquidationPrice: 79800.00,
    },
    {
      id: 'pos-2',
      pair: 'SOL/USDT',
      side: 'long',
      entryPrice: 186.20,
      markPrice: 194.75,
      size: 25,
      margin: 931.00,
      leverage: 5,
      pnl: 213.75,
      pnlPercent: 22.95,
      liquidationPrice: 152.00,
    }
  ],
  orders: [
    {
      id: 'ord-1',
      pair: 'BTC/USDT',
      type: 'limit',
      side: 'buy',
      price: 87500.00,
      amount: 0.25,
      filled: 0,
      status: 'open',
      createdAt: '10:14:02',
    },
    {
      id: 'ord-2',
      pair: 'ETH/USDT',
      type: 'limit',
      side: 'sell',
      price: 3550.00,
      amount: 1.0,
      filled: 0,
      status: 'open',
      createdAt: '09:42:18',
    }
  ],
  requests: [],
  selectedCategory: 'all',
  marketSearchQuery: '',
  requestFilterStatus: 'all',
  requestSearchQuery: '',
  bottomTabActive: 'positions', // 'positions' | 'orders' | 'trades'
  orderType: 'limit', // 'limit' | 'market' | 'stop'
};

// ============================================================================
// SECTION 2: TOAST NOTIFICATIONS & CLIPBOARD SYSTEM
// ============================================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-item ${type}`;

  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (toast.parentNode === container) {
        container.removeChild(toast);
      }
    }, 300);
  }, 3200);
}

function copyText(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  } catch {
    fallbackCopy(text);
  }
  showToast(`Copied to clipboard: ${text}`, 'success');
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
  } catch {}
  document.body.removeChild(ta);
}

// ============================================================================
// SECTION 3: SYNCHRONOUS DATA GENERATORS (Chart, Book, Trades)
// ============================================================================

function generateCandles(basePrice, count = 60, interval = '15m') {
  const candles = [];
  const now = Date.now();
  let stepMs = 15 * 60 * 1000;
  if (interval === '1m') stepMs = 60 * 1000;
  if (interval === '5m') stepMs = 5 * 60 * 1000;
  if (interval === '1H') stepMs = 60 * 60 * 1000;
  if (interval === '4H') stepMs = 4 * 60 * 60 * 1000;
  if (interval === '1D') stepMs = 24 * 60 * 60 * 1000;
  if (interval === '1W') stepMs = 7 * 24 * 60 * 60 * 1000;

  let currentPrice = basePrice * 0.94;
  for (let i = count; i >= 0; i--) {
    const time = now - (i * stepMs);
    const volatility = basePrice * 0.008;
    const delta = (Math.random() - 0.48) * volatility;
    const open = currentPrice;
    const close = Math.max(open * 0.5, open + delta);
    const high = Math.max(open, close) + Math.random() * volatility * 0.6;
    const low = Math.min(open, close) - Math.random() * volatility * 0.6;
    const volume = Math.round((Math.random() * 25 + 5) * (basePrice > 1000 ? 1 : 100));

    candles.push({ time, open, high, low, close, volume });
    currentPrice = close;
  }
  return candles;
}

function generateOrderBook(currentPrice, precision = 2) {
  const bids = [];
  const asks = [];
  const step = currentPrice * 0.0003;

  let bidTotal = 0;
  for (let i = 1; i <= 14; i++) {
    const price = Number((currentPrice - (i * step)).toFixed(precision));
    const amount = Number((Math.random() * 1.8 + 0.1).toFixed(3));
    bidTotal += amount;
    bids.push({ price, amount, total: Number(bidTotal.toFixed(3)) });
  }

  let askTotal = 0;
  for (let i = 1; i <= 14; i++) {
    const price = Number((currentPrice + (i * step)).toFixed(precision));
    const amount = Number((Math.random() * 1.8 + 0.1).toFixed(3));
    askTotal += amount;
    asks.push({ price, amount, total: Number(askTotal.toFixed(3)) });
  }
  asks.reverse();

  const bestBid = bids[0]?.price || currentPrice;
  const bestAsk = asks[asks.length - 1]?.price || currentPrice;
  const spread = Number(Math.abs(bestAsk - bestBid).toFixed(precision));

  return { bids, asks, spread };
}

function generateRecentTrades(currentPrice, precision = 2) {
  const trades = [];
  const now = new Date();
  for (let i = 0; i < 20; i++) {
    const side = Math.random() > 0.48 ? 'buy' : 'sell';
    const delta = (Math.random() - 0.5) * (currentPrice * 0.001);
    const price = Number((currentPrice + delta).toFixed(precision));
    const amount = Number((Math.random() * 1.4 + 0.05).toFixed(3));
    const t = new Date(now.getTime() - i * 2200);
    const time = t.toTimeString().split(' ')[0];
    trades.push({ id: `trade-${Date.now()}-${i}`, price, amount, time, side });
  }
  return trades;
}

// ============================================================================
// SECTION 4: CANVAS CANDLESTICK & INDICATOR CHART RENDERER
// ============================================================================

function renderTradingChart() {
  const canvas = document.getElementById('trading-canvas');
  const wrapper = document.getElementById('chart-wrapper');
  if (!canvas || !wrapper || appState.candles.length === 0) return;

  const dpr = window.devicePixelRatio || 1;
  const width = wrapper.clientWidth;
  const height = wrapper.clientHeight;
  if (width <= 0 || height <= 0) return;

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, width, height);

  const paddingRight = width < 500 ? 55 : 75;
  const paddingBottom = 26;
  const chartWidth = Math.max(width - paddingRight, 10);
  const chartHeight = Math.max(height - paddingBottom, 10);
  const volumeHeight = appState.showVolume ? chartHeight * 0.2 : 0;
  const candleChartHeight = chartHeight - volumeHeight;

  const candles = appState.candles;
  const minPrice = Math.min(...candles.map(c => c.low));
  const maxPrice = Math.max(...candles.map(c => c.high));
  const priceRange = Math.max(maxPrice - minPrice, 0.0001);
  const maxVolume = Math.max(...candles.map(c => c.volume), 1);

  // Coordinate mappers
  const getY = (price) => candleChartHeight - ((price - minPrice) / priceRange) * (candleChartHeight * 0.9) - 10;
  const candleSpacing = chartWidth / candles.length;
  const candleWidth = Math.max(candleSpacing * 0.7, 2);

  // Background Grid Lines
  ctx.strokeStyle = 'rgba(30, 58, 138, 0.2)';
  ctx.lineWidth = 1;
  const gridSteps = 5;
  for (let i = 0; i <= gridSteps; i++) {
    const y = (candleChartHeight / gridSteps) * i;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(chartWidth, y);
    ctx.stroke();

    // Price label on right axis
    const p = maxPrice - (i / gridSteps) * priceRange;
    ctx.fillStyle = '#64748b';
    ctx.font = '10px "JetBrains Mono"';
    ctx.textAlign = 'left';
    ctx.fillText(p.toFixed(appState.activePair.precision), chartWidth + 6, y + 3);
  }

  // Draw Volume Bars
  if (appState.showVolume) {
    candles.forEach((c, i) => {
      const x = i * candleSpacing + (candleSpacing - candleWidth) / 2;
      const barH = (c.volume / maxVolume) * volumeHeight;
      const y = chartHeight - barH;
      ctx.fillStyle = c.close >= c.open ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.25)';
      ctx.fillRect(x, y, candleWidth, barH);
    });
  }

  // Draw Candlesticks or Line
  if (appState.chartType === 'candles') {
    candles.forEach((c, i) => {
      const x = i * candleSpacing + candleSpacing / 2;
      const isUp = c.close >= c.open;
      const color = isUp ? '#10b981' : '#ef4444';

      // High-Low Wick
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, getY(c.high));
      ctx.lineTo(x, getY(c.low));
      ctx.stroke();

      // Open-Close Body
      const topY = getY(Math.max(c.open, c.close));
      const botY = getY(Math.min(c.open, c.close));
      const bodyH = Math.max(botY - topY, 1);
      ctx.fillStyle = color;
      ctx.fillRect(x - candleWidth / 2, topY, candleWidth, bodyH);
    });
  } else {
    // Line chart
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 2;
    ctx.beginPath();
    candles.forEach((c, i) => {
      const x = i * candleSpacing + candleSpacing / 2;
      const y = getY(c.close);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  // EMA 20 Overlay Line
  if (appState.showEMA && candles.length >= 20) {
    const k = 2 / (20 + 1);
    let ema = candles[0].close;
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    candles.forEach((c, i) => {
      ema = c.close * k + ema * (1 - k);
      const x = i * candleSpacing + candleSpacing / 2;
      const y = getY(ema);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }
}

// ============================================================================
// SECTION 5: DOM RENDERING (UI Modules)
// ============================================================================

// Render Live Ticker Header
function renderTickerBar() {
  const track = document.getElementById('ticker-track-content');
  if (!track) return;
  const itemsHtml = appState.markets.concat(appState.markets).map(m => `
    <div class="ticker-item" onclick="switchActivePair('${m.id}')">
      <span class="ticker-sym">${m.symbol}</span>
      <span class="ticker-price">$${m.price.toLocaleString(undefined, { minimumFractionDigits: m.precision })}</span>
      <span class="ticker-change ${m.change24h >= 0 ? 'pos' : 'neg'}">
        ${m.change24h >= 0 ? '+' : ''}${m.change24h.toFixed(2)}%
      </span>
    </div>
  `).join('');
  track.innerHTML = itemsHtml;
}

// Render Pair Selector Dropdown
function renderPairSelectorDropdown() {
  const dropdown = document.getElementById('pair-selector-dropdown');
  if (!dropdown) return;
  dropdown.innerHTML = appState.markets.map(m => `
    <div class="pair-dropdown-item" onclick="switchActivePair('${m.id}'); togglePairMenu(false);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-weight: 800; color: #ffffff;">${m.symbol}</span>
        <span class="badge-private" style="font-size: 8px;">${m.category}</span>
      </div>
      <div style="text-align: right; font-family: var(--font-mono);">
        <div style="font-weight: 700; color: #ffffff;">$${m.price.toLocaleString(undefined, { minimumFractionDigits: m.precision })}</div>
        <div style="font-size: 10px; color: ${m.change24h >= 0 ? 'var(--color-green)' : 'var(--color-red)'};">
          ${m.change24h >= 0 ? '+' : ''}${m.change24h.toFixed(2)}%
        </div>
      </div>
    </div>
  `).join('');
}

function togglePairMenu(forceState) {
  const dropdown = document.getElementById('pair-selector-dropdown');
  if (!dropdown) return;
  if (typeof forceState === 'boolean') {
    dropdown.classList.toggle('show', forceState);
  } else {
    dropdown.classList.toggle('show');
  }
}

// Render Order Book
function renderOrderBookUI() {
  const asksContainer = document.getElementById('ob-asks-list');
  const bidsContainer = document.getElementById('ob-bids-list');
  const midPrice = document.getElementById('ob-mid-price');
  const spreadVal = document.getElementById('ob-spread-val');
  if (!asksContainer || !bidsContainer) return;

  const ob = appState.orderBook;
  const maxAskTotal = ob.asks[0]?.total || 1;
  const maxBidTotal = ob.bids[ob.bids.length - 1]?.total || 1;

  asksContainer.innerHTML = ob.asks.slice(-7).map(a => {
    const pct = Math.min((a.total / maxAskTotal) * 100, 100);
    return `
      <div class="ob-row" onclick="fillOrderPrice(${a.price})">
        <div class="ob-row-bar ask" style="width: ${pct}%;"></div>
        <span style="color: var(--color-red);">${a.price.toFixed(appState.activePair.precision)}</span>
        <span style="text-align: right; color: var(--text-muted);">${a.amount}</span>
        <span style="text-align: right; color: var(--text-faint);">${a.total}</span>
      </div>
    `;
  }).join('');

  bidsContainer.innerHTML = ob.bids.slice(0, 7).map(b => {
    const pct = Math.min((b.total / maxBidTotal) * 100, 100);
    return `
      <div class="ob-row" onclick="fillOrderPrice(${b.price})">
        <div class="ob-row-bar bid" style="width: ${pct}%;"></div>
        <span style="color: var(--color-green);">${b.price.toFixed(appState.activePair.precision)}</span>
        <span style="text-align: right; color: var(--text-muted);">${b.amount}</span>
        <span style="text-align: right; color: var(--text-faint);">${b.total}</span>
      </div>
    `;
  }).join('');

  if (midPrice) midPrice.textContent = `$${appState.activePair.price.toLocaleString(undefined, { minimumFractionDigits: appState.activePair.precision })}`;
  if (spreadVal) spreadVal.textContent = `Spread: ${ob.spread.toFixed(appState.activePair.precision)}`;
}

// Render Client Dashboard Destination Wallets
function renderClientWallets(walletsList = null) {
  const container = document.getElementById('client-wallets-container');
  if (!container) return;
  const list = walletsList || CLIENT_DESTINATION_WALLETS;
  container.innerHTML = list.map(w => `
    <div class="wallet-card-item">
      <div class="wallet-card-header">
        <span style="font-weight: 700; font-size: 13px;">${w.title}</span>
        <span class="wallet-net-badge">${w.tag}</span>
      </div>
      <div class="wallet-address-display">
        <span>${w.address}</span>
        <button class="btn-copy-address" onclick="copyText('${w.address}')">Copy</button>
      </div>
    </div>
  `).join('');
}

// Render Settlement History Table
function renderSettlementHistory(filterText = '', tranchesList = null) {
  const tbody = document.getElementById('settlement-history-tbody');
  if (!tbody) return;

  const list = tranchesList || SETTLEMENT_HISTORY_DATA;
  const filtered = list.filter(item => {
    if (!filterText) return true;
    const term = filterText.toLowerCase();
    return item.date.toLowerCase().includes(term) ||
           item.notes.toLowerCase().includes(term) ||
           item.status.toLowerCase().includes(term);
  });

  tbody.innerHTML = filtered.map(row => `
    <tr>
      <td class="font-mono">${row.id.toUpperCase()}</td>
      <td>${row.date}</td>
      <td class="font-mono">$${row.investedAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
      <td class="font-mono" style="color: ${row.withdrawalAmount > 0 ? 'var(--color-green)' : 'var(--text-muted)'};">
        $${row.withdrawalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </td>
      <td class="font-mono" style="color: var(--color-green);">+$${row.profitAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
      <td class="font-mono">$${row.feePaid.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
      <td><span class="status-tag ${row.status}">${row.status}</span></td>
      <td style="color: var(--text-muted); font-size: 12px;">${row.notes}</td>
    </tr>
  `).join('');
}

// Render Comprehensive Client Wealth Dashboard & Profile Inspector
function renderClientDashboard() {
  const profile = getActiveProfileData();
  if (!profile) return;

  const clientName = document.getElementById('client-display-name');
  const clientEmail = document.getElementById('client-display-email');
  const clientAvatar = document.getElementById('client-avatar-letter');
  const availBalance = document.getElementById('client-available-balance');
  const reqFee = document.getElementById('client-required-fee');
  const inspectionBanner = document.getElementById('admin-dashboard-inspection-banner');

  const isAdmin = appState.currentUser?.role === 'admin';
  const isInspectingOther = isAdmin && appState.inspectedClientUsername && appState.inspectedClientUsername !== appState.currentUser.username;

  if (clientName) {
    clientName.textContent = `${profile.name} (${profile.role === 'admin' ? 'Operations Admin' : 'Private Client'})`;
  }
  if (clientEmail) {
    clientEmail.textContent = `${profile.username} • Account #${profile.accountNumber || 'MB-884102'}`;
  }
  if (clientAvatar) {
    clientAvatar.textContent = (profile.name || profile.username).charAt(0).toUpperCase();
  }
  if (availBalance) {
    availBalance.textContent = `$${Number(profile.availableBalance || 47986).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  }
  if (reqFee) {
    reqFee.textContent = `$${Number(profile.requiredFee || 5960).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  }

  // Render Admin Multi-Profile Inspector banner vs Client Strict Isolation banner
  if (inspectionBanner) {
    if (isAdmin) {
      inspectionBanner.innerHTML = `
        <div class="admin-mode-banner">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 20px;">👑</span>
            <div>
              <div style="font-weight: 700; color: var(--accent-gold); font-size: 13px;">ADMIN MULTI-PROFILE ACCESS</div>
              <div style="font-size: 11px; color: var(--text-muted);">
                ${isInspectingOther ? `Inspecting client profile: <strong style="color: #fff;">${profile.name}</strong> (@${profile.username})` : `Viewing Administrator Master Treasury Profile (@${appState.currentUser.username})`}
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <label style="font-size: 12px; font-weight: 700; color: #fff;">Switch Profile:</label>
            <select id="admin-client-inspector-select" style="background: #050c1e; color: #facc15; border: 1px solid var(--border-gold); padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer;">
              <option value="joeldan228@gmail.com" ${profile.username === 'joeldan228@gmail.com' ? 'selected' : ''}>👑 Joel Dan (Admin Self)</option>
              <option value="alex_vance" ${profile.username === 'alex_vance' ? 'selected' : ''}>👤 Alex Vance (Client • MB-884102)</option>
              <option value="testing-test-2" ${profile.username === 'testing-test-2' ? 'selected' : ''}>👤 Testing Account 2 (Client • MB-992104)</option>
              <option value="sarah_crypto" ${profile.username === 'sarah_crypto' ? 'selected' : ''}>👤 Sarah Lin (Client • MB-763401)</option>
            </select>
            ${isInspectingOther ? `<button id="btn-admin-return-self" style="background: rgba(250,204,21,0.2); color: var(--accent-gold); border: 1px solid var(--accent-gold); border-radius: 6px; padding: 5px 10px; font-size: 11px; font-weight: 700; cursor: pointer;">Return to Admin</button>` : ''}
          </div>
        </div>
      `;

      document.getElementById('admin-client-inspector-select')?.addEventListener('change', (e) => {
        appState.inspectedClientUsername = e.target.value;
        renderClientDashboard();
        showToast(`Admin: Inspecting profile for ${e.target.selectedOptions[0].text}`, 'info');
      });

      document.getElementById('btn-admin-return-self')?.addEventListener('click', () => {
        appState.inspectedClientUsername = null;
        renderClientDashboard();
        showToast('Returned to Executive Admin profile', 'info');
      });

    } else {
      inspectionBanner.innerHTML = `
        <div style="margin-bottom: 16px; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); padding: 10px 16px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 12px;">
            <span style="font-size: 16px;">🔒</span>
            <span style="color: var(--color-green);">
              <strong>Private Client Profile:</strong> Access is strictly restricted to your authorized profile (<strong>@${appState.currentUser?.username || 'client'}</strong>). Other users' profiles are only accessible via the Admin profile.
            </span>
          </div>
          <span class="client-isolation-badge">✓ Strict Profile Isolation</span>
        </div>
      `;
    }
  }

  renderClientWallets(profile.wallets);
  renderSettlementHistory('', profile.tranches);
}

// Render Markets Screener
function renderMarketsTable() {
  const tbody = document.getElementById('markets-table-tbody');
  if (!tbody) return;

  const filtered = appState.markets.filter(m => {
    const matchCat = appState.selectedCategory === 'all' || m.category === appState.selectedCategory;
    const matchSearch = !appState.marketSearchQuery || 
                        m.symbol.toLowerCase().includes(appState.marketSearchQuery.toLowerCase()) || 
                        m.name.toLowerCase().includes(appState.marketSearchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  tbody.innerHTML = filtered.map(m => `
    <tr>
      <td>
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="font-weight: 800;">${m.symbol}</div>
          <span style="font-size: 11px; color: var(--text-muted);">${m.name}</span>
        </div>
      </td>
      <td class="font-mono" style="font-weight: 700;">$${m.price.toLocaleString(undefined, { minimumFractionDigits: m.precision })}</td>
      <td class="font-mono" style="color: ${m.change24h >= 0 ? 'var(--color-green)' : 'var(--color-red)'}; font-weight: 700;">
        ${m.change24h >= 0 ? '+' : ''}${m.change24h.toFixed(2)}%
      </td>
      <td class="font-mono">$${m.high24h.toLocaleString(undefined, { minimumFractionDigits: m.precision })}</td>
      <td class="font-mono">$${m.low24h.toLocaleString(undefined, { minimumFractionDigits: m.precision })}</td>
      <td class="font-mono">$${(m.volume24h / 1e6).toFixed(1)}M</td>
      <td>
        <svg class="sparkline-svg" viewBox="0 0 90 30">
          <polyline fill="none" stroke="${m.change24h >= 0 ? '#10b981' : '#ef4444'}" stroke-width="2" points="${generateSparklinePoints(m.sparkline)}" />
        </svg>
      </td>
      <td>
        <button class="btn-pill btn-deposit" style="padding: 4px 10px; font-size: 11px;" onclick="switchActivePair('${m.id}'); navigateToTab('trade');">
          Trade ⚡
        </button>
      </td>
    </tr>
  `).join('');
}

function generateSparklinePoints(data) {
  if (!data || data.length < 2) return '0,15 90,15';
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = Math.max(max - min, 0.0001);
  return data.map((val, idx) => {
    const x = (idx / (data.length - 1)) * 90;
    const y = 30 - ((val - min) / range) * 26 - 2;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
}

// Render Positions, Orders, or Trades in bottom station tab
function renderPositionsAndOrders() {
  const tbody = document.getElementById('pos-table-tbody');
  const thead = document.getElementById('pos-table-thead');
  const countPos = document.getElementById('count-positions');
  const countOrd = document.getElementById('count-orders');
  if (countPos) countPos.textContent = appState.positions.length;
  if (countOrd) countOrd.textContent = appState.orders.length;
  if (!tbody || !thead) return;

  if (appState.bottomTabActive === 'positions') {
    thead.innerHTML = `
      <tr>
        <th>Symbol</th>
        <th>Side</th>
        <th>Size</th>
        <th>Entry Price</th>
        <th>Mark Price</th>
        <th>Margin</th>
        <th>Unrealized PnL</th>
        <th>Liq. Price</th>
        <th>Action</th>
      </tr>
    `;

    if (appState.positions.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 24px;">No active leveraged positions.</td></tr>`;
      return;
    }

    tbody.innerHTML = appState.positions.map((p, idx) => `
      <tr>
        <td style="font-weight: 700;">${p.pair}</td>
        <td><span class="status-tag ${p.side === 'long' ? 'approved' : 'rejected'}">${p.side.toUpperCase()} ${p.leverage}x</span></td>
        <td class="font-mono">${p.size}</td>
        <td class="font-mono">$${p.entryPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
        <td class="font-mono">$${p.markPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
        <td class="font-mono">$${p.margin.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
        <td class="font-mono" style="color: ${p.pnl >= 0 ? 'var(--color-green)' : 'var(--color-red)'}; font-weight: 700;">
          ${p.pnl >= 0 ? '+' : ''}$${p.pnl.toFixed(2)} (${p.pnlPercent}%)
        </td>
        <td class="font-mono" style="color: var(--accent-gold);">$${p.liquidationPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
        <td>
          <button class="admin-action-btn reject" onclick="closePosition(${idx})">Close</button>
        </td>
      </tr>
    `).join('');

  } else if (appState.bottomTabActive === 'orders') {
    thead.innerHTML = `
      <tr>
        <th>Order ID</th>
        <th>Symbol</th>
        <th>Type</th>
        <th>Side</th>
        <th>Price</th>
        <th>Amount</th>
        <th>Filled</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    `;

    if (appState.orders.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 24px;">No open orders.</td></tr>`;
      return;
    }

    tbody.innerHTML = appState.orders.map((o, idx) => `
      <tr>
        <td class="font-mono" style="font-size: 11px; color: var(--text-faint);">${o.id}</td>
        <td style="font-weight: 700;">${o.pair}</td>
        <td style="text-transform: uppercase; font-size: 11px;">${o.type}</td>
        <td><span class="status-tag ${o.side === 'buy' ? 'approved' : 'rejected'}">${o.side.toUpperCase()}</span></td>
        <td class="font-mono">$${o.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
        <td class="font-mono">${o.amount}</td>
        <td class="font-mono">${o.filled}%</td>
        <td><span class="status-tag pending">${o.status}</span></td>
        <td>
          <button class="admin-action-btn delete" onclick="cancelOrder(${idx})">Cancel</button>
        </td>
      </tr>
    `).join('');

  } else if (appState.bottomTabActive === 'trades') {
    thead.innerHTML = `
      <tr>
        <th>Execution Time</th>
        <th>Trade ID</th>
        <th>Side</th>
        <th>Price (USDT)</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    `;

    tbody.innerHTML = appState.trades.slice(0, 15).map(t => `
      <tr>
        <td class="font-mono" style="font-size: 11px; color: var(--text-muted);">${t.time}</td>
        <td class="font-mono" style="font-size: 11px; color: var(--text-faint);">${t.id}</td>
        <td><span class="status-tag ${t.side === 'buy' ? 'approved' : 'rejected'}">${t.side.toUpperCase()}</span></td>
        <td class="font-mono" style="font-weight: 700; color: ${t.side === 'buy' ? 'var(--color-green)' : 'var(--color-red)'};">$${t.price.toFixed(appState.activePair.precision)}</td>
        <td class="font-mono">${t.amount}</td>
        <td><span class="status-tag completed">Settled</span></td>
      </tr>
    `).join('');
  }
}

// Cancel an open order
function cancelOrder(idx) {
  const o = appState.orders[idx];
  if (!o) return;
  appState.orders.splice(idx, 1);
  renderPositionsAndOrders();
  showToast(`Order ${o.id} cancelled`, 'info');
}

// Render Portfolio Holdings
function renderPortfolioAssets() {
  const tbody = document.getElementById('portfolio-assets-tbody');
  if (!tbody) return;

  const assets = Object.entries(appState.wallet.balances);
  tbody.innerHTML = assets.map(([symbol, b]) => {
    const market = appState.markets.find(m => m.baseAsset === symbol) || { price: symbol === 'USDT' ? 1 : 0 };
    const usdVal = (b.free + b.locked) * market.price;
    return `
      <tr>
        <td style="font-weight: 700;">${symbol}</td>
        <td class="font-mono">${b.free.toLocaleString()}</td>
        <td class="font-mono" style="color: var(--text-muted);">${b.locked.toLocaleString()}</td>
        <td class="font-mono" style="font-weight: 700;">${(b.free + b.locked).toLocaleString()}</td>
        <td class="font-mono" style="color: var(--color-green);">$${usdVal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
        <td>
          <button class="btn-pill btn-swap" style="padding: 3px 8px; font-size: 11px;" onclick="openSwapFor('${symbol}')">Swap</button>
        </td>
      </tr>
    `;
  }).join('');
}

// Quick trigger for token swap modal from portfolio
function openSwapFor(symbol) {
  const swapModal = document.getElementById('modal-swap');
  const payToken = document.getElementById('swap-pay-token');
  const recToken = document.getElementById('swap-receive-token');
  if (payToken && recToken) {
    if (symbol === 'USDT') {
      payToken.value = 'USDT';
      recToken.value = 'BTC';
    } else {
      payToken.value = symbol;
      recToken.value = 'USDT';
    }
    updateSwapQuote();
  }
  if (swapModal) swapModal.classList.add('open');
}

// Render Requests Table with Status, Search Filters, and User Profile Isolation
function renderRequestsTable() {
  const tbody = document.getElementById('requests-table-tbody');
  const contextBanner = document.getElementById('requests-profile-context-banner');
  if (!tbody) return;

  const currentUser = appState.currentUser;
  const isAdmin = currentUser?.role === 'admin';

  // Render profile context banner
  if (contextBanner) {
    if (isAdmin) {
      contextBanner.innerHTML = `
        <div class="admin-mode-banner" style="margin-bottom: 14px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 18px;">👑</span>
            <div>
              <div style="font-weight: 700; color: var(--accent-gold); font-size: 12px;">ADMIN COMPLIANCE DESK</div>
              <div style="font-size: 11px; color: var(--text-muted);">
                Authorized to review, approve, reject, or delete requests across <strong>all client profiles</strong>.
              </div>
            </div>
          </div>
          <div style="font-size: 11px; font-weight: 700; color: #93c5fd; background: rgba(30,58,138,0.4); padding: 4px 10px; border-radius: 4px;">
            ${appState.requests.length} Total Registered Requests
          </div>
        </div>
      `;
    } else {
      contextBanner.innerHTML = `
        <div style="margin-bottom: 14px; background: rgba(30, 58, 138, 0.2); border: 1px solid var(--border-subtle); padding: 10px 14px; border-radius: var(--radius-sm); font-size: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>🔒</span>
            <span style="color: var(--text-muted);">
              <strong>Client Profile Isolation:</strong> Displaying only requests registered for your account (<strong>@${currentUser ? currentUser.username : 'guest'}</strong>). Access to other client profiles is restricted to the Admin profile.
            </span>
          </div>
          <span class="client-isolation-badge">Isolated Client View</span>
        </div>
      `;
    }
  }

  // Strict user data isolation:
  // If standard client: strictly filter ONLY the user's own requests!
  // If admin: allow viewing all client requests
  const filtered = appState.requests.filter(r => {
    if (!isAdmin && currentUser) {
      const isOwner = (r.username && r.username.toLowerCase() === currentUser.username.toLowerCase()) ||
                      (currentUser.requestId && r.id && r.id.toLowerCase() === currentUser.requestId.toLowerCase());
      if (!isOwner) return false;
    }

    const matchStatus = appState.requestFilterStatus === 'all' || r.status.toLowerCase() === appState.requestFilterStatus.toLowerCase();
    const q = appState.requestSearchQuery.toLowerCase();
    const matchSearch = !q || 
                        r.id.toLowerCase().includes(q) || 
                        (r.clientName && r.clientName.toLowerCase().includes(q)) || 
                        (r.username && r.username.toLowerCase().includes(q)) || 
                        (r.reason && r.reason.toLowerCase().includes(q));
    return matchStatus && matchSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; color: var(--text-muted); padding: 36px;">
          ${!isAdmin ? `No transaction requests found under client profile @${currentUser?.username || ''}. Click '+ New Request' to submit a claim.` : 'No transaction requests matching the filter criteria.'}
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(r => `
    <tr>
      <td class="font-mono" style="font-weight: 700; color: var(--accent-gold);">${r.id}</td>
      <td>
        <div style="font-weight: 700;">${r.clientName || r.username}</div>
        <div style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">${r.username}</div>
      </td>
      <td class="font-mono" style="font-weight: 700;">$${Number(r.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })} ${r.currency}</td>
      <td style="text-transform: capitalize;">${r.type}</td>
      <td style="max-width: 220px; white-space: normal; font-size: 12px; color: var(--text-muted);">${r.reason}</td>
      <td class="font-mono" style="font-size: 11px;">${r.walletAddress || '0x...'}</td>
      <td><span class="status-tag ${r.status}">${r.status}</span></td>
      <td style="font-size: 11px; color: var(--text-faint);">${new Date(r.createdAt).toLocaleDateString()}</td>
      <td>
        ${isAdmin ? `
          <button class="admin-action-btn approve" onclick="updateRequestStatus('${r.id}', 'approved')">Approve</button>
          <button class="admin-action-btn reject" onclick="updateRequestStatus('${r.id}', 'rejected')">Reject</button>
          <button class="admin-action-btn delete" onclick="deleteRequest('${r.id}')">✕</button>
        ` : `
          ${r.status === 'pending' ? `<button class="admin-action-btn delete" onclick="deleteRequest('${r.id}')">Cancel</button>` : `<span style="font-size: 11px; color: var(--text-muted);">Locked</span>`}
        `}
      </td>
    </tr>
  `).join('');
}

// Render User Profile Badge in Header with Profile Isolation & Admin Inspector
function renderUserProfileWidget() {
  const widget = document.getElementById('user-profile-widget');
  if (!widget) return;

  if (appState.currentUser) {
    const u = appState.currentUser;
    const isAdmin = u.role === 'admin';
    widget.innerHTML = `
      <div class="btn-user-profile" id="user-profile-btn" onclick="toggleUserMenu()">
        <span style="font-size: 14px;">${isAdmin ? '👑' : '👤'}</span>
        <span style="font-weight: 700;">${u.name || u.username.split('@')[0]}</span>
        <span class="role-badge ${isAdmin ? 'admin' : 'user'}">${isAdmin ? 'admin' : 'client'}</span>
      </div>
    `;

    // Dropdown content
    const menu = document.getElementById('user-menu-dropdown');
    if (menu) {
      if (isAdmin) {
        menu.innerHTML = `
          <div style="padding: 8px 10px; border-bottom: 1px solid var(--border-subtle); margin-bottom: 6px;">
            <div style="font-weight: 800; font-size: 13px; color: var(--accent-gold); display: flex; align-items: center; gap: 6px;">
              <span>👑</span> <span>${u.name || 'Admin'}</span>
            </div>
            <div style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">${u.username}</div>
            <div style="margin-top: 4px; font-size: 10px; color: #93c5fd; background: rgba(30,58,138,0.3); padding: 2px 6px; border-radius: 4px; display: inline-block;">
              👑 Multi-Profile Access Enabled
            </div>
          </div>
          <div style="padding: 4px 10px; font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
            Inspect Client Profiles:
          </div>
          <div class="user-menu-item" id="menu-inspect-admin">
            <span>👑</span> Joel Dan (Admin Master)
          </div>
          <div class="user-menu-item" id="menu-inspect-alex">
            <span>👤</span> Alex Vance (Client)
          </div>
          <div class="user-menu-item" id="menu-inspect-testing">
            <span>👤</span> Testing Account 2 (Client)
          </div>
          <div class="user-menu-item" id="menu-inspect-sarah">
            <span>👤</span> Sarah Lin (Client)
          </div>
          <div class="user-menu-item" id="menu-sign-out" style="color: var(--color-red); border-top: 1px solid var(--border-subtle); margin-top: 6px; padding-top: 8px;">
            <span>🚪</span> Sign Out
          </div>
        `;

        document.getElementById('menu-inspect-admin')?.addEventListener('click', () => {
          appState.inspectedClientUsername = 'joeldan228@gmail.com';
          renderClientDashboard();
          toggleUserMenu(false);
          navigateToTab('client-dashboard');
          showToast('Switched to Joel Dan Admin Profile', 'info');
        });
        document.getElementById('menu-inspect-alex')?.addEventListener('click', () => {
          appState.inspectedClientUsername = 'alex_vance';
          renderClientDashboard();
          toggleUserMenu(false);
          navigateToTab('client-dashboard');
          showToast('Admin: Inspecting Alex Vance Client Profile', 'info');
        });
        document.getElementById('menu-inspect-testing')?.addEventListener('click', () => {
          appState.inspectedClientUsername = 'testing-test-2';
          renderClientDashboard();
          toggleUserMenu(false);
          navigateToTab('client-dashboard');
          showToast('Admin: Inspecting Testing Account 2 Profile', 'info');
        });
        document.getElementById('menu-inspect-sarah')?.addEventListener('click', () => {
          appState.inspectedClientUsername = 'sarah_crypto';
          renderClientDashboard();
          toggleUserMenu(false);
          navigateToTab('client-dashboard');
          showToast('Admin: Inspecting Sarah Lin Profile', 'info');
        });

      } else {
        // Standard Client: Strictly isolated to own profile!
        menu.innerHTML = `
          <div style="padding: 8px 10px; border-bottom: 1px solid var(--border-subtle); margin-bottom: 6px;">
            <div style="font-weight: 800; font-size: 13px; color: #ffffff;">${u.name || u.username}</div>
            <div style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">${u.username}</div>
            <div style="margin-top: 4px; font-size: 10px; color: var(--color-green); background: rgba(16,185,129,0.1); padding: 2px 6px; border-radius: 4px; display: inline-block;">
              🔒 Profile Isolated (Access Restricted to Own Profile)
            </div>
            ${u.requestId ? `<div style="margin-top: 4px; font-size: 10px; color: var(--accent-gold); font-family: var(--font-mono);">Request ID: ${u.requestId}</div>` : ''}
          </div>
          <div class="user-menu-item" onclick="navigateToTab('client-dashboard'); toggleUserMenu(false);">
            <span>💼</span> My Wealth Vault
          </div>
          <div class="user-menu-item" onclick="navigateToTab('requests'); toggleUserMenu(false);">
            <span>📝</span> My Transaction Requests
          </div>
          <div class="user-menu-item" onclick="navigateToTab('portfolio'); toggleUserMenu(false);">
            <span>📊</span> My Custody Balances
          </div>
          <div class="user-menu-item" id="menu-sign-out" style="color: var(--color-red); border-top: 1px solid var(--border-subtle); margin-top: 6px; padding-top: 8px;">
            <span>🚪</span> Sign Out
          </div>
        `;
      }

      document.getElementById('menu-sign-out')?.addEventListener('click', () => {
        appState.currentUser = null;
        appState.inspectedClientUsername = null;
        localStorage.removeItem('meridian_user');
        renderUserProfileWidget();
        renderClientDashboard();
        renderRequestsTable();
        toggleUserMenu(false);
        navigateToTab('login');
        showToast('Signed out of Meridian Bancorp', 'info');
      });
    }

  } else {
    widget.innerHTML = `
      <button class="btn-primary-gold" style="padding: 6px 14px; font-size: 12px;" onclick="navigateToTab('login')">
        Client Sign In
      </button>
    `;
    const menu = document.getElementById('user-menu-dropdown');
    if (menu) menu.innerHTML = '';
  }
}

// Toggle User Menu Dropdown
function toggleUserMenu(forceState) {
  const menu = document.getElementById('user-menu-dropdown');
  if (!menu) return;
  if (typeof forceState === 'boolean') {
    menu.classList.toggle('show', forceState);
  } else {
    menu.classList.toggle('show');
  }
}

// ============================================================================
// SECTION 6: INTERACTION & EVENT CONTROLLERS
// ============================================================================

// Tab Navigation Router (supports #homepage, #loginpage, #trade, #perps, etc.)
function navigateToTab(tabName) {
  appState.activeTab = tabName;
  window.location.hash = tabName === 'home' ? 'homepage' : tabName === 'login' ? 'loginpage' : tabName;

  // Toggle tab view classes
  document.querySelectorAll('.tab-view').forEach(view => {
    view.classList.remove('active');
  });

  // Treat 'perps' as the trading station view
  const targetViewId = tabName === 'perps' ? 'view-trade' : `view-${tabName}`;
  const targetView = document.getElementById(targetViewId);
  if (targetView) targetView.classList.add('active');

  // Toggle active header buttons
  document.querySelectorAll('.nav-btn, .mob-nav-item, .mob-drawer-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
  });

  // Re-trigger layout draws for canvas if entering trade or perps
  if (tabName === 'trade' || tabName === 'perps') {
    const isPerp = tabName === 'perps';
    const levGroup = document.getElementById('leverage-group');
    if (levGroup) levGroup.style.display = isPerp ? 'flex' : 'none';
    setTimeout(renderTradingChart, 50);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHashChange() {
  const raw = window.location.hash.replace('#', '').replace('/', '').toLowerCase();
  if (raw === 'loginpage' || raw === 'login') navigateToTab('login');
  else if (raw === 'client-dashboard' || raw === 'dashboard') navigateToTab('client-dashboard');
  else if (raw === 'trade' || raw === 'spot') navigateToTab('trade');
  else if (raw === 'perps' || raw === 'futures') navigateToTab('perps');
  else if (raw === 'markets') navigateToTab('markets');
  else if (raw === 'portfolio') navigateToTab('portfolio');
  else if (raw === 'requests') navigateToTab('requests');
  else if (raw === 'api-docs' || raw === 'api') navigateToTab('api-docs');
  else navigateToTab('home');
}

// Switch active trading pair
function switchActivePair(pairId) {
  const found = appState.markets.find(m => m.id === pairId);
  if (!found) return;
  appState.activePair = found;
  appState.candles = generateCandles(found.price, 60, appState.timeframe);
  appState.orderBook = generateOrderBook(found.price, found.precision);
  appState.trades = generateRecentTrades(found.price, found.precision);

  const symElem = document.getElementById('trade-active-pair-sym');
  const priceElem = document.getElementById('trade-active-price');
  const changeElem = document.getElementById('trade-active-change');
  const baseAssetElem = document.getElementById('form-base-asset');
  const inputPrice = document.getElementById('input-order-price');

  if (symElem) symElem.textContent = found.symbol;
  if (priceElem) priceElem.textContent = `$${found.price.toLocaleString(undefined, { minimumFractionDigits: found.precision })}`;
  if (changeElem) {
    changeElem.textContent = `${found.change24h >= 0 ? '+' : ''}${found.change24h.toFixed(2)}%`;
    changeElem.className = `ticker-change ${found.change24h >= 0 ? 'pos' : 'neg'}`;
  }
  if (baseAssetElem) baseAssetElem.textContent = found.baseAsset;
  if (inputPrice && appState.orderType !== 'market') {
    inputPrice.value = found.price.toFixed(found.precision);
  }

  renderTradingChart();
  renderOrderBookUI();
}

// Fill price input from order book
function fillOrderPrice(price) {
  const inputPrice = document.getElementById('input-order-price');
  if (inputPrice && appState.orderType !== 'market') {
    inputPrice.value = price.toFixed(appState.activePair.precision);
    calculateOrderTotals();
  }
}

// Calculate order form margin / fee totals
function calculateOrderTotals() {
  const price = parseFloat(document.getElementById('input-order-price')?.value) || appState.activePair.price;
  const amount = parseFloat(document.getElementById('input-order-amount')?.value) || 0;
  const isPerp = appState.activeTab === 'perps';
  const leverage = parseInt(document.getElementById('input-leverage-slider')?.value) || 1;

  const total = price * amount;
  const fee = total * 0.0004;
  const margin = isPerp ? total / leverage : total;

  const totalEl = document.getElementById('summary-order-total');
  const feeEl = document.getElementById('summary-order-fee');
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)} USDT`;
  if (feeEl) feeEl.textContent = `$${fee.toFixed(2)}`;
}

// Close an open position
function closePosition(idx) {
  const pos = appState.positions[idx];
  if (!pos) return;
  // Return margin + PnL into available USDT
  appState.wallet.availableUsd += (pos.margin + pos.pnl);
  appState.positions.splice(idx, 1);
  renderPositionsAndOrders();
  const availMargin = document.getElementById('portfolio-avail-margin');
  if (availMargin) availMargin.textContent = `$${appState.wallet.availableUsd.toLocaleString(undefined, { minimumFractionDigits: 2 })} USDT`;
  showToast(`Position ${pos.pair} closed. Settled ${pos.pnl >= 0 ? '+' : ''}$${pos.pnl.toFixed(2)} PnL`, 'success');
}

// ============================================================================
// SECTION 7: API CALLS & ASYNCHRONOUS BACKEND INTEGRATION
// ============================================================================

// Fetch requests from /api/requests with localStorage fallback
async function fetchRequests() {
  try {
    const headers = {};
    if (appState.currentUser) {
      headers['x-username'] = appState.currentUser.username;
      headers['x-user-role'] = appState.currentUser.role || 'user';
    }
    const query = appState.currentUser?.role === 'admin' ? '?role=admin' : `?username=${encodeURIComponent(appState.currentUser?.username || '')}`;
    const res = await fetch(`/api/requests${query}`, { headers });
    if (res.ok) {
      const data = await res.json();
      appState.requests = data;
      localStorage.setItem('meridian_requests', JSON.stringify(data));
      renderRequestsTable();
      return;
    }
  } catch (err) {
    console.warn('API requests offline, using local store:', err);
  }

  // Fallback to localStorage or mock
  const saved = localStorage.getItem('meridian_requests');
  if (saved) {
    try {
      appState.requests = JSON.parse(saved);
    } catch {}
  } else {
    appState.requests = [
      {
        id: 'REQ-1092',
        username: 'testing-test-2',
        clientName: 'Testing Account 2',
        amount: 2850.00,
        currency: 'USDT',
        type: 'refund',
        reason: 'Excess slippage rebate request during sudden volatility spike',
        walletAddress: '0x71C802...4e89',
        status: 'pending',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'REQ-1088',
        username: 'alex_vance',
        clientName: 'Alex Vance',
        amount: 5000.00,
        currency: 'USD',
        type: 'refund',
        reason: 'Accidental double-funding deposit refund to external ledger',
        walletAddress: '0x34A812...91B2',
        status: 'approved',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      }
    ];
  }
  renderRequestsTable();
}

// Submit a new transaction/refund request
async function submitNewRequest(data) {
  const newReq = {
    id: `REQ-${Math.floor(Math.random() * 9000 + 1000)}`,
    username: appState.currentUser?.username || 'user',
    clientName: appState.currentUser?.name || 'Private Client',
    amount: Number(data.amount),
    currency: data.currency,
    type: data.type,
    reason: data.reason,
    walletAddress: data.walletAddress,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  try {
    const res = await fetch('/api/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-username': appState.currentUser?.username || 'user',
        'x-user-role': appState.currentUser?.role || 'user',
      },
      body: JSON.stringify(newReq)
    });
    if (res.ok) {
      const saved = await res.json();
      appState.requests.unshift(saved);
      renderRequestsTable();
      showToast(`Request ${saved.id} submitted successfully`, 'success');
      return;
    }
  } catch (err) {
    console.warn('API error submitting request, storing locally:', err);
  }

  // Local fallback
  appState.requests.unshift(newReq);
  localStorage.setItem('meridian_requests', JSON.stringify(appState.requests));
  renderRequestsTable();
  showToast(`Request ${newReq.id} recorded`, 'success');
}

// Update request status (Admin action)
async function updateRequestStatus(id, newStatus) {
  try {
    await fetch(`/api/requests/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-username': appState.currentUser?.username || 'admin',
        'x-user-role': appState.currentUser?.role || 'admin',
      },
      body: JSON.stringify({ status: newStatus })
    });
  } catch (e) {
    console.warn(e);
  }

  const found = appState.requests.find(r => r.id === id);
  if (found) found.status = newStatus;
  localStorage.setItem('meridian_requests', JSON.stringify(appState.requests));
  renderRequestsTable();
  showToast(`Request ${id} marked as ${newStatus}`, 'success');
}

// Delete request
async function deleteRequest(id) {
  try {
    await fetch(`/api/requests/${id}`, {
      method: 'DELETE',
      headers: {
        'x-username': appState.currentUser?.username || 'admin',
        'x-user-role': appState.currentUser?.role || 'admin',
      }
    });
  } catch (e) {
    console.warn(e);
  }

  appState.requests = appState.requests.filter(r => r.id !== id);
  localStorage.setItem('meridian_requests', JSON.stringify(appState.requests));
  renderRequestsTable();
  showToast(`Request ${id} deleted`, 'info');
}

// Interactive API Explorer tester
window.testApiEndpoint = async function(endpoint, targetElementId, method = 'GET', body = null) {
  const el = document.getElementById(targetElementId);
  if (!el) return;
  el.textContent = 'Executing query...';
  try {
    const opts = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-username': appState.currentUser?.username || 'user',
        'x-user-role': appState.currentUser?.role || 'user',
      }
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }
    const res = await fetch(endpoint, opts);
    const json = await res.json().catch(async () => ({ text: await res.text() }));
    el.textContent = JSON.stringify(json, null, 2);
    showToast(`Query ${endpoint} executed (${res.status})`, res.ok ? 'success' : 'info');
  } catch (err) {
    el.textContent = `Error executing endpoint: ${err.message}`;
    showToast(`Error querying ${endpoint}`, 'error');
  }
};

// ============================================================================
// SECTION 8: AUTHENTICATION & LOGIN FLOWS
// ============================================================================

async function handleLogin(username, password) {
  const errorEl = document.getElementById('login-error-msg');
  const successEl = document.getElementById('login-success-msg');
  if (errorEl) errorEl.style.display = 'none';
  if (successEl) successEl.style.display = 'none';

  try {
    const res = await fetch('/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ username: username.trim(), password })
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === false) {
      throw new Error(data.message || data.error || 'Invalid credentials');
    }

    const authUser = {
      username: data.user?.username || username.trim(),
      name: data.user?.name || username.trim(),
      role: data.user?.role || (username.toLowerCase() === 'joeldan228@gmail.com' || username.toLowerCase() === 'admin' ? 'admin' : 'user'),
    };

    appState.currentUser = authUser;
    appState.inspectedClientUsername = null;
    localStorage.setItem('meridian_user', JSON.stringify(authUser));

    if (successEl) {
      successEl.textContent = `Authenticated as ${authUser.name}`;
      successEl.style.display = 'block';
    }

    renderUserProfileWidget();
    renderClientDashboard();
    fetchRequests();
    renderRequestsTable();
    showToast(`Welcome back, ${authUser.name}`, 'success');
    setTimeout(() => {
      navigateToTab(authUser.role === 'admin' ? 'requests' : 'client-dashboard');
    }, 400);

  } catch (err) {
    // Offline fallback for demo accounts
    if (username === 'joeldan228@gmail.com' || username === 'admin') {
      const authUser = {
        username,
        name: 'Joel Dan (Admin)',
        role: 'admin',
      };
      appState.currentUser = authUser;
      appState.inspectedClientUsername = null;
      localStorage.setItem('meridian_user', JSON.stringify(authUser));
      renderUserProfileWidget();
      renderClientDashboard();
      fetchRequests();
      renderRequestsTable();
      showToast('Authenticated as Joel Dan (Admin)', 'success');
      navigateToTab('requests');
      return;
    }

    if (errorEl) {
      errorEl.textContent = err.message || 'Authentication failed';
      errorEl.style.display = 'block';
    }
    showToast(err.message || 'Login failed', 'error');
  }
}

// Client Login using REQUEST ID and CLIENT / USERNAME
async function handleRequestLogin(requestId, username) {
  const errorEl = document.getElementById('req-login-error-msg');
  const successEl = document.getElementById('req-login-success-msg');
  if (errorEl) errorEl.style.display = 'none';
  if (successEl) successEl.style.display = 'none';

  const cleanReq = (requestId || '').trim().toUpperCase();
  const cleanUser = (username || '').trim();

  if (!cleanReq || !cleanUser) {
    if (errorEl) {
      errorEl.textContent = 'Both REQUEST ID and CLIENT / USERNAME are required';
      errorEl.style.display = 'block';
    }
    showToast('Please provide both Request ID and Client / Username', 'error');
    return;
  }

  try {
    const res = await fetch('/api/login-by-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ requestId: cleanReq, username: cleanUser })
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok || data.success === false) {
      throw new Error(data.message || data.error || 'Request ID or Client / Username does not match');
    }

    const authUser = {
      username: data.user.username,
      name: data.user.name,
      role: data.user.role || 'user',
      authMethod: 'request_id',
      requestId: data.user.requestId || cleanReq,
      standing: data.user.role === 'admin' ? 'Operations Super Admin' : 'Verified Private Client (Tier 1)',
      location: data.user.location || 'Verified Client Desk'
    };

    appState.currentUser = authUser;
    appState.inspectedClientUsername = null;
    localStorage.setItem('meridian_user', JSON.stringify(authUser));

    if (successEl) {
      successEl.textContent = `Authenticated via ${cleanReq}: Welcome back, ${authUser.name}!`;
      successEl.style.display = 'block';
    }

    renderUserProfileWidget();
    renderClientDashboard();
    fetchRequests();
    renderRequestsTable();
    showToast(`Authenticated via Request ${cleanReq}. Welcome, ${authUser.name}!`, 'success');

    setTimeout(() => {
      navigateToTab('client-dashboard');
    }, 450);

  } catch (err) {
    // Demo request ID fallback
    const demoReqs = {
      'REQ-1092': { username: 'testing-test-2', name: 'Testing Account 2', role: 'user' },
      'REQ-1088': { username: 'alex_vance', name: 'Alex Vance', role: 'user' },
      'REQ-1075': { username: 'sarah_crypto', name: 'Sarah Lin', role: 'user' },
      'REQ-2233': { username: 'joeldan228@gmail.com', name: 'Joel Dan (Admin)', role: 'admin' },
    };

    const matched = demoReqs[cleanReq];
    if (matched && (matched.username.toLowerCase() === cleanUser.toLowerCase() || matched.name.toLowerCase() === cleanUser.toLowerCase())) {
      const authUser = {
        username: matched.username,
        name: matched.name,
        role: matched.role,
        authMethod: 'request_id',
        requestId: cleanReq,
        standing: matched.role === 'admin' ? 'Operations Super Admin' : 'Verified Private Client (Tier 1)',
      };
      appState.currentUser = authUser;
      appState.inspectedClientUsername = null;
      localStorage.setItem('meridian_user', JSON.stringify(authUser));
      renderUserProfileWidget();
      renderClientDashboard();
      fetchRequests();
      renderRequestsTable();
      showToast(`Authenticated via ${cleanReq}. Welcome, ${authUser.name}!`, 'success');
      setTimeout(() => navigateToTab('client-dashboard'), 400);
      return;
    }

    if (errorEl) {
      errorEl.textContent = err.message || 'Authentication with Request ID failed';
      errorEl.style.display = 'block';
    }
    showToast(err.message || 'Verification failed', 'error');
  }
}

async function handleRegister(name, username, password, role) {
  const errorEl = document.getElementById('reg-error-msg');
  const successEl = document.getElementById('reg-success-msg');
  if (errorEl) errorEl.style.display = 'none';

  try {
    const res = await fetch('/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, username, password, role })
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || 'Registration failed');
    }

    if (successEl) {
      successEl.textContent = 'Account created successfully! Please sign in.';
      successEl.style.display = 'block';
    }
    showToast('Account registered! You can now sign in.', 'success');
    // Switch to login tab
    document.getElementById('auth-tab-login')?.click();
  } catch (err) {
    if (errorEl) {
      errorEl.textContent = err.message;
      errorEl.style.display = 'block';
    }
    showToast(err.message || 'Registration failed', 'error');
  }
}

// Token Swap Calculations
function updateSwapQuote() {
  const payToken = document.getElementById('swap-pay-token')?.value || 'USDT';
  const recToken = document.getElementById('swap-receive-token')?.value || 'BTC';
  const payAmt = parseFloat(document.getElementById('swap-pay-amount')?.value) || 0;
  const recInput = document.getElementById('swap-receive-amount');
  const rateLabel = document.getElementById('swap-rate-display');

  const getPrice = (sym) => {
    if (sym === 'USDT') return 1;
    const m = appState.markets.find(item => item.baseAsset === sym);
    return m ? m.price : 1;
  };

  const payPrice = getPrice(payToken);
  const recPrice = getPrice(recToken);

  const rate = payPrice / recPrice;
  const receiveEst = (payAmt * rate) * 0.998; // 0.2% slippage / fee

  if (recInput) recInput.value = receiveEst > 0 ? receiveEst.toFixed(recToken === 'USDT' ? 2 : 6) : '0.00';
  if (rateLabel) rateLabel.textContent = `1 ${payToken} = ${(rate).toFixed(recToken === 'USDT' ? 2 : 6)} ${recToken}`;
}

// ============================================================================
// SECTION 9: INITIALIZATION & EVENT BINDINGS
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize user from localStorage
  const savedUser = localStorage.getItem('meridian_user');
  if (savedUser) {
    try {
      appState.currentUser = JSON.parse(savedUser);
    } catch {}
  } else {
    // Default to Joel Dan (Admin)
    appState.currentUser = {
      username: 'joeldan228@gmail.com',
      name: 'Joel Dan (Admin)',
      role: 'admin',
    };
  }

  // 2. Initial Data Generation
  appState.candles = generateCandles(appState.activePair.price, 60, '15m');
  appState.orderBook = generateOrderBook(appState.activePair.price, appState.activePair.precision);
  appState.trades = generateRecentTrades(appState.activePair.price, appState.activePair.precision);

  // 3. Render all core UI views
  renderTickerBar();
  renderPairSelectorDropdown();
  renderClientDashboard();
  renderMarketsTable();
  renderPositionsAndOrders();
  renderPortfolioAssets();
  renderUserProfileWidget();
  fetchRequests();

  // 4. Setup Navigation Listeners
  document.querySelectorAll('.nav-btn, .mob-nav-item, .mob-drawer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      if (tab) {
        navigateToTab(tab);
        document.getElementById('mobile-drawer-menu')?.classList.remove('open');
      }
    });
  });

  document.getElementById('brand-nav-btn')?.addEventListener('click', () => navigateToTab('home'));
  document.getElementById('hero-btn-login')?.addEventListener('click', () => navigateToTab('login'));
  document.getElementById('hero-btn-trade')?.addEventListener('click', () => navigateToTab('trade'));
  document.getElementById('hero-btn-dashboard')?.addEventListener('click', () => navigateToTab('client-dashboard'));

  // Mobile hamburger menu toggle
  document.getElementById('mobile-toggle-btn')?.addEventListener('click', () => {
    const drawer = document.getElementById('mobile-drawer-menu');
    drawer?.classList.toggle('open');
  });

  // Trading pair dropdown selector toggle
  document.getElementById('pair-menu-toggle')?.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePairMenu();
  });

  // 5. Setup Hash Listener for direct URLs (#homepage, #loginpage, etc.)
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();

  // 6. Setup Chart Controls
  document.querySelectorAll('#chart-tf-buttons .tf-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#chart-tf-buttons .tf-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.timeframe = btn.getAttribute('data-tf') || '15m';
      appState.candles = generateCandles(appState.activePair.price, 60, appState.timeframe);
      renderTradingChart();
    });
  });

  document.getElementById('chart-type-toggle')?.addEventListener('click', function() {
    appState.chartType = appState.chartType === 'candles' ? 'line' : 'candles';
    this.textContent = appState.chartType === 'candles' ? 'Candles' : 'Line';
    renderTradingChart();
  });

  document.getElementById('chart-ema-toggle')?.addEventListener('click', function() {
    appState.showEMA = !appState.showEMA;
    this.classList.toggle('active', appState.showEMA);
    renderTradingChart();
  });

  document.getElementById('chart-vol-toggle')?.addEventListener('click', function() {
    appState.showVolume = !appState.showVolume;
    this.classList.toggle('active', appState.showVolume);
    renderTradingChart();
  });

  // 7. Trading Station Order Types (Limit, Market, Stop)
  document.querySelectorAll('.order-type-tabs .ot-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.order-type-tabs .ot-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const ot = btn.getAttribute('data-type') || 'limit';
      appState.orderType = ot;

      const priceInput = document.getElementById('input-order-price');
      if (priceInput) {
        if (ot === 'market') {
          priceInput.value = appState.activePair.price.toFixed(appState.activePair.precision);
          priceInput.setAttribute('disabled', 'true');
        } else {
          priceInput.removeAttribute('disabled');
        }
      }
      calculateOrderTotals();
    });
  });

  // Trading Bottom Station Tabs (Positions, Orders, Trades)
  document.getElementById('tab-positions-btn')?.addEventListener('click', () => {
    document.querySelectorAll('.pos-tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-positions-btn')?.classList.add('active');
    appState.bottomTabActive = 'positions';
    renderPositionsAndOrders();
  });

  document.getElementById('tab-orders-btn')?.addEventListener('click', () => {
    document.querySelectorAll('.pos-tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-orders-btn')?.classList.add('active');
    appState.bottomTabActive = 'orders';
    renderPositionsAndOrders();
  });

  document.getElementById('tab-trades-btn')?.addEventListener('click', () => {
    document.querySelectorAll('.pos-tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-trades-btn')?.classList.add('active');
    appState.bottomTabActive = 'trades';
    renderPositionsAndOrders();
  });

  // Order Form Inputs & Submit
  document.getElementById('input-order-price')?.addEventListener('input', calculateOrderTotals);
  document.getElementById('input-order-amount')?.addEventListener('input', calculateOrderTotals);
  document.getElementById('input-leverage-slider')?.addEventListener('input', function() {
    const lbl = document.getElementById('leverage-val-label');
    if (lbl) lbl.textContent = `${this.value}x`;
    calculateOrderTotals();
  });

  // Quick percent balance shortcuts
  document.querySelectorAll('.pct-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pct = parseInt(btn.getAttribute('data-pct')) || 25;
      const price = parseFloat(document.getElementById('input-order-price')?.value) || appState.activePair.price;
      const targetUsd = appState.wallet.availableUsd * (pct / 100);
      const amountInput = document.getElementById('input-order-amount');
      if (amountInput && price > 0) {
        amountInput.value = (targetUsd / price).toFixed(4);
        calculateOrderTotals();
      }
    });
  });

  // Buy/Sell Side Toggle
  const btnBuy = document.getElementById('btn-side-buy');
  const btnSell = document.getElementById('btn-side-sell');
  const submitOrderBtn = document.getElementById('btn-submit-order');

  btnBuy?.addEventListener('click', () => {
    btnBuy.classList.add('active');
    btnSell?.classList.remove('active');
    if (submitOrderBtn) {
      submitOrderBtn.className = 'btn-place-order buy';
      submitOrderBtn.textContent = 'Place Buy Order';
    }
  });

  btnSell?.addEventListener('click', () => {
    btnSell.classList.add('active');
    btnBuy?.classList.remove('active');
    if (submitOrderBtn) {
      submitOrderBtn.className = 'btn-place-order sell';
      submitOrderBtn.textContent = 'Place Sell Order';
    }
  });

  // Place Order Action
  submitOrderBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('input-order-amount')?.value);
    const price = parseFloat(document.getElementById('input-order-price')?.value) || appState.activePair.price;
    if (!amount || amount <= 0) {
      showToast('Please enter a valid order amount', 'error');
      return;
    }

    const side = btnBuy?.classList.contains('active') ? 'buy' : 'sell';
    const isPerp = appState.activeTab === 'perps';
    const leverage = isPerp ? (parseInt(document.getElementById('input-leverage-slider')?.value) || 10) : 1;

    if (isPerp) {
      // Add position
      appState.positions.push({
        id: `pos-${Date.now()}`,
        pair: appState.activePair.symbol,
        side: side === 'buy' ? 'long' : 'short',
        entryPrice: price,
        markPrice: price,
        size: amount,
        margin: (price * amount) / leverage,
        leverage,
        pnl: 0,
        pnlPercent: 0,
        liquidationPrice: side === 'buy' ? price * (1 - 0.95 / leverage) : price * (1 + 0.95 / leverage),
      });
      showToast(`Leveraged position opened: ${side.toUpperCase()} ${amount} ${appState.activePair.symbol}`, 'success');
    } else {
      // Add order
      appState.orders.push({
        id: `ord-${Date.now()}`,
        pair: appState.activePair.symbol,
        type: appState.orderType,
        side,
        price,
        amount,
        filled: 0,
        status: 'open',
        createdAt: new Date().toTimeString().split(' ')[0],
      });
      showToast(`Spot ${side.toUpperCase()} order placed for ${amount} ${appState.activePair.baseAsset}`, 'success');
    }

    renderPositionsAndOrders();
    const amtInput = document.getElementById('input-order-amount');
    if (amtInput) amtInput.value = '';
    calculateOrderTotals();
  });

  // 8. Markets Screener Category Chips & Search Input
  document.querySelectorAll('#market-category-chips .cat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#market-category-chips .cat-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      appState.selectedCategory = chip.getAttribute('data-cat') || 'all';
      renderMarketsTable();
    });
  });

  document.getElementById('market-search-input')?.addEventListener('input', (e) => {
    appState.marketSearchQuery = e.target.value;
    renderMarketsTable();
  });

  // 9. Client Dashboard History Search
  document.getElementById('history-search-input')?.addEventListener('input', (e) => {
    renderSettlementHistory(e.target.value);
  });

  // 10. Requests Manager Filters & Search Input
  document.querySelectorAll('#req-filter-buttons .req-status-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#req-filter-buttons .req-status-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.requestFilterStatus = btn.getAttribute('data-status') || 'all';
      renderRequestsTable();
    });
  });

  document.getElementById('requests-search-input')?.addEventListener('input', (e) => {
    appState.requestSearchQuery = e.target.value;
    renderRequestsTable();
  });

  // 11. Modals (Deposit/Withdraw, Swap, Request)
  const depWithModal = document.getElementById('modal-deposit-withdraw');
  const swapModal = document.getElementById('modal-swap');
  const subReqModal = document.getElementById('modal-submit-request');

  document.getElementById('btn-open-deposit')?.addEventListener('click', () => {
    if (depWithModal) depWithModal.classList.add('open');
    document.getElementById('modal-tab-deposit')?.click();
  });
  document.getElementById('btn-open-withdraw')?.addEventListener('click', () => {
    if (depWithModal) depWithModal.classList.add('open');
    document.getElementById('modal-tab-withdraw')?.click();
  });
  document.getElementById('dashboard-trigger-deposit')?.addEventListener('click', () => {
    if (depWithModal) depWithModal.classList.add('open');
    document.getElementById('modal-tab-deposit')?.click();
  });
  document.getElementById('dashboard-trigger-withdraw')?.addEventListener('click', () => {
    if (depWithModal) depWithModal.classList.add('open');
    document.getElementById('modal-tab-withdraw')?.click();
  });
  document.getElementById('portfolio-btn-deposit')?.addEventListener('click', () => {
    if (depWithModal) depWithModal.classList.add('open');
    document.getElementById('modal-tab-deposit')?.click();
  });
  document.getElementById('portfolio-btn-withdraw')?.addEventListener('click', () => {
    if (depWithModal) depWithModal.classList.add('open');
    document.getElementById('modal-tab-withdraw')?.click();
  });
  document.getElementById('btn-open-swap')?.addEventListener('click', () => {
    if (swapModal) {
      swapModal.classList.add('open');
      updateSwapQuote();
    }
  });
  document.getElementById('btn-open-submit-request')?.addEventListener('click', () => {
    if (subReqModal) subReqModal.classList.add('open');
  });

  // Modal Closers
  document.getElementById('btn-close-depwith')?.addEventListener('click', () => depWithModal?.classList.remove('open'));
  document.getElementById('btn-close-swap')?.addEventListener('click', () => swapModal?.classList.remove('open'));
  document.getElementById('btn-close-subreq')?.addEventListener('click', () => subReqModal?.classList.remove('open'));

  // Deposit/Withdraw Modal Tab Switching
  document.getElementById('modal-tab-deposit')?.addEventListener('click', () => {
    document.getElementById('modal-tab-deposit')?.classList.add('active');
    document.getElementById('modal-tab-withdraw')?.classList.remove('active');
    document.getElementById('modal-deposit-panel').style.display = 'block';
    document.getElementById('modal-withdraw-panel').style.display = 'none';
    document.getElementById('dep-with-modal-title').textContent = 'Deposit Crypto';
  });

  document.getElementById('modal-tab-withdraw')?.addEventListener('click', () => {
    document.getElementById('modal-tab-withdraw')?.classList.add('active');
    document.getElementById('modal-tab-deposit')?.classList.remove('active');
    document.getElementById('modal-deposit-panel').style.display = 'none';
    document.getElementById('modal-withdraw-panel').style.display = 'block';
    document.getElementById('dep-with-modal-title').textContent = 'Request Withdrawal';
  });

  // Deposit Network Selector Change
  document.getElementById('modal-select-network')?.addEventListener('change', (e) => {
    const net = e.target.value;
    const depAddrSpan = document.querySelector('#modal-deposit-address span');
    if (depAddrSpan) {
      depAddrSpan.textContent = net === 'Trc-20' 
        ? 'TK4HkBbHm2ZaPMYE3PY93WGXb667xheFb5' 
        : '0xc0c2ef5c5c6eab62e4d2593846035ae0b09edee4';
    }
  });

  // Submit Withdrawal in Modal
  document.getElementById('modal-btn-submit-withdraw')?.addEventListener('click', () => {
    const addr = document.getElementById('modal-withdraw-address')?.value;
    const amt = document.getElementById('modal-withdraw-amount')?.value;
    if (!addr) {
      showToast('Please enter a destination wallet address.', 'error');
      return;
    }
    submitNewRequest({
      amount: amt || 5000,
      currency: 'USDT',
      type: 'withdrawal',
      reason: 'Custodial balance clearance to external ledger',
      walletAddress: addr,
    });
    depWithModal?.classList.remove('open');
    navigateToTab('requests');
  });

  // Copy in modal
  document.getElementById('modal-btn-copy-dep')?.addEventListener('click', () => {
    const depAddr = document.querySelector('#modal-deposit-address span')?.textContent || 'TK4HkBbHm2ZaPMYE3PY93WGXb667xheFb5';
    copyText(depAddr);
  });

  // Swap Token Selects and Inputs
  document.getElementById('swap-pay-amount')?.addEventListener('input', updateSwapQuote);
  document.getElementById('swap-pay-token')?.addEventListener('change', updateSwapQuote);
  document.getElementById('swap-receive-token')?.addEventListener('change', updateSwapQuote);

  document.getElementById('swap-flip-btn')?.addEventListener('click', () => {
    const pay = document.getElementById('swap-pay-token');
    const rec = document.getElementById('swap-receive-token');
    if (pay && rec) {
      const temp = pay.value;
      pay.value = rec.value;
      rec.value = temp;
      updateSwapQuote();
    }
  });

  document.getElementById('btn-execute-swap')?.addEventListener('click', () => {
    const payToken = document.getElementById('swap-pay-token')?.value || 'USDT';
    const recToken = document.getElementById('swap-receive-token')?.value || 'BTC';
    const payAmt = parseFloat(document.getElementById('swap-pay-amount')?.value) || 0;
    const recAmt = parseFloat(document.getElementById('swap-receive-amount')?.value) || 0;

    if (payAmt <= 0) {
      showToast('Please enter a valid swap amount', 'error');
      return;
    }

    showToast(`Swapped ${payAmt} ${payToken} for ${recAmt} ${recToken}!`, 'success');
    swapModal?.classList.remove('open');
  });

  // Submit Request Modal Form
  document.getElementById('form-submit-request-dialog')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.getElementById('subreq-type')?.value;
    const amount = document.getElementById('subreq-amount')?.value;
    const currency = document.getElementById('subreq-currency')?.value;
    const walletAddress = document.getElementById('subreq-wallet')?.value;
    const reason = document.getElementById('subreq-reason')?.value;

    submitNewRequest({ type, amount, currency, walletAddress, reason });
    subReqModal?.classList.remove('open');
  });

  // Refresh requests button
  document.getElementById('btn-refresh-requests')?.addEventListener('click', () => {
    fetchRequests();
    showToast('Refreshed requests from ledger', 'info');
  });

  // 12. Login & Register Forms (3 Tab Switcher: Password, Request ID, Register)
  const tabLogin = document.getElementById('auth-tab-login');
  const tabReqLogin = document.getElementById('auth-tab-request-login');
  const tabRegister = document.getElementById('auth-tab-register');
  const formLogin = document.getElementById('form-login');
  const formReqLogin = document.getElementById('form-request-login');
  const formRegister = document.getElementById('form-register');

  tabLogin?.addEventListener('click', () => {
    tabLogin?.classList.add('active');
    tabReqLogin?.classList.remove('active');
    tabRegister?.classList.remove('active');
    if (formLogin) formLogin.style.display = 'flex';
    if (formReqLogin) formReqLogin.style.display = 'none';
    if (formRegister) formRegister.style.display = 'none';
  });

  tabReqLogin?.addEventListener('click', () => {
    tabReqLogin?.classList.add('active');
    tabLogin?.classList.remove('active');
    tabRegister?.classList.remove('active');
    if (formReqLogin) formReqLogin.style.display = 'flex';
    if (formLogin) formLogin.style.display = 'none';
    if (formRegister) formRegister.style.display = 'none';
  });

  tabRegister?.addEventListener('click', () => {
    tabRegister?.classList.add('active');
    tabLogin?.classList.remove('active');
    tabReqLogin?.classList.remove('active');
    if (formRegister) formRegister.style.display = 'flex';
    if (formLogin) formLogin.style.display = 'none';
    if (formReqLogin) formReqLogin.style.display = 'none';
  });

  // Standard password login submit
  formLogin?.addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('login-input-username')?.value;
    const p = document.getElementById('login-input-password')?.value;
    handleLogin(u, p);
  });

  // REQUEST ID + CLIENT / USERNAME login submit
  formReqLogin?.addEventListener('submit', (e) => {
    e.preventDefault();
    const reqId = document.getElementById('login-input-req-id')?.value;
    const user = document.getElementById('login-input-req-username')?.value;
    handleRequestLogin(reqId, user);
  });

  // Register submit
  formRegister?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-input-name')?.value;
    const u = document.getElementById('reg-input-username')?.value;
    const p = document.getElementById('reg-input-password')?.value;
    const r = document.getElementById('reg-input-role')?.value;
    handleRegister(name, u, p, r);
  });

  // Fast 1-Click Sign-in Chips: REQUEST ID Logins
  document.getElementById('demo-chip-req-testing')?.addEventListener('click', () => {
    tabReqLogin?.click();
    const reqInput = document.getElementById('login-input-req-id');
    const userInput = document.getElementById('login-input-req-username');
    if (reqInput) reqInput.value = 'REQ-1092';
    if (userInput) userInput.value = 'testing-test-2';
    handleRequestLogin('REQ-1092', 'testing-test-2');
  });

  document.getElementById('demo-chip-req-alex')?.addEventListener('click', () => {
    tabReqLogin?.click();
    const reqInput = document.getElementById('login-input-req-id');
    const userInput = document.getElementById('login-input-req-username');
    if (reqInput) reqInput.value = 'REQ-1088';
    if (userInput) userInput.value = 'alex_vance';
    handleRequestLogin('REQ-1088', 'alex_vance');
  });

  document.getElementById('demo-chip-req-sarah')?.addEventListener('click', () => {
    tabReqLogin?.click();
    const reqInput = document.getElementById('login-input-req-id');
    const userInput = document.getElementById('login-input-req-username');
    if (reqInput) reqInput.value = 'REQ-1075';
    if (userInput) userInput.value = 'sarah_crypto';
    handleRequestLogin('REQ-1075', 'sarah_crypto');
  });

  // Fast 1-Click Sign-in Chips: Standard Password Logins
  document.getElementById('demo-chip-admin')?.addEventListener('click', () => {
    tabLogin?.click();
    const userInput = document.getElementById('login-input-username');
    const passInput = document.getElementById('login-input-password');
    if (userInput) userInput.value = 'joeldan228@gmail.com';
    if (passInput) passInput.value = 'JoelDan2026!';
    handleLogin('joeldan228@gmail.com', 'JoelDan2026!');
  });

  document.getElementById('demo-chip-client')?.addEventListener('click', () => {
    tabLogin?.click();
    const userInput = document.getElementById('login-input-username');
    const passInput = document.getElementById('login-input-password');
    if (userInput) userInput.value = 'alex_vance';
    if (passInput) passInput.value = 'admin123';
    handleLogin('alex_vance', 'admin123');
  });

  document.getElementById('menu-sign-out')?.addEventListener('click', () => {
    appState.currentUser = null;
    localStorage.removeItem('meridian_user');
    renderUserProfileWidget();
    renderRequestsTable();
    toggleUserMenu(false);
    navigateToTab('login');
    showToast('Signed out of Meridian Bancorp', 'info');
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    const userMenu = document.getElementById('user-menu-dropdown');
    const userBtn = document.getElementById('user-profile-widget');
    if (userMenu && !userBtn?.contains(e.target) && !userMenu.contains(e.target)) {
      userMenu.classList.remove('show');
    }

    const pairDropdown = document.getElementById('pair-selector-dropdown');
    const pairBtn = document.getElementById('pair-menu-toggle');
    if (pairDropdown && !pairBtn?.contains(e.target) && !pairDropdown.contains(e.target)) {
      pairDropdown.classList.remove('show');
    }
  });

  // 14. Live Simulator: simulate price ticks, order book updates, and chart adjustments
  setInterval(() => {
    appState.markets.forEach(m => {
      const delta = (Math.random() - 0.49) * (m.price * 0.001);
      m.price = Number((m.price + delta).toFixed(m.precision));
      m.high24h = Math.max(m.high24h, m.price);
      m.low24h = Math.min(m.low24h, m.price);
    });

    // Update active market
    const lastCandle = appState.candles[appState.candles.length - 1];
    if (lastCandle) {
      lastCandle.close = appState.activePair.price;
      lastCandle.high = Math.max(lastCandle.high, appState.activePair.price);
      lastCandle.low = Math.min(lastCandle.low, appState.activePair.price);
    }
    appState.orderBook = generateOrderBook(appState.activePair.price, appState.activePair.precision);

    // Refresh displays if active
    if (appState.activeTab === 'trade' || appState.activeTab === 'perps') {
      const priceElem = document.getElementById('trade-active-price');
      if (priceElem) priceElem.textContent = `$${appState.activePair.price.toLocaleString(undefined, { minimumFractionDigits: appState.activePair.precision })}`;
      renderTradingChart();
      renderOrderBookUI();
      if (appState.bottomTabActive === 'trades') {
        renderPositionsAndOrders();
      }
    }
  }, 2500);

  // Resize window handler for canvas
  window.addEventListener('resize', () => {
    if (appState.activeTab === 'trade' || appState.activeTab === 'perps') {
      renderTradingChart();
    }
  });
});

// ============================================================================
// EXPLICIT GLOBAL WINDOW BINDINGS (For inline HTML event triggers)
// ============================================================================

window.switchActivePair = switchActivePair;
window.fillOrderPrice = fillOrderPrice;
window.copyText = copyText;
window.closePosition = closePosition;
window.cancelOrder = cancelOrder;
window.updateRequestStatus = updateRequestStatus;
window.deleteRequest = deleteRequest;
window.navigateToTab = navigateToTab;
window.openSwapFor = openSwapFor;
window.toggleUserMenu = toggleUserMenu;
window.handleRequestLogin = handleRequestLogin;
window.renderClientDashboard = renderClientDashboard;
window.showToast = showToast;
