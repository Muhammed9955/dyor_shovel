import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs.page";
import FAQ from "./pages/FAQ/FAQ.page";
import Home from "./pages/Home/Home.page";
import MeetOurCrew from "./pages/MeetTheTeam/MeetTheTeam.page";
import StroePolicies from "./pages/StroePolicies/StorePolicies";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Testimonials from "./pages/Testimonials/Testimonials.page";
import React, { useMemo } from "react";
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";

import {
  getLedgerWallet,
  getMathWallet,
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolongWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import {
  WalletDialogProvider,
  // WalletDisconnectButton,
} from "@solana/wallet-adapter-material-ui";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

export const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

export const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

// const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
export const connection = new anchor.web3.Connection(rpcHost);

export const startDateSeed = parseInt(
  process.env.REACT_APP_CANDY_START_DATE!,
  10
);

export const txTimeout = 30000; // milliseconds (confirm this works for your project)

function App() {
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getTorusWallet({
        options: {
          clientId:
            "BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ",
        },
      }),
      getLedgerWallet(),
      getSolongWallet(),
      getMathWallet(),
      getSolletWallet(),
    ],
    []
  );
  return (
    <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
      <WalletProvider wallets={wallets}>
        <WalletDialogProvider>
          <div className="App">
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/aboutUs" component={AboutUs} />
                <Route exact path="/stroePolicies" component={StroePolicies} />
                <Route exact path="/testimonials" component={Testimonials} />
                <Route exact path="/meetOurCrew" component={MeetOurCrew} />
                <Route exact path="/faq" component={FAQ} />
              </Switch>
            </Router>
          </div>
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
