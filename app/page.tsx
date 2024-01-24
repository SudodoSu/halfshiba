import Nav from "@/components/navigation/Nav";
import HomeSection from "@/components/home/HomeSection";
import Tokenomics from "@/components/tokenomics/Tokenomics";
import About from "@/components/about/About";
import Join from "@/components/join/Join";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <HomeSection />
      <Tokenomics />
      <About />
      <Join />
    </main>
  );
}
