// Images
import one from "@/public/assets/images/nft/nft1.png";
import two from "@/public/assets/images/nft/nft2.png";
import three from "@/public/assets/images/nft/nft3.png";
import four from "@/public/assets/images/nft/nft4.png";
import five from "@/public/assets/images/nft/nft5.png";
import six from "@/public/assets/images/nft/nft6.png";
import seven from "@/public/assets/images/nft/nft7.png";
import eight from "@/public/assets/images/nft/nft8.png";
import nine from "@/public/assets/images/nft/nft9.png";
import ten from "@/public/assets/images/nft/nft10.png";

import { StaticImageData } from "next/image";

type LocationData = {
    src: StaticImageData;
    alt: string;
  };

  type DataObject = {
    images: LocationData[];
    // You can add more arrays or properties if needed
  };

 export const nftImages: DataObject = {
    images: [
        { src: one,
            alt: "Nft1", },
        { src: two,
            alt: "Nft2", },
        { src: three, 
            alt: "Nft3", },
        { src: four,
            alt: "Nft4", },
        { src: five,
            alt: "Nft5", },
        { src: six,
            alt: "Nft6", },
        { src: seven, 
            alt: "Nft7", },
        { src: eight,
            alt: "Nft8", },
        { src: nine,
            alt: "Nft9", },
        { src: ten,
            alt: "Nft10", },
      // Add more images as needed
    ],
    // You can add more arrays or properties if needed
  };