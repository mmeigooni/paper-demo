import {
  ConnectWallet,
  useConnect,
  paperWallet,
  useAddress,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

const paperWalletCustomButton = paperWallet({
  clientId: process.env.PAPER_CLIENT_ID as string,
});

const Home: NextPage = () => {
  const connect = useConnect();
  const address = useAddress();

  useEffect(() => {
    console.log(`Address: ${address}`);
  }, [address]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://thirdweb.com/">thirdweb</a>!
        </h1>

        <p className={styles.description}>
          Get started by configuring your desired network in{" "}
          <code className={styles.code}>pages/_app.tsx</code>, then modify the{" "}
          <code className={styles.code}>pages/index.tsx</code> file!
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.connect}>
          <button
            onClick={async () => {
              console.log("connecting...");
              const address2 = await connect(paperWalletCustomButton, {
                email: "muhammad+paper3@thirdweb.com",
              });
              console.log("connected to ", address2);
            }}
          >
            Connect with Email
          </button>
        </div>
        <div className={styles.grid}>
          <a href="https://portal.thirdweb.com/" className={styles.card}>
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              thirdweb.
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a
            href="https://portal.thirdweb.com/templates"
            className={styles.card}
          >
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
