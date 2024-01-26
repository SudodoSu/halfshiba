"use client";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./nav.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [navBg, setNavBg] = useState<boolean>(false);
  const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);

  const handleScroll = () => {
    window.scrollY > 0 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`lg:px-0 px-3 w-full flex items-end justify-center h-16 m-auto fixed z-40 ${
        navBg ? "bg-black" : ""
      }`}
    >
      <nav className={`flex justify-between items-center container px-0  `}>
        <Link href="/" className="flex gap-2 items-center">
          <h2 className="font-titleBold font-Barlow lg:text-4xl text-clr_primary mb-2 h2-logo">
            HALF SHIBA INU
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="lg:flex hidden">
          <div className="flex gap-3 md:gap-5">
            <ul className="flex gap-8 items-center">
              <li>
                <Link href="#home" className="nav_list active_nav">
                  home
                </Link>
              </li>

              <li>
                <Link href="#about" className="nav_list">
                  about us
                </Link>
              </li>

              <li>
                <Link href="#tokenomics" className="nav_list">
                  tokenomics
                </Link>
              </li>

              <li>
                <Link href="#nft" className="nav_list">
                  nft
                </Link>
              </li>

              <li>
                <Link
                  href="/assets/pdf/HalfShibaWhitepaper.pptx-1.pdf"
                  target="_blank"
                  className="nav_list"
                >
                  whitepaper
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex">
          {hamburgerActive && (
            <div className="lg:hidden inset-0 flex absolute justify-center w-screen h-screen items-center z-50 bg-black text-center">
              <ul className="flex flex-col gap-4 md:text-4xl origin-top">
                <li>
                  <Link
                    onClick={() => setHamburgerActive(!hamburgerActive)}
                    href="#home"
                    className="nav_list active_nav"
                  >
                    home
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setHamburgerActive(!hamburgerActive)}
                    href="#about"
                    className="nav_list"
                  >
                    about us
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setHamburgerActive(!hamburgerActive)}
                    href="#tokenomics"
                    className="nav_list"
                  >
                    tokenomics
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setHamburgerActive(!hamburgerActive)}
                    href="#nft"
                    className="nav_list"
                  >
                    nft
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setHamburgerActive(!hamburgerActive)}
                    href="/assets/pdf/HalfShibaWhitepaper.pptx-1.pdf"
                    target="_blank"
                    className="nav_list"
                  >
                    whitepaper
                  </Link>
                </li>
              </ul>
              <div className="absolute right-8 top-4 bg-clr_sec w-[38px] h-[38px] rounded flex justify-center">
                <button onClick={() => setHamburgerActive(!hamburgerActive)}>
                  <IoClose className="text-white text-3xl" />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="gap-x-8 flex">
          <Link href="https://t.me/HalfShibaInu" target="_blank">
            <FaTelegram className="text-clr_primary text-3xl" />
          </Link>
          <Link href="https://twitter.com/HalfShibaInu" target="_blank">
            <FaTwitter className="text-clr_primary text-3xl" />
          </Link>
        </div>

        <div className="lg:hidden bg-clr_sec w-[38px] h-[38px] rounded flex justify-center">
          <button onClick={() => setHamburgerActive(!hamburgerActive)}>
            <RxHamburgerMenu
              width={30}
              height={30}
              className="text-white text-3xl"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
