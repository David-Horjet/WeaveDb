import Link from "next/link";

const Logo = () => {
  return (
    <>
      <section>
        <Link className="text-white font-bold text-2xl" href={"/"}>
          Game<span className="text-bc">EN</span>
        </Link>
      </section>
    </>
  );
};

export default Logo;
