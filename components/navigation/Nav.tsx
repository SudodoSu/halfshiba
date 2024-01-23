import Image from "next/image";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  return (
    <header className="flex items-end h-16 m-auto">
      <nav className="flex justify-between container px-0 items-center">
        <Link href="/" className="flex gap-2 items-center">
          <h2 className="font-titleBold font-Barlow text-4xl text-clr_primary mb-2">
            HALF SHIBA INU
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="md:flex hidden">
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
        <div className="md:hidden flex relative">
          <ul className="flex flex-col gap-4 origin-top">
            <li>
              <Link href="" className="nav_list">
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
