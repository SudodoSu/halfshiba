import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function Join() {
  return (
    <section>
      <div className="container flex flex-col justify-center items-center bg-[#1d1d1d] bg-[url(/assets/images/joinbg.png)] h-[268px] rounded-[18px]">
        <div>
          <h1 className="mb-2 text-[40px] text-white uppercase font-Barlow font-Bold">
            join our community
          </h1>
        </div>
        <div className="flex gap-4">
          <Link
            href="/"
            className="btn bg-btn_blue text-white uppercase font-Barlow"
          >
            <h3>twitter</h3>
            <FaTwitter />
          </Link>
          <Link href="/" className="btn bg-clr_primary uppercase font-Barlow">
            <h3>telegram</h3>
            <FaTelegram className="" />
          </Link>
          <Link href="/" className="btn bg-clr_primary uppercase font-Barlow">
            <h3>reddit</h3>
            <FaReddit />
          </Link>
          <Link
            href="/"
            className="btn border-clr_primary border-[1px] text-clr_primary uppercase font-Barlow"
          >
            <h3>discord</h3>
            <FaDiscord />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Join;
