"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Tokenomics() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function handleVisible() {
    if (ref.current) {
      const rect = ref.current?.getBoundingClientRect();
      const top = rect.top + window.pageYOffset;
      const left = rect.left + window.pageXOffset;
      if (window.scrollY > top) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleVisible);
    handleVisible();
    return () => {
      window.removeEventListener("scroll", handleVisible);
    };
  }, []);

  return (
    <section className="mt-16 py-10 " id="tokenomics">
      <div className="container">
        <div className="flex justify-center items-start h-24">
          <h1 className="text-white font-titleBold font-Barlow uppercase text-4xl md:text-5xl">
            how to buy?
          </h1>
        </div>

        <div className="flex flex-col gap-4 mb-4">
          <p className="text-white">Check out the video below!</p>
          <video
            src="/assets/video/buyvideo.mp4"
            poster="/assets/images/poster.png"
            controls
            className="md:w-1/2"
          ></video>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-Barlow">
          <div
          // ref={ref}
          // className={`fade_element ${isVisible ? "opacity-100" : ""}`}
          >
            <div className="bg-artic flex flex-col gap-2 w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto p-8 rounded-t-[35px] md:rounded-t-[0] md:rounded-tl-[35px]">
              <h2 className="mb-2 text-4xl uppercase font-[900]">step 1</h2>
              <ul className="font-Bold mb-4 text-[15px] lg:text-[16px]">
                <li>Swap your $ETH to $SHIB</li>
                <li>$SHIB - Contract</li>
                <li>0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce</li>
              </ul>
              <div>
                <Link
                  href="https://app.uniswap.org/#/swap?outputCurrency=0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
                  target="_blank"
                  className="btn bg-clr_sec italic font-Barlow uppercase"
                >
                  <h2 className="text-white text-base">buy $shib here</h2>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-artic flex flex-col gap-2 w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto p-8">
              <h2 className="mb-2 text-[40px] uppercase font-[900]">step 2</h2>
              <ul className="font-Bold mb-4 text-[15px] lg:text-[16px]">
                <li>Swap your $SHIB to $SHIB0.5</li>
                <li>$SHIB0.5 - Contract</li>
                <li>0x8Eb94A06b4716093DBfE335cbdb098DEb2dcdE1b</li>
              </ul>
              <div className="inline">
                <Link
                  href="https://app.uniswap.org/#/swap?outputCurrency=0x8Eb94A06b4716093DBfE335cbdb098DEb2dcdE1b"
                  target="_blank"
                  className="btn bg-clr_sec italic font-Barlow uppercase inline"
                >
                  <h2 className="text-white text-base inline">
                    swap $shib to $shib0.5
                  </h2>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-artic flex flex-col gap-2 w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto p-8 rounded-b-[35px] md:rounded-b-[0] md:rounded-tr-[35px]">
              <Image
                className="mx-auto"
                src="/assets/images/thumbs_up_logo.png"
                alt="thumbs up logo"
                width={266}
                height={266}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
          <div>
            <div className="md:rounded-bl-[35px] text-[#25D366] uppercase px-3 py-1.5 w-[95%] sm:w-[85%] md:w-[80%] bg-token_bg mx-auto font-titleBold font-Barlow flex flex-col justify-center items-center ">
              <h3 className="mb-2 text-4xl md:text-[40px]">0%</h3>
              <p className="mb-4 font-medium">buy & sell tax</p>
            </div>
          </div>

          <div>
            <div className="text-[#ffc53a] uppercase px-3 py-1.5 w-[95%] sm:w-[85%] md:w-[80%] bg-token_bg mx-auto font-titleBold font-Barlow flex flex-col justify-center items-center">
              <h3 className="mb-2 text-4xl md:text-[40px]">3400+</h3>
              <p className="mb-4 font-medium text-[15px] md:text-[16px]">
                holders
              </p>
            </div>
          </div>

          <div>
            <div className="text-[#FF0084] uppercase px-3 py-1.5 w-[95%] sm:w-[85%] md:w-[80%] bg-token_bg mx-auto font-titleBold font-Barlow flex flex-col justify-center items-center">
              <h3 className="mb-2 text-4xl md:text-[40px]">contract</h3>
              <p className="mb-4 font-medium text-[15px] md:text-[16px]">
                renounced
              </p>
            </div>
          </div>

          <div>
            <div className="md:rounded-br-[35px] text-[#1DA1F2] uppercase px-3 py-1.5 w-[95%] sm:w-[85%] md:w-[80%] bg-token_bg mx-auto font-titleBold font-Barlow flex flex-col justify-center items-center">
              <h3 className="mb-2 text-4xl md:text-[40px]">shiba lp</h3>
              <p className="mb-4 font-medium text-[15px] md:text-[16px]">
                $shib0.5[lp]$shib
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
