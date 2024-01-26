import Image from "next/image";
import { MdRocketLaunch } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import "./homeSection.css";
import Link from "next/link";

function HomeSection() {
  return (
    <section className="py-8 pt-[5rem]" id="home">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col gap-2">
          <div>
            <button className="bg-[#42321c] px-3 py-1 rounded-full active:border-clr_primary transitinoWoof">
              <div className="text-clr_primary text-xl uppercase font-titleBold font-Barlow flex items-center gap-2">
                <h3 className="">to the moon - woof!</h3>
                <MdRocketLaunch className="text-3xl" />
              </div>
            </button>
          </div>
          <div>
            <h2 className="uppercase font-Barlow font-titleBold text-6xl md:text-8xl text-white mb-2 max-w-[30rem]">
              half shiba inu
            </h2>
          </div>
          <div>
            <p className="font-Roboto text-white max-w-[25rem] mb-4 text-[15px] sm:text-[16px]">
              $SHIB0.5 is one of the first tokens to be paired with $SHIB LP.
              You have to own or buy $SHIB, then swap $SHIB for $SHIB0.5. In
              that way, we take $SHIB out of circulation and aim to reach half
              the market cap of Shiba Inu!
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://medium.com/@CryptoReeper/the-awakening-of-half-shib-shib0-5-60107dd76898"
              target="_blank"
              className="btn uppercase font-Roboto bg-clr_primary"
            >
              <h2 className="text-base">read medium</h2>
              <MdRocketLaunch className="text-xl" />
            </Link>
            <Link
              href="https://t.me/HalfShibaInu"
              target="_blank"
              className="btn uppercase font-Roboto text-clr_primary border-clr_primary border-[1px]"
            >
              <h2 className="text-base">telegram</h2>
              <FaTelegram className="text-xl" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image
            src="/assets/images/logo_halfshibainu.png"
            alt="logo halfshibainu"
            width={360}
            height={360}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
