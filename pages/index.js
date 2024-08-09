import Hero from "@/components/home/Hero";
import Trending from "@/components/home/Trending";
import Navbar from "@/components/navbar/Navbar";
import { Poppins } from "next/font/google";
import WeaveDB from "weavedb-sdk";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function Home() {
  const start = async () => {
    const CONTRACT_TX_ID = "XxEQG71bTCWwmmOxBXgFkR6KQvt_q_hXk0EbH362AEc";

    const db = new WeaveDB({ contractTxId: CONTRACT_TX_ID });
    await db.init();

    const personData = { name: "Bob", age: 20 };
    const tx = await db.add(personData, "users");

    console.log(tx);
  };

  return (
    <main>
      <section className="bg-bc2">
        <Navbar />
        <Hero />
        <Trending/>
        {/* <button onClick={start}>Start</button> */}
      </section>
    </main>
  );
}
