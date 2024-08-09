import { IoRocket } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { ButtonBg } from "../button/Buttons";
import Image from "next/image";

const Hero = () => {
  // const navigate = useNavigate()
  return (
    <section className="w-full bg-cover bg-no-repeat bg-center py-10 md:px-14 px-2 z-10 bg-bc2 relative">
      <section className="w-full md:flex h-[100vh] bg-image-container bg-fixed items-center pt-28 md:pt-0 md:justify-center">
        <section className="w-full md:w-1/2">
          <span className="text-bc tracking-widest text-md uppercase font-semibold bg-[#21593F] px-3 py-2 rounded-md">Live Gaming</span>
          <h1
            data-aos="fade-up"
            className="md:text-left text-center my-5 text-white md:text-[45px] text-[32px] font-bold capitalize"
          >
            Discover, find, <br />
            <span className="text-clip">Sell extra ordinary</span> Monster NFTs
          </h1>
          <p
            data-aos="fade-up"
            className="md:text-left text-center mb-5 text-neutral-300 text-[16px] md:text-xl md:leading-9"
          >
            Marketplace for monster character cllections non fungible token NFTs
          </p>
          <section className="flex gap-4 justify-center md:justify-start">
            <section className="fit">
              <ButtonBg className="px-6 gap-2 py-3">
                <IoRocket />
                <span>Explore</span>
              </ButtonBg>
            </section>
            <section data-aos="fade-up" className="fit">
              <ButtonBg className="px-6 gap-2 py-3">
                <IoIosCreate />
                <span>Create</span>
              </ButtonBg>
            </section>
          </section>
        </section>
        <section className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/hero-nft.png"
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </section>
      </section>
    </section>
  );
};

export default Hero;
