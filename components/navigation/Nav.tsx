"use client";
import Image from "next/image";
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
          <h2 className="font-titleBold font-Barlow text-4xl text-clr_primary mb-2">
            HALF SHIBA INU
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="lg:flex hidden">
          <div className="flex gap-3 md:gap-5">
            <ul className="flex gap-8 items-center">
              <li>
                <Link href="" className="nav_list active_nav">
                  home
                </Link>
              </li>

              <li>
                <Link href="/" className="nav_list">
                  about us
                </Link>
              </li>

              <li>
                <Link href="/" className="nav_list">
                  tokenomics
                </Link>
              </li>

              <li>
                <Link href="/" className="nav_list">
                  nft
                </Link>
              </li>

              <li>
                <Link href="/" className="nav_list">
                  whitepaper
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden inset-0 flex absolute justify-center w-screen h-screen items-center z-50 bg-black text-center">
          <ul className="flex flex-col gap-4 md:text-4xl origin-top">
            <li>
              <Link href="" className="nav_list ">
                home
              </Link>
            </li>

            <li>
              <Link href="/" className="nav_list">
                about us
              </Link>
            </li>

            <li>
              <Link href="/" className="nav_list">
                tokenomics
              </Link>
            </li>

            <li>
              <Link href="/" className="nav_list">
                nft
              </Link>
            </li>

            <li>
              <Link href="/" className="nav_list">
                whitepaper
              </Link>
            </li>
          </ul>
          <div className="absolute right-8 top-4 bg-clr_sec w-[38px] h-[38px] rounded flex justify-center">
            {hamburgerActive ? (
              <button onClick={() => setHamburgerActive(!hamburgerActive)}>
                <IoClose className="text-white text-3xl" />
              </button>
            ) : (
              <button onClick={() => setHamburgerActive(!hamburgerActive)}>
                <RxHamburgerMenu
                  width={30}
                  height={30}
                  className="text-white text-3xl"
                />
              </button>
            )}
          </div>
        </div>

        <div className="gap-x-8 flex">
          <div>
            <FaTelegram className="text-clr_primary text-3xl" />
          </div>
          <div>
            <FaTwitter className="text-clr_primary text-3xl" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
