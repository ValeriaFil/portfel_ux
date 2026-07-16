import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { RecentProjects } from "@/components/sections/RecentProjects";
import { Career } from "@/components/sections/Career";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <RecentProjects />
        <Career />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
