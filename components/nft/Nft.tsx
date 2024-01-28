"use client";
import Image from "next/image";
import Link from "next/link";
import { nftImages } from "@/lib/nftGallery";
import { motion } from "framer-motion";

function Nft() {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section className="py-10" id="nft">
      <div className="container">
        <div>
          <h1 className="uppercase text-white font-Barlow font-Bold text-[32px]">
            non fungible tokens
          </h1>
        </div>
        <div
          className={`flex flex-wrap justify-between gap-4 rounded-[20px] bg-white p-3`}
        >
          {nftImages.images.map((image, index) => (
            <motion.div
              key={index}
              className=""
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Image src={image.src} alt={image.alt} width={196} height={196} />
              <Link
                href="https://opensea.io/collection/half-shiboshis"
                target="_blank"
                className="py-3 px-1.5 rounded bg-clr_primary inline-block"
              >
                buy now @opensea
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Nft;
