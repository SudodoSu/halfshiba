import Nav from "@/components/navigation/Nav";
import HomeSection from "@/components/home/HomeSection";
import Tokenomics from "@/components/tokenomics/Tokenomics";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <HomeSection />
      <Tokenomics />
    </main>
  );
}
