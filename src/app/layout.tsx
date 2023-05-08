"use client";
import Navigation from "@/components/navigation";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import Footer from "@/components/footer";

// -------------- WAGMI CONFIG STARTS ----------------

import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";

import { goerli, sepolia } from "@wagmi/chains";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY || "" }),
    // alchemyProvider({ apiKey: "-tJIbsRVnkjfqezDfO5A5sifXxeYzpGC" }),
    publicProvider(),
  ]
);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "...",
      },
    }),
  ],
  provider,
  webSocketProvider,
});

// -------------- WAGMI CONFIG ENDS ----------------

const dm_sans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <WagmiConfig client={client}>
          <Navigation />
          {children}
          <Footer />
        </WagmiConfig>
      </body>
    </html>
  );
}
