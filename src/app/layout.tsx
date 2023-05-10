'use client';
import Navigation from '@/components/navigation';
import { DM_Sans } from 'next/font/google';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { mainnet, polygon, polygonMumbai, sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

import './globals.css';
import Footer from '@/components/footer';

// -------------- WAGMI CONFIG STARTS ----------------

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, polygonMumbai, sepolia],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! }),
    publicProvider(),
  ]
);

const config = createConfig({
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
  publicClient,
  webSocketPublicClient,
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
      <body className={`${dm_sans.className} w-screen overflow-x-hidden`}>
        <WagmiConfig config={config}>
          <Navigation />
          {children}
          <Footer />
        </WagmiConfig>
      </body>
    </html>
  );
}
