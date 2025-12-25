import WebsiteLayout from "@/components/layout/WebsiteLayout";
import Faq from "@/components/ui/faq";
import Features from "@/components/ui/features";
import Hero from "@/components/ui/hero";
import Pricing from "@/components/ui/pricing";
import Image from "next/image";

export default function Home() {
  return (
    <WebsiteLayout>
      <Hero />
      <Features />
      <Pricing />
      <Faq />
    </WebsiteLayout>
  );
}
