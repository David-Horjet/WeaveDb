import { useEffect, useState } from "react";
import Nft from "../nft/Nft";
import { ButtonBg } from "../button/Buttons";

const Trending = () => {
  //   const [nfts, setNfts] = (useState < MarketplaceData) | (null > null);
  const [showModal, setShowModal] = useState(false);

  const nfts = [
    {
      id: "1",
      displayImage:
        "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-11.jpg",
      author: {
        firstName: "Perry",
        profilePic:
          "https://themesflat.co/html/axiesv/assets/images/avatar/avt-13.jpg",
      },
    },
    {
      id: "2",
      displayImage:
        "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
      author: {
        firstName: "Perry",
        profilePic:
          "https://themesflat.co/html/axiesv/assets/images/avatar/avt-13.jpg",
      },
    },
    {
      id: "3",
      displayImage:
        "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
      author: {
        firstName: "Perry",
        profilePic:
          "https://themesflat.co/html/axiesv/assets/images/avatar/avt-13.jpg",
      },
    },
    // {
    //   id: "4",
    //   displayImage:
    //     "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    //   author: {
    //     firstName: "Perry",
    //     profilePic:
    //       "https://themesflat.co/html/axiesv/assets/images/avatar/avt-13.jpg",
    //   },
    // },
  ];
  const handleModalClose = () => {
    setShowModal(false);
    setSelectedNft(null);
  };

  return (
    <section id="explore" className="bg-bc2 md:px-10 px-4 py-20">
      <section className="w-full flex items-center justify-between">
        <span className="uppercase font-semibold tracking-wider text-white text-2xl md:text-3xl">
          Live Auctions 🔥
        </span>
        <span className="uppercase text-bc text-sm md:text-base font-medium">
          EXPLORE MORE
        </span>
      </section>
      <section className="w-100 py-10">
        {nfts ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nfts.map((nft) => (
              <Nft
                nft={nft}
              />
            ))}
          </section>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></section>
        )}
      </section>
      <section className="w-full flex justify-center">
        <section className="w-fit">
          <ButtonBg className="bg-bc px-10 py-4" onClick={undefined}>
            Explore More
          </ButtonBg>
        </section>
      </section>
      {showModal && selectedNft && (
        <PurchaseModal
          nft={selectedNft}
          onClose={handleModalClose}
          onPurchase={handleModalClose} // Replace with actual purchase function
        />
      )}
    </section>
  );
};

export default Trending;
