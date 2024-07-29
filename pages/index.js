import { Inter } from "next/font/google";
import WeaveDB from "weavedb-sdk";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const start = async () => {
    const CONTRACT_TX_ID = "XxEQG71bTCWwmmOxBXgFkR6KQvt_q_hXk0EbH362AEc";

    const db = new WeaveDB({ contractTxId: CONTRACT_TX_ID });
    await db.init();

    const personData = { name: "Bob", age: 20 };
    const tx = await db.add(personData, users);

    console.log(tx);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button 
      onClick={start}
      >Start</button>
    </main>
  );
}
