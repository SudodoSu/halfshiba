import Nav from "@/components/navigation/Nav";
import HomeSection from "@/components/home/HomeSection";
import Tokenomics from "@/components/tokenomics/Tokenomics";
import About from "@/components/about/About";
import Join from "@/components/join/Join";
import Footer from "@/components/footer/Footer";
import Nft from "@/components/nft/Nft";

export default function Home() {
  return (
    <>
      <main className="">
        <Nav />
        <HomeSection />
        <Tokenomics />
        <About />
        <Nft />
        <Join />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
