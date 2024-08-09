import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const Nft = ({ nft }) => {
  const auctionEndDate = "2024-12-31T23:59:59";
  const calculateTimeLeft = () => {
    const difference = +new Date(auctionEndDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <section className="shadow-xl rounded-t-3xl rounded-bl-3xl rounded-br-[80px] bg-bcgray p-5">
      <section className="flex justify-between mb-4">
        <section className="flex gap-2 items-center">
          <section className="w-[40px] h-[40px] rounded-full">
            <img
              className="w-full rounded-full"
              src={nft.author.profilePic}
              alt=""
            />
          </section>
          <section className="flex flex-col text-left">
            <span className="text-white text-sm font-bold">Golden Crypto</span>
            <span className="text-neutral-400 font-semibold text-xs">
              created by {nft.author.firstName}
            </span>
          </section>
        </section>
        <section className="flex items-center gap-2">
          <section className="text-neutral-300 flex items-center gap-1 px-3 py-2 text-sm rounded-xl">
            <FaRegHeart /> <span>34</span>
          </section>
        </section>
      </section>
      <section className="relative flex w-ful h-[250px] items-center gap-2">
        <section className="w-full h-full">
          <img
            className="h-full w-full object-cover rounded-xl"
            src={nft.displayImage}
            alt={nft.displayImage}
          />
          <section className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-lg flex space-x-2">
            <section className="flex flex-col items-center">
              <span className="text-lg font-bold">{timeLeft.days}</span>
              <span className="text-xs">Days</span>
            </section>
            <span>:</span>
            <section className="flex flex-col items-center">
              <span className="text-lg font-bold">{timeLeft.hours}</span>
              <span className="text-xs">Hours</span>
            </section>
            <span>:</span>
            <section className="flex flex-col items-center">
              <span className="text-lg font-bold">{timeLeft.minutes}</span>
              <span className="text-xs">Minutes</span>
            </section>
            <span>:</span>
            <section className="flex flex-col items-center">
              <span className="text-lg font-bold">{timeLeft.seconds}</span>
              <span className="text-xs">Seconds</span>
            </section>
          </section>
        </section>
      </section>
      <section className="line my-3 h-1"></section>
      <section className="flex justify-between">
        <section className="flex gap-2 items-center">
          <section className="flex flex-col text-left">
            <span className="text-neutral-400">Last Bid</span>
            <span className="text-white font-bold text-base">1.009ETH</span>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Nft;
