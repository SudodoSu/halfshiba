import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";

function Footer() {
  return (
    <div className="pt-10 pb-2.5">
      <div className="container flex flex-col">
        <div className="flex justify-between">
          <div className="w-4/12">
            <h1 className="mb-2 text-clr_primary font-Barlow font-Bold uppercase text-[30.4px]">
              half shiba inu
            </h1>
          </div>
          <div className="w-2/12">
            <ul className="text-white font-Roboto ">
              <li className="text-[19.2px] font-Barlow text-clr_primary">
                Navigation
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Tokenomics</a>
              </li>
              <li>
                <a href="/">Nft</a>
              </li>
            </ul>
          </div>
          <div className="w-2/12">
            <ul className="text-white font-Roboto">
              <li className="text-[19.2px] font-Barlow text-clr_primary">
                Useful Links
              </li>
              <li>
                <a href="/" className="flex gap-1 items-center">
                  <FaTwitter />
                  Twitter
                </a>
              </li>
              <li>
                <a href="/" className="flex gap-1 items-center">
                  <FaDiscord />
                  Discord
                </a>
              </li>
              <li>
                <a href="/" className="flex gap-1 items-center">
                  <FaTelegram />
                  Telegram
                </a>
              </li>
              <li>
                <a href="/" className="flex gap-1 items-center">
                  <FaReddit />
                  Reddit
                </a>
              </li>
              <li>
                <a href="/" className="flex gap-1 items-center">
                  <FaFilePdf />
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="/" className="flex gap-1 items-center">
                  <BsBarChartFill />
                  Chart
                </a>
              </li>
              <li>
                <a href="/" className="flex gap-1 items-center">
                  <FaFileContract />
                  Contract
                </a>
              </li>
            </ul>
          </div>
          <div className="w-2/12 flex flex-col gap-2 items-start">
            <h3 className="text-[19.2px] font-Barlow text-clr_primary">
              Connect With Us
            </h3>
            <button className="text-white">info@halfshibainu.io</button>
            <ul className="flex gap-4">
              <li className="w-[30.8px] h-[30.8px] bg-[#ffc53a] rounded">
                <a
                  href="/"
                  className="w-full h-full text-white flex justify-center items-center rounded"
                >
                  <FaTelegram className="w-[75%] h-[75%] text-white" />
                </a>
              </li>
              <li className="w-[30.8px] h-[30.8px] bg-[#ffc53a] rounded">
                <a
                  href="/"
                  className="w-full h-full text-white flex justify-center items-center rounded"
                >
                  <FaTwitter className="w-[80%] h-[80%] text-white" />
                </a>
              </li>
              <li className="w-[30.8px] h-[30.8px] bg-[#ffc53a] rounded">
                <a
                  href="/"
                  className="w-full h-full text-white flex justify-center items-center rounded"
                >
                  <SiEthereum className="w-[80%] h-[80%] text-white" />
                </a>
              </li>
              <li className="w-[30.8px] h-[30.8px] bg-[#ffc53a] rounded">
                <a
                  href="/"
                  className="w-full h-full text-white flex justify-center items-center rounded"
                >
                  <FaDiscord className="w-[80%] h-[80%] text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="h-[2px] border-none bg-white mt-[2%] mb-[3%]" />
        <div className="flex justify-center">
          <h2 className="text-white mb-4 font-Roboto text-base	">
            © Copyright 2023 Half Shiba Inu - All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
