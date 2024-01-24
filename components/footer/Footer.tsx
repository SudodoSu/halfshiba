import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div>
            <h1>half shiba inu</h1>
          </div>
          <div>
            <ul>
              <li>Navigation</li>
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
          <div>
            <ul>
              <li>Useful Links</li>
              <li>
                <a href="/">
                  <FaTwitter />
                  Twitter
                </a>
              </li>
              <li>
                <a href="/">
                  <FaDiscord />
                  Discord
                </a>
              </li>
              <li>
                <a href="/">
                  <FaTelegram />
                  Telegram
                </a>
              </li>
              <li>
                <a href="/">
                  <FaReddit />
                  Reddit
                </a>
              </li>
              <li>
                <a href="/">
                  <FaFilePdf />
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="/">
                  <BsBarChartFill />
                  Chart
                </a>
              </li>
              <li>
                <a href="/">
                  <FaFileContract />
                  Contract
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <h2>© Copyright 2023 Half Shiba Inu - All rights reserved.</h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
