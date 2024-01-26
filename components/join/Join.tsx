import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function Join() {
  return (
    <section className="py-10">
      <div className="container ">
        <div className="flex flex-col justify-center items-center bg-[#1d1d1d] bg-[url(/assets/images/joinbg.png)] h-[268px] rounded-[18px]">
          <div>
            <h1 className="text-center mb-2 text-[37px] md:text-[40px] text-white uppercase font-Barlow font-Bold">
              join our community
            </h1>
          </div>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <Link
              href="https://twitter.com/HalfShibaInu"
              target="_blank"
              className="btn bg-btn_blue text-white uppercase font-Barlow"
            >
              <h3>twitter</h3>
              <FaTwitter />
            </Link>
            <Link
              href="https://t.me/HalfShibaInu"
              target="_blank"
              className="btn bg-clr_primary uppercase font-Barlow"
            >
              <h3>telegram</h3>
              <FaTelegram className="" />
            </Link>
            <Link
              href="https://www.reddit.com/r/HalfShibaInu/"
              target="_blank"
              className="btn bg-clr_primary uppercase font-Barlow"
            >
              <h3>reddit</h3>
              <FaReddit />
            </Link>
            <Link
              href="https://discord.com/invite/halfshiba"
              target="_blank"
              className="btn border-clr_primary border-[1px] text-clr_primary uppercase font-Barlow"
            >
              <h3>discord</h3>
              <FaDiscord />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
