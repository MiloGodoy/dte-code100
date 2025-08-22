
import AdvantagesSection from "@/components/AdventagesSection";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import RepositorySection from "@/components/RepositorySection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <RepositorySection />
      <AdvantagesSection />
    </>
  );
}
