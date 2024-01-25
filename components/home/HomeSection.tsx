import Image from "next/image";
import { MdRocketLaunch } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import "./homeSection.css";

function HomeSection() {
  return (
    <section className="py-8 pt-[5rem]">
      <div className="container flex">
        <div className="w-1/2 flex flex-col gap-2">
          <div>
            <button className="bg-[#42321c] px-3 py-1 rounded-full active:border-clr_primary transitinoWoof">
              <div className="text-clr_primary text-xl uppercase font-titleBold font-Barlow flex items-center gap-2">
                <h3 className="">to the moon - woof!</h3>
                <MdRocketLaunch className="text-3xl" />
              </div>
            </button>
          </div>
          <div>
            <h2 className="uppercase font-Barlow font-titleBold text-8xl text-white mb-2">
              half shiba <br /> inu
            </h2>
          </div>
          <div>
            <p className="font-Roboto text-white max-w-[70%] mb-4">
              $SHIB0.5 is one of the first tokens to be paired with $SHIB LP.
              You have to own or buy $SHIB, then swap $SHIB for $SHIB0.5. In
              that way, we take $SHIB out of circulation and aim to reach half
              the market cap of Shiba Inu!
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn uppercase font-Roboto bg-clr_primary">
              <h2 className="text-base">read medium</h2>
              <MdRocketLaunch className="text-xl" />
            </button>
            <button className="btn uppercase font-Roboto text-clr_primary border-clr_primary border-[1px]">
              <h2 className="text-base">telegram</h2>
              <FaTelegram className="text-xl" />
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
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
