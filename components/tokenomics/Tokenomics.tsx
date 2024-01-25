import Image from "next/image";

function Tokenomics() {
  return (
    <section className="mt-16 py-10">
      <div className="container">
        <div className="flex justify-center items-start h-24">
          <h1 className="text-white font-titleBold font-Barlow uppercase text-5xl">
            how to buy?
          </h1>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <p className="text-white">Check out the video below!</p>
          <video
            src="/assets/video/buyvideo.mp4"
            poster="/assets/images/poster.png"
            controls
            className="w-1/2"
          ></video>
        </div>
        <div className="grid grid-cols-3 font-Barlow">
          <div>
            <div className="bg-artic flex flex-col gap-2 w-[80%] h-full mx-auto p-8 rounded-tl-[35px]">
              <h2 className="mb-2 text-4xl uppercase font-[900]">step 1</h2>
              <ul className="font-Bold mb-4">
                <li>Swap your $ETH to $SHIB</li>
                <li>$SHIB - Contract</li>
                <li>0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce</li>
              </ul>
              <div>
                <button className="btn bg-clr_sec italic font-Barlow uppercase">
                  <h2 className="text-white text-base">buy $shib here</h2>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-artic flex flex-col gap-2 w-[80%] h-full mx-auto p-8">
              <h2 className="mb-2 text-[40px] uppercase font-[900]">step 2</h2>
              <ul className="font-Bold mb-4">
                <li>Swap your $SHIB to $SHIB0.5</li>
                <li>$SHIB0.5 - Contract</li>
                <li>0x8Eb94A06b4716093DBfE335cbdb098DEb2dcdE1b</li>
              </ul>
              <div>
                <button className="btn bg-clr_sec italic font-Barlow uppercase">
                  <h2 className="text-white text-base">
                    swap $shib to $shib0.5
                  </h2>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-artic flex flex-col gap-2 w-[80%] h-full mx-auto p-8 rounded-tr-[35px]">
              <Image
                src="/assets/images/thumbs_up_logo.png"
                alt="thumbs up logo"
                width={266}
                height={266}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-4">
          <div>
            <div className="rounded-bl-[35px] text-[#25D366] uppercase px-3 w-[70%] bg-token_bg mx-auto font-titleBold font-Barlow flex flex-col justify-center items-center ">
              <h3 className="mb-2 text-4xl">0%</h3>
              <p className="mb-4 font-medium">buy & sell tax</p>
            </div>
          </div>
          <div>
            <div className="text-[#ffc53a] uppercase px-3 w-[70%] bg-token_bg mx-auto font-titleBold font-Barlow flex flex-col justify-center items-center">
              <h3 className="mb-2 text-4xl">3400+</h3>
              <p className="mb-4 font-medium">holders</p>
            </div>
          </div>
          <div>
            <div className="text-[#FF0084] uppercase px-3 w-[70%] bg-token_bg mx-auto font-titleBold font-Barlow flex flex-col justify-center items-center">
              <h3 className="mb-2 text-4xl">contract</h3>
              <p className="mb-4 font-medium">renounced</p>
            </div>
          </div>
          <div>
            <div className="rounded-br-[35px] text-[#1DA1F2] uppercase px-3 w-[70%] bg-token_bg mx-auto font-titleBold font-Barlow flex flex-col justify-center items-center">
              <h3 className="mb-2 text-4xl">shiba lp</h3>
              <p className="mb-4 font-medium">$shib0.5[lp]$shib</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
