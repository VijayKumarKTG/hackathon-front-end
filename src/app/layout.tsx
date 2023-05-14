'use client';
import Navigation from '@/components/navigation';
import { DM_Sans } from 'next/font/google';
import { WagmiConfig, configureChains, createClient } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
// import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

import './globals.css';
import Footer from '@/components/footer';

// -------------- WAGMI CONFIG STARTS ----------------

const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [
    // jsonRpcProvider({
    //   rpc: () => ({
    //     http: `http://127.0.0.1:8545/`,
    //   }),
    // }),
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! }),
    // publicProvider(),
  ]
);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'Hackathon',
        jsonRpcUrl:
          'https://eth-mainnet.g.alchemy.com/v2/5j7hyZzXJirxp1CV2MjzPNB5YM8y3oA8',
      },
    }),
    // new WalletConnectConnector({
    //   chains,
    //   options: {
    //     projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    //   },
    // }),
  ],
  provider,
  webSocketProvider,
});

// -------------- WAGMI CONFIG ENDS ----------------

const dm_sans = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${dm_sans.className} bg-darkblue`}>
        <WagmiConfig client={client}>
          <Navigation />
          {children}
          <Footer />
        </WagmiConfig>
      </body>
    </html>
  );
}
