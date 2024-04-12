import { configureChains, createClient, defaultChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

// Adding Polygon Mainnet to the configuration
const polygonChain = {
  id: 137,
  name: 'Polygon Mainnet',
  network: 'polygon',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: {
    default: 'https://polygon-rpc.com/',
  },
  blockExplorers: {
    default: { name: 'PolygonScan', url: 'https://polygonscan.com' },
  },
  testnet: false,
};

const { provider, chains } = configureChains(
  [polygonChain, ...defaultChains],
  [
    publicProvider()
  ]
);

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [
    // Here you can add connectors like MetaMask or WalletConnect
  ],
});

export { client, chains };
