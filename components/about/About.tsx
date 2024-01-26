import Image from "next/image";
import Link from "next/link";
import { BsBarChartFill } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";

function About() {
  return (
    <section className="py-[10px]" id="about">
      <div className="container flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src="/assets/images/burning_shib_logo.png"
            alt="burning shib logo"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col items-start md:w-1/2">
          <h1 className="mb-2 uppercase text-white font-Barlow text-5xl md:text-[80px] font-Bold">
            half shiba inu
          </h1>
          <h4 className="mb-2 text-clr_primary uppercase font-Barlow text-[1.5em] md:text-[32px] font-medium">
            READY TO EXPLORE THE WORLD OF HALF SHIBA INU?
          </h4>
          <p className="mb-4 font-Roboto text-[15px] sm:text-[16px] md:max-w-[25rem] text-white font-medium">
            Meet Half Shiba Inu, also known as $SHIB0.5, the hottest crypto
            token on the market that is guaranteed to take your portfolio to the
            moon! <br /> <br /> What sets Half Shiba Inu apart from other tokens
            is its renounced contract. This means that ownership of the contract
            has been transferred to the community, making it completely
            decentralized and secure. With more than 2500 holders and counting,
            the Half Shiba Inu community is growing rapidly and shows no signs
            of slowing down. <br /> <br /> But that's not all - Half Shiba Inu
            is also accepted to Shibarium, a top-notch crypto platform that
            supports and promotes the development of innovative tokens like
            $SHIB0.5. By being listed on Shibarium, Half Shiba Inu gains access
            to a vast network of investors, making it easier for the community
            to buy and sell the token. <br /> <br /> One of the most exciting
            aspects of Half Shiba Inu is its impact on the $SHIB token. By
            taking $SHIB out of circulation, Half Shiba Inu helps to reduce
            supply, which in turn drives up the value of $SHIB. So not only does
            Half Shiba Inu provide an excellent investment opportunity in its
            own right, but it also helps to boost the value of $SHIB. <br />{" "}
            <br /> So what are you waiting for? Join the Half Shiba Inu
            community today and start your journey to financial freedom! With
            its renounced contract, growing community, and impact on the value
            of $SHIB, Half Shiba Inu is a must-have for any serious crypto
            investor. Don't miss out on this exciting opportunity - buy your
            $SHIB0.5 today and watch your portfolio soar!
          </p>
          <div className="flex gap-1">
            <Link
              href="https://dexscreener.com/ethereum/0x914e578f8bef2607d9c16fd4954c2c10e58dc5ad"
              className="btn bg-clr_primary uppercase font-Barlow"
            >
              <h3>live chart</h3>
              <BsBarChartFill className="" />
            </Link>
            <Link
              href="https://t.me/HalfShibaInu"
              className="btn bg-clr_primary uppercase font-Barlow"
            >
              <h3>telegram</h3>
              <FaTelegram className="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
