import WebsiteLayout from "@/components/layout/WebsiteLayout";
import AboutHero from "@/components/ui/about-hero";
import Mission from "@/components/ui/mission";
import Values from "@/components/ui/values";
import Timeline from "@/components/ui/timeline";
import Team from "@/components/ui/team";

export const metadata = {
  title: "About Us - CodeSpeeder",
  description: "Learn about CodeSpeeder, our mission, values, and the team building the future of development tools.",
};

export default function AboutPage() {
  return (
    <WebsiteLayout>
      <AboutHero />
      <Mission />
      <Values />
      <Timeline />
      <Team />
    </WebsiteLayout>
  );
}
